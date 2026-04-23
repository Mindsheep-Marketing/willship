import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "../common/Button";

const RequestAQuote = () => {
  return (
    <section className="w-full flex flex-col items-center bg-darkBlue text-white text-xl">
      <div className="w-full max-w-5xl bg-darkBlue flex flex-col lg:flex-row justify-between items-center">
        <div className="w-2/3 max-w-xs lg:max-w-7xl lg:w-1/4 relative aspect-square">
          <Image src='/assets/images/logo.webp' layout="fill" objectFit="contain" alt='Willship Logo' />
        </div>
        <h2 className="text-3xl sm:text-forty py-8 lg:py-0 lg:w-1/3 font-sackHeavy text-center">WILLSHIP INTERNATIONAL</h2>
        <div className="w-full p-4 lg:p-0 lg:w-1/4 z-10">
          <Button
            linkTo={'paperform'}
            dataPaperformId="mlc28uxr"
            dataPaperformPopup={true}
            buttonText="Get Started"
            theme='redBlue'
          />
        </div>
      </div>
    </section>
  )

};

export default RequestAQuote;