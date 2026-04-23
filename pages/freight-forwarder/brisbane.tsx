import { useRouter } from 'next/router';
import { useEffect } from 'react';
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

  const router = useRouter();

  useEffect(() => {
    const isFromGoogleSearch = document.referrer.includes('google');
    if (isFromGoogleSearch) {
      router.replace('/freight-forwarder/');
    }
  });

  const screenSize = useGetScreenSize();
  const isSmall = useIsSmall();

  return (
    <>
      <Head>
        <title>{siteMap.commercial.freightForwarderBrisbane.title}</title>
        <meta name='description' content={siteMap.commercial.freightForwarderBrisbane.description} />
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
            International Freight Forwarders Brisbane
          </h1>
          <h2 className="font-medium text-base lg:text-xl">
            Willship is trusted by some of Australia&apos;s leading brands, we safely ship over $1.4 billion in cargo – every year
          </h2>
          <div className="w-72">
            <Button
              buttonText="Get Started"
              dataPaperformId="mlc28uxr"
              linkTo="paperform"
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
        heading="Freight Forwarders Brisbane"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listType='list-disc'
        trailingParagraphs={[
          'In search of the leading freight forwarders Brisbane has to offer? Your search ends here with Willship International. Recognised as an industry leader in the Australian freight forwarding sector, our mission is to forge enduring client relationships. We accomplish this by offering unmatched support, smart strategy and custom solutions that align with your needs.',
          'With shipping agents Brisbane and globally located – with years of experience and well-established shipping networks – our team takes the guesswork out of freight forwarding for you. From start to finish, we guide you through the complexities, ensuring your cargo arrives promptly and efficiently. We handle all logistics and documentation while keeping you in the loop, freeing you to focus on your core business.',
          'This commitment to excellence is what sets us apart as your first-choice international freight forwarders Brisbane wide. With Willship International, you\'re opting for a seamless, worry-free freight forwarding experience, both in Brisbane and across Australia. Trust us to be your dedicated partner in all your freight forwarding endeavours.',
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="How to organise freight to or from Brisbane"
        imageSide='left'
        imageSrc="/assets/images/team-inside2.png"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Organising your freight to or from Brisbane is very simple when you work with Willship – the freight company Brisbane depends on. Here is a step-by-step process explaining how to organise your freight.'
        ]}
        listType='list-decimal'
        listItems={[
          'The first step is to get your no-obligation free quote from us. You can get that by calling us at +61 7 3267 0575. Another way to get your free quote is by clicking the “Request A Quote” button and filling out the form with all the details.',
          'The second step is discussing the details. To understand your needs better, we will take some time to discuss the details of your shipment. We will then develop a logistics strategy accordingly.',
          'After confirming all the details with you, we forward you the specifics of your shipment with the associated timelines. We also reconfirm the details and ask for the information we require from you to make your delivery seamless.',
        ]}
        trailingParagraphs={[
          'It’s that simple. This is what makes us the shipping company Brisbane businesses trust to make sure any freight to or from Australia is handled perfectly.'
        ]}
        theme='light'
      />

      <WhatWeShip />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        hasSubHeading={false}
        heading="International Freight Routes"
        precedingParagraphs={[
          'We take the hassle out of managing your business\'s international shipping needs. Our seamless international deliveries make it easier for you to focus on what really matters—your core business. Common routes we manage include freight from China to Australia, Vietnam to Australia, and India to Australia, but our capabilities extend far beyond these.',
          'With an extensive network of shipping agents Brisbane and globally located, we also facilitate cargo services to and from a wide range of countries including New Zealand, Singapore, Hong Kong, Taiwan, Japan, South Korea, Malaysia, Indonesia, Italy, Spain, Poland, Portugal, Sweden, Switzerland, Slovenia, Austria, Germany, France, England, Ireland, Scotland, the USA, and Canada.',
          'Choose Willship International and enjoy the convenience of having one of the leading international freight forwarders Brisbane has to offer handle your international shipping needs. We\'re here to make freight forwarding in Brisbane and globally as straightforward as possible for you.',
        ]}
        imageSide="right"
        imageAlt="computer"
        imageSrc="/assets/images/computer.jpg"
        theme='light'
        requestQuoteText="Get Started"
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText="Get Started"
        hasSubHeading={false}
        heading="Air & Sea Freight"
        precedingParagraphs={[
          'When time is of the essence, air freight is your best bet. It offers quick and reliable delivery, allowing your goods to be transported globally in a short time frame. However, it\'s worth noting that air freight is generally more costly than sea freight, and there are size and weight limitations to consider.',
          'On the other hand, sea freight is the go-to method for shipping larger volumes of goods cost-effectively. Although this option requires a longer transit time, it allows for the transport of larger, heavier items, making it a more economical choice for many businesses.',
          'At Willship International, we offer both air and sea freight services to meet a range of customer needs. Our seasoned team is at your disposal to offer advice on the most suitable freight method for your specific requirements. We are the freight company Brisbane business owners know and trust for finding the best rates, and you too can benefit from our commitment to finding the optimal shipping solutions. Our experience in international freight and freight forwarding in Brisbane ensures that we deliver not just your cargo, but also peace of mind.',
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