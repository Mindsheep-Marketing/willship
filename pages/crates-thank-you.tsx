import { CheckIcon } from "@heroicons/react/solid";
import Hero from "../components/common/Hero";
import CratesFAQ from "../components/FAQs/CratesFAQ";
import siteMap from "../siteMap";

const CratesThankYou = () => (
  <>
    <Hero
      heading="THANK YOU"
      bgImage="/assets/images/bg-thankyou.jpg"
      hasButton={true}
      buttonLink={siteMap.crates.cratesQuote.path}
      buttonText="Get A Quote"
      hasMouseScroll={false}
      isFullHeight={false}
      hasMinHeight={true}
    >
     <div className="w-full text-base lg:text-2xl items-center flex flex-col gap-4 px-4 text-white">
        <p>
          We have emailed your quote through to your inbox.
        </p>
        <p>
          If you would like to discuss your quote with us over the phone, then please don’t hesitate to give us a call on 07 3267 3694.
        </p>
        <p>
          If you do not see the email in your inbox, please ensure you also check your junk or spam folder.
        </p>
        <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
          <CheckIcon className="text-[#6DAB3C] h-16 w-16" />
        </div>
      </div> 
    </Hero>
    <CratesFAQ />
  </>
);

export default CratesThankYou;