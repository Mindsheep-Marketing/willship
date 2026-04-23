import siteMap from "../../siteMap";
import Button from "./Button";

const QuoteContactButtons = () => (
  <div className="flex flex-col lg:flex-row justify-center w-full max-w-md mx-auto gap-4">
    <Button
      theme="redBlue"
      buttonText="Get Started"
      linkTo="paperform"
      dataPaperformId="w9e9ma75"
      fontSize="text-sm lg:text-xl"
    />
    <Button
      buttonText="Contact Us"
      linkTo={siteMap.contact.path}
      fontSize='text-sm lg:text-xl'
      theme="whiteBlue"
    />
  </div>
);

export default QuoteContactButtons;