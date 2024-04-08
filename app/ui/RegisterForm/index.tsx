'use client';

import { sendEmail } from '@/app/lib/actions';
// import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, formInputs } from '@/app/lib/definitions';
import { useRouter } from 'next/navigation';
import { SubmitButton } from '../SubmitButton';

export function RegisterForm(): JSX.Element {
  // const initialState = { message: '', errors: {} };
  // const [state, formAction] = useFormState(sendEmail, initialState);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<formInputs>({
    resolver: zodResolver(emailSchema),
  });

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function handleSubmitForm(input: formInputs) {
    try {
      await sendEmail(input);
      router.push(`/confirmation-code?email=${input.email}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-1 flex-col items-start"
    >
      <label htmlFor="email" className="w-full text-lg">
        <span className="block py-2">Email Registrado</span>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border p-4"
          {...register('email')}
        />
      </label>
      <div aria-live="polite" aria-atomic="true">
        {errors.email?.message != null && (
          <p className="mt-2 text-sm text-red-500">{errors.email?.message}</p>
        )}
        {/* {state.errors?.email?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))} */}
      </div>
      <SubmitButton isDisabled={!isValid || isSubmitting} />
    </form>
  );
}
