// future terms and conditions updates steps
// 1. locate the html file in the public/assets folder
// 2. convert docs to html via gdocs to html
// 3. save the html file in the public/assets folder with the name of the version
// 4. update the src in the iframe in the TermsStatement component with new html file
// 5. format/fix lines and spacing
// 6. update the version in the TermsStatement component

import React, { useEffect, useRef, useState } from 'react';

const TermsStatement = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const resizeIframe = () => {
      try {
        if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
          iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        }
      } catch (error) {
        console.error('Error resizing iframe:', error);
      }
    };

    const handleLoad = () => {
      setIframeLoaded(true);
      resizeIframe();
    };

    iframe.addEventListener('load', handleLoad);
    window.addEventListener('resize', resizeIframe);

    // Attempt to resize periodically until loaded
    const resizeInterval = setInterval(() => {
      if (iframeLoaded) {
        resizeIframe();
        clearInterval(resizeInterval);
      }
    }, 200);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', resizeIframe);
      clearInterval(resizeInterval);
    };
  }, [iframeLoaded]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <iframe
          ref={iframeRef}
          src="/assets/2025TradingTermsandConditionsWillshipInternatApril.html"
          title="Embedded File"
          className="w-full pt-10"
          frameBorder="0"
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default TermsStatement;