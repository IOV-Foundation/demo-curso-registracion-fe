'use server';

import { redirect } from 'next/navigation';
import { emailSchema, type IState } from "./definitions";

export async function sendEmail(prevState: IState, formData: FormData): Promise<{
  errors: {
      email?: string[] | undefined;
  };
}> {
  const validatedFields = emailSchema.safeParse({
    email: formData.get('email'),
  })
 
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  
  // TODO: Connect to the API to send the email
  await new Promise((resolve) => {setTimeout(resolve, 9000)});

  return redirect(`/confirmation-code?email=${validatedFields.data.email}`);
}