import Head from "next/head";
import RequestAQuote from "../../components/commercial/RequestAQuote";
import WorldWideNetwork from "../../components/commercial/WorldWideNetwork";
import Button from "../../components/common/Button";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import Testimonials3 from "../../components/common/Testimonials3";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";
import RecentProjects from "../../components/RecentProjects";
import siteMap from "../../siteMap";

const recentProjects = [
  {
    caption: "2 x 185m3 LPG tanks ex Vietnam – The tanks were transshipped via Auckland and the shipment was split - one tank was shipped through to Honiara, Solomon Islands and the other to Port Vila, Vanuatu.",
    images: [
      { url: "/assets/images/recent-projects-5-min.jpg" },
      { url: "/assets/images/recent-projects-2-min.jpg" },
    ],
  },
  {
    caption: "4 x Dust Extraction Machines shipped on 4 x 40ft OOG Flat Racks ex Brisbane to Saudi Arabia",
    images: [
      { url: "/assets/images/recent-projects-1-min.jpg" },
    ],
  },
  {
    caption: "100 tonnes of Crane Parts and Counterweights from Brisbane to India – Shipped on 4 x Flat Racks",
    images: [
      { url: "/assets/images/recent-projects-6-min.jpg" },
      { url: "/assets/images/recent-projects-7-min.jpg" },
    ],
  },
  {
    caption: "Used Concrete Pumping Boom ex the USA to Australia via 40ft Flat Rack",
    images: [
      { url: "/assets/images/recent-projects-4-min.jpg" },
    ],
  },

  // Add more rows if needed
];


const FreightLogistics = () => (
  
  <>
    <Head>
      <title>{siteMap.commercial.freightLogistics.title}</title>
      <meta name='description' content={siteMap.commercial.freightLogistics.description} />
    </Head>
    <Hero
      heading='PROJECT LOGISTICS AND MANAGEMENT'
      subHeading='Willship can deal with complicated, oversized or logistically difficult projects. From chartering vessels to managing complex shipments, we can handle it all.'
      hasButton={true}
      buttonLink='paperform'
      buttonText='Get Started'
      bgImage='/assets/images/bg-ship2.jpg'
      hasMouseScroll={false}
      hasMinHeight={true}
    />
    {/* <WorldWideNetwork /> */}
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      heading="Navigating the Complexities of Project Logistics"
      hasSubHeading={false}
      precedingParagraphs={[
        'We specialize in handling complex international project logistics shipments. With our expertise and experience, we excel in managing intricate logistics requirements for large-scale projects across the globe.',
        'Navigating the intricacies of international project logistics can be challenging, but we thrive on overcoming those challenges. Our dedicated team of professionals possesses the knowledge and resources to meticulously plan, coordinate, and execute every aspect of your project shipment.',
        'From the initial stages of route planning and feasibility studies to customs clearance, documentation, and on-site coordination, we ensure a seamless and efficient process from start to finish. No matter the size or complexity of your project, we have the capabilities to handle it with precision and expertise.',
      ]}
      imageSide="right"
      imageAlt="Logistics"
      imageSrc="/assets/images/machinery4.jpg"
      theme='dark'
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={'paperform'}
      dataPaperformId="mlc28uxr"
      dataPaperformPopup={true}
      requestQuoteText='Get Started'
      heading="Make Us Your Project Partner"
      hasSubHeading={false}
      precedingParagraphs={[
        'Our extensive network of global partners and suppliers enables us to secure the necessary resources and manage all aspects of your shipment, including heavy machinery, oversized cargo, and specialized equipment. We understand the importance of adhering to strict timelines and budgetary constraints, and we work tirelessly to deliver your goods safely and on schedule.',
        'When it comes to complex international project logistics, trust our <a href="/freight-forwarder/" title="Freight Forwarding Australia">Australian freight forwarding</a> services to provide the reliable solutions you need. Contact us today to discuss your project requirements and experience the difference of working with a team that is dedicated to your success.',
      ]}
      imageAlt="Logistics"
      imageSide="left"
      imageSrc="/assets/images/machinery5.jpg"
      theme='light'
    />

    <WhiteWithIcons
      width="w-1/5"
      data={{
        heading: 'Our Scope Of Project Services',
        items: [
          {
            text: 'Photos of goods',
            image: '/assets/images/reasons/camera.svg'
          },
          {
            text: 'Negotiating the best possible rates with all parties',
            image: '/assets/images/reasons/negotiations.svg'
          },
          {
            text: 'Finding the shipping lines best suited to your cargo',
            image: '/assets/images/reasons/search.svg'
          },
          {
            text: 'Booking and securing space on vessels',
            image: '/assets/images/reasons/clip-board-blue.svg'
          },
          {
            text: 'Load restraining under surveyor advice',
            image: '/assets/images/reasons/clip-board2.svg'
          },
          {
            text: 'Local Customs and Quarantine Clearance',
            image: '/assets/images/reasons/clip-board2.svg'
          },
          {
            text: 'Letter of credit and document control',
            image: '/assets/images/reasons/book.svg'
          },
          {
            text: 'Unparalleled customer service',
            image: '/assets/images/reasons/headphones.svg'
          },
        ]
      }}
    >
      <p>Willship offers a comprehensive range of services. We will Inspect the site, measure and configure loads, manage the flow of movements, surveyors, loaders, vessels, transport and documentation.</p>
      <div className="z-10 w-72 pt-12">
        <Button
          buttonText="Get Started"
          linkTo={'paperform'}
          dataPaperformId="mlc28uxr"
          dataPaperformPopup={true}
          theme='redBlue'
        />
      </div>
    </WhiteWithIcons>

    <RecentProjects title="Our Recent Project Shipments" imageRows={recentProjects} hasCaption={true}></RecentProjects>

    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="Why You Should Choose Willship"
      hasSubHeading={true}
      subHeading="Experience, Honesty and Support."
      precedingParagraphs={[
        'We put the needs of the client first and foremost. We value our long term relationships and friendships as we help your business grow.'
      ]}
      imageAlt="Logistics"
      imageSide="right"
      imageSrc="/assets/images/welcome-background-4.jpg"
    />
    <RequestAQuote />
    <CommercialFAQ />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default FreightLogistics;