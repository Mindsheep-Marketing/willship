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
        <title>{siteMap.commercial.freightForwarderAdelaide.title}</title>
        <meta name='description' content={siteMap.commercial.freightForwarderAdelaide.description} />
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
            Freight Forwarders Adelaide
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
        heading="Adelaide Freight Forwarder"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listType='list-disc'
        trailingParagraphs={[
          'When it comes to international shipping, sometimes things can get complicated. The procedure, however, is made easy with the assistance of an Adelaide freight forwarder such as Willship International. Looking for a reliable Adelaide freight company? Choose Willship International, the freight forwarders Adelaide businesses trust to get the job done.',
          'Willship International\'s skilled team is equipped to handle every step of international shipping, from customs clearance through to transportation. They collaborate with their clients to understand their unique shipping requirements and personalise their services appropriately.',
          'Sea and air freight, express courier, and customs clearance are all part of their Adelaide freight forwarding services. To accommodate customers\' budgets and timetables, the team offers low pricing and flexible solutions. Willship International\'s vast network of partners and agents guarantees that shipments are handled effectively and promptly, regardless of destination.',
          'Using an Adelaide freight forwarder such as Willship International may help to streamline the overseas shipping procedure, giving businesses and individuals peace of mind that their goods will always be on time and in good shape.',
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="How to organise freight to or from Adelaide"
        imageSide='left'
        imageSrc="/assets/images/team-inside2.png"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Organising your freight to or from Adelaide is very simple when you work with an experienced Adelaide freight company like Willship. Here is a step-by-step process explaining how to organise your freight.'
        ]}
        listType='list-decimal'
        listItems={[
          'The first step is to get your no-obligation free quote from us. You can speak to a Willship Adelaide freight forwarder by calling us at +61 7 3267 0575. Another way to get your free quote is by clicking the “Request A Quote” button and filling out the form with all the details.',
          'The second step is discussing the details. To understand your needs better, we will take some time to discuss the details of your shipment. We will then develop a logistics strategy accordingly.',
          'After confirming all the details with you, we forward you the specifics of your shipment with the associated timelines. We also reconfirm the details and ask for the information we require from you to make your delivery seamless.',
        ]}
        trailingParagraphs={[
          'It’s that simple. To make sure your freight to or from Adelaide is perfect choose Willship, the freight forwarders Adelaide businesses trust.'
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
          'As the best freight forwarder in Australia, we are a lot more than just an Adelaide freight company, we aim to also make international freight easier for our clients. We make managing your business easier with seamless international deliveries to or from Australia. We like to think of ourselves as freight consultants or logistics strategists because that is a much more accurate description of what we can offer you. When working with us, there is nothing you have to worry about.',
          'International freight to or from Australia is made easier with Willship. The most common routes we take are China to Australia, Vietnam to Australia and India to Australia. But that doesn’t mean we don’t offer freight forwarding to and from other countries.',
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
        heading="Air Freight & Sea Freight"
        precedingParagraphs={[
          'Freight forwarders must pick between air freight and sea freight when it comes to international shipment. The choice between the two can be influenced by a number of things, including the nature of the items, the budget, and the time period. Willship International is familiar with the pros and cons of both shipping methods and offers experienced assistance to help customers select the best solution for their needs.',
          'Air freight is frequently utilised for items that must be delivered quickly, therefore it is the best solution for cargo such as perishable goods. Despite the increased cost of air freight when compared to sea freight, it can save businesses lots of money in the long term, especially when shipping time-sensitive goods.',
          'Willship International offers a large network of aviation industry partners, which ensures that air freight shipments are handled efficiently and quickly.',
          'Sea freight, on the other hand, is the best alternative for companies with a larger volume of cargo. It is the most cost-effective alternative for big and heavy objects, saving you money when shipping large quantities of goods. While sea freight is slower than air freight, it allows firms to prepare for arrival and manage inventories accordingly.',
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