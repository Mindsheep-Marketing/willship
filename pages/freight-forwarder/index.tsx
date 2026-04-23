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
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import useIsSmall from "../../utils/hooks/useIsSmall";
import CommercialHeaderSelector from "../../components/commercial/CommercialHeaderSelector";
import PaperformInlineEmbed from "../../components/common/PaperformInlineEmbed";
import { useState, useEffect } from "react";

const CommercialPage = () => {

  const screenSize = useGetScreenSize();
  const isSmall = useIsSmall();
  const [showFullscreenForm, setShowFullscreenForm] = useState(false);



  return (
    <>
      <Head>
        <title>{siteMap.commercial.title}</title>
        <meta name='description' content={siteMap.commercial.description} />
      </Head>
      <section 
        className="w-full relative flex items-center justify-center py-10"
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
            WILLSHIP INTERNATIONAL YOUR AUSTRALIAN FREIGHT FORWARDER
          </h1>
          <h2 className="font-medium text-base lg:text-xl">
            Willship is trusted by some of Australia&apos;s leading brands to safely ship billions in cargo - every year.
          </h2>
          <div className="w-72">
            <Button
              buttonText="Get Started"
              theme="redBlue"
              linkTo="paperform"
              dataPaperformId="mlc28uxr"
            />
          </div>
          <hr style={{width: '100%'}}></hr>
          <CommercialHeaderSelector/>
          <MouseScroll />
        </div>
      </section>
      <ServicesInclude />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        requestQuoteText='Request A Quote'
        hasSubHeading={false}
        heading="There Are Three Core Things You Need From Your Freight Forwarder"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listItems={[
          'Someone you can trust with your goods',
          'Someone you can build a working relationship with',
          'Someone that can handle it all',
        ]}
        listType='list-disc'
        trailingParagraphs={[
          'As a leading Australian freight forwarder, we\'re committed to providing ongoing support, strategy, and solutions to ensure we establish the best long term working relationship with our clients.'
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        requestQuoteText='Request A Quote'
        hasSubHeading={false}
        heading="Our Experts Handle Everything From Start To Finish"
        imageSide='left'
        imageSrc="/assets/images/team-inside-warehouse.jpg"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Our experienced network can take care of the full range of air freight and sea freight forwarding services that will make your life easier:'
        ]}
        listItems={[
          'Collection of cargo from the supplier',
          'International Freight to and from Australia',
          'Customs clearance at all ports within Australia',
          'Local transport from port to door via rail, truck or courier',
          'Track and trace for real time cargo location',
          'Warehousing and Distribution',
          'Cargo Insurance',
          'Export Air Cargo Clearance',
          'Export Sea Cargo Clearance',
          'Export Freight From Australia to anywhere in the world',
        ]}
        listType='list-disc'
        trailingParagraphs={[
          'At Willship, we look at all options to find you the best possible international freight forwarding solution to move your goods. We will guide you through the process from start to finish, and offer up to date advice and recommendations to ensure the cargo is moved in the most effective and timely manner. We like to think of ourselves as logistics strategists first and foremost, and an international freight forwarder second. We\'re here to support you in running your business.'
        ]}
        theme='light'
      />

      <WhatWeShip />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        hasSubHeading={false}
        heading="A Shipping Network That Spans The Globe"
        precedingParagraphs={[
          'Willship is an Australian freight forwarder with a vast freight forwarding network truly spans the globe. There are, however, certain destinations where the safety of goods, and agents cannot be guaranteed. We therefore will not risk your goods or our reputation by servicing these locations.',
          'As for Australia and the rest of the world, we have daily contact with our worldwide team of over 125 experienced agents. They are there to determine the best possible rates and provide personalised service, offering proactive information and a wealth of experience.',
        ]}
        imageSide="right"
        imageAlt="computer"
        imageSrc="/assets/images/computer.jpg"
        theme='light'
        requestQuoteText="Request A Quote"
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        requestQuoteText="Request A Quote"
        hasSubHeading={false}
        heading="Where We Ship"
        precedingParagraphs={[
          'Our aim is to build a long-standing relationship with our customers and help them build their businesses. We like to think ourselves as more than just an international freight forwarder - freight consultants or logistics strategists would be a more accurate description of what we do. We work out effective solutions for individuals, families, and business\'s who are trying to navigate the complex world of international logistics. We look for ways we can make improvements in their current supply chains and we assist in cutting costs and lead times through effective freight management.',
          'With offices in Australia and New Zealand, and a vast network of freight forwarding partners and agents all over the world, we can offer cargo services to and from China, Singapore, Hong Kong, Vietnam, Taiwan, Japan, South Korea, Malaysia, Indonesia, Italy, Spain, Poland, Portugal, Sweden, Switzerland, Slovenia, Austria, Germany, France, England, Ireland, Scotland, USA, Canada and many more.',
        ]}
        imageAlt="Airport"
        imageSide="left"
        imageSrc="/assets/images/airport.jpg"
        theme='light'
      />

      <GlobalNetworks />
      <CommercialFAQ />
      <Testimonials3 />
      <HaveAnyQuestions />

    </>
  );
};

export default CommercialPage;