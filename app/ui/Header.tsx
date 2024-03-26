import Image from 'next/image';

export function Header() {
  return (
    <header className="flex h-16 w-full items-center border-b  p-8">
      <Image src="/cace-logo.png" alt="Logo CACE" width={100} height={100} />
    </header>
  );
}
