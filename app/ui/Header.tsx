import Image from 'next/image';

export function Header() {
  return (
    <header className="border-blue flex w-full items-center border-b  p-8">
      <Image src="/logo.png" alt="Logo CACE" width={110} height={110} />
    </header>
  );
}
