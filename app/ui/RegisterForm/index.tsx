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
        className="bg-cace-primary mt-4 rounded px-6 py-4 text-white"
      >
        Enviar
      </Link>
    </form>
  );
};
