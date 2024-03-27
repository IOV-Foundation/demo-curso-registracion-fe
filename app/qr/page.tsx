import QRCode from 'react-qr-code';
import { DownloadWallet } from '../ui/DownloadWallet';
import { TitlePage } from '../ui/Title';
import Link from 'next/link';

export default function QRCodePage() {
  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <TitlePage />
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <div className="flex flex-col items-center">
          <QRCode size={180} value="/credentials" className="w-full" />
          <p className="mt-4">
            <Link href="/credentials" className="text-cace-primary">
              ó Click aquí.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
