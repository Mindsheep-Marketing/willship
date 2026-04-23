import { CheckIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import Hero from "../components/common/Hero";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";

const CtaPersonalThankYou = () => {
  const router = useRouter();
  const { thankYou, newsletter, quote } = router.query;

  const customMessage = (
    <p>
      Your enquiry has been received, a member of our team will be in touch shortly.
    </p>
  );

  // Define the default message and custom message
  const defaultMessage = (
    <>
      {quote ? (
        customMessage
      ) : (
        <>
          <p>
            Thank you! We have sent you an information pack regarding the import process for your chosen commodity. If you don’t see it in your inbox, please check your junk or spam folder. 
          </p>
          <p>
            The email contains important next steps, so be sure to read the entire pack carefully.
          </p>
        </>
      )}
      <p>
      </p>
      <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center m-auto mt-8">
        <CheckIcon className="text-[#6DAB3C] h-16 w-16 flex" />
      </div>
    </>
  );


  const newsletterMessage = (
    <p>{'You\'ve signed up to Newsletter!'}</p>
  );

  return (
    <>
      <Hero
        heading="THANK YOU!"
        bgImage="/assets/images/bg-thankyou.jpg"
        hasButton={true}
        subHeading={(thankYou === 'true' ? (defaultMessage || customMessage) : (newsletter === 'true' ? newsletterMessage : defaultMessage))}
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

export default CtaPersonalThankYou;