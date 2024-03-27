import Link from 'next/link';
import { FC } from 'react';

export const ConfirmationForm: FC = () => {
  return (
    <form action="" className="flex flex-1 flex-col items-start">
      <label htmlFor="email" className="mb-4 text-lg">
        Enviamos un email a tu casilla con un código
      </label>
      <input
        type="number"
        placeholder="Code"
        name="code"
        className="w-full rounded border p-4"
      />
      <Link
        href="/qr"
        className="bg-cace-primary mt-4 rounded px-6 py-4 text-white"
      >
        Enviar
      </Link>
    </form>
  );
};
