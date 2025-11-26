import { z } from 'zod';

export const contactSchema = z.object({
  firstname: z.string()
    .min(2, "First name must contain at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "First name contains invalid characters"),
  
  lastname: z.string()
    .min(2, "Last name must contain at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Last name contains invalid characters"),
  
  email: z.string()
    .email("Invalid email address"),
  
  phone: z.string()
    .regex(
      /^(\+?\d{1,4}?[-.\s]?)?(\(?\d{1,4}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number"
    ),
  
  service: z.string()
    .min(1, "Please select a service"),
  
  message: z.string()
    .min(10, "Message must contain at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;
