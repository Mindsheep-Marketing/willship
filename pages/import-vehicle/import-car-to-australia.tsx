import Head from "next/head";
import WeTakeCareOfEntireJourney from "../../components/Automotive/WeTakeCareOfEntireJourney";
import WhatWeCanShip from "../../components/Automotive/WhatCanWeShip";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import QuoteContactButtons from "../../components/common/QuoteContactButtons";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import ShippingOptions from "../../components/ShippingOptions";
import siteMap from "../../siteMap";

const ImportCarToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCarToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importCarToAustralia.description} />
    </Head>

    <Hero
      bgImage="/assets/images/bg-car.jpg"
      hasButton={true}
      hasMouseScroll={true}
      heading="SHIPPING YOUR VEHICLE HAS NEVER BEEN EASIER"
      flags={['nz', 'uk', 'ie', 'au']}
      flagsAreLinks={true}
      subHeading='We specialise in shipping vehicles to and from Australia, New Zealand, the UK and Ireland. Please click the flags below for more information'
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
      buttonText="Get Started"
    />
    <WhiteWithIcons
      data={{
        heading: 'Easy, Safe ... And Affordable',
        items: [
          {
            image: '/assets/images/reasons/lightning.svg',
            text: 'It\'s fast. Transit times can be as little as 4 days.'
          },
          {
            image: '/assets/images/reasons/price-tag.svg',
            text: 'Selling and buying can cost more than shipping.'
          },
          {
            image: '/assets/images/reasons/car-heart.svg',
            text: 'You end up with a car you know and love.'
          },
          {
            image: '/assets/images/reasons/coins.svg',
            text: 'It\'s cheaper than you think…'
          },
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'NO taxes on import if eligible for an import tax exemption'
          },
        ]
      }}
      width="w-1/6"
    >
      <p>
        Exemptions apply to first time immigrants or returning New Zealand, UK and Irish citizens.<br />Call our office to see if you meet the criteria, We can guide you every step of the way.
      </p>
      <p>
        We&apos;re also here to assist you in assembling the documents required. We make the whole process easy.
      </p>
    </WhiteWithIcons>
    <ImageAndText
      hasRequestQuote={false}
      hasSubHeading={false}
      heading="You Might Have These Concerns About Shipping Your Vehicle Overseas"
      imageSide="left"
      imageAlt="Car Concerns"
      imageSrc="/assets/images/car.jpg"
      listItems={[
        'will it arrive safely?',
        'what documentation do I need?',
        'will I need to pay tax?',
        'am I able to leave anything in the car?',
        'what happens at the destination?',
        'how long does it take?',
        'how much will it cost?',
      ]}
      listType='list-disc'
      theme='dark'
      requestQuoteLink=""
      requestQuoteText=""
    >
      <QuoteContactButtons />
    </ImageAndText>
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      heading='Modern Day Shipping Is Very Safe'
      imageSide='right'
      imageAlt="Safe Shipping"
      imageSrc="/assets/images/old-car.jpg"
      precedingParagraphs={[
        'We all use an interactive online platform, data is always logged as it moves from one stage to the next and everyone that forms part of that journey is accountable eg: receiving on to the tow truck, delivery off the tow truck to the port, receiving into the port, movement from the port on to the vessel, movement from the vessel on to the destination port, clearance through customs and quarantine, handover to the destination tow truck driver, delivery of vehicle to the clients chosen destination - it\'s comprehensively monitored the whole way through so there is no change of it ‘going missing\' or us not knowing exactly where it is at any point of the transit. We\'ve been shipping cars to and from Australia for more than a decade. We are the International car shipping experts you can trust.'
      ]}
      theme='light'
      hasSubHeading={false}
    />
    <ShippingOptions
      width='w-1/4'
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/white-car.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Shared Container',
          image: '/assets/images/4x4-in-container.jpg',
        },
        {
          heading: 'Full Container',
          image: '/assets/images/red-car-in-container.jpg',
        },
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default ImportCarToAu;