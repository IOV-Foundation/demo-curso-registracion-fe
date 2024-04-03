import { z } from 'zod'
 
export const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: 'Email inválido' })
    .min(1, { message: 'Email es requerido' }),
})

export type formInputs = z.infer<typeof emailSchema>;

export interface IState {
  message?: string;
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