import { CheckIcon } from "@heroicons/react/solid";
import Hero from "../components/common/Hero";
import VehicleFAQ from "../components/FAQs/VehicleFAQ";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import siteMap from "../siteMap";
import { useEffect, useState } from "react";

const ThankYouAutomotivesNZtoAUN = () => {
  const router = useRouter();
  const id = router.query["id"];
  console.log(id)
  const [quoteID, setQuoteID] = useState<any>()

  useEffect(() => {
    if (!id) return // This ensures that the API call isn't made until query id is defined.
    
    setQuoteID(id)
    console.log(quoteID)
  });
  return (
  <>
    <Hero
      heading="THANK YOU!"
      bgImage="/assets/images/bg-thankyou.jpg"
      hasButton={false}
      hasMouseScroll={false}
      isFullHeight={true}
    >
      <div className="flex flex-col items-center w-full gap-4 px-4 text-base text-white lg:text-2xl">
        <p>
          We have emailed your quote through to your inbox.
        </p>
        <p>
          If you would like to discuss your quote with us over the phone, then please don&apos;t hesitate to give us a call on 07 3267 3694.
        </p>
        <p>
          Please review your inbox for your quote details.
        </p>
        <br/>
        <div className="z-10 pb-4 w-72">
          <Button
            theme='redBlue'
            linkTo={siteMap.vehicle.vehicleQuoteData.path+"?id="+quoteID}
            buttonText='View Your Instant Quote'
          />
          <a
            href="https://brash-caution-d50.notion.site/Importing-a-Vehicle-into-Australia-A-Friendly-Guide-2230ceb0172d803cb0d3ece936781e0b"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4"
          >
            <div
              className={`
                relative py-3 text-xl font-medium group z-10 w-full border border-red
                bg-red text-white
              `}
            >
              <p className="text-xl text-center text-white">Access our Shipping Hub</p>
              <div className="absolute top-0 left-0 w-full h-full z-1 -z-10 bg-red" />
              <div className="absolute top-0 left-0 w-0 h-full duration-500 ease-out -z-10 transition-width bg-darkBlue group-hover:w-full" />
            </div>
          </a>
        </div>
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
          <CheckIcon className="text-[#6DAB3C] h-16 w-16" />
        </div>
      </div>
    </Hero>
    <VehicleFAQ />
  </>
  );
};

export default ThankYouAutomotivesNZtoAUN; 