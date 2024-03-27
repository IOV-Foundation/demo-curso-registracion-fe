import Image from 'next/image';
import { Facebook } from './icons/Facebook';
import { XTwitter } from './icons/XTwitter';
import { Instagram } from './icons/Instagram';
import { LinkedIn } from './icons/LinkedIn';
import { Youtube } from './icons/Youtube';

export function Footer() {
  return (
    <footer className="bg-cace-primary flex min-h-16 w-full flex-col items-center justify-between gap-4 border-t p-8 text-white lg:flex-row">
      <Image src="/logo-white.png" alt="Logo CACE" width={110} height={110} />
      <p>Copyright © 2024 CACE</p>
      <div className="flex">
        <a
          href="https://www.facebook.com/CaceArg"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Facebook fill="white" />
        </a>
        <a
          href="https://twitter.com/cacearg"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <XTwitter fill="white" />
        </a>
        <a
          href="https://www.instagram.com/cacearg/"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Instagram fill="white" />
        </a>
        <a
          href="https://www.linkedin.com/company/746774"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <LinkedIn fill="white" />
        </a>
        <a
          href="https://www.youtube.com/user/CACEARG"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Youtube fill="white" />
        </a>
      </div>
    </footer>
  );
}
