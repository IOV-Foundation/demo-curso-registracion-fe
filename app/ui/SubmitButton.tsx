'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

export function SubmitButton(): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={clsx(
        'mt-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto',
        {
          'cursor-not-allowed opacity-50': pending,
        },
      )}
    >
      Enviar
    </button>
  );
}
