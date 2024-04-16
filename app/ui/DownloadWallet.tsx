import Image from 'next/image';

export function DownloadWallet(): JSX.Element {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex w-full flex-col justify-between rounded-lg bg-gray-100 p-4 lg:p-12">
        <p className="text-lg">
          Para poder registrarte debes tener tu Credencial de Representante en
          tu Billetera Digital. Si no las tenés, obtenelas acá. <br />
          Descarga la app.
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <button
            type="button"
            className="mr-2 flex items-center justify-center "
          >
            <Image
              src="/icons/google-play.png"
              alt="Google play"
              width={150}
              height={100}
            />
          </button>
          <button
            type="button"
            className="mr-2 flex items-center justify-center "
          >
            <Image
              src="/icons/app-store.png"
              alt="App store"
              width={150}
              height={100}
            />
          </button>
        </div>
      </div>
      <p className="mt-4 text-center text-cace-primary underline">
        No sos miembro?
      </p>
    </div>
  );
}
