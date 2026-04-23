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

const ImportCaravanToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCaravanToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importCaravanToAustralia.description} />
    </Head>
    <Hero
      heading='SHIPPING YOUR CARAVAN HAS NEVER BEEN EASIER'
      flags={['nz', 'uk', 'au']}
      subHeading='We Ship Caravans Between the Following Locations. For Destinations Outside Of This Please Contact us.'
      bgImage='/assets/images/bg-caravan.jpg'
      hasButton={true}
      buttonLink={siteMap.vehicle.vehicleQuote.path}
      hasMouseScroll={true}
      buttonText="Get Instant Quote"
    />
    <WhiteWithIcons
      width="w-1/4"
      data={{
        heading: 'Shipping Your Caravan Makes Good Economic Sense',
        items: [
          {
            image: '/assets/images/reasons/value.svg',
            text: 'Caravans can be much more expensive in New Zealand than they are in Australia. Shipping will save you plenty - or sell it for a good profit!'
          },
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'No import tax into New Zealand if you\'ve owned the caravan for more than 12 month. (Call us to check your eligibility)'
          },
          {
            image: '/assets/images/reasons/clip-board.svg',
            text: 'No Australian GST on motorhomes if you\'re buying from an Australian dealer for the sole purpose of export.'
          },
          {
            image: '/assets/images/reasons/caravan.svg',
            text: 'With over 120,000 caravans registered in Australia, you have a much larger selection to choose from'
          },
          {
            image: '/assets/images/reasons/clock.svg',
            text: 'Save the time and aggravation of both selling and buying - and you end up with a caravan you know and love.'
          },
          {
            image: '/assets/images/reasons/lightning.svg',
            text: 'It\'s fast. Transit times between Australia and New Zealand can be as little as 4 days on the water. and two weeks overall.'
          },
          {
            image: '/assets/images/reasons/price-tag.svg',
            text: 'Selling your caravan privately in Australia will almost certainly lose you money.'
          },
          {
            image: '/assets/images/reasons/coins.svg',
            text: 'Shipping is far cheaper than you think.'
          },
        ]
      }}
    >
      <p>
        Importing and exporting caravans to and from Australia is our speciality. Willship can handle the entire process from start to finish - With our help, It won&apos;t be long before you&apos;ll be exploring New Zealand from the comfort of your own caravan.
      </p>
    </WhiteWithIcons>
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      hasSubHeading={false}
      heading="You Might Have These Concerns About Shipping Your Caravan Overseas"
      listItems={[
        'How much does it cost to ship a caravan?',
        'Is the shipping process safe?',
        'What documents do I need to provide?',
        'Will the caravan be subject to import tax?',
        'Are there hidden fee\'s I need to be aware of?',
        'How long does the process take?',
        'Can I put anything inside the caravan?',
        'What happens when it gets to the destination?',
        'What do I need to do to be able to get it registered?',
      ]}
      listType='list-disc'
      imageSide="left"
      imageAlt="Caravan"
      imageSrc="/assets/images/caravan2.jpg"
      theme="dark"
    >
      <QuoteContactButtons />
    </ImageAndText>
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.vehicle.vehicleQuote.path}
      requestQuoteText='Get Instant Quote'
      heading='Modern Day Shipping Is Very High-Tech'
      imageSide="right"
      imageAlt="Ships and Cranes"
      imageSrc='/assets/images/ship-cranes.jpg'
      precedingParagraphs={[
        'Modern day caravan shipping is very safe. Everyone that has a hand in the shipping process is required to log information as the caravan moves from one stage to the next and everyone that forms part of that journey is accountable. For example: Receiving of the caravan on to the tow truck or into the depot, movement off the tow truck to the port, receiving of the caravan into the port, towing from the port on to the vessel, movement from the vessel on to the destination port, clearance through customs and quarantine at the destination, handover to the local tow truck driver, and delivery of the caravan to your chosen location - it\'s comprehensively monitored the whole way through so there is no chance of it ‘going missing\' or us not knowing exactly where it is at any point of it\'s international transport. Shipping a caravan from Australia to New Zealand, or anywhere in the world can appear daunting but rest assured Willship International are the highly experienced International caravan shipping company you can rely on.'
      ]}
      theme='light'
      hasSubHeading={false}
    />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/caravans-in-ship.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Full Container',
          image: '/assets/images/containers.jpg',
        }
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default ImportCaravanToAu;