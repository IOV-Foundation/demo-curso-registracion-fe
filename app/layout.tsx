import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './globalicon.css';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | CACE',
    default: 'CACE App',
  },
  description: 'Impulsando la economía digital',
  metadataBase: new URL('https://cace.org.ar/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx(
          'flex min-h-screen flex-col justify-between',
          inter.className,
        )}
      >
        <div>
          <Header />
          <div className="p-8">{children}</div>
        </div>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
