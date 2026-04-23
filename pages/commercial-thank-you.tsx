import { CheckIcon } from "@heroicons/react/solid";
import Hero from "../components/common/Hero";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";

const CommercialThankYou = () => (
  <>
    <Hero
      heading="THANK YOU!"
      bgImage="/assets/images/bg-thankyou.jpg"
      hasButton={false}
      buttonText='Request A Quote'
      buttonLink={siteMap.commercial.commercialFreightQuote.path}
      hasMouseScroll={false}
      isFullHeight={true}
    >
      <div className="w-full text-base lg:text-2xl px-4 items-center flex flex-col gap-8 text-white">
        <p>
          Your message has been received and we&apos;ll be in touch soon. 
        </p>
        <p>
          If you would like to discuss your query with us over the phone, then please don&apos;t hesitate to give us a call on 07 3267 0575.
        </p>
        <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
          <CheckIcon className="text-[#6DAB3C] h-16 w-16" />
        </div>
      </div>
    </Hero>
    <CommercialFAQ />
  </>
);

export default CommercialThankYou;