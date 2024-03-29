import Image from 'next/image';

export function DownloadWallet(): JSX.Element {
  return (
    <div className="flex flex-col justify-between rounded-lg bg-gray-100 p-8">
      <p>
        Para poder obtener tu credencial vas a necesitar instalar la wallet XX
        en tu celular. <br />
        Descarga la app.
      </p>
      <div className="mt-4 flex">
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
  );
}
