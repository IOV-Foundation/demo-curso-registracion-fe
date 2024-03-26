import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-blue flex h-16 w-full items-center justify-between border-t p-8 text-white">
      <Image src="/logo-white.png" alt="Logo CACE" width={100} height={100} />
      <p>Copyright © 2024 CACE</p>
    </footer>
  );
}
