import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import TrackRecordNZ from "../../components/common/TrackRecordNZ";
import BuildingMaterialsUpdate from "../../components/industry/VideoSection";
import HandleSection from "../../components/industry/HandleSection";
import useIsSmall from "../../utils/hooks/useIsSmall";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import BuildingProcess from "../../components/industry/BuildingProcess";
import Button from "../../components/common/Button";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import ButtonBuilding from "../../components/industry/ButtonBuilding";
import ImageAndText from "../../components/industry/ImageAndText";
import WhiteBGIcons from "../../components/industry/WhiteBGIcons";
import TestimonialIndustry from "../../components/industry/TestimonialIndustry";
import ImageGallery from "../../components/industry/IndustryGallery";
import TextButton from "../../components/industry/TextButton";
import IndustryFAQ from "../../components/industry/IndustryFAQ";
import VideoSection from "../../components/industry/VideoSection";
import IndustryCards from "../../components/industry/IndustryCards";
import HeroMontserrat from "../../components/industry/HeroMontserrat";
import TrackRecordIndustry from "../../components/industry/TrackRecordIndustry";
import IndustryMachineryFAQ from "../../components/industry/IndustryMachineryFAQ";

const MachineryShipping = () => {
  // const screenSize = useGetScreenSize();
  // const isSmall = useIsSmall();

  return (
    <>
      <Head>
        <title>IMPORT HEAVY EQUIPMENT TO AUSTRALIA</title>
        <meta
          name="description"
          content="At Willship International, we are trusted by dealers, hire companies, and project owners across Australia for reliable heavy machinery shipping, as we handle everything from RoRo to containerised and flat-rack transport."
        />
      </Head>
      <HeroMontserrat
        heading={
          <>
            <span className="block text-sm sm:text-base lg:text-xl font-normal tracking-wide">
              IMPORT HEAVY EQUIPMENT TO AUSTRALIA
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              HEAVY MACHINERY SHIPPING LOGISTICS
            </span>
          </>
        }
        subHeading="At Willship International, we are trusted by dealers, hire companies, and project owners across Australia for reliable heavy machinery shipping, as we handle everything from RoRo to containerised and flat-rack transport."
        bgImage="/assets/images/bg-sydney.jpg"
        hasButton={true}
        buttonLink={'paperform'}
        buttonText="Get Started"
        hasMouseScroll={true}
        hasImageOpacity={true}
        isFullHeight={true}
      />

      <TrackRecordIndustry />
      {/* <VideoSection
        heading="It’s Easy to Import Heavy Equipment to Australia"
        paragraphs={[
          "We specialise in shipping heavy machinery overseas, providing seamless handling for everything from large civil equipment to compact plant and attachments. Whether it’s one machine or a full fleet, we deliver end-to-end management, ensuring your shipment arrives safely and ready for work.",
          "With an experienced team and a global agent network, we make heavy machinery shipping straightforward and transparent. You can trust us to move your high-value assets safely and efficiently, will all port, customs, and quarantine procedures managed on your behalf. Watch the full process below:"
        ]}
        buttonText="Watch Now"
        buttonLink={siteMap.contact.path}
        youtubeId="9WhnWTvcTDk"
        thumbnailSrc="/assets/images/nickproctor.jpg"
        thumbnailAlt="Building Materials import process video"
      /> */}

      <HandleSection
        title="What We Regularly Handle"
        items={[
          {
            image: "/assets/images/industry-pages/machinery-handle/1.png",
            description: "Excavators, bulldozers, graders, and loaders",
          },
          {

            image: "/assets/images/industry-pages/machinery-handle/2.png",
            description: "Cranes, rollers, and pavers",
          },
          {
            image: "/assets/images/industry-pages/machinery-handle/3.png",
            description: "Forklifts, telehandlers, and skid steers",
          },
          {
            image: "/assets/images/industry-pages/machinery-handle/4.png",
            description: "Attachments, buckets, and parts shipments",
          },
          {
            image: "/assets/images/industry-pages/machinery-handle/6.png",
            description: "Agricultural, mining, and construction machinery",
          },
          {
            image: "/assets/images/industry-pages/machinery-handle/5.png",
            description: "Manufacturing Equipment: CNC mills, laser cutters, and injection moulding machines",
          },
        ]}
      />
      <IndustryCards
        heading="Shipping Options: RoRo or Containerised"
        subHeading="Every project is different, and the right shipping method depends on the type, size, and configuration of your machinery. Our experts guide you through the best option for your budget, schedule, and safety requirements."
        bgColour="bg-darkBlue"
        headingColour="text-white"
        subHeadingColour="text-white"
        cards={[
          {
            imageSrc: "/assets/images/industry-pages/machinery-shipping/roro.png",
            imageAlt: "Heavy machinery loaded on a RoRo vessel",
            heading: "Roll-on Roll-off (RoRo)",
            text: "Ideal for drivable or towable machinery. RoRo is fast, secure, and cost-effective for vehicles that can move under their own power. It minimises lifting and loading risks while ensuring smooth handling on both departure and arrival ports.",
            buttonText: "Request a Quote",
            buttonLink: 'paperform',
          },
          {
            imageSrc: "/assets/images/industry-pages/machinery-shipping/container.png",
            imageAlt: "Aerial view of a container ship at sea",
            heading: "Container or Flat-Rack Shipping",
            text: "Best suited for machinery that's non-operational or dismantled. Containerised shipping protects valuable components, while flat-racks accommodate oversized or irregular equipment. Our team handles all loading, securing, and documentation, making shipping heavy machinery overseas simple and compliant.",
            buttonText: "Request a Quote",
            buttonLink: 'paperform',
          },
        ]}
      />
      <BuildingProcess
        childrenMaxWidth="max-w-full"
        textColour="text-darkBlue"
        data={{
          heading: "Our Process - Start to Finish Support",
          subHeading: "As one of Australia’s most trusted heavy equipment transport companies, we manage every step of the process for peace of mind.",
          items: [
            {
              text: "Assessment & Quotation",
              subText: "We’ll review your project requirements, identify the most efficient shipping method, and outline costs clearly.",
              image: "/assets/images/industry-pages/process-images/134.png",
              width: "120",
            },
            {
              text: "Preparation & Cleaning",
              subText: "We arrange or advise on thorough wash-downs and biosecurity cleaning to meet Australian and overseas standards.",
              image: "/assets/images/industry-pages/process-images/135.png",
              width: "120",
            },
            {
              text: "Documentation & Permits",
              subText: "We manage sea or air transport, with live tracking and real-time updates for full visibility.",
              image: "/assets/images/industry-pages/process-images/136.png",
              width: "120",
            },
            {
              text: "Port Delivery & Handling",
              subText: "Our in-house experts manage clearance with Australian Border Force and DAFF.",
              image: "/assets/images/industry-pages/process-images/137.png",
              width: "120",
            },
            {
              text: "International Transit",
              subText: "We’ll deliver to your warehouse, storage facility, or direct to site, on time.",
              image: "/assets/images/industry-pages/process-images/138.png",
              width: "120",
            },
            {
              text: "Arrival & Clearance",
              subText: "Our team remains available for your next shipment, whether more materials or repeat construction equipment shipping.",
              image: "/assets/images/industry-pages/process-images/139.png",
              width: "120",
            }
          ]
        }}
      >
        <div className="w-full max-w-6xl z-10">
          <p className="text-center font-semibold">
            From paperwork to pick up, we ensure your heavy machinery shipping runs smoothly every time.
          </p>
        </div>
      </BuildingProcess>
      <ImageAndText
        imageSide="right"
        theme="light"
        imageSrc="/assets/images/industry-pages/custom_machinery.png"
        imageAlt="Two yellow forklifts parked outside a warehouse"
        heading="Compliance & Quarantine Cleaning"
        hasSubHeading={false}
        precedingParagraphs={[
          'Biosecurity is a major focus when shipping heavy machinery overseas. Our specialists ensure your equipment is fully compliant with Australian Border Force and DAFF standards.',
          'All machinery must be completely free of soil, grease, and organic matter. We can coordinate professional wash-downs and provide photo documentation before departure. <strong>We also manage:</strong>'
        ]}
        listItems={[
          'Biosecurity inspections and certifications',
          'Fumigation and treatment if required',
          'Export and import permits',
          'Pre-inspection reports and cleaning records',
        ]}
        trailingParagraphs={[
          'Using experienced forwarders like Willship to import heavy equipment to Australia can help you avoid costly delays and cleaning penalties. Our compliance service gives you confidence that your shipment meets all international entry requirements the first time.'
        ]}
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        requestQuoteWidth="w-72"
      />

      <ImageAndText
        imageSide="left"
        theme="dark"
        imageSrc="/assets/images/industry-pages/twopeople.jpg"
        imageAlt="Willship team member discussing heavy machinery shipping with a client"
        heading="Costs – What's Included and What's Not"
        hasSubHeading={false}
        precedingParagraphs={[
          "We believe in full transparency when quoting heavy machinery shipping. You'll receive a detailed breakdown of what's included, and what's not, before your shipment leaves port."
        ]}
        secondList={{
          text: 'Included:',
          items: [
            'Export documentation preparation, supplier coordination, and origin customs clearance',
            'International freight and end-to-end logistics management (factory to door)',
            'Australian Customs clearance, biosecurity processing, and final delivery',
          ]
        }}
        trailingParagraphs={[
          "Every quote is tailored to your machinery type and route, with no hidden charges. As one of the region's most trusted freight forwarders, we import heavy equipment to Australia by providing flexible solutions to suit one-off shipments or ongoing project logistics."
        ]}
        hasRequestQuote={false}
        requestQuoteText=""
        requestQuoteLink={siteMap.contact.path}
      >
        <div className="flex flex-col gap-4 text-white text-xl text-center leading-relaxed">
          <p className="font-bold">Other Costs That May Apply:</p>
          <ul className="list-disc text-left inline-block pl-6 self-center">
            <li>
              Government duties, GST, and any import taxes assessed by Customs (we are happy to estimate these for you prior to shipment)
            </li>
            <li>
              Storage or demurrage charges should cargo release be delayed
            </li>
            <li>
              Cleaning and Biosecurity fee&apos;s should the machine fail it&apos;s initial biosecurity inspection.
            </li>
          </ul>
        </div>
      </ImageAndText>

      <WhiteBGIcons
        data={{
          heading: "Why Choose Willship?",
          items: [
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "End-to-end service:",
              subText: "Freight, customs, quarantine, and delivery under one roof.",
              textWidth: "max-w-[160px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",

              text: "Global reach",
              subText: "Over 125 international agents ensuring reliable routes and competitive rates.",
              textWidth: "max-w-[160px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",

              text: "Experience you can trust",
              subText: "Proven success in heavy machinery shipping across all major ports.",
              textWidth: "max-w-[160px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "Transparency and support",
              subText: "No hidden costs, just open communication and proactive updates.",
              textWidth: "max-w-[160px]",
            },
          ]
        }}
        width="w-1/4"
        bgColour="bg-white"
        headingColour="text-darkBlue"
        textColour="text-darkBlue"
        textSize="text-base font-bold"
      >
        <ButtonBuilding
          buttonText="Get Started"
          linkTo={'paperform'}
          width="w-72"
          theme="redBlue"
        />
      </WhiteBGIcons>

      <TestimonialIndustry
        title="Hundreds of Businesses Trust Us to Import Heavy Equipment to Australia"
      />      
      <ImageGallery
        heading="Heavy Equipment and Machinery Shipments Picture Gallery"
        headingColour="text-darkBlue"
        bgColour="bg-white"
        columns={3}
        images={[
          { src: "/assets/images/industry-pages/machinery-gallery/1.png", alt: "Construction warehouse forklift 1" },
          { src: "/assets/images/industry-pages/machinery-gallery/2.png", alt: "Construction warehouse forklift 2" },
          { src: "/assets/images/industry-pages/machinery-gallery/3.png", alt: "Construction warehouse forklift 3" },
          { src: "/assets/images/industry-pages/machinery-gallery/4.png", alt: "Construction warehouse forklift 4" },
          { src: "/assets/images/industry-pages/machinery-gallery/5.png", alt: "Construction warehouse forklift 5" },
          { src: "/assets/images/industry-pages/machinery-gallery/6.png", alt: "Construction warehouse forklift 6" },
        ]}
      />

      <ImageAndText
        imageSide="left"
        theme="dark"
        imageSrc="/assets/images/industry-pages/freight.png"
        imageAlt="Warehouse worker on forklift navigating tall storage shelves"
        heading="Freight, Without the Headache."
        hasSubHeading={false}
        precedingParagraphs={[
          "At Willship, we combine decades of logistics expertise with a hands-on approach that delivers measurable results. We've helped hundreds of clients with shipping heavy machinery overseas, supporting industries ranging from mining and civil construction to agriculture and infrastructure.",
          "We're more than freight movers, as we pride ourselves on being logistics strategists. As a leading <a href='/international-shipping' class='underline'>international shipping company</a>, we analyse your supply chain, advise on cost-saving measures, and streamline every shipment to support your business goals."
        ]}
        trailingParagraphs={[]}
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        requestQuoteWidth="w-72"
        imageHeightClass="min-h-[650px] lg:h-full"
        mobileImageHeightClass="h-72 sm:h-96 md:h-[30rem]"
      />

      <ImageAndText
        imageSide="right"
        theme="light"
        imageSrc="/assets/images/industry-pages/get-in-touch.jpg"
        imageAlt="Warehouse worker on forklift among tall storage shelves with CH signage"
        heading="Get Started with One of Australia's Most Trusted Heavy Equipment Shipping Companies"
        hasSubHeading={false}
        precedingParagraphs={[
          "If you're looking for reliable heavy machinery shipping backed by industry expertise, the team here at Willship makes it easy. Our team can coordinate every detail, from compliance and documentation to delivery and final clearance.",
          "Call 07 3267 3694, email sales@willship.com.au, or request your quote online today. Whether you're a dealer, hire company, or contractor, we'll help you with shipping heavy machinery overseas safely, efficiently, and cost-effectively."
        ]}
        trailingParagraphs={[]}
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        requestQuoteWidth="w-72"
      />

      <TextButton
        heading="Have any questions? Drop us a line"
        buttonText="Get Started"
        buttonLink={'paperform'}
        buttonWidth="w-72"
      />
      <IndustryMachineryFAQ />
    </>
  );
};

export default MachineryShipping;
