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

const ImportMotorCycleToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importMotorcycleToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importMotorcycleToAustralia.description} />
    </Head>

    <Hero
      bgImage='/assets/images/bg-bike.jpg'
      flags={['nz', 'uk', 'au']}
      heading='SHIPPING YOUR MOTORCYCLE HAS NEVER BEEN EASIER'
      subHeading='We Ship Motorcycles Between The Following Location'
      hasButton={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
      hasMouseScroll={true}
    />
    <WhiteWithIcons
      width="w-1/4"
      data={{
        heading: 'Shipping Your Motorcycle Makes Good Economic Sense',
        trailingText:[
          'Willship can handle the entire motorcycle shipping process from start to finish. We&apos;ve been shipping motorcycles to and from Australia for decades - we are the International shipping specialists you can rely on.'
        ],
        items: [
          {
            image: '/assets/images/reasons/value.svg',
            text: 'Motorcycles can be much more expensive in both New Zealand and the UK than they are in Australia. Shipping will save you plenty - or sell it for a good profit!'
          },
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'No import tax into New Zealand or the UK if you&apos;ve owned the motorcycle for more than 12 month. (Call us to check your eligibility)'
          },
          {
            image: '/assets/images/reasons/price-tag.svg',
            text: 'Selling your motorcycle privately in Australia will almost certainly lose you money'
          },
          {
            image: '/assets/images/reasons/clock.svg',
            text: 'Save the time and aggravation of both selling and buying - and you end up with a motorcycle you know and love'
          },
          {
            image: '/assets/images/reasons/lightning.svg',
            text: 'It&apos;s fast. Transit times between can be as little as 2 weeks from start to finish'
          },
          {
            image: '/assets/images/reasons/coins.svg',
            text: 'Shipping is far cheaper than you think'
          }
        ]
      }}
    />
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="You Might Have These Concerns About Shipping Your Motorcycle Overseas"
      hasSubHeading={false}
      imageSide="left"
      imageSrc="/assets/images/car-bike-container.jpg"
      imageAlt="Car and Motorcycle in container"
      listItems={[
        'How much does it cost to ship a motorcycle?',
        'Will my bike be safe?',
        'What documents do I need to supply?',
        'Will I need to pay any import tax?',
        'Are there hidden Cost?',
        'How long does it take?',
        'Can I ship anything alongside my bike or in the saddle bags?',
        'What happens when it gets to the other end?',
        'What do I need to do to be able to legally register and ride it?',
      ]}
      listType='list-disc'
      theme='dark'

    >
      <QuoteContactButtons />
    </ImageAndText>
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      hasSubHeading={false}
      heading="Your Motorcycle Will Be In Safe Hands"
      precedingParagraphs={[
        'Modern day motorcycle shipping is very safe. Everyone that has a hand in the shipping process is required to log information as it moves from one stage to the next and everyone that forms part of that journey is accountable. For example: Receiving of the motorcycle on to the tow truck, movement off the tow truck to the port, receiving of the motorbike into the port, movement from the port on to the vessel, movement from the vessel on to the destination port, clearance through customs and quarantine at the destination, handover to the local tow truck driver, and delivery of the motorcycle to your chosen destination - it&apos;s comprehensively monitored the whole way through so there is no chance of it &apos;going missing&apos; or us not knowing exactly where it is at any point of the transit. Shipping a motorcycle from Australia to New Zealand, or anywhere in the world can appear daunting but rest assured Willship International are the International motorcycle transport company you can depend on.'
      ]}
      theme='light'
      imageAlt="Motorbike"
      imageSide="right"
      imageSrc="/assets/images/motorbike2.jpg"
    />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/bikes-on-ship.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Shared Container',
          image: '/assets/images/car-bike-container.jpg',
        }
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default ImportMotorCycleToAu;