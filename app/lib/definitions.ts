import { z } from 'zod'

 
export const emailSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email' })
    .min(1, { message: 'Email is required' }),
})

export interface IState {
  errors?: {
    email?: string[];
  };
};


export interface ICredencial {
  name: string;
  company: string;
  role: string;
  email: string;
}