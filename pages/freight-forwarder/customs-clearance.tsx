import Head from "next/head";
import Button from "../../components/common/Button";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import BackgroundImage from "../../components/common/BackgroundImage";
import TrackRecord2 from "../../components/common/TrackRecord2";
import ServicesCustomsClearance from "../../components/commercial/ServicesCustomsClearance";
import ProcessCustomsClearance from "../../components/commercial/ProcessCustomsClearance";
import ImageAndText from "../../components/common/ImageAndText";
import ImageAndChecklist from "../../components/common/ImageAndChecklist";
import ImageWithArrowGraphic from "../../components/common/ImageWithArrowGraphic";
import Testimonials from "../../components/common/Testimonials";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import CustomsClearanceFAQ from "../../components/FAQs/CustomsClearanceFAQ";
import YouTubeGrid from "../../components/commercial/EducationHubVideos";
import ShowBlogs from "../../components/commercial/ShowBlogs";
import siteMap from "../../siteMap";
import useIsSmall from "../../utils/hooks/useIsSmall";
import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ModalContext from "../../context/ModalContext";

const CustomsClearance = () => {

  const isSmall = useIsSmall();
  const router = useRouter();
  const { showPopupJourneyCustomClearance } = useContext(ModalContext);
  const hasModalBeenShown = useRef(false);   // Check for query parameters when component mounts, but only once

  useEffect(() => {
    const { query } = router;
    
    if (!hasModalBeenShown.current && router.isReady) {
      if (query.modal === 'customsClearance') {
        showPopupJourneyCustomClearance(true);
        hasModalBeenShown.current = true;
      }
    }
  }, [router.isReady, router.query, showPopupJourneyCustomClearance]);

  return (
    <>
      <Head>
        <title>{siteMap.commercial.customsClearance.title}</title>
        <meta name="description" content={siteMap.commercial.customsClearance.description} />
      </Head>

      <section 
        className="w-full relative flex items-center justify-center py-10"
        style={{minHeight: `calc(100vh - ${isSmall ? "112px" : "198px"})`}}
      >
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo="image"
          src="/assets/images/customs-clearance/banner-image.jpg"
          hasOpacity={true}
          opacityColour="bg-darkBlue/80"
        />
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12 px-4 text-white text-center">
          <span className="font-medium lg:text-2xl">
            IMPORTING INTO AUSTRALIA? YOU&apos;LL NEED A CUSTOMS BROKER
          </span>
          <h1 className="font-sackHeavy text-3xl lg:text-6xl leading-none">
            YOUR TRUSTED AUSTRALIAN CUSTOMS BROKERS
          </h1>
          <h2 className="font-medium text-base lg:text-xl">
            Having Specialised in Import Customs Clearance for Over 30 Years, Let Our Customs Brokers Guide You Through the Process.
          </h2>
          <div className="w-80">
            <Button
              buttonText="Request A Quote"
              linkTo={siteMap.chinaToAustralia.customsClearanceForm.journey.path}
              // linkTo={siteMap.chinaToAustralia.customsClearanceForm.path}
              theme="redBlue"
            />
          </div>
        </div>
      </section>

      <TrackRecord2 />

      <ImageAndChecklist
        heading="Customs Clearance Made Easy"
        imageSrc="/assets/images/customs-clearance/penlope-and-rhyss.png"
        requestQuoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        requestQuoteText="Request A Quote"
        requestQuoteWidth="w-full lg:w-80"
        precedingParagraphs={[
          "Expert customs clearance is just a click away with Willship. Our experienced and highly rated brokers have helped thousands of Australian and international clients simplify their import journey. A trusted customs clearance agent from our team will make sure your goods clear customs and quarantine fast so you can focus on what matters most."
        ]}
        listItems={[
          "Get a quick & competitive customs quote - you won't be kept waiting",
          "Stress-Free Process: Simply provide your documents - our team will handle the rest for a seamless customs clearance process",
          "Brisbane-based brokers, Australia-wide service - our in-house team handles customs clearance at all major ports: Brisbane, Sydney, Melbourne, Perth, Adelaide, and beyond"
        ]}
      />

      <ImageWithArrowGraphic
        heading="Importing can be complex"
        subHeading="(but we're here to make it easy)"
        imageSrc="/assets/images/customs-clearance/bg-importing-can-be-complex.jpg"
        requestQuoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        requestQuoteText="Request A Quote"
        requestQuoteWidth="w-80"
        paragraphs={[
          "Is import customs clearance causing you headaches? It’s easy to get stuck dealing with taxes, permits, and changing regulations yourself. You run the risk of underpaying/overpaying your duties or filing missing and incorrect documentation! Australia has strict border regulations that can get you (the importer) fined even for the smallest error on the paperwork. Your goods may also get detained or worse, re-exported. We don’t want that to happen – that’s where our customs brokers come in.",
          "Our brokers handle all the necessary paperwork and ensure your freight shipping is compliant with import conditions so it can clear quickly and efficiently. Whether it’s a personal shipment, a small business order, a 20ft or 40ft container, or large equipment or machinery arriving via RoRo or Breakbulk. Big or small, we handle it all!"
        ]}
      />

      <WhiteWithIcons
        width="w-1/5"
        bgColour="bg-nearlyWhite"
        childrenMaxWidth="max-w-8xl"
        textColour="text-red"
        textSize="text-base lg:text-xl"
        data={{
          heading: "Hiring a Customs Broker is an Advantage",
          items: [
            {
              text: "Eliminate stress, Have peace of mind",
              textWidth: "lg:w-40",
              image: "/assets/images/customs-clearance/icon-peace-orange.svg",
              width: "80"
            },
            {
              text: "Prevent cargo detentions and delays",
              textWidth: "lg:w-44",
              image: "/assets/images/customs-clearance/icon-exclamation-orange.svg",
              width: "80"
            },
            {
              text: "Avoid unexpected costs and penalties",
              textWidth: "lg:w-48",
              image: "/assets/images/customs-clearance/icon-cost-orange.svg",
              width: "80"
            },
            {
              text: "Save time and focus on what matters",
              textWidth: "lg:w-40",
              image: "/assets/images/customs-clearance/icon-save-time-orange.svg",
              width: "80"
            }
          ]
        }}
      >
        <div className="flex flex-col font-bold items-center text-darkBlue text-center text-base md:text-xl gap-4">
          <p>Our agents have successfully cleared over 100,000 shipments to date (and counting). Safe to say, your cargo is in capable hands.</p>
          <p>Get in touch with a customs clearance agent by clicking the button below.</p>
          <div className="w-72 pt-3">
            <Button
              buttonText="Request A Quote"
              linkTo={siteMap.chinaToAustralia.customsClearanceForm.path}
              theme="redBlue"
            />
          </div>
        </div>
      </WhiteWithIcons>

      <ServicesCustomsClearance
        data={[
          {
            title: "Air Freight Clearance",
            text: "Got an air freight shipment coming soon? Request a quote now so we can quickly organise all your customs clearance needs before your shipment arrives.",
            image: "/assets/images/customs-clearance/air-freight-clearance.jpg",
          },
          {
            title: "Sea Freight Clearance",
            text: "Importing goods via sea freight? Don’t let customs clearance slow you down! Let Willship clear your goods in Full Container Load (FCL) and Less Than Container Load (LCL) shipments.",
            image: "/assets/images/customs-clearance/sea-freight-clearance.jpg",
          },
          {
            title: "Consultancy & Advisory",
            text: "Whether it’s tariff, duties, or import tax advice, our customs broker team gives you a full breakdown of your import charges so you can make informed decisions about bringing your items into Australia.",
            image: "/assets/images/customs-clearance/consultancy-and-advisory.jpg",
          },
          {
            title: "Specialised Equipment Clearance + Delivery",
            text: "Importing specialised equipment or heavy machinery? Offload the heavy burden to Willship – we understand the unique needs of these imports and offer personalised customs clearance services for your high-value cargo.",
            image: "/assets/images/customs-clearance/specialised-equipment-clearance-and-delivery.jpg",
          }
        ]}
      />

      <ProcessCustomsClearance
        childrenMaxWidth="max-w-8xl"
        textColour="text-darkBlue"
        data={{
          heading: "How It Works",
          subHeading: "Our easy 4 step customs clearance process",
          items: [
            {
              text: "Submit Documentation",
              subText: "We need to know the goods your importing. Submit the paperwork involved like invoice, bill of lading, packing declaration, and more",
              image: "/assets/images/customs-clearance/icon-notes-circle-blue.svg",
              width: "100",
            },
            {
              text: "Expert Review",
              subText:  "After submitting your paperwork, our customs broker will have a fast yet efficient assessment of the import taxes involved like duties and tariffs",
              image: "/assets/images/customs-clearance/icon-zoom-circle-blue.svg",
              width: "100",
            },
            {
              text: "Pay Import Costs & Charges",
              subText: "Our expert brokers will provide a clear breakdown of all expected import fees before your shipment arrives",
              image: "/assets/images/customs-clearance/icon-pay-circle-blue.svg",
              width: "100",
            },
            {
              text: "Cargo Cleared",
              subText: "Almost there! Your cargo is cleared from customs (and quarantine if needed) and we work with you to deliver your goods to the final destination!",
              image: "/assets/images/customs-clearance/icon-cargo-cleared-circle-blue.svg",
              width: "100",
            }
          ]
        }}
      >
      </ProcessCustomsClearance>

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        requestQuoteText="Request A Quote"
        hasSubHeading={false}
        heading="How Our Customs Brokers Can Help"
        precedingParagraphs={[
          "Our brokers have 30 years of experience under their belt, providing expert imports customs clearance services across industries such as hospitality, automotive, building and construction, fashion and retail, furniture, health and wellness, and even heavy equipment, and machinery. We cover everything such as:"
        ]}
        listType="list-disc"
        listItems={[
          "Air Freight, Sea Freight & Quarantine Customs Clearanc",
          "Compliance",
          "Import Costs Calculation",
          "Documentation Gathering",
          "Consultancy and Advisory",
          "Taxes, Duties, and Tariffs advice",
          "Import & Export Declarations",
          "Up-to-date info on Biosecurity & Quarantine regulations",
          "Detailed HS Codes Review",
          "Final Delivery Solutions"
        ]}
        imageSide="right"
        imageSrc="/assets/images/customs2.jpg"
        imageAlt="Customs And Clearance"
        theme="dark"
      />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        requestQuoteText="Request A Quote"
        heading="Why Choose Willship"
        precedingParagraphs={[
          "As a leading Australian freight forwarder, our licensed custom brokers and agents are committed to providing reliable, honest, and top-quality services to ensure your shipments clear customs quickly and efficiently."
        ]}
        iconList={{
          textColour: "text-darkBlue",
          items: [
            {
              text: "A dedicated point of contact keeping you informed throughout the entire process",
              image: "/assets/images/customs-clearance/icon-support-blue.svg",
            },
            {
              text: "Licensed customs brokers under the Australian Border Force with CPD certification",
              image: "/assets/images/customs-clearance/icon-licensed-broker-blue.svg",
            },
            {
              text: "Biosecurity accreditation to assist with quarantine clearance",
              image: "/assets/images/customs-clearance/icon-biosecurity-blue.svg",
            },
            {
              text: "Everything is done in-house at our Brisbane headquarters - no outsourcing or third parties",
              image: "/assets/images/customs-clearance/icon-map-blue.svg",
            },
          ]
        }}
        trailingParagraphs={[
          "Don't let importing complexities hold you back – partner with Willship today for a seamless international shipping experience."
        ]}
        hasSubHeading={false}
        textAlign="text-center"
        imageSide="left"
        imageSrc="/assets/images/customs-clearance/bg-rhyss-customs-clearance.jpg"
        imageAlt="Customs and Clearance"
        theme="light"
      />

      <Testimonials 
        hasRequestQuote={true}
        requestQuoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        requestQuoteText="Request a Quote"
        title={"Trusted by 1000+ Australian Businesses"} 
        subHeading="(and counting!)"
        slides={{
          slideOne: {
            heading: "Seamless Work to Clear Our Drill Rig",
            paragraph:
              "I can not thank Nick and his team enough for the seamless work carried out to clear and organise our drill rig to be shipped from China. One of the most efficient experiences business wise I have ever had with importing goods.",
            name: "Andrew Bruce",
            iconBgColour: "#b2f8ff",
            iconTextColour: "text-nearlyBlack",
          },
          slideTwo: {
            heading: "This is the first place I will be calling for any future shipments",
            paragraph: "It was my first time importing a container from China and the team at Willship International made it all so easy. They explained everything is easy to understand terms and went above and beyond to help make it as smooth as possible. I highly recommend this business. This is the first place I will be calling for any future shipments.",
            name: "Bryan Leeson",
            iconBgColour: "#1f99b0",
            iconTextColour: "text-white",
          },
          slideThree: {
            heading: "The day it was released from customs they got it delivered to me",
            paragraph: "I was extremely impressed how fast and efficiently they took over the job. Basically the very next day they had things organised and soon after got me booked onto a vessel for less than of the amount the overseas agents were trying to charge me... in the end they got me onto an express shipment and had everything organised so that it was cleared straight away when it arrived.",
            name: "Thomas Pfeffer",
            iconBgColour: "#0ba47b",
            iconTextColour: "text-white",
          },
        }}
      />

      <YouTubeGrid
        title="Videos To Help You Learn The Process"
        padding="pt-16 pb-0 px-4"
        data={[
          { 
            title: "Why You Shouldn't Let Your Supplier Organise Your Shipping", 
            link: "https://www.youtube.com/watch?v=JsLYHE69zj4"
          },
          { 
            title: "Importing Goods to Australia? Why You Need a Freight Forwarder",
            link: "https://www.youtube.com/watch?v=ttUmvYyfveE"
          },
          { 
            title: "How does customs clearance work?", 
            link: "https://www.youtube.com/watch?v=-c1pIlt72-w"
          },
        ]}
      />

      <ShowBlogs
        title="Helpful Tips for Customs Clearance"
        directory="customs-clearance"
        bg="bg-white"
      />

      <CustomsClearanceFAQ />

      <HaveAnyQuestions 
        quoteLink={siteMap.chinaToAustralia.customsClearanceForm.path}
        title={"Fast and easy customs clearance is just a click away.\nGet started today"}
      />
    </>
  );
};

export default CustomsClearance;