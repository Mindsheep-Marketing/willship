import siteMap from "../../siteMap";
import Button from "./Button";

const AutoQuoteButton = () => (
  <div className="z-10 w-72">
    <Button
      buttonText="Get Instant Quote"
      linkTo={siteMap.vehicle.vehicleQuote.path}
      theme='redBlue'
    />
  </div>
);

export default AutoQuoteButton;