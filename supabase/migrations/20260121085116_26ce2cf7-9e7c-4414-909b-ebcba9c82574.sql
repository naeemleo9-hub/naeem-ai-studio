-- Add admin-only SELECT policy for contact_submissions table
-- This ensures only admins can view contact form submissions
CREATE POLICY "Admins can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));