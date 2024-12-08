'use server';

import { resend } from '@/lib/resend';
import { formSchema, FormValues } from '../_utils/schema';
import { titleCase } from '@/lib/utils';
import FreeConsultEmail from '@/emails/free-consult';

const isProduction = process.env.NODE_ENV === 'production';

export async function homeContactAction(values: FormValues) {
  const validated = formSchema.safeParse(values);
  if (!validated.success) {
    return {
      error: 'Provide all required information.',
    };
  }

  const { contact, email, firstName, lastName, message } = values;
  const fullName = firstName + ' ' + lastName;

  const { error } = await resend.emails.send({
    from: !isProduction
      ? 'Acme <onboarding@resend.dev>'
      : 'Design Build Web <web@designbuildsupplysolutions.com>',
    to: !isProduction
      ? ['delivered@resend.dev']
      : [`info@designbuildsupplysolutions.com`],
    subject: !isProduction
      ? 'Hello world'
      : 'New free consultation email from ' + titleCase(fullName),
    react: (
      <FreeConsultEmail
        clientName={titleCase(fullName)}
        phoneNo={contact}
        email={email}
        message={message}
      />
    ),
  });

  if (error) return { error: error.message };

  return { success: true, error: null };
}
