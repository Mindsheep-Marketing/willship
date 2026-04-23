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

const ImportBoatToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importBoatToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importBoatToAustralia.description} />
    </Head>
    <Hero
      bgImage='/assets/images/bg-boat.png'
      flags={['nz', 'au']}
      heading='SHIPPING YOUR TRAILER BOAT HAS NEVER BEEN EASIER'
      subHeading='We Specialize in Shipping Trailer Boats Between the Following Locations. For Destinations Outside of this Please Contact Us.'
      hasMouseScroll={true}
      hasButton={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
    />
    <WhiteWithIcons
      data={{
        heading: 'Shipping Your Trailer Boat Makes Good Economic Sense',
        items: [
          {
            image: '/assets/images/reasons/value.svg', 
            text: 'Trailer Boats can be much more expensive in New Zealand than they are in Australia. Shipping will save you plenty - or sell it for a good profit!'
          },
          {
            image: '/assets/images/reasons/tax2.svg', 
            text: 'No import tax into New Zealand if you&apos;ve owned the trailer boat for more than 12 month. (Call us to check your eligibility).'
          },
          {
            image: '/assets/images/reasons/clip-board.svg', 
            text: 'No boat registration required in New Zealand'
          },
          {
            image: '/assets/images/reasons/headphones-red.svg', 
            text: 'Trailers simply need a warrant of fitness - and we can help with the entire process.'
          },
          {
            image: '/assets/images/reasons/price-tag.svg', 
            text: 'No Australian GST on trailer boats if you&apos;re buying from an Australian dealer for the sole purpose of export.'
          },
          {
            image: '/assets/images/reasons/coins.svg', 
            text: 'Boats are often much cheaper in Australia.'
          },
          {
            image: '/assets/images/reasons/boat.svg', 
            text: 'With over 270,000 trailer boats registered in Australia, you have a much larger selection to choose from.'
          },
          {
            image: '/assets/images/reasons/clock.svg', 
            text: 'Save the time and aggravation of both selling and buying. You end up in a boat you know and love.'
          },
          {
            image: '/assets/images/reasons/lightning.svg', 
            text: 'It\'s fast. Transit times between Australia and New Zealand can be as little as 4 days on the water. and two weeks overall.'
          },
        ]
      }}
      width='w-1/4'
    >
      <p>
        Willship can handle the entire shipping process from start to finish. There is almost no better place to own a trailer boat than New Zealand, With our help It won&apos;t be long before you&apos;ll be enjoying some of the best fishing and waterways in the world.
      </p>
    </WhiteWithIcons>
    <ImageAndText
      hasRequestQuote={false}
      hasSubHeading={false}
      heading="You Might Have These Concerns About Shipping Your Trailer Boat Overseas"
      imageSide="left"
      imageSrc="/assets/images/boat-trailer.jpg"
      imageAlt="Boat on trailer"
      listItems={[
        'How much does it cost to ship a trailer boat?',
        'Is International shipping safe?',
        'What are the documentation requirements?',
        'Will I need to pay tax?',
        'Are there hidden costs?',
        'What is the transit time?',
        'Can I leave anything in my trailer boat?',
        'What happens at the destination?',
        'What do I need to do to be able to legally use it?',
      ]}
      listType='list-disc'
      trailingParagraphs={[
        'Willship will make the process easy - we&apos;re here to handle it all and answer all your questions.'
      ]}
      requestQuoteLink=''
      requestQuoteText=''
      theme="dark"
    >
      <QuoteContactButtons />
    </ImageAndText>
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      hasSubHeading={false}
      heading='Modern Day Trailer Boat Shipping Is Safe And Dependable'
      theme='light'
      imageSide="right"
      imageAlt="boat in warehouse"
      imageSrc="/assets/images/boat-in-warehouse.jpg"
      precedingParagraphs={[
        'In order to transport your trailer boat, all parties involved in the logistics process use an interactive online system, information is always logged as it moves from one stage to the next and everyone that forms part of that journey is accountable eg: receiving of the trailer boat on to the tow truck, delivery off the tow truck into the port, receiving into the port, movement from the port on to the vessel, movement from the vessel on to the destination port, clearance through customs and quarantine, handover to the destination tow truck driver, delivery of the trailer boat to your chosen destination - it&apos;s comprehensively monitored the whole way through so there is no chance of it &apos;going missing&apos; or us not knowing exactly where it is at any point of the journey. Shipping a boat from Australia to New Zealand, or anywhere in the world can appear daunting but rest assured Willship International are the marine haulage company you can depend on.'
      ]}
    />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/boat-in-boat.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Shared Container',
          image: '/assets/images/containers.jpg',
        },
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default ImportBoatToAu;