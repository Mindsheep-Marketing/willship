import { CheckIcon } from "@heroicons/react/solid";
import Hero from "../components/common/Hero";
import VehicleFAQ from "../components/FAQs/VehicleFAQ";
import { useRouter } from "next/router";
import Button from "../components/common/Button";
import siteMap from "../siteMap";
import { useEffect, useState } from "react";

const ThankYouAutomotives = () => {
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
      <div className="w-full text-base lg:text-2xl items-center flex flex-col gap-4 px-4 text-white">
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
        <div className="w-72 z-10 pb-4">
          <Button
            theme='redBlue'
            linkTo={siteMap.vehicle.vehicleQuoteData.path+"?id="+quoteID}
            buttonText='View Your Instant Quote'
          />
        </div>
        <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
          <CheckIcon className="text-[#6DAB3C] h-16 w-16" />
        </div>
      </div>
    </Hero>
    <VehicleFAQ />
  </>
  );
};

export default ThankYouAutomotives; 