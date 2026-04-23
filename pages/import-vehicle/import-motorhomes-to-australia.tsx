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

const ImportMotorHomeToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importMotorhomesToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importMotorhomesToAustralia.description} />
    </Head>
    <Hero
      bgImage='/assets/images/bg-motorhome.jpg'
      flags={['nz', 'au']}
      heading='SHIPPING YOUR MOTORHOME MAKES GOOD ECONOMIC SENSE'
      subHeading='We Primarily Ship Motorhomes Between the Following Locations. For Destinations Outside of this Please Contact Us.'
      hasButton={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
      hasMouseScroll={true}
    />
    <WhiteWithIcons
      width="w-1/4"
      data={{
        heading: 'Shipping Your Motorhome Has Plenty Of Advantages',
        trailingText: [
          'Importing and exporting motorhomes to and from Australia is our speciality. Willship can handle the entire process from start to finish. With our help, It won&apos;t be long before you\'ll be exploring New Zealand from the comfort of your own Motorhome.'
        ],
        items: [
          {
            image: '/assets/images/reasons/value.svg',
            text: 'Motorhomes can be much more expensive in New Zealand than they are in Australia. Shipping will save you plenty - or sell it for a good profit!'
          },
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'No import tax into New Zealand if you&apos;ve owned the motorhome for more than 12 month. (Call us to check your eligibility)'
          },
          {
            image: '/assets/images/reasons/clip-board.svg',
            text: 'No Australian GST on motorhomes if you&apos;re buying from an Australian dealer for the sole purpose of export.'
          },
          {
            image: '/assets/images/reasons/boat.svg',
            text: 'With over 600,000 motorhomes registered in Australia, you have a much larger selection to choose from'
          },
          {
            image: '/assets/images/reasons/clock.svg',
            text: 'Save the time and aggravation of both selling and buying - and you end up with a motorhome you know and love.'
          },
          {
            image: '/assets/images/reasons/lightning.svg',
            text: 'It&apos;s fast. Transit times between Australia and New Zealand can be as little as 4 days on the water. and two weeks overall.'
          },
          {
            image: '/assets/images/reasons/price-tag.svg',
            text: 'Selling your motorhome privately in Australia will almost certainly lose you money'
          },
          {
            image: '/assets/images/reasons/coins.svg',
            text: 'Shipping is far cheaper than you think'
          },
        ]
      }}
      />
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=""
      requestQuoteText=""
      hasSubHeading={false}
      heading="You Might Have These Concerns About Shipping Your Motorhome Overseas"
      imageSrc="/assets/images/motorhome2.jpg"
      imageSide="left"
      imageAlt="Motorhome"
      theme='dark'
      listItems={[
        'How much does it cost to ship a motorhome?',
        'Is International shipping safe?',
        'What documents will I need to provide?',
        'Will the motorhome be subject to import tax?',
        'Are there hidden costs I need to be aware of?',
        'What is the overall transit time?',
        'Can I leave anything inside the motorhome?',
        'What happens when it gets to the destination?',
        'What do I need to do to be able to get it registered?',
      ]}
      listType='list-disc'
    >
      <QuoteContactButtons />
    </ImageAndText>
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText="Get Started"
      heading='A Safer Journey With High-Tech Shipping'
      hasSubHeading={false}
      imageSide="right"
      imageAlt="Background Image"
      imageSrc='/assets/images/containers2.jpg'
      trailingParagraphs={[
        'We all use an interactive online platform, data is always logged as it moves from one stage to the next and everyone that forms part of that journey is accountable eg: receiving on to the tow truck, delivery off the tow truck to the port, receiving into the port, movement from the port on to the vessel, movement from the vessel on to the destination port, clearance through customs and quarantine, handover to the destination tow truck driver, delivery of the motorhome to the clients chosen destination - it&apos;s comprehensively monitored the whole way through so there is no change of it &apos;going missing&apos; or us not knowing exactly where it is at any point of the transit'
      ]}
      theme='light'
    />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/roro.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Full Container',
          image: '/assets/images/motorhome4.jpg',
        }
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <VehicleFAQ />
    <Testimonials10 />
  </>
);

export default ImportMotorHomeToAu;