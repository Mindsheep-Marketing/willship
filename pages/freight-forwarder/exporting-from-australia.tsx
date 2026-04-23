import Head from "next/head";
import LeaveItAllToWillship from "../../components/commercial/LeaveItAllToWillShip";
import Problems from "../../components/commercial/Problems";
import RequestAQuote from "../../components/commercial/RequestAQuote";
import WorldWideNetwork from "../../components/commercial/WorldWideNetwork";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import Testimonials3 from "../../components/common/Testimonials3";
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";
import siteMap from "../../siteMap";

const ExportingFromAu = () => (

  <>
    <Head>
      <title>{siteMap.commercial.exportingFromAustralia.title}</title>
      <meta name='description' content={siteMap.commercial.exportingFromAustralia.description} />
    </Head>
    <Hero
      bgImage='/assets/images/bg-ship.jpg'
      heading='EXPORTING GOODS FROM AUSTRALIA DOES NOT HAVE TO BE DIFFICULT'
      subHeading='Our expert team can guide you through the entire process of exporting goods from Australia, ensuring your shipment arrives safely and on-time.'
      buttonLink={'paperform'}
      hasButton={true}
      hasMouseScroll={false}
      buttonText='Get Started'
      hasMinHeight={true}
    />
    {/* <WorldWideNetwork /> */}
    {/* <Problems /> */}
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      hasSubHeading={false}
      heading="Shipping from Australia Can Be Complex"
      precedingParagraphs={[
        'Our export company has helped a range of businesses across a broad range of industries with exporting goods from Australia to destinations all over the world. There are often import restrictions in destination countries when exporting goods from Australia. We’ll discuss any potential restrictions with you based on your destination country, ensuring you are fully informed before shipping from Australia.',
        'If things aren’t well managed and researched, problems can arise. We are thorough in our research, and make sure we’re well versed in what’s going to happen both here in Australia as well as what happens once it lands at its destination. Choose our export services to ensure that you don’t run into unforeseen problems when exporting goods from Australia.',
        'Our experienced team will utilise our global relationships to give you the advice you need, and keep you informed every step of the way when you choose to export from Australia with our export company. Avoid nasty surprises like losing your freight or racking up massive export bills due to not following the proper procedures when exporting goods from Australia.',
      ]}
      imageSide="right"
      imageSrc="/assets/images/ship-cranes.jpg"
      imageAlt="Shipping"
      theme='dark'
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      heading='We’re the Right Choice When Choosing an Export Company'
      hasSubHeading={false}
      precedingParagraphs={[
        'As a leading <a href="/freight-forwarder">international freight forwarder</a>, and a provider of leading export services, our export company has helped countless individuals and businesses export goods from Australia. We work with you to ensure your goods are always being shipped in the most cost and time effective way, and that our export services are always tailored to your needs. We’ll help you expand your global reach and put processes in place to ensure smooth, regular shipping from Australia that you can depend on.',
        'When you choose Willship to as your provider of export services, you gain access to:',
      ]}
      listItems={[
        'Someone you can trust with your goods',
        'Someone you can build a working relationship with',
        'Someone that can handle it all, from pick up to delivery',
        'A highly experienced and friendly team who genuinely want to support you in growing or improving your business',
      ]}
      listType='list-disc'
      trailingParagraphs={[
        'For us, it’s all about providing ongoing support to establish the best long-term working relationship with our clients. Whether you are looking to export a vehicle or containers for commercial purposes, we’ll assist you with expert advice and tailored service. We assist everyone from individuals to big businesses, meaning that where exporting goods from Australia is concerned, our team is fully qualified to handle freight of all sizes.'
      ]}
      imageSide='left'
      imageSrc="/assets/images/warehouse-inside.png"
      imageAlt="Airport Image"
      theme='light'
    />
    <LeaveItAllToWillship />

    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      hasSubHeading={true}
      subHeading='Experience, honesty and advice'
      heading="Why You Should Choose Willship as Your Export Company"
      imageSide="right"
      imageAlt="Containers"
      imageSrc="/assets/images/handshake-outside.jpg"
      precedingParagraphs={[
        'When you choose Willship to help you export from Australia, we put your needs first and foremost. We want you to grow and want to be there for the journey. We’ve helped first time exporters grow to exporting 100s of containers per year.',
        'We will be there every step of the way, providing you with access to our global network of agents and contacts. We see every shipment as part of a long-term relationship with our customers. We build friendships to build your business.',
      ]}
      theme='light'
    />
    <RequestAQuote />
    <CommercialFAQ />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default ExportingFromAu;