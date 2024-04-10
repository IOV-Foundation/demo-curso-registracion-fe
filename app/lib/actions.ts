'use server';

import { IState, IUser, IUserResponse, emailSchema, formInputs } from "./definitions";
import { getErrorMessage } from "./errorHandler";
import { sdk } from "./eventbrite";

// Login to Eventbrite
export async function getEventbriteUser(): Promise<IUserResponse> {
  try {
    const user = await sdk.request('/users/me')
    return {
      message: 'Sesion iniciada',
      user: user as IUser
    }
  } catch (error) {
    return {
      message: 'Hubo un error',
      error: getErrorMessage(error),
    }
  }
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
