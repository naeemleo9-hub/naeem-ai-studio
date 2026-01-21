-- Add explicit admin-only policies for INSERT, UPDATE, DELETE on user_roles table
-- This ensures only admins can manage user roles

-- Policy for admins to insert new roles
CREATE POLICY "Admins can insert roles" 
ON public.user_roles 
FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Policy for admins to update roles
CREATE POLICY "Admins can update roles" 
ON public.user_roles 
FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Policy for admins to delete roles
CREATE POLICY "Admins can delete roles" 
ON public.user_roles 
FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));