import Image from 'next/image';
import { CardSkeleton } from '../ui/CardSkeleton';

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-screen-lg p-8">
      <div className="flex flex-col rounded-lg bg-gray-100 p-8 shadow">
        <div className="flex items-center justify-between border-b pb-8">
          <h2 className="text-3xl">Representante de Miembro</h2>
          <Image src={'/logo.png'} alt="Logo CACE" width={200} height={200} />
        </div>
        <CardSkeleton />
      </div>
    </main>
  );
}
