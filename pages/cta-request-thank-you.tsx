import Hero from "../components/common/Hero";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import Button from "../components/common/Button";
import siteMap from "../siteMap";

const CtaRequestThankYou = () => (
  <>
    <Hero
      heading="THANK YOU!"
      bgImage="/assets/images/bg-thankyou.jpg"
      hasButton={true}
      buttonText='Request Another Quote'
      buttonLink={siteMap.chinaToAustralia.path}
      hasMouseScroll={false}
      isFullHeight={true}
    >
      <div className="w-full text-base lg:text-2xl px-4 items-center flex flex-col gap-8 text-white">
        <p>
          We have emailed your quote through to your inbox
        </p>
        <p>
         If you would like to discuss your quote with us over the phone, then please don&apos;t hesitate to give us a call on 07 3267 3694.<br/> You can also learn more about importing from China by visiting our Education Hub on the link below!
        </p>
        <div className="w-full sm:w-72 z-10">
            <Button
              theme='redBlue'
              linkTo={siteMap.commercial.educationHub.path}
              buttonText={"Education Hub"}
            />
          </div>
        {/* <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center">
          <CheckIcon className="text-[#6DAB3C] h-16 w-16" />
        </div> */}
      </div>
    </Hero>
    <CommercialFAQ />
  </>
);

export default CtaRequestThankYou;