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

const ImportingIntoAu = () => (
  <>
    <Head>
      <title>{siteMap.commercial.importingToAustralia.title}</title>
      <meta name='description' content={siteMap.commercial.importingToAustralia.description} />
    </Head>
    <Hero
      heading="IMPORTING GOODS INTO AUSTRALIA DOES NOT HAVE TO BE DAUNTING"
      bgImage='/assets/images/bg-plane.jpg'
      subHeading='If you’re looking for an Australian import agent, Willship International can assist you through every step of the shipping process from start to finish.'
      buttonLink={'paperform'}
      hasButton={true}
      hasMouseScroll={false}
      buttonText='Get Started'
      hasMinHeight={true}
    />
    <WorldWideNetwork />
    {/* <Problems /> */}

    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      heading="Importing Goods Into Australia Can Be a Complex Process, Make It Easy with the Help of a Willship Import Agent"
      hasSubHeading={false}
      precedingParagraphs={[
        'Whether you’re looking to import air freight or import sea freight, in the normal course of business, problems arise. Air cargo can be delayed as a result of flight cancellations, vessels can be re-routed, freight can go missing, or a worldwide pandemic could cause havoc amongst the world’s logistics networks (sound familiar?).',
        'We’re here to find solutions to anything the world can throw at us. A Willship International Australian import agent can help you utilise our global relationships to give you the advice you need and keep you informed every step of the way. No matter where in the world you are planning to import into Australia from, you can trust our international shipping company to get your freight where it needs to be.',
      ]}
      imageSide='right'
      imageSrc="/assets/images/ship-cranes.jpg"
      imageAlt="Shipping Port"
      theme='dark'
    />

    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      heading="Choosing the Right Australian Import Agent Is Easy, Pick Willship International"
      hasSubHeading={false}
      precedingParagraphs={[
        'If you’re planning on importing goods into Australia, we can help. We mould our services to meet your needs. That’s why the choice is clear. For assistance with importing goods into Australia, choose Willship and we will provide you with:'
      ]}
      listItems={[
        'Someone you can trust with your goods',
        'Someone you can build a working relationship with',
        'Someone that can handle it all',
      ]}
      listType='list-disc'
      trailingParagraphs={[
        'We are passionate about working with our clients to help them build their businesses by offering ongoing support, up to date advice, and exceptional communication. Our goal is to establish lasting long-term working relationships with all our clients, regardless of if you need to import sea freight or import air freight into Australia. Don’t take the risk of your freight being lost in transit, and instead go with the team dedicated to providing a premium service.'
      ]}
      imageSide='left'
      imageSrc="/assets/images/willship-explain-2.jpg"
      imageAlt="Shipping Image"
      theme='light'
    />

    <LeaveItAllToWillship />
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="Why You Should Choose Willship When Importing Goods into Australia"
      hasSubHeading={true}
      subHeading='Experience, honesty and advice.'
      precedingParagraphs={[
        'We put the needs of the client first and foremost. We want you to grow, and to be there for the journey. We’ve helped first time importers grow to 100s of containers per year. Whether you’re looking to import sea freight, or import air freight, when you’re importing commercial goods into Australia, we will be there every step of the way providing access to our global network of agents and contacts. We see every shipment as part of the long-term relationship with the client as we seek to develop a relationship built on trust and reliability.',
        'As a leading international freight forwarder, we ship everything from commercial containers to automotive vehicles, with an experienced Australian import agent on standby to discuss the details of your import with you. We have assisted individuals looking to move into Australia as well as some of the biggest brands in the country, delivering 5-star service every time that is tailored to your unique freight shipping needs. Choose Willship International as your trusted Australian import agent, and get the help you need with importing goods into Australia.',
      ]}
      imageSide="right"
      imageSrc="/assets/images/welcome-background-4.jpg"
      imageAlt="Shipping Containers"
      theme='light'
    />
    <RequestAQuote />
    <CommercialFAQ />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default ImportingIntoAu;
