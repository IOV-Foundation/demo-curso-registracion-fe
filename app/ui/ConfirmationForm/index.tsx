import Link from 'next/link';

export function ConfirmationForm() {
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
        className="mt-4 w-full rounded bg-cace-primary px-6 py-4 text-center text-white md:w-auto"
      >
        Enviar
      </Link>
    </form>
  );
}
