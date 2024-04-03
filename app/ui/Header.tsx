'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { authenticateToEventBrite } from '../lib/actions';

export function Header(): JSX.Element {
  return (
    <header className="border-blue flex w-full items-center justify-between border-b  p-8">
      <Link href="/">
        <Image src="/logo.png" alt="Logo CACE" width={110} height={110} />
      </Link>
      <button
        type="button"
        className="rounded-lg bg-cace-primary px-4 py-2 text-white"
        onClick={() =>
          (window.location.href = `https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_EVENT_BRITE_API_KEY}&redirect_uri=http://localhost:3000/oauth/redirect`)
        }
      >
        Login
      </button>
    </header>
  );
}
