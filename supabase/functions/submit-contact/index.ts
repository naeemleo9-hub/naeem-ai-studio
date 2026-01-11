import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

// Simple in-memory rate limiting (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms
const MAX_REQUESTS_PER_WINDOW = 5;

function getClientIP(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  const userAgent = req.headers.get("user-agent") || "unknown";
  return `ua-${hashString(userAgent)}`;
}

function hashString(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

function checkRateLimit(clientIP: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(clientIP);

  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  record.count++;
  return { allowed: true };
}

function validateContactForm(data: unknown): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: { form: 'Invalid form data' } };
  }

  const form = data as Record<string, unknown>;

  // Honeypot check
  if (form.website && typeof form.website === 'string' && form.website.trim().length > 0) {
    console.log("Honeypot triggered - bot submission blocked");
    return { valid: false, errors: { _honeypot: 'Bot detected' } };
  }

  // Name validation
  if (!form.name || typeof form.name !== 'string') {
    errors.name = 'Name is required';
  } else {
    const name = form.name.trim();
    if (name.length < 1) {
      errors.name = 'Name is required';
    } else if (name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
    }
  }

  // Email validation
  if (!form.email || typeof form.email !== 'string') {
    errors.email = 'Email is required';
  } else {
    const email = form.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email';
    } else if (email.length > 255) {
      errors.email = 'Email must be less than 255 characters';
    }
  }

  // Subject validation
  if (!form.subject || typeof form.subject !== 'string') {
    errors.subject = 'Subject is required';
  } else {
    const subject = form.subject.trim();
    if (subject.length < 1) {
      errors.subject = 'Subject is required';
    } else if (subject.length > 200) {
      errors.subject = 'Subject must be less than 200 characters';
    }
  }

  // Message validation
  if (!form.message || typeof form.message !== 'string') {
    errors.message = 'Message is required';
  } else {
    const message = form.message.trim();
    if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.length > 2000) {
      errors.message = 'Message must be less than 2000 characters';
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // Rate limiting check
  const clientIP = getClientIP(req);
  const rateLimit = checkRateLimit(clientIP);
  
  if (!rateLimit.allowed) {
    console.log("Rate limit exceeded");
    return new Response(
      JSON.stringify({ 
        error: "Too many requests. Please try again later.",
        retryAfter: rateLimit.retryAfter 
      }),
      { 
        status: 429, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json",
          "Retry-After": String(rateLimit.retryAfter)
        } 
      }
    );
  }

  try {
    const body = await req.json();
    
    // Validation (includes honeypot check)
    const validation = validateContactForm(body);
    
    // Honeypot triggered - return fake success
    if (validation.errors._honeypot) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Thank you for your message. We'll get back to you soon." 
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    if (!validation.valid) {
      console.log("Validation failed");
      return new Response(
        JSON.stringify({ success: false, errors: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { name, email, subject, message } = body as ContactFormRequest;

    // Create Supabase client with service role for database insert
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Store submission in database
    const { error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert({
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        client_ip: clientIP
      });

    if (dbError) {
      console.error("Database error:", dbError.message);
      return new Response(
        JSON.stringify({ error: "Failed to save your message. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Log success without sensitive data
    console.log("Contact submission saved", { timestamp: new Date().toISOString() });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon." 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process your request. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
