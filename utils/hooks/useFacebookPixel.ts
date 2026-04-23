import { useEffect } from 'react';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    fbq: any;
  }
}

export const useFacebookPixel = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
        window.fbq('track', 'ViewContent');
        
        console.log('Facebook Pixel: PageView and ViewContent tracked for', url);
        
        // Track Lead on thank you pages
        const thankYouPages = [
          '/thank-you',
          '/commercial-thank-you',
          '/cta-thank-you',
          '/crates-thank-you',
          '/cta-personal-thank-you',
          '/cta-request-thank-you',
          '/thank-you-freights'
        ];
        
        if (thankYouPages.some(page => url.includes(page))) {
          window.fbq('track', 'Lead');
          console.log('Facebook Pixel: Lead event tracked for', url);
        }
      }
    };

    // // Track initial page
    // const trackInitialPage = () => {
    //   if (typeof window !== 'undefined' && window.fbq) {
    //     window.fbq('track', 'ViewContent');
    //     console.log('Facebook Pixel: Initial ViewContent tracked for', router.asPath);
        
    //     const thankYouPages = [
    //       '/thank-you',
    //       '/commercial-thank-you',
    //       '/cta-thank-you',
    //       '/crates-thank-you',
    //       '/cta-personal-thank-you',
    //       '/cta-request-thank-you'
    //     ];
        
    //     if (thankYouPages.some(page => router.asPath.includes(page))) {
    //       window.fbq('track', 'Lead');
    //       console.log('Facebook Pixel: Initial Lead event tracked for', router.asPath);
    //     }
    //   }
    // };

    // // Track initial page load after a short delay
    // const timer = setTimeout(trackInitialPage, 1000);

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      // clearTimeout(timer);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
};

// Helper function to track custom events
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('track', eventName, parameters);
    } else {
      window.fbq('track', eventName);
    }
    console.log(`Facebook Pixel: ${eventName} event tracked`, parameters || '');
  }
}; 