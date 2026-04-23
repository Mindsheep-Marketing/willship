import Head from "next/head";
import GlobalNetworks from "../../components/commercial/GlobalNetworks";
import RequestAQuote from "../../components/commercial/RequestAQuote";
import ServicesInclude from "../../components/commercial/ServicesInclude";
import WhatWeShip from "../../components/commercial/WhatWeShip";
import BackgroundImage from "../../components/common/BackgroundImage";
import Button from "../../components/common/Button";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import ImageAndText from "../../components/common/ImageAndText";
import MouseScroll from "../../components/common/MouseScroll";
import Testimonials3 from "../../components/common/Testimonials3";
import CommercialFAQ from "../../components/FAQs/LocationsFAQ";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import useIsSmall from "../../utils/hooks/useIsSmall";

const CommercialPage = () => {

  const screenSize = useGetScreenSize();
  const isSmall = useIsSmall();

  return (
    <>
      <Head>
        <title>{siteMap.commercial.freightForwarderMelbourne.title}</title>
        <meta name='description' content={siteMap.commercial.freightForwarderMelbourne.description} />
      </Head>
      <section 
        className="w-full relative flex items-center justify-center"
        style={{minHeight: `calc(100vh - ${isSmall ? '112px' : '198px'})`}}
      >
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo={screenSize === 'xs' ? 'image' : 'video'}
          src={screenSize === 'xs' ? '/assets/images/bg-commercial-small.jpg' : "https://www.youtube.com/embed/MwAT8HTHgO8?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=MwAT8HTHgO8"}
          hasOpacity={true}
          opacityColour='bg-darkBlue/80'
        />
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 px-4 text-white text-center">
          <h1 className="font-sackHeavy text-3xl lg:text-6xl leading-none">
            Melbourne Freight Forwarding
          </h1>
          <h2 className="font-medium text-base lg:text-xl">
            Willship is trusted by some of Australia&apos;s leading brands, we safely ship over $1.4 billion in cargo – every year
          </h2>
          <div className="w-72">
            <Button
              buttonText="Get Started"
              linkTo="paperform"
              dataPaperformId="mlc28uxr"
              theme='redBlue'
            />
          </div>
          <MouseScroll />
        </div>
      </section>
      <ServicesInclude />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="Melbourne Freight Forwarding"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listType='list-disc'
        trailingParagraphs={[
          'Willship specialises in planning and managing the movement of products from one location to another, often by sea, air, or land, this is known as freight forwarding. As a trusted name in Melbourne freight forwarding, we serve as a go-between for the shipper (the individual or business sending the goods) and the carrier (the company transporting the goods). From the place of origin to the final destination, we handle all the logistics, including customs clearance, transportation planning, and document preparation. We also offer further services like insurance and warehousing, Australian government licences and regulations that abide by freight forwarders in Melbourne.',
          'Our freight forwarder Melbourne team makes your life easy by offering good guidance and helping you through the entire process to ensure that your cargo is moved efficiently and on time. You can sit back and relax while we manage your cargo because we take care of everything for you and keep you updated. We are the top freight forwarder in Melbourne and Australia because of this.',
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="How to organise freight to or from Melbourne"
        imageSide='left'
        imageSrc="/assets/images/team-inside2.png"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Organising your freight to or from Melbourne is very simple when you work with Willship. Here is a step-by-step process explaining how to organise your freight.'
        ]}
        listType='list-decimal'
        listItems={[
          'The first step is to get your no-obligation free quote from our freight forwarder Melbourne team. You can get that by calling us at +61 7 3267 0575. Another way to get your free quote is by clicking the “Request A Quote” button and filling out the form with all the details.',
          'The second step is discussing the details. To understand your needs better, we will take some time to discuss the details of your shipment. As trusted freight brokers Melbourne businesses rely on, we will then develop a logistics strategy accordingly.',
          'After confirming all the details with you, we forward you the specifics of your shipment with the associated timelines. We also reconfirm the details and ask for the information we require from you to make your delivery seamless.',
        ]}
        trailingParagraphs={[
          'It’s that simple. We make sure your freight to or from Melbourne is perfect.'
        ]}
        theme='light'
      />

      <WhatWeShip />
    
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="International Freight Routes"
        precedingParagraphs={[
          'As the best freight forwarder in Australia, and the freight forwarder Melbourne trusts, we aim to make international freight easier for our clients. We make managing your business easier with seamless international deliveries to or from Australia. We like to think of ourselves as freight consultants or logistics strategists because that is a much more accurate description of what we can offer you. When working with us, there is nothing you have to worry about.',
          'International freight to or from Australia is made easier with Willship. The most common routes we take are China to Australia, Vietnam to Australia and India to Australia. But that doesn’t mean we don’t offer freight forwarding to and from other countries.',
          'We have a wide network of freight forwarding agents and partners across the globe. In addition to our Melbourne freight forwarding services, we can also offer cargo services to and from Singapore, Hong Kong, Taiwan, Japan, South Korea, Malaysia, Indonesia, Italy, Spain, Poland, Portugal, Sweden, Switzerland, Slovenia, Austria, Germany, France, England, Ireland, Scotland, USA, Canada and many more. We are always here to make international freight convenient for you.',
        ]}
        imageSide="right"
        imageAlt="computer"
        imageSrc="/assets/images/computer.jpg"
        theme='light'
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText="Get Started"
        hasSubHeading={false}
        heading="Air Freight & Sea Freight"
        precedingParagraphs={[
          'In order to carry goods internationally, there are two different methods: air freight and sea freight. Whether you are shipping by air or sea, working with a trusted freight forwarder Melbourne businesses rely on makes all the difference.',
          'Transporting products by air, often using cargo aircraft, is known as air freight. Compared to shipping by sea, it is more expensive but also speedier. Typically, time-sensitive commodities like perishables, high-value items, and items that must be delivered fast use air freight. Additionally, it is better suited for smaller shipments. Experienced freight brokers Melbourne companies rely on, like Willship, can help determine if air freight is the best option for your needs.',
          'Transporting products by ship is known as sea freight or ocean freight. It is less expensive but also slower than air freight. Large shipments of heavy or bulky products including machinery, automobiles, and raw materials are frequently shipped by sea. Additionally, it is better suited to greater distances and locations lacking links for air freight.',
          'The ideal option will depend on elements including the kind of products being delivered, the destination, and the urgency of the shipment. Both air and sea freight have their own sets of benefits and drawbacks. It is vital to remember that customs clearance and regulations may affect both choices transit times and expenses. For expert Melbourne freight forwarding support, get in touch with the professionals at Willship to get tailored advice for your specific circumstances.'
        ]}
        imageAlt="Airport"
        imageSide="left"
        imageSrc="/assets/images/airport.jpg"
        theme='light'
      />

      <GlobalNetworks 
      quoteText="Get Started"
      />
      <CommercialFAQ />
      <Testimonials3 />
      <HaveAnyQuestions 
      quoteLink="paperform"
      />
    
    </>
  );
};

export default CommercialPage;