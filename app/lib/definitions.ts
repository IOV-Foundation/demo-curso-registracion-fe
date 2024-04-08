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

export interface IGenericResponse {
  message: string,
  error?: string
}

export interface IUserValue {
  emails: [{ email: string, verified: boolean, primary: boolean }],
  id: string,
  name: string,
  first_name: string,
  last_name: string,
  is_public: boolean,
  image_id: null | string
}
export interface IUser {
  name: string,
  value: IUserValue
}

export interface IUserResponse extends IGenericResponse {
  user?: IUser
}


export interface ICredencial {
  name: string;
  company: string;
  role: string;
  email: string;
}