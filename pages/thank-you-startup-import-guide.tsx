import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Hero from '../components/common/Hero';
import { CheckIcon } from '@heroicons/react/solid';
import CommercialFAQ from '../components/FAQs/CommercialFAQ';

export default function ThankYouStartupImportGuide() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the startup import guide after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://importhub.willship.com.au/willship-startup-import-guide-everything-you-need-to-know-before-you-ship';
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={
          <>
            <p>Thank you for your inquiry. You will be redirected to our Startup Import Guide.</p>
            <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center m-auto mt-8">
              <CheckIcon className="text-[#6DAB3C] h-16 w-16 flex" />
            </div>
          </>
        }
        buttonLink={'/'}
        buttonText='Home'
        hasMouseScroll={false}
        isFullHeight={true}
      >
      </Hero>
    </>
  );  
} 