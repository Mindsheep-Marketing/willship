import Link from "next/link";
import siteMap from "../../../siteMap";
import Button from "../../common/Button";
import SectionSection from "../../common/SectionSection";

const wrapper = 'flex flex-col text-left w-full gap-4 py-8';
const heading = 'text-forty text-darkBlue leading-none';
const list = 'list-disc pl-6';

const NZDocumentationContent = () => (
  <SectionSection>

    <div className=" flex flex-col items-center w-full max-w-full text-darkGrey text-xl px-4 gap-8">
      <p>
        The documents needed to ship a vehicle to New Zealand are very basic and easy to get together. The best part is once you pass it all on to us, we do the rest! You won’t ever have to deal with customs directly, and we can accept your documents as emails, faxes or even high-resolution picture messages.
      </p>
      <p>
        The exact paperwork needed will depend on your individual circumstances. If you are eligible for a GST exemption we will need some more specific paperwork than if you aren’t, further information on these options below:
      </p>
      <div className={wrapper}>
        <h3 className={heading}>
          1. An individual with a personal vehicle applying for the GST exemption
        </h3>
        <p>
          If you have owned and used the vehicle for more than 12 months in Australia, NZ customs requires some specific paperwork:
        </p>
        <ul className={list}>
          <li>
            Tax invoice/bill of sale from the seller of the vehicle
          </li>
          <li>
            Registration certificate for the vehicle
          </li>
          <li>
            Photo of the shipper’s passport
          </li>
          <li>
            Completed <Link href='https://www.customs.govt.nz/globalassets/documents/nzcs-forms/nzcs-224-a-customs-number-application-for-an-individual-person.pdf'><a className="text-darkBlue font-bold">‘Client Code’</a></Link> application form – (get in touch with us and we can provide a guide on how to fill this out)
          </li>
        </ul>
        <p>
          If you have any trouble getting any of these documents together we can use things like insurance certificates or transaction records in support of the abovementioned docs.
        </p>
      </div>
      <div className={wrapper}>
        <h3 className={heading}>
          2. Shipping a company owned vehicle/individual that doesn’t meet all of the GST exemption criteria:
        </h3>
        <p>
          If you don’t meet all of the GST exemption criteria (see the list here LINK) or your vehicle is owned under a company name, then 15% of the vehicles ‘landed’ value will be payable to the NZ government on arrival. It can get a bit tricky working out the landed value, so feel free to get in touch with us and we can give you an idea of what you’d be up for.
        </p>
        <p>
          If you aren’t eligible for a GST exemption, we will need the following paperwork to ship your vehicle:
        </p>
        <ul className={list}>
          <li>
            Tax invoice/bill of sale from the seller of the vehicle
          </li>
          <li>
            Photo of the shipper’s passport
          </li>
          <li>
            Completed <Link href='https://www.customs.govt.nz/globalassets/documents/nzcs-forms/nzcs-224-a-customs-number-application-for-an-individual-person.pdf'><a className="text-darkBlue font-bold">‘Client Code’</a></Link> application form –  (get in touch with us and we can provide a guide on how to fill this out)
          </li>
        </ul>
      </div>
      <div className="w-52">
        <Button
          buttonText="Get Instant Quote"
          linkTo={siteMap.vehicle.vehicleQuote.path}
          theme='redBlue'
        />
      </div>
    </div>
  </SectionSection>
);

export default NZDocumentationContent;