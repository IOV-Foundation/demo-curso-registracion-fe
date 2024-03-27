import QRCode from 'react-qr-code';
import { DownloadWallet } from '../ui/DownloadWallet';

export default function QRCodePage() {
  return (
    <main className="flexitems-center mx-auto w-full max-w-screen-xl p-8">
      <h1 className="my-8 text-center text-3xl">
        Solicitá tu credencial de representante
      </h1>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <QRCode size={180} value="hey" />
      </div>
    </main>
  );
}
