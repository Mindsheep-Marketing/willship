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
        <title>{siteMap.commercial.freightForwarderSydney.title}</title>
        <meta name='description' content={siteMap.commercial.freightForwarderSydney.description} />
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
            Sydney Freight Forwarders
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
        heading="The Trusted Freight Forwarder Sydney Relies On"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listType='list-disc'
        trailingParagraphs={[
          'It is critical for a company to have access to a freight forwarder that can be relied upon and that operates effectively & efficiently. Willship International are Sydney freight forwarders responsible for coordinating and arranging all modes of transportation, ensuring that items are moved as swiftly and affordably as possible up to final delivery at your address in Sydney. Willship International is one of the most capable forwarding freight companies Sydney has to offer, providing a range of services including air and sea freight, customs clearing, and warehousing and distribution.',
          'Willship International has been providing outstanding service to customers for more than three decades while also utilising the most cutting-edge technologies. Our team of professionals is dedicated to helping businesses navigate international trade and find the best solutions for their needs.',
          'Don\'t let logistics slow down your firm. If you require Sydney freight forwarders, use Willship International as your freight company of choice. Contact us today to get started.'
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="How to organise freight to or from Sydney"
        imageSide='left'
        imageSrc="/assets/images/team-inside2.png"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Organising your freight to or from Sydney is very simple when you work with Willship – the freight forwarder Sydney depends on. Here is a step-by-step process explaining how to organise your freight.'
        ]}
        listType='list-decimal'
        listItems={[
          'The first step is to get your no-obligation free quote from us. You can get that by calling us at +61 7 3267 0575. Another way to get your free quote is by clicking the “Request A Quote” button and filling out the form with all the details.',
          'The second step is discussing the details. To understand your needs better, we will take some time to discuss the details of your shipment. We will then develop a logistics strategy accordingly.',
          'After confirming all the details with you, we forward you the specifics of your shipment with the associated timelines. We also reconfirm the details and ask for the information we require from you to make your delivery seamless.',
        ]}
        trailingParagraphs={[
          'As leading Sydney freight forwarders, we make it as simple as that. We ensure your freight to or from Sydney is perfect.'
        ]}
        theme='light'
      />

      <WhatWeShip 
      quoteText="Get Started"
      />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        hasSubHeading={false}
        heading="International Freight Routes"
        precedingParagraphs={[
          'As the leading freight forwarder in Australia, we aim to make international freight easier for our clients. We make managing your business easier with seamless international deliveries to or from Australia. We like to think of ourselves as freight consultants or logistics strategists because that is a much more accurate description of what we can offer you. When working with us, there is nothing you have to worry about.',
          'International freight to or from Australia is made easier with Willship. The most common routes we take are China to Australia, Vietnam to Australia and India to Australia. But we also offer freight forwarding to and from other countries – making us one of the most flexible freight companies Sydney wide.',
          'We have a wide network of freight forwarding agents and partners across the globe. We can also offer cargo services to and from Singapore, Hong Kong, Taiwan, Japan, South Korea, Malaysia, Indonesia, Italy, Spain, Poland, Portugal, Sweden, Switzerland, Slovenia, Austria, Germany, France, England, Ireland, Scotland, USA, Canada and many more. We are always here to make international freight convenient for you.',
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
        heading="Air Freight vs Sea Freight"
        precedingParagraphs={[
          'Air Freight: Shipping goods via air freight is an alternative that is both quick and trustworthy. The majority of deliveries can be completed in only a few days. On the other hand, air freight is the most expensive method, with increased costs associated not only with the shipping but also with clearing customs. It is ideal for sending packages that are relatively small yet have a high value and require expedited delivery.',
          'Sea Freight: Sea freight is a more cost-effective choice, with lower expenses per shipment and longer transit durations; nevertheless, sea freight does take significantly longer. It works extremely well for shipments that are either very large or not time-sensitive. Because it is a more stable and secure mode of transportation, sea freight is ideally suited for the shipment of commodities that are big or bulky.',
          'Willship International: Your Solution Partner for Shipping Needs',
          'At Willship International, we are aware of how essential it is for you to locate the shipping option that is most appropriate for your company. When deciding between shipping through air or sea, our team of knowledgeable professionals are here to assist you in making the most informed decision possible, by weighing important considerations, such as price, transit time, and dependability. Get in touch with Willship today, to learn more about the ways in which we can assist your business in achieving success in the field of international trade.',
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