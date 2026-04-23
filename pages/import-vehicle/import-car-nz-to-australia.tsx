import Head from "next/head";
import GetMoreInformation from "../../components/Automotive/GetMoreInformation";
import ImportantInfo from "../../components/Automotive/ImportantInfo";
import ImportIntoAus from "../../components/Automotive/ImportIntoAus";
import WhatAmIAbleToShip from "../../components/Automotive/WhatAmIAbleToShip";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import ShippingOptions from "../../components/ShippingOptions";
import siteMap from "../../siteMap";

const ImportCarNzToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCarNZtoAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importCarNZtoAustralia.description} />
    </Head>
    <Hero
      heading='THINKING ABOUT MOVING ACROSS THE TASMAN?'
      subHeading='Shipping From New Zealand To Australia Has Never Been Easier!'
      bgImage='/assets/images/bg-sydney.jpg'
      hasButton={true}
      buttonLink={siteMap.vehicle.vehicleQuote.path}
      buttonText="Get Instant Quote"
      hasMouseScroll={true}
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.vehicle.vehicleQuote.path}
      requestQuoteText="Get Instant Quote"
      hasSubHeading={false}
      heading='Willship Pioneered The Trans-Tasman Shipping Route For Personal Cargo'
      imageSide="left"
      imageAlt="Happy customers"
      imageSrc="/assets/images/customer2.jpg"
      precedingParagraphs={[
        'Willship established the first Trans-Tasman route for personal cargo back in 2014, ever since then we have helped tens of thousands of people move across the ditch. We have offices in both Australia and New Zealand with a highly experienced team specializing in much more than just the shipping process.',
        'We are here to answer any questions you might have on import approvals, insurance, compliance, registration, transit times, COVID-19 restrictions or anything else you can think of.',
        'The vast majority of our clients are people doing this for the first time, and we understand that it could get confusing when navigating the complexity of an international move, but that\'s what we are here for.',
        'At Willship, our goal is to make this process as simple and easy to understand. Our shipping experts will be right by your side for the entire journey to ensure things go to plan.',
      ]}
      theme='light'
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.vehicle.vehicleQuote.path}
      requestQuoteText='Get Instant Quote'
      heading='What Routes Are Available?'
      hasSubHeading={false}
      imageSide="right"
      imageSrc="/assets/images/routes.jpg"
      imageAlt="Route Map"
      precedingParagraphs={[
        'The main departure ports in New Zealand are: Auckland, Wellington, Nelson, and Lyttelton (Christchurch)',
        'The main arrival ports in Australia are: Brisbane, Sydney, Melbourne, Adelaide, Fremantle (Perth)',
        'Willship has a substantial road and rail freight network across New Zealand and Australia. So even If you\'re origin or destination is quite distance from these major ports, don\'t you worry...we will simply use a combination of road or rail to move your cargo to the most economical port for collection or delivery. This means we can collect and deliver from literally anywhere in either country!',
      ]}
      theme='light'
    />
    <WhatAmIAbleToShip />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/white-car.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Full Container',
          image: '/assets/images/red-car-in-container.jpg',
        }
      ]}
    />

    <ImportantInfo />

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
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Leave It All To Willship',
        items: [
          {
            image: '/assets/images/reasons/book.svg',
            text: 'Supporting you to get all key documents together'
          },
          {
            image: '/assets/images/reasons/headphones.svg',
            text: 'Organizing transport and freight between New Zealand and Australia'
          },
          {
            image: '/assets/images/reasons/shield.svg',
            text: 'Clearing your car through Australian customs and quarantine'
          },
          {
            image: '/assets/images/reasons/signpost.svg',
            text: 'On road compliance and registration (Optional)'
          },
        ]
      }}
    />
    <ImportIntoAus />
    <Testimonials10 />
  </>
);

export default ImportCarNzToAu;