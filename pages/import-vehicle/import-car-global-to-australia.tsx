import Head from "next/head";
import GetMoreInformation from "../../components/Automotive/GetMoreInformation";
import ImportantInfo from "../../components/Automotive/ImportantInfo";
import ImportIntoAus from "../../components/Automotive/ImportIntoAus";
import ShippingGlobalToAu from "../../components/Automotive/ShippingGlobalToAu";
import Button from "../../components/common/Button";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import siteMap from "../../siteMap";

const ImportCarGlobalToAustralia = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCarGlobalToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importCarGlobalToAustralia.description} />
    </Head>
    <Hero
      bgImage="/assets/images/bg-sydney.jpg"
      hasButton={true}
      hasMouseScroll={true}
      buttonLink={siteMap.vehicle.vehicleQuote.path}
      buttonText="Get Instant Quote"
      hasMinHeight={true}
      heading="AUSTRALIAN IMPORT REGULATIONS CAN BE COMPLICATED"
      subHeading="Let The Experts Help"
    />
    <ShippingGlobalToAu />
    <ImportantInfo showInitial={false} />
    <WhiteWithIcons
      width="w-1/3"
      bgColour="bg-darkBlue"
      headingColour="text-white"
      textColour="text-white"
      data={{
        heading: 'What Additional Restrictions May Apply For Vehicles Being Imported Into Australia?',
        items: [
          {
            image: '/assets/images/icons/mask.svg',
            text: 'Asbestos',
            subText: 'You must ensure the vehicle you are looking to import is free of any components that contain asbestos. You now need to check to ensure that no part of the vehicle contains asbestos (brakes/clutch plates/gaskets etc) and you will need to sign a declaration confirming this. If you find that any part of the vehicle contains a part which contains asbestos, this needs to be removed and changed prior to shipping.'
          },
          {
            image: '/assets/images/icons/wind.svg',
            text: 'Degassing the Air Conditioning',
            subText: 'The Australian government restricts the import of pre charged gas. This means that, depending on the year, make and model of the vehicle, the air conditioning may need to be degassed prior to export from the foreign country.'
          }
        ]
      }}
    />
    <GetMoreInformation />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.vehicle.vehicleQuote.path}
      requestQuoteText='Get Instant Quote'
      hasSubHeading={false}
      heading="How Do I Handle Compliance And Registration?"
      imageSide="right"
      imageSrc="/assets/images/car3.png"
      imageAlt="Compliance Check"
      precedingParagraphs={[
        'Willship can assist you with all necessary safety and compliance checks in order for the vehicle to be registered in the Australia. We can even organize the registration for you so all you have to do is drive away.'
      ]}
      theme='dark'
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.vehicle.vehicleQuote.path}
      requestQuoteText="Get Instant Quote"
      imageSide="left"
      imageAlt="Import Globally To Australia"
      imageSrc="/assets/images/boat-trailer.jpg"
      hasSubHeading={false}
      precedingParagraphs={[
        'No, Willship imports many different vehicle and machinery types every year into Australia. These have included:'
      ]}
      listItems={[
        'Trucks',
        'Trailer',
        'Jet Ski’s',
        'Boats',
        'Caravans',
        'Motorhomes',
        'Motorcycles',
      ]}
      trailingParagraphs={[
        'Plus much more! Please get in touch and let’s chat about how we can help.'
      ]}
      heading='Does Willship Only Import Cars To Australia?'
      listType="list-disc"
      theme="light"      
    />
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Leave It All To Willship',
        precedingText: [
          "This includes:"
        ],
        items: [
          {
            image: '/assets/images/reasons/book.svg',
            text: 'Supporting you to get all key documents together'
          },
          {
            image: '/assets/images/reasons/headphones.svg',
            text: 'Organizing all aspects of the transport and freight from your location through to New Zealand'
          },
          {
            image: '/assets/images/reasons/shield.svg',
            text: 'Clearing your car through New Zealand customs and quarantine'
          },
          {
            image: '/assets/images/reasons/signpost.svg',
            text: 'Organizing compliance and assisting with on road registration in New Zealand'
          },
        ]
      }}
    >
      <div className="w-full max-w-xs z-10">
        <Button
          buttonText="Get Instant Quote"
          linkTo={siteMap.vehicle.vehicleQuote.path}
          theme="redBlue"
        />
      </div>
    </WhiteWithIcons>
    <ImportIntoAus />
    <Testimonials10 />
  </>

);

export default ImportCarGlobalToAustralia;