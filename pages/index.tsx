import Head from "next/head";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import ImageAndText from "../components/common/ImageAndText";
import MapSection from "../components/common/MapSection";
import Testimonials3 from "../components/common/Testimonials3";
import HomeHero from "../components/home/HomeHero";
import Services from "../components/home/Services";
import siteMap from "../siteMap";

const HomePage = () => (
  <> 
    <Head>
      <title>{siteMap.home.title}</title>
      <meta name='description' content={siteMap.home.description} />
    </Head>
    <HomeHero />
    <ImageAndText
      heading='Welcome to Willship International – Australia’s Leading International Logistics Company'
      hasRequestQuote={true}
      requestQuoteLink='paperform'
      requestQuoteText='Get Started'
      hideGetStartedButton={true}
      hasSubHeading={false}
      imageSide='left'
      imageAlt="Welcome To Willship International Freight Shipping Logistics Company Home Page"
      imageSrc="/assets/images/team-inside-warehouse.jpg"
      precedingParagraphs={[
        'We are a specialized <a href="/freight-forwarder/" title="Freight Forwarding Australia">international freight forwarder</a> and customs brokerage known for our 5-star international freight shipping services. As the go-to trusted logistics company for Aussie businesses and individuals, our exceptional team of highly experienced logistics consultants enables us to deliver top-notch services that are perfectly tailored to meet your unique international freight shipping needs.',
        'Our customer base ranges from individuals moving internationally to some of most renowned brands in Australia, including Baskin Robbins, Norco, VRG Girl, Emirates and more. Whether you’re a one-off shipper or a large-scale business, our freight company will streamline your international freight shipping operations and ensure smooth shipments.',
        'Our commercial <a href="/freight-forwarder/" title="Freight Forwarding Australia">freight division</a> is dedicated to delivering exceptional international shipping services supported by excellent customer service and effective supply chain management for local Australian businesses just like yours. If you buy from international suppliers or sell to international markets our international shipping company has the expertise to optimise your operations and enhance your global reach.',
        'In addition, our automotive <a href="/freight-forwarder/" title="Freight Forwarding Australia">freight</a> division specialises in seamless door-to-door transportation of various automotive cargo. From cars and caravans to boats, bikes, and machinery, our freight company can handle it all.',
		'Make Willship International your international freight shipping and logistics company of choice – you can rely on our expert international shipping services to handle your valuable assets safely and efficiently across international borders. Get in touch with us now, click the button below to chat with us now, or <a href="/contact-us">contact us online</a>.'
      ]}
      theme='light'
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink='paperform'
      requestQuoteText='Get Started'
      hideGetStartedButton={true}
      heading='Here at Willship'
      hasSubHeading={false}
      precedingParagraphs={[
        'We constantly strive to be recognized as leaders in international shipping services excellence. As a leading international shipping company, we understand the complexities of international trade and provide innovative solutions and advanced technology to simplify the process for you. Our goal is to establish long-lasting relationships with our customers, built on trust and mutual success.',
        'In a world of ever-changing international freight logistics, we take pride in our agility and responsiveness. We proactively develop solutions that create sustainable value for our customers, ensuring your business remains adaptable and competitive in a dynamic global marketplace.',
        'We transform international shipping services into a seamless experience. Contact us today and let us exceed your expectations with our unrivalled expertise and commitment to service excellence.',
      ]}
      imageSrc="/assets/images/welcome-background-2.jpg"
      imageAlt="Car In Container image"
      imageSide="right"
      theme='dark'

    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={siteMap.commercial.commercialFreightQuote.path}
      requestQuoteText='Request A Quote'
      customRequestQuoteText='Get Started'
      customRequestQuoteLink='paperform'
      customRequestQuotePaperformId='mlc28uxr'
      customRequestQuotePaperformPopup={true}
      heading="Our Breadth Of Experience"
      hasSubHeading={false}
      imageSide="left"
      imageAlt="background image"
      imageSrc="/assets/images/welcome-background-3.jpg"
      listItems={[
        'More than a billion dollars of cargo is entrusted to us every year',
        'Thousands of succesful shipments per year',
        'Trusted by some of Australia\'s largest brands',
        'Deep relationships with more than 125 trusted worldwide agents',
      ]}
      listType='list-disc'
      trailingParagraphs={[
        'As Australia\'s leading freight company, at Willship we are the pioneers of the Trans-Tasman route for the personal movement of automotive cargo. We provide thorough, up-to-date information to our thousands of happy customers - from start to finish.'
      ]}
      hideGetStartedButton={true}
      theme='light'
    />
    <Services />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink='paperform'
      requestQuoteText='Get Started'
      heading="Why You Should Choose Willship as Your Logistics Company"
      hasSubHeading={true}
      subHeading="Experience, honesty and advice."
      imageAlt="Container Images"
      imageSide="right"
      imageSrc="/assets/images/willship-explain.jpg"
      precedingParagraphs={[
        "We put the needs of our client first and foremost. We want you to grow, and we want to be there for the journey. We've helped first time shippers grow to 100's of containers per year. We will be there every step of the way providing access to our global network of agents and contacts. We see every shipment as part of the long-term relationship with the client. Choose WillShip International as your international freight company today."
      ]}
      customButtonText="Chat to us"
      hideGetStartedButton={true}
      theme='light'
    />
    <Testimonials3 />
    <HaveAnyQuestions 
      quoteLink="paperform"
    />
    <MapSection />
  </>
);

export default HomePage;