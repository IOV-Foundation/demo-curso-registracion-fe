'use client';

import { sendEmail } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '../SubmitButton';

export function RegisterForm(): JSX.Element {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(sendEmail, initialState);
  return (
    <form action={dispatch} className="flex flex-1 flex-col items-start">
      <label htmlFor="email" className="w-full text-lg">
        <span className="block py-2">Email Registrado</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full rounded border p-4"
        />
      </label>
      <div aria-live="polite" aria-atomic="true">
        {state.errors?.email?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      </div>
      <SubmitButton />
    </form>
  );
}
