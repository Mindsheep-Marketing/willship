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

const ImportMachineryToAu = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importMachineryToAustralia.title}</title>
      <meta name='description' content={siteMap.vehicle.importMachineryToAustralia.description} />
    </Head>
    <Hero
      heading='INTERNATIONAL MACHINERY SHIPPING CAN BE COMPLICATED'
      subHeading="We&apos;ve been doing this for more than 50 years - Let The Experts Help"
      bgImage='/assets/images/machinery.jpg'
      hasButton={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
      hasMouseScroll={true}
      hasImageOpacity={true}
    />
    <WhiteWithIcons
      width="w-1/3"
      data={{
        heading: 'Don&apos;t Take Risks With Anyone But The Best',
        trailingText: [
          'Willship has been involved in both importing and exporting Machinery to and from Australia for many years now. We can handle the entire process from start to finish - we are the International shipping specialists you can depend on.'
        ],
        items: [
          {
            image: '/assets/images/reasons/world.svg',
            text: 'International movement of machinery is a highly complex area - and so needs to be handled by a highly experienced team. Mistakes can be very expensive.'
          },
          {
            image: '/assets/images/reasons/shield-red.svg',
            text: 'You can rely on the experience of the Willship team to provide exemplary customs and quarantine advise. We are here to exceed your expectations'
          }
        ]
      }}
    />
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      hasSubHeading={false}
      heading="You Might Have These Concerns About Shipping Your Machinery Overseas"
      imageAlt="Machinery"
      imageSide="left"
      imageSrc="/assets/images/machinery1.jpg"
      listItems={[
        'How much does it cost?',
        'Is International shipping safe?',
        'What documents are required?',
        'Do I need to apply for permits prior to shipping?',
        'Will the machinery be subject to import tax?',
        'Are there hidden costs I need to be aware of?',
        'What is the overall transit time?',
        'How thoroughly does it need to be cleaned?',
        'What happens when it gets to the destination?',
        'What do I need to do to be able pick it up from the port?',
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
      heading='A Safer Journey With High-Tech Shipping'
      imageAlt="Machinery"
      imageSide="right"
      imageSrc="/assets/images/cranes.png"
      precedingParagraphs={[
        'Modern day machinery shipping is very safe. Everyone that has a hand in the shipping process is required to log information as the machinery moves from one stage to the next, and everyone that forms part of that journey is accountable. For example: Receiving of the machinery into the port, movement from the port on to the vessel, movement off the vessel and on to the destination port, clearance through both customs and quarantine at your chosen destination, and release from the port into the care of the client. It&apos;s comprehensively monitored the whole way through so there is no chance of it &apos;going missing&apos; or us not knowing exactly where it is at any point of it&apos;s journey. Shipping machinery in and out of Australia and New Zealand, or anywhere in the world can appear daunting, but rest assured Willship International has the experience to ensure it&apos;s done safely and efficiently.'
      ]}
      theme='light'
    />
    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/machinery2.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Full Container', 
          image: '/assets/images/machinery3.jpg',
        }
      ]}
    />
    <WeTakeCareOfEntireJourney />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default ImportMachineryToAu;