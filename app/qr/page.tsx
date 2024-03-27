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
        <div className="flex flex-col">
          <QRCode size={180} value="/credentials" />
          <p className="mt-4">
            or click{' '}
            <Link href="/credentials" className="text-cace-primary">
              this link
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
