import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface Props {
  formId?: string;
  preloadDelay?: number; // Delay before starting preload (in ms)
}

/**
 * PaperformPreloader - Preloads Paperform content in the background
 * This component should be added to _app.tsx to preload forms globally
 */
const PaperformPreloader = ({ 
  formId = "mlc28uxr", 
  preloadDelay = 100 // Start almost immediately - was 2000ms
}: Props) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [preloadStarted, setPreloadStarted] = useState(false);
  const preloadRef = useRef<HTMLIFrameElement | null>(null);

  // Immediate critical resource preloading (doesn't wait for script)
  useEffect(() => {
    // Stage 1: Immediate critical resource hints (no delay, no script dependency)
    const criticalPreloads = [
      { href: `https://${formId}.paperform.co/`, as: 'document', rel: 'preload' },
      { href: `https://${formId}.paperform.co/css/form/${formId}/`, as: 'style', rel: 'preload' },
      { href: `https://${formId}.paperform.co/api/v1/form/684ba2b89f9b675b66028318/event`, as: 'fetch', rel: 'prefetch' }
    ];

    criticalPreloads.forEach(preload => {
      const link = document.createElement('link');
      link.rel = preload.rel;
      link.href = preload.href;
      link.as = preload.as;
      if (preload.as === 'fetch') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, [formId]);

  useEffect(() => {
    // Stage 2: Aggressive iframe preloading
    const timer = setTimeout(() => {
      if (!preloadStarted) {
        setPreloadStarted(true);
        
        // Create iframe warming pool for instant modal access
        const createWarmIframe = (delay = 0, keepAlive = false) => {
          setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://${formId}.paperform.co/`;
            iframe.style.position = 'absolute';
            iframe.style.left = '-9999px';
            iframe.style.top = '-9999px';
            iframe.style.width = '800px'; // Full size for complete initialization
            iframe.style.height = '600px';
            iframe.style.visibility = 'hidden';
            iframe.style.opacity = '0';
            iframe.setAttribute('aria-hidden', 'true');
            iframe.setAttribute('tabindex', '-1');
            
            // Maximum performance attributes
            iframe.setAttribute('loading', 'eager');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            
            document.body.appendChild(iframe);
            if (!preloadRef.current) {
              preloadRef.current = iframe;
            }

            // Track performance and create warming pool
            const startTime = performance.now();
            iframe.onload = () => {
              const loadTime = performance.now() - startTime;
              console.log(`Paperform warm iframe ready in ${Math.round(loadTime)}ms`);
              
              // Store performance data and mark as ready
              sessionStorage.setItem('paperformPreloadTime', loadTime.toString());
              sessionStorage.setItem('paperformPreloaded', 'true');
              sessionStorage.setItem('paperformWarmIframe', 'ready');
              
              if (keepAlive) {
                // Keep this iframe alive indefinitely for instant access
                console.log('Paperform warm iframe kept alive for instant modal access');
                
                // Refresh the warm iframe periodically to keep connection alive
                setInterval(() => {
                  if (document.body.contains(iframe)) {
                    // Ping the iframe to keep connection warm
                    iframe.contentWindow?.postMessage('ping', '*');
                  }
                }, 30000); // Ping every 30 seconds
              } else {
                // Remove after delay
                setTimeout(() => {
                  if (document.body.contains(iframe)) {
                    document.body.removeChild(iframe);
                  }
                }, 300000); // Keep for 5 minutes
              }
            };

            iframe.onerror = () => {
              console.warn('Paperform warm iframe failed');
              if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
              }
            };
          }, delay);
        };

        // Create primary warm iframe (kept alive)
        createWarmIframe(0, true);
        
        // Create backup warm iframe
        createWarmIframe(2000, false);
        
        // Create third iframe for connection pooling
        createWarmIframe(4000, false);
      }
    }, preloadDelay);

    return () => {
      clearTimeout(timer);
      // Cleanup on unmount
      if (preloadRef.current && document.body.contains(preloadRef.current)) {
        document.body.removeChild(preloadRef.current);
      }
    };
  }, [formId, preloadDelay, preloadStarted, scriptLoaded]);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
  };

  return (
    <>
      {/* Load Paperform script early */}
      <Script
        src="https://paperform.co/__embed.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </>
  );
};

export default PaperformPreloader;
