import { useRouter } from 'next/router';
import Hero from '../components/common/Hero';
import { CheckIcon } from '@heroicons/react/solid';
import CommercialFAQ from '../components/FAQs/CommercialFAQ';

export default function ThankYouCustomsClearance() {
  const router = useRouter();

  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={
          <>
            <p>We have sent you an email which outlines the clearance process and requirements and next steps, please take the time to read through it and respond to us accordingly.</p>
            <p>If you don&apos;t see the email in your inbox, please ensure you also check your junk or spam folder.</p>
            <p className="pt-10">We&apos;re looking forward to hearing from you.</p>
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
      <CommercialFAQ />
    </>
  );  
} 