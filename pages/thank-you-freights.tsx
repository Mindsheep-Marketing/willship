import { useRouter } from 'next/router';
import Hero from '../components/common/Hero';
import { CheckIcon } from '@heroicons/react/solid';
import CommercialFAQ from '../components/FAQs/CommercialFAQ';

export default function ThankYouFreights() {
  const router = useRouter();

  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={
          <>
            <p>We have emailed your quote through to your inbox.</p>
            <p>If you don&apos;t see the email in your inbox, please ensure you also check your junk or spam folder.</p>
            <p>If you would like to discuss your quote with us over the phone, then please do not hesitate to give us a call on 07 3267 0575.</p>
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