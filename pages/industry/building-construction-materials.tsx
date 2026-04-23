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
import HeroMontserrat from "../../components/industry/HeroMontserrat";
import TrackRecordIndustry from "../../components/industry/TrackRecordIndustry";

const BuildingConstructionMaterials = () => {
  // const screenSize = useGetScreenSize();
  // const isSmall = useIsSmall();

  return (
    <>
      <Head>
        <title>{siteMap.vehicle.importCarToNZ.title}</title>
        <meta
          name="description"
          content={siteMap.vehicle.importCarToNZ.description}
        />
      </Head>
      <HeroMontserrat
        heading={<>
      <span className="block text-sm sm:text-base lg:text-xl font-normal tracking-wide">
            CONSTRUCTION & BUILDING LOGISTICS
          </span>
      <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            IMPORT CONSTRUCTION MATERIALS TO AUSTRALIA
          </span>
        </>} subHeading="Willship helps builders, importers, and suppliers across Australia import construction materials and machinery from around the world through fast, compliant, and end-to-end logistics solutions."
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
        heading="Know the Process of Importing Building Materials to Australia"
        paragraphs={[
          "At Willship, we specialize in construction material shipping and logistics services. Whether it is steel, concrete, construction equipment, or other large or heavy cargo, we facilitate reliable, fast, and efficient importation from international markets to Australia.",
          "Our services ensure that you are guided in every step of the process, from initial planning, documentation preparation, customs clearance, to final delivery. Our team is committed to making your import journey smooth, efficient, and hassle-free."
        ]}
        buttonText="Watch Now"
        buttonLink={siteMap.contact.path}
        youtubeId="9WhnWTvcTDk"
        thumbnailSrc="/assets/images/nickproctor.jpg"
        thumbnailAlt="Building Materials import process video"
      /> */}

      <HandleSection
        title="What we Regularly Handle"
        items={[
          {
            image: "/assets/images/industry-pages/common-images/2.png",
            description: "Structural steel, concrete panels, and timber products",
          },
          {
            image: "/assets/images/industry-pages/common-images/1.png",
            description: "Tiles, flooring, fixtures and cabinetry, fittings",
          },
          {
            image: "/assets/images/industry-pages/common-images/3.png",
            description: "Aluminium doors and windows",
          },
          {
            image: "/assets/images/industry-pages/common-images/5.png",
            description: "Excavators, loaders and small plant machinery",
          },
          {
            image: "/assets/images/industry-pages/common-images/4.png",
            description: "Scaffolding, formwork",
          },
          {
            image: "/assets/images/industry-pages/common-images/6.png",
            description: "Modular and pre fab homes",
          },
        ]}
      />

      <BuildingProcess
        childrenMaxWidth="max-w-full"
        textColour="text-darkBlue"
        data={{
          heading: "Our Process - Start to Finish Support",
          subHeading: "There are six key steps in our process to import construction materials efficiently:",
          items: [
            {
              text: "Consultation & Planning",
              subText: "We’ll review your project requirements, identify the most efficient shipping method, and outline costs clearly.",
              image: "/assets/images/industry-pages/process-images/134.png",
              width: "120",
            },
            {
              text: "Collection & Consolidation",
              subText: "We can pick up from multiple suppliers, consolidate your freight, and prepare all export paperwork.",
              image: "/assets/images/industry-pages/process-images/135.png",
              width: "120",
            },
            {
              text: (
                <>
                  Freight
                  <br />
                  & Tracking
                </>
              ),
              subText: "We manage sea or air transport, with live tracking and real-time updates for full visibility.",
              image: "/assets/images/industry-pages/process-images/136.png",
              width: "120",
            },
            {
              text: "Customs & Quarantine",
              subText: "Our in-house experts manage clearance with Australian Border Force and DAFF.",
              image: "/assets/images/industry-pages/process-images/137.png",
              width: "120",
            },
            {
              text: "Delivery & Site Coordination",
              subText: "We’ll deliver to your warehouse, storage facility, or direct to site, on time.",
              image: "/assets/images/industry-pages/process-images/138.png",
              width: "120",
            },
            {
              text: "Ongoing Support",
              subText: "Our team remains available for your next shipment, whether more materials or repeat construction equipment shipping.",
              image: "/assets/images/industry-pages/process-images/139.png",
              width: "120",
            }
          ]
        }}
      >
        <div className="w-full max-w-3xl z-10">
          <p className="text-center font-semibold">
            We also provide tailored project logistics planning for large imports or ongoing supply contracts, ensuring you maintain reliable stock levels and consistent delivery schedules.
          </p>
        </div>
      </BuildingProcess>

      <ImageAndText
        imageSide="right"
        theme="light"
        imageSrc="/assets/images/industry-pages/customs_enhanced.png"
        imageAlt="Construction crane and glass building under development"
        heading="Customs & Quarantine"
        hasSubHeading={false}
        precedingParagraphs={[
          'When you import construction materials, strict biosecurity and compliance rules apply. We ensure all documents and inspections meet Australian regulations.'
        ]}
        secondList={{
          text: 'Our services include:',
          items: [
            'Import declarations and tariff classification',
            'Biosecurity inspections and fumigation coordination',
            'Timber and composite material treatment certificates',
            'Duty, GST, and import tax management',
          ]
        }}
        trailingParagraphs={[
          "If you're planning to import building material, we'll manage every compliance detail before the shipment leaves port. That means no costly delays, no missed paperwork, and no surprises on arrival. Our customs team is well-versed in handling large-scale infrastructure imports and time-sensitive deliveries, working proactively to prevent border delays and streamline clearance."
        ]}
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        requestQuoteWidth="w-72"
        imageHeightClass="min-h-[500px]"
        mobileImageHeightClass="h-72 sm:h-96 md:h-[30rem]"
      />

      <ImageAndText
        imageSide="left"
        theme="dark"
        imageSrc="/assets/images/industry-pages/twopeople.jpg"
        imageAlt="Two people discussing construction import documentation at a desk"
        heading="Costs – What's Included and What's Not"
        hasSubHeading={false}
        precedingParagraphs={[
          "Transparency is key to every shipment we handle. When you work with us to import construction materials, you'll receive a clear, itemised quote outlining what's covered and what might be additional."
        ]}
        secondList={{
          text: 'Included:',
          items: [
            'Export documentation preparation, supplier coordination, and origin customs clearance',
            'International freight and end-to-end logistics management (factory to door)',
            'Australian Customs clearance, biosecurity processing, and final delivery',
          ]
        }}
        listItems={[
          'Government duties, GST, and any import taxes assessed by Customs (we are happy to estimate these for you prior to shipment)',
          'Storage or demurrage charges should cargo release be delayed',
        ]}
        trailingParagraphs={[
          "We'll always explain any potential extras upfront. Our goal is to make your construction equipment shipping as predictable and cost-effective as possible. We believe transparency builds trust, so you'll always know exactly where your shipment is, what it costs, and when it will arrive."
        ]}
        hasRequestQuote={false}
        requestQuoteText=""
        requestQuoteLink={siteMap.contact.path}
        imageHeightClass="min-h-[500px]"
        mobileImageHeightClass="h-72 sm:h-96 md:h-[30rem]"
      />

      <WhiteBGIcons
        data={{
          heading: "Why Choose Willship?",
          items: [
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "We handle the process from start to finish!",
              textWidth: "max-w-[120px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "No Hidden Costs",
              textWidth: "max-w-[120px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "Our team has over 200 combined years of industry experience",
              textWidth: "max-w-[120px]",
            },
            {
              image: "/assets/images/industry-pages/check-icon.png",
              text: "In-house customs brokers",
              textWidth: "max-w-[120px]",
            },
          ]
        }}
        width="w-1/6"
        bgColour="bg-white"
        headingColour="text-darkBlue"
        textColour="text-darkBlue"
        textSize="text-base"
      >
        <ButtonBuilding
          buttonText="Get Started"
          linkTo={'paperform'}
          width="w-72"
          theme="redBlue"
        />
      </WhiteBGIcons>

      <TestimonialIndustry 
        title="Hundreds of Businesses Trust Us to Ship Their Building Materials"
      />
      <ImageGallery
        heading="Construction/Building Materials Picture Gallery"
        headingColour="text-darkBlue"
        bgColour="bg-white"
        columns={3}
        images={[
          { src: "/assets/images/industry-pages/building-gallery/building.jpg", alt: "Construction warehouse forklift 1" }, 
          { src: "/assets/images/industry-pages/building-gallery/2.jpg", alt: "Construction warehouse forklift 2" },
          { src: "/assets/images/industry-pages/building-gallery/3.jpg", alt: "Construction warehouse forklift 3" },
          { src: "/assets/images/industry-pages/building-gallery/4.png", alt: "Construction warehouse forklift 4" },
          { src: "/assets/images/industry-pages/building-gallery/5.png", alt: "Construction warehouse forklift 5" },
          { src: "/assets/images/industry-pages/building-gallery/6.jpg", alt: "Construction warehouse forklift 6" },
        ]}
      />

      <ImageAndText
        imageSide="left"
        theme="dark"
        imageSrc="/assets/images/industry-pages/freight.png"
        imageAlt="Two people discussing construction import documentation at a desk"
        heading="Freight, Without the Headache"
        hasSubHeading={false}
        precedingParagraphs={[
          "We go beyond transport, as we help you solve logistical challenges, minimise downtime, and protect your materials in transit. Our clients rely on us for consistent updates, problem-solving, and proactive communication at every step.",
          "We're not just freight movers; we're logistics strategists who ensure your shipments arrive on time and without issue. From one-off imports to ongoing supply chain support, we'll help you import building material with confidence."
        ]}
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        imageHeightClass="min-h-[650px] lg:h-full" 
        mobileImageHeightClass="h-72 sm:h-96 md:h-[30rem]"
      />

      <ImageAndText
        imageSide="right"
        theme="light"
        imageSrc="/assets/images/industry-pages/get-in-touch.jpg"
        imageAlt="Warehouse worker on forklift among tall storage shelves"
        heading="Get in touch with us at Willship"
        hasSubHeading={false}
        precedingParagraphs={[
          "If you're ready to import construction materials or equipment into Australia, we're here to help. Our team will provide an upfront quote, guide you through every step, and handle all logistics on your behalf.",
          "Call 07 3267 3694, email sales@willship.com.au, or request your quote online today. With Willship, your construction equipment shipping project moves safely, compliantly, and without unnecessary headaches."
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
      <IndustryFAQ />
    </>
  );
};

export default BuildingConstructionMaterials;
