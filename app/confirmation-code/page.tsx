import { ConfirmationForm } from '../ui/ConfirmationForm';
import { DownloadWallet } from '../ui/DownloadWallet';
import { TitlePage } from '../ui/Title';

export default function ConfirmationCode({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}): JSX.Element {
  console.log('search Params', searchParams);
  return (
    <main className="flexitems-center mx-auto w-full max-w-screen-xl p-8">
      <TitlePage />
      <div className="mt-8 flex flex-col gap-8 xl:flex-row">
        <DownloadWallet />
        <ConfirmationForm />
      </div>
    </main>
  );
}
