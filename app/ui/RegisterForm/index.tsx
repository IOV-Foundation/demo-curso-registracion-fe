import Link from 'next/link';
import { FC } from 'react';

export const RegisterForm: FC = () => {
  return (
    <form action="" className="flex flex-1 flex-col items-start">
      <label htmlFor="email" className="mb-4 text-lg">
        Email Registrado
      </label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="w-full rounded border p-4"
      />
      <Link
        href="/confirmation-code"
        className="mt-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto"
      >
        Enviar
      </Link>
    </form>
  );
};
