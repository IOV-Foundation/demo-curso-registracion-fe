'use client';

import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EBWidgets: any;
  }
}

export default function Home(): JSX.Element {
  const count = useRef(0);
  const router = useRouter();

  useEffect(() => {
    count.current += 1;
    function exampleCallback(): void {
      router.push('/event-register');
    }

    if (count.current === 1) {
      window.EBWidgets.createWidget({
        // Required
        widgetType: 'checkout',
        eventId: '875347537047',
        iframeContainerId: 'eventbrite-widget-container-875347537047',
        // Optional
        iframeContainerHeight: 600, // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback, // Method called when an order has successfully completed
      });
    }
  }, [router]);

  return (
    <main className="mx-auto w-full max-w-screen-xl p-8">
      <h1 className="mb-8 text-center text-3xl">Registración al Evento CACE</h1>
      <div id="eventbrite-widget-container-875347537047" />
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="beforeInteractive"
      />
    </main>
  );
}
