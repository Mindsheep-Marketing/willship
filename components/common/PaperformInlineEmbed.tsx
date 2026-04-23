import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface Props {
  formId: string;
  height?: string;
  className?: string;
}

const PaperformInlineEmbed = ({ formId, height = "600px", className = "" }: Props) => {
  const embedRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Simple approach: let Paperform automatically detect the div
    const initializeEmbed = () => {
      if (embedRef.current && scriptLoadedRef.current) {
        // Paperform script automatically scans for divs with data-paperform-id
        // We just need to ensure the div exists
        console.log('Paperform embed ready for form:', formId);
      }
    };

    if (scriptLoadedRef.current) {
      initializeEmbed();
    }
  }, [formId]);

  const handleScriptLoad = () => {
    scriptLoadedRef.current = true;
    console.log('Paperform script loaded');
    
    // Paperform script should automatically initialize any elements with data-paperform-id
    // No manual initialization needed
  };

  return (
    <>
      <Script
        src="https://paperform.co/__embed.min.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div 
        ref={embedRef}
        className={`w-full ${className}`}
        style={{ minHeight: height }}
        data-paperform-id={formId}
      />
    </>
  );
};

export default PaperformInlineEmbed; 