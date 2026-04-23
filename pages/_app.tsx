import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext, useEffect } from 'react'
import { ModalStore } from '../context/ModalContext';
import Script from 'next/script';
import Layout from '../components/layout/Layout';
import FacebookPixel from '../components/FacebookPixel';
import { useFacebookPixel } from '../utils/hooks/useFacebookPixel';
import PaperformPreloader from '../components/common/PaperformPreloader';

//@ts-ignore
import tawkTo from 'tawkto-react';

declare global {
  interface Window {
    fbq: any;
  } 
}

export const ModalContext = createContext ({
  vehicleModal: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  // Initialize Facebook Pixel tracking
  useFacebookPixel();

  useEffect(() => {
    new tawkTo(process.env.tawkToPropertyId, 'default');
    
    // Register Paperform Service Worker for aggressive caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/paperform-sw.js')
        .then((registration) => {
          console.log('Paperform SW registered:', registration);
        })
        .catch((error) => {
          console.warn('Paperform SW registration failed:', error);
        });
    }
  }, []);

  return (
    <>
      {/* Load Paperform preloader first for maximum performance */}
      <PaperformPreloader preloadDelay={50} />
      <FacebookPixel />
      <Script id='elfsight' strategy='afterInteractive' src="https://apps.elfsight.com/p/platform.js" defer/>
      <ModalStore>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalStore>
    </>
  );
};

export default MyApp
