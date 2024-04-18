'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <header className="border-blue flex w-full items-center justify-between border-b  p-8">
      <Link href="/">
        <Image src="/logo.png" alt="Logo CACE" width={110} height={110} />
      </Link>
      <Link href="/did">
        <div className="rounded-full border border-gray-400 p-2">
          <Image src="/icons/user.webp" alt="DID" width={25} height={25} />
        </div>
      </Link>
    </header>
  );
}
