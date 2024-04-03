'use server';

// import { redirect } from 'next/navigation'
import { IState, emailSchema, formInputs } from "./definitions";

export async function authenticateToEventBrite(): Promise<void> {
  // redirect(`https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${process.env.EVENTBRITE_CLIENT_ID}&redirect_uri=http://localhost:3000/oauth/redirect`);
  // try {
  //   const response = await fetch('https://www.eventbrite.com/oauth/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: `grant_type=authorization_code&client_id=${process.env.EVENTBRITE_CLIENT_ID}&client_secret=${process.env.EVENTBRITE_CLIENT_SECRET}`,
  //   });
  // } catch (error) {
    
  // }
}


export async function sendEmail(data: formInputs): Promise<IState> {
  const parsed = emailSchema.safeParse(data)
 
  // Return early if the form data is invalid
  if (!parsed.success) {
    return {
      errors: parsed.error.formErrors.fieldErrors,
      message: "Invalid form data",
    }
  }
  
  // TODO: Connect to the API to send the email
  await new Promise((resolve) => { setTimeout(resolve, 9000) });
  
  return {
    message: "Email sent",
    errors: {},
  }
}