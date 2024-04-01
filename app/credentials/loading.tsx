import Image from 'next/image';
import { CardSkeleton } from '../ui/CardSkeleton';

export default function Loading(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <div className="flex flex-col rounded-lg bg-gray-100 p-8 shadow">
        <div className="flex flex-col items-center justify-between gap-4 border-b pb-8 lg:flex-row">
          <h2 className="text-3xl">
            Está por recibir las siguientes credenciales de CACE
          </h2>
          <Image src="/logo.png" alt="Logo CACE" width={200} height={200} />
        </div>
        <p className="py-4">Credencial de Representante de Miembro...</p>
        <CardSkeleton />
      </div>
    </main>
  );
}
