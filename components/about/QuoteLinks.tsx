import siteMap from "../../siteMap";
import BackgroundImage from "../common/BackgroundImage";
import Button from "../common/Button";

const QuoteLinks = () => (
  <section className="w-full flex flex-col lg:flex-row text-forty text-white font-medium">
    <div className="w-full lg:w-1/2 relative flex flex-col py-16 items-center justify-center gap-4">
      <BackgroundImage
        fallbackColour="bg-darkBlue"
        imageOrVideo="image"
        hasOpacity={false}
        src="/assets/images/bg-plane2.png"
      />
      <h2>
        COMMERCIAL FREIGHT
      </h2>
      <Button
        buttonText="Request A Quote"
        linkTo={siteMap.commercial.commercialFreightQuote.path}
        theme="redBlue"
        width='w-56'
      />
    </div>

    <div className="w-full lg:w-1/2 relative flex flex-col py-16 items-center justify-center gap-4">
      <BackgroundImage
        fallbackColour="bg-darkBlue"
        imageOrVideo="image"
        hasOpacity={false}
        src="/assets/images/boat-side.png"
      />
      <h2>
        AUTOMOTIVE
      </h2>
      <Button
        buttonText="Get Instant Quote"
        linkTo={siteMap.vehicle.vehicleQuote.path}
        theme="redBlue"
        width="w-56"
      />
    </div>
  </section>
);

export default QuoteLinks;