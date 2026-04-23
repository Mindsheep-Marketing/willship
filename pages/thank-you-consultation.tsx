import { useRouter } from 'next/router';
import Hero from '../components/common/Hero';
import { CheckIcon } from '@heroicons/react/solid';
import CommercialFAQ from '../components/FAQs/CommercialFAQ';

export default function ThankYouConsultation() {
  const router = useRouter();

  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={
          <>
            <p>Thanks for booking your consultation with Willship International.</p>
            <p>We&apos;ll review your shipment details and respond by email within <span className="underline">1 business day</span> with tailored advice and pricing.</p>
            <p>You&apos;ll also have the option to schedule a follow-up call (up to 30 minutes) to discuss anything in more detail.</p>
            <p className="pt-10">We&apos;re looking forward to hearing from you.</p>
            <p className="pt-10">For urgent matters, you can email us directly at <a href="mailto:commercial@willship.com.au" className="underline">commercial@willship.com.au</a>.</p>
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