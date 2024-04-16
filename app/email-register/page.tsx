import { DownloadWallet } from '../ui/DownloadWallet';
import { RegisterForm } from '../ui/RegisterForm';

export default function Home(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <h1 className="my-8 text-center text-3xl">
        Solicitá tu credencial de representante
      </h1>
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <RegisterForm />
      </div>
    </main>
  );
}
