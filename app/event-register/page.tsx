import QRCode from 'react-qr-code';
import Link from 'next/link';
import { DownloadWallet } from '../ui/DownloadWallet';

export default function EventRegister(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-screen-lg p-8">
      <h1 className="mt-4 p-4 text-center text-3xl">
        Obten tu credencial de invitación
      </h1>
      <p className="pb-8 text-center text-lg">
        Miercoles 23 de Marzo 2024 - Costa Salguero, Buenos Aires
      </p>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <div className="flex flex-col items-center">
          <QRCode size={200} value="/credentials" className="w-full" />
          <p className="mt-4">
            <Link
              href="/credentials"
              className="flex items-center rounded-full bg-black p-2 text-white"
            >
              <span className="mr-2 flex items-center rounded-full bg-white p-2 text-black">
                <span className="material-symbols-outlined">
                  install_mobile
                </span>
              </span>
              <span>Registrate al Evento</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
