import Image from 'next/image';
import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <header className="border-blue flex w-full items-center border-b  p-8">
      <Link href="/">
        <Image src="/logo.png" alt="Logo CACE" width={110} height={110} />
      </Link>
    </header>
  );
}
