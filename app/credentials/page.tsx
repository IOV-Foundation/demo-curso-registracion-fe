import Image from 'next/image';

export default function CredentialsPage() {
  return (
    <main className="mx-auto w-full max-w-screen-lg p-8">
      <div className="flex flex-col rounded-lg bg-gray-100 p-8 shadow">
        <div className="flex items-center justify-between border-b pb-8">
          <h2 className="text-3xl">Representante de Miembro</h2>
          <Image src={'/logo.png'} alt="Logo CACE" width={200} height={200} />
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <span className="font-bold">Nombre:</span>
          <span>Juan Pérez</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <span className="font-bold">Empresa Miembro:</span>
          <span>Musimundo</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <span className="font-bold">Rol/Función:</span>
          <span>CEO</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <span className="font-bold">Email:</span>
          <a
            href="mailto:jperez@musimundo.com.ar"
            className="text-cace-primary"
          >
            jperez@musimundo.com.ar
          </a>
        </div>
      </div>
    </main>
  );
}
