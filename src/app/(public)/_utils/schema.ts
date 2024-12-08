import { z } from 'zod';

export const formSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(1, 'First name is required')
    .toLowerCase(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(1, 'Last name is required')
    .toLowerCase(),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email')
    .toLowerCase(),
  contact: z
    .string({ required_error: 'Contact is required' })
    .trim()
    .min(1, 'Contact is required')
    .max(10, 'Invalid contact'),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(1, 'Message is required'),
});

export type FormValues = z.infer<typeof formSchema>;
