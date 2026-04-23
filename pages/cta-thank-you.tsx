import { CheckIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import Hero from "../components/common/Hero";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";

const CtaThankYou = () => {
  const router = useRouter();
  const { thankYou, newsletter, quote, type } = router.query;

  // Message templates for different scenarios
  const messageTemplates = {
    quote: (
      <p>
        Your enquiry has been received, a member of our team will be in touch shortly.
      </p>
    ),
    default: (
      <>
        <p>
          We have emailed your quote through to your inbox. 
        </p>
        <p>
          If you don&apos;t see the email in your inbox, please ensure you also check your junk or spam folder.
        </p>
        <p>
          If you would like to discuss your quote with us over the phone, then please do not hesitate to give us a call on 07 3267 0575.
        </p>
      </>
    ),
    newsletter: (
      <p>{'You\'ve signed up to Newsletter!'}</p>
    ),
    personal: (
      <>
        <p>We have sent an information pack regarding your import process for your chosen commodity. 
        </p>
        <p>
          If you don&apos;t see it in your inbox, please check your junk or spam folder. 
        </p>
        <p>
          The email contains important next steps, so be sure to read the entire pack carefully.
        </p>
      </>
    ),
    customsClearance: (
      <>
        <p>We have sent you an email which outlines the clearance process and requirements and next steps, please take the time to read through it and respond to us accordingly.
        </p>
        <p>
        If you don&apos;t see the email in your inbox, please ensure you also check your junk or spam folder.
        </p>
        <p className="pt-10">We&apos;re looking forward to hearing from you.
        </p>
      </>
    ),
    consultation:(
      <>
        <p>Thanks for booking your consultation with Willship International.
        </p>
        <p>We&apos;ll review your shipment details and respond by email within <span className="underline">1 business day</span> with tailored advice and pricing.
        </p>
        <p>You&apos;ll also have the option to schedule a follow-up call (up to 30 minutes) to discuss anything in more detail.
        </p>
        <p className="pt-10">We&apos;re looking forward to hearing from you.
        </p>
        <p className="pt-10">For urgent matters, you can email us directly at <a href="mailto:commercial@willship.com.au" className="underline">commercial@willship.com.au</a>.</p>
      </>
    ),
  };

  // Function to determine which message to show
  const getMessage = () => {
    if (type && typeof type === 'string' && type in messageTemplates) {
      return messageTemplates[type as keyof typeof messageTemplates];
    }
    if (quote === 'true') {
      return messageTemplates.quote;
    }
    if (newsletter === 'true') {
      return messageTemplates.newsletter;
    }
    return messageTemplates.default;
  };

  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={
          <>
            {getMessage()}
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
};

export default CtaThankYou;