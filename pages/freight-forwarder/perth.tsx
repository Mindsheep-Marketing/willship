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
        <title>{siteMap.commercial.freightForwarderPerth.title}</title>
        <meta name='description' content={siteMap.commercial.freightForwarderPerth.description} />
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
            Freight Forwarders Perth
          </h1>
          <h2 className="font-medium text-base lg:text-xl">
            As the leading freight forwarders Perth wide, we are trusted by Australia&apos;s leading brands to safely ship over $1.4 billion in cargo every year.
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
        heading="Perth Freight Forwarder"
        imageSide="right"
        imageAlt="Willship Staff"
        imageSrc="/assets/images/staff.jpg"
        listType='list-disc'
        trailingParagraphs={[
          'International shipping and customs and quarantine clearance of goods entering the country can be a complicated process, but with the assistance of a Perth freight forwarder such as Willship International, it can be greatly simplified. We are the freight forwarders Perth businesses trust for our quality and reliability of services, choose us for your next project.',
          'The team at Willship International has extensive knowledge in all aspects of international shipping, including transportation and customs processing. We collaborate with our clients to understand their specific shipping requirements and personalise their freight forwarding services appropriately.',
          'If you are looking for a Perth freight forwarder, Willship International has you covered whether you need sea freight, air freight, or customs clearing services. To fit their client budgets and timetables, the team provides flexible solutions to suit any requirements. Shipments are always handled with priority and delivered as quickly and efficiently as possible.',
          'By using a Perth freight forwarder like Willship International, you can simplify your international shipping procedure and rest assured that your goods will be delivered on time, every time. As some of the most trust shipping agents Perth wide, we are confident we can help you too.',
        ]}
        theme='dark'
        />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink="paperform"
        requestQuoteText='Get Started'
        hasSubHeading={false}
        heading="How to organise freight to or from Perth"
        imageSide='left'
        imageSrc="/assets/images/team-inside2.png"
        imageAlt="Willship International"
        precedingParagraphs={[
          'Organising your freight to or from Perth is very simple when you work with a professional Perth freight forwarder like Willship. Here is a step-by-step process explaining how to organise your freight.'
        ]}
        listType='list-decimal'
        listItems={[
          'The first step is to get your no-obligation free quote from us. You can get that by calling us at +61 7 3267 0575. Another way to get your free quote is by clicking the “Request A Quote” button and filling out the form with all the details.',
          'The second step is discussing the details. To understand your needs better, we will take some time to discuss the details of your shipment. We will then develop a logistics strategy accordingly.',
          'After confirming all the details with you, we forward you the specifics of your shipment with the associated timelines. We also reconfirm the details and ask for the information we require from you to make your delivery seamless.',
        ]}
        trailingParagraphs={[
          'It is that simple. Make us your Perth freight forwarder of choice, and we will make sure your freight to or from Perth is perfect every time.'
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
          'As the best freight forwarder in Australia, we aim to make international freight easier for our clients. We make managing your business easier with seamless international deliveries to or from Australia. We like to think of ourselves as freight consultants or logistics strategists because that is a much more accurate description of what we can offer you. When working with us, there is nothing you have to worry about.',
          'International freight to or from Australia is made easier with Willship. The most common routes we take are China to Australia, Vietnam to Australia and India to Australia. But that does not mean we do not offer freight forwarding to and from other countries.',
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
          'Perth Freight forwarders must pick between air freight and sea freight when transporting internationally. Many considerations such as the nature of the goods, costs, and time frame can all impact the selection between the two. Willship International has extensive expertise with all shipping methods and can offer experienced advice to help you choose the right option for your needs.',
          'Air Freight:',
          'Air freight is an excellent choice for commodities that must be delivered fast, such as perishable goods. Despite the fact that air freight is more expensive than sea freight, it may save freight forwarders money in the long term, especially when carrying time-sensitive goods. Willship International offers a large network of aviation industry partners, guaranteeing that air freight shipments are handled efficiently and on schedule.',
          'Sea Freight:',
          'For businesses with a large volume of goods, particularly large and heavy products, most Perth freight forwarders recommend sea freight as the most cost-effective option. You save money by shipping big quantities of products through sea freight. However, sea freight takes longer than air freight, but it allows Perth freight forwarders and businesses to prepare ahead of time and manage inventories accordingly.',
          'Willship International can offer knowledge and guidance in determining the most appropriate shipping option for your needs. To learn more about our air and sea freight services, please contact Willship International today. ',
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