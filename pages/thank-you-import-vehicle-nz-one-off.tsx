import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Hero from '../components/common/Hero';
import { CheckIcon } from '@heroicons/react/solid';
import CommercialFAQ from '../components/FAQs/CommercialFAQ';

export default function ThankYouVehicleNZOneOffImport() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the machinery import hub after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://shippinghub.willship.com.au/thank-you-weve-received-your-enquiry';
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
            <p>Thank you for your inquiry. You will be redirected to our Enquiry Receipt Confirmation Hub.</p>
            <div className="flex items-center justify-center w-16 h-16 m-auto mt-8 bg-white rounded-full">
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