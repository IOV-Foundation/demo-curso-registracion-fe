'use client';

import clsx from 'clsx';
import { useFormStatus } from 'react-dom';

export function SubmitButton({
  isDisabled = true,
  labelSubmit = 'Enviar',
  labelLoading = 'Cargando...',
}): JSX.Element {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending || isDisabled}
      disabled={pending || isDisabled}
      className={clsx(
        'mt-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto',
        {
          'cursor-not-allowed bg-gray-300': pending || isDisabled,
        },
      )}
    >
      {pending ? labelLoading : labelSubmit}
    </button>
  );
}
