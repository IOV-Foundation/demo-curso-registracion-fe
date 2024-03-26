import Image from 'next/image';

export function Footer() {
  return (
    <footer className="primary-color flex h-16 w-full items-center justify-between border-t bg-blue-700 p-8 text-white">
      <Image src="/logo-white.png" alt="Logo CACE" width={110} height={110} />
      <p>Copyright © 2024 CACE</p>
      <div className="flex">
        <a
          href="https://www.facebook.com/CaceArg"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Image
            src={'/icons/facebook-f.svg'}
            alt="Facebook"
            width={10}
            height={10}
          />
        </a>
        <a
          href="https://twitter.com/cacearg"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Image
            src={'/icons/x-twitter.svg'}
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.instagram.com/cacearg/"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Image
            src={'/icons/instagram.svg'}
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/746774"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Image
            src={'/icons/linkedin-in.svg'}
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
        <a
          href="https://www.youtube.com/user/CACEARG"
          target="_blank"
          className="mr-2 flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white p-2"
        >
          <Image
            src={'/icons/youtube.svg'}
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
      </div>
    </footer>
  );
}
