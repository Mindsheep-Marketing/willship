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
import Image from "next/image";
import WhatYouReceive from "./what-you-receive";
import BeforeYouBook from "./BeforeYouBook";
import BookConsultation from "./BookConsultation";
import RequestQuoteBanner from "./RequestQuoteBanner";
import HelpfulResources from "./HelpfulResources";
import { useRef } from "react";
// import Head from "next/head";

const ConsulationPage = () => {
  const screenSize = useGetScreenSize();
  const isSmall = useIsSmall();
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    consultationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Define background video or image based on screen size with proper typing
  const backgroundMedia: { type: "video" | "image"; src: string } = screenSize === 'xs' 
    ? { type: 'image', src: '/assets/images/bg-commercial-small.jpg' }
    : { type: 'video', src: "https://www.youtube.com/embed/MwAT8HTHgO8?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=MwAT8HTHgO8" };

  // Define responsive styles based on screen size
  const headerFontSize = isSmall ? "text-3xl" : "text-6xl";
  const subheaderFontSize = isSmall ? "text-base" : "text-xl";
  const cardScale = isSmall ? "scale-[0.8]" : "scale-100";
  const sectionPadding = isSmall ? "py-8 px-4" : "py-12 px-6";
  
  const firstRowItems = [
    {
      title: 'PLAN YOUR SHIPMENT WITH A PRO',
      subtitle: 'Get Expert Advice for only $250 + GST!',
    //   cbm: '(1-12 cbm/m3)',
      image: '/assets/images/airport.jpg',
      link: '#consultation-section',
      context: 'BOOK YOUR CONSULT'
    },
  ];

  return (
    <>
      <Head>
        <title>{siteMap.commercial.title}</title>
        <meta name='description' content={siteMap.commercial.description} />
      </Head>
      <section 
        className={`w-full relative flex items-center justify-center py-10 ${isSmall ? 'min-h-[calc(100vh-112px)]' : 'min-h-[calc(100vh-198px)]'}`}
      >
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo={backgroundMedia.type}
          src={backgroundMedia.src}
          hasOpacity={true}
          opacityColour='bg-darkBlue/80'
        />
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 px-4 text-white text-center">
          <h1 className={`font-sackHeavy ${headerFontSize} leading-none`}>
            NEED HELP WITH A PERSONAL OR COMPLEX SHIPMENT?
          </h1>
          <h2 className={`font-medium ${subheaderFontSize}`}>
            Some shipments require more care, time, and detail than others. If your enquiry is particularly complex, or you&apos;re importing goods for personal use, we offer a one-on-one consultation to make sure you get the right advice before moving forward.
          </h2>
          {/* <div className="w-72">
            <Button
              buttonText="Request A Quote"
              linkTo={siteMap.commercial.commercialFreightQuote.path}
              theme='redBlue'
            />
          </div> */}
        <div className={`w-full max-w-8xl flex ${isSmall ? 'flex-col' : 'lg:flex-row'} flex-wrap 2xl:flex-nowrap gap-0 lg:gap-8 2xl:gap-20 justify-center px-4 sm:px-0`}>
          {firstRowItems.map(item => (
            <div key={item.title} className={`rounded-3xl shadow-2xl ${isSmall ? 'w-full' : 'lg:w-2/5'} second-row-item flex flex-col items-center relative ${cardScale}`}>
              <div className={`ribbon absolute -top-3 -left-3 bg-darkBlue z-10  px-14 ${isSmall? 'px-14 p-2':'px-18 p-1.5' } uppercase text-xs sm:text-sm font-bold rounded-tl-3xl`}>
                <div className="flex flex-col">
                  <span>NO HEADACHES,</span>
                  <span>NO HIDDEN COSTS</span>
                </div>
              </div>
              <span className="bg-gradient-to-tl from-red to-rose-900 w-3 h-6 absolute top-10 -left-3 z-20 rounded-bl-3xl rounded-tl-3xl"></span>
              <span className="bg-darkBlue w-5 h-11 absolute top-5 -left-3 -z-10 rounded-bl-3xl"></span>
              <div className="w-full aspect-video relative rounded-t-3xl overflow-hidden">
                <Image
                  src={item.image}
                  layout="fill"
                //   objectFit="cover"
                  alt={item.title}
                />
                <h3 className={`absolute z-10 text-center ${
                  isSmall ? 'bottom-[30px]' : 
                  screenSize === 'sm' ? 'bottom-[40px]' : 
                  screenSize === 'md' ? 'bottom-[50px]' : 
                  'bottom-[60px]'
                } w-full font-black text-white text-4xl`}>
                  {item.title}
                </h3>
                <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 overflow-hidden"></span>
              </div>
              <div className="w-full first-letter:p-4 flex flex-col gap-2 p-6 pt-0 bg-white rounded-b-3xl">
                <h3 className="font-bold text-green-700 text-lg uppercase py-4">{item.subtitle}</h3>
                <Button
                  linkTo={item.link}
                  buttonText="BOOK YOUR CONSULT"
                  theme="redBlue"
                  context={item.context}
                />

              </div>
            </div>
          ))}
        </div>

        </div>
      </section>
      <WhatYouReceive  />

      <ImageAndText
        hasRequestQuote={false}
        requestQuoteLink=''
        requestQuoteText=''
        hasSubHeading={false}
        contentMaxWidth="max-w-2xl"
        heading="Why Consultation May Be Required"
        precedingParagraphs={[
            'At Willship, we&apos;re committed to providing accurate, efficient and tailored freight forwarding solutions. In some cases, a consultation is required before we can proceed, especially when:'
        ]}
        listItems={[
            '• You&apos;re importing personal goods',
            '• Your shipment involves unusual cargo or unclear buying terms',
            '• You have a one-off or non-standard international shipment',
            '• You&apos;re still in the early stages of planning and seeking guidance',
            '• The quote requires significant research or clarification',
        ]}
        trailingParagraphs={[
            'Note: If you&apos;re a business importer with a clear and standard shipment, please contact our commercial team or request a direct quote on our website'
        ]}
        imageAlt="Airport"
        imageSide={isSmall ? "right" : "left"}
        imageSrc="/assets/images/airport.jpg"
        theme='dark'
      />
      <ImageAndText 
        hasRequestQuote={false}
        requestQuoteLink={siteMap.commercial.commercialFreightQuote.path}
        hasSubHeading={false}
        contentMaxWidth="max-w-2xl"
        heading="Who This Is For / Not For"
        precedingParagraphs={[
          'This service is ideal for:'
        ]}
        listItems={[
          'Personal importers of new goods',
          'Individuals with one-off or complex international shipments',
          'Clients seeking clear, accurate advice before moving forward',
          'Early-stage planners who want to avoid costly mistakes'
        ]}
        secondList={{
          text:'This service is NOT suitable for:',
          items: [
            'Used personal effects such as second-hand furniture, clothing, or general household belongings',
            'Full relocations or household moves — please contact an international removalist instead',
            'People seeking ongoing back-and-forth support without committing to a shipment',
            'Business importers with standard, straightforward shipments — please contact our commercial team directly'
          ]
        }}
        listType="list-disc"
        imageSide={isSmall ? "left" : "right"}
        imageAlt="Warehouse workers checking inventory"
        imageSrc="/assets/images/computer.jpg"
        theme='light'
        requestQuoteText="Request A Quote"
      />

      <BeforeYouBook />
      <div id="consultation-section" ref={consultationRef}>
        <BookConsultation />
      </div>
      {/* <HelpfulResources /> */}
      <CommercialFAQ />
      <RequestQuoteBanner />

    
    </>
  );
};

export default ConsulationPage;