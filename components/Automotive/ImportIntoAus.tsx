import siteMap from "../../siteMap";
import Button from "../common/Button";

const ImportIntoAus = () => {
  return (
    <section className="w-full py-20 bg-darkBlue px-4">

      <div className="mx-auto w-full max-w-5xl flex flex-col items-center text-center lg:flex-row gap-8 lg:gap-0">
        <h2 className="text-forty text-white font-medium grow">IMPORT INTO AUSTRALIA</h2>
        <div className="w-full lg:w-1/4 z-10">
          <Button
            buttonText="Request A Quote"
            linkTo={siteMap.vehicle.vehicleQuote.path}
            theme="redBlue"
          />
        </div>
      </div>
    </section>
  )

};

export default ImportIntoAus;