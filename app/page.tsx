import Image from 'next/image';

export default function Home() {
  return (
    <main className="flexitems-center mx-auto w-full max-w-screen-xl p-8">
      <h1 className="my-8 text-center text-3xl">
        Solicitá tu credencial de representante
      </h1>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <div className="flex flex-col rounded-lg bg-gray-100 p-8">
          <p>
            Para poder obtener tu credencial vas a necesitar instalar la wallet
            XX en tu celular. <br />
            Descarga la app.
          </p>
          <div className="mt-4 flex">
            <a
              href="#"
              target="_blank"
              className="mr-2 flex items-center justify-center "
            >
              <Image
                src={'/icons/google-play.png'}
                alt="Google play"
                width={150}
                height={100}
              />
            </a>
            <a
              href="#"
              target="_blank"
              className="mr-2 flex items-center justify-center "
            >
              <Image
                src={'/icons/app-store.png'}
                alt="App store"
                width={150}
                height={100}
              />
            </a>
          </div>
        </div>
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
          <button
            type="submit"
            className="primary-color mt-4 rounded px-6 py-4 text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
