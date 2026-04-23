import Head from "next/head";
import { useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import ModalContext from "../context/ModalContext";
import ChinaHeaderSelector from "../components/commercial/ChinaHeaderSelector";
import ChinaVideoSection from "../components/commercial/ChinaVideoSection";
import Button from "../components/common/Button";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import ShowBlogs from "../components/commercial/ShowBlogs";
import ImageAndText from "../components/common/ImageAndText";
import WhiteWithIcons from "../components/common/WhiteWithIcons";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";
import VideoAndText from "../components/common/VideoAndText";
// import SlickSlider from "../components/SlickSlider";
import Testimonials from "../components/common/Testimonials";
import SuccessStories from "./freight-forwarder/success-stories";

const ChinaToAustralia = () => {
  const imageAlt = "China To Australia Shipping";
  const router = useRouter();
  const { showPopupJourneyFreights, showCustomsClearanceForm } = useContext(ModalContext);
  const hasModalBeenShown = useRef(false);   // Check for query parameters when component mounts, but only once

  useEffect(() => {
    const { query } = router;
    
    if (!hasModalBeenShown.current && router.isReady) {
      if (query.modal === 'freight') {
        showPopupJourneyFreights(true);
        hasModalBeenShown.current = true;
      }
    }
  }, [router.isReady, router.query, showPopupJourneyFreights, showCustomsClearanceForm]);

  return (
    <>
      <Head>
        <title>{siteMap.chinaToAustralia.title}</title>
        <meta
          name="description"
          content={siteMap.chinaToAustralia.description}
        />
      </Head>
      <Hero
        heading="IMPORT SHIPPING FROM CHINA TO AUSTRALIA IS EASIER THAN YOU THINK!"
        bgImage="/assets/images/blog/23714-1-min.jpg"
        hasImageOpacity={true}
        hasBlur={false}
        hasButton={false}
        hasMouseScroll={false}
        isFullHeight={false}
        hasMinHeight={false}
        paddingTop="pt-20"
        paddingBottom="pb-40"
        subHeading="Access Instant China to Australia Shipping Quotes for our 20 ft / 40 ft FCL and LCL Services! We also offer Air Freight, RoRo, Breakbulk, and Customs Clearance services from start to finish."
      ></Hero>

      <ChinaHeaderSelector />

      <VideoAndText
        theme="dark"
        heading="First time shipping from China to Australia?"
        precedingParagraphs={[
          "Save time and skip the extensive research with our game-changing 15-minute video explaining how the importing process works for China to Australia shipping. This ultimate cheat sheet simplifies the process of product shipping from China to Australia, and covering essential insights such as:",
        ]}
        listItems={[
          "The 9-step import process from your supplier to your warehouse",
          "Why FOB and EXW stand out as the optimal incoterms for imports",
          "Comprehensive understanding of costs, encompassing import taxes, duties, import GST, and beyond",
        ]}
        listType="list-disc"
        videoId="IyccOKS5i30"
        videoSide="right"
        bgImage="/assets/images/first-time-importing-bg.jpeg"
        imageAlt="asdf"
        hasRequestQuote={false}
        requestQuoteLink="asdf"
        requestQuoteText="asdf"
        videoButton={true}
      ></VideoAndText>

      <WhiteWithIcons
        width="w-1/5"
        data={{
          heading: "Why Choose Willship?",
          items: [
            {
              image: "/assets/images/OurServices-Tick.svg",
              text: "We handle the process from start to finish!",
            },
            {
              image: "/assets/images/OurServices-Tick.svg",
              text: "No Hidden Costs",
            },
            {
              image: "/assets/images/OurServices-Tick.svg",
              text: "Our team has over 200 combined years of industry experience",
            },
            {
              image: "/assets/images/OurServices-Tick.svg",
              text: "In-house customs brokers",
            },
          ],
        }}
      />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText="Get Started"
        theme="light"
        hasSubHeading={false}
        hideGetStartedButton={true}
        imageAlt={imageAlt}
        imageSide="right"
        imageSrc="/assets/images/handshake-outside-2.jpg"
        heading="Import Goods by Shipping from China to Australia"
        precedingParagraphs={[
          "As our largest trading partner, Australia imports more than USD 70 Billion in cargo from China annually and this figure is growing year on year. Willship have specialised in China to Australia shipping trade route for more than 30 years, we have an established network of trusted partners in China and we can help with all elements of the logistics and customs clearance process.",
          "As a leading China shipping agent, we've helped first time importers grow into long term successful large-scale businesses. Our customer base ranges from one-off importers, to large volume commercial customers importing hundreds of containers per year. So whatever your requirements are, we can help.",
        ]}
      />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText="Get Started"
        heading="Our Experts Handle Everything from Start To Finish"
        hasSubHeading={false}
        listType="list-disc"
        listItems={[
          "Collection of cargo from your Chinese supplier",
          "International Sea Freight from China to Australia via all ports in China",
          "Customs Clearance and Delivery to anywhere in Australia",
          "Track and Trace for real time cargo location",
          "Warehousing and Distribution",
          "Transit Insurance",
        ]}
        trailingParagraphs={[
          'At Willship, we look at all options to find you the best possible solution to move your goods. We will guide you through the process from start to finish, and offer up to date advice and recommendations to ensure the cargo is moved in the most effective and timely manner. We like to think of ourselves as logistics strategists first and foremost, <a href="/freight-forwarder/" title="Freight Forwarding Australia">freight forwarders</a> second. We\'re here to support you in running your business, choose Willship as your China shipping agent.',
        ]}
        imageAlt={imageAlt}
        imageSide="left"
        // imageSrc="/assets/images/ship2.webp"
        imageSrc="/assets/images/documents.png"
        theme="dark"
        hideGetStartedButton={true}

      />

      <WhiteWithIcons
        width="w-1/5"
        data={{
          heading: "Leave It All To Willship",
          items: [
            {
              image: "/assets/images/reasons/shield.svg",
              text: "Assisting with supplier verification",
            },
            {
              image: "/assets/images/reasons/negotiations.svg",
              text: "Negotiating best possible rates",
            },
            {
              image: "/assets/images/reasons/clip-board-blue.svg",
              text: "Making all necessary bookings",
            },
            {
              image: "/assets/images/reasons/plane.svg",
              text: "Organizing International Freight",
            },
            {
              image: "/assets/images/reasons/book.svg",
              text: "Gathering all documents",
            },
            {
              image: "/assets/images/reasons/clip-board2.svg",
              text: "Local Customs and Quarantine Clearance",
            },
            {
              image: "/assets/images/reasons/headphones.svg",
              text: "Advising of any issues or delays",
            },
            {
              image: "/assets/images/reasons/box.svg",
              text: "Final Delivery",
            },
          ],
        }}
      >
        <div className="w-full max-w-sm z-10">
          <Button
                linkTo={'paperform'}
                buttonText="Get Started"
                theme="redBlue"
                dataPaperformId="mlc28uxr"
                dataPaperformPopup={true}
              />
        </div>
      </WhiteWithIcons>

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        requestQuoteText="Get Started"
        hideGetStartedButton={true}
        heading="What Routes Are Available?"
        hasSubHeading={false}
        precedingParagraphs={[
          "Sea freight from China to Australia is our specialty – We service all the major Chinese ports including Shanghai, Ningbo, Xiamen, Qingdao, Tianjin, Dalian, Fuzhou, Shenzhen, Guangzhou, Foshan, Wenzhou, and many more.",
          "The main arrival ports here in Australia are Brisbane, Sydney, Melbourne, Adelaide and Fremantle.",
          "We also have the ability to deliver your goods from any of these major ports to anywhere in Australia.",
        ]}
        imageAlt={imageAlt}
        imageSide="left"
        imageSrc="/assets/images/china-to-australia.jpg"
        theme="dark"
      />
      
      <Testimonials 
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText="Get Started"
        title={'Client Testimonials'}
        slides={{
          slideOne: {
            heading: "A Game-Changer for my China to Australia orders",
            paragraph:
              "Can't thank the team at Willship International enough, they are a changer for my China to Australia orders and take such great care My delivery end to end was perfect and every single member of the team was so lovely to deal with, super helpful and incredibly attentive. They feel like an extension of our team!",
            name: "Nancy MacDonald",
          },
          slideTwo: {
            heading: "Had the best experience!",
            paragraph: "Had the best experience with Willship. We purchased something from China for the first time and really didn't have much idea of how shipping/how the port worked, etc. They kept me updated along the entire process & really made it all quite smeamless. Highly recommend! Special thanks to Julia as well. She is a true professional.",
            name: "Chantelle Cargill",
          },
          slideThree: {
            heading: "Highly Recommended!",
            paragraph: "Julia and the Willship team have made shipping containers from China hassle-free for us. We're delighted with their efficient and professional service. Highly recommended!",
            name: "Zibi Faizi",
          },
        }}
      />
      
      <ShowBlogs
        title="Success Stories"
        directory="success-stories"
        bg="bg-gray-100"
      />
      
      <ShowBlogs
        title="Helpful Tips When Importing to China"
        directory="china-australia"
        bg="bg-white"
      />
      
      <CommercialFAQ />
      
      <HaveAnyQuestions
        quoteLink={siteMap.contact.path}
        quoteText="Contact Us"
        title="Ready to step up your game in importing from China?"
      />
    </>
  );
};

export default ChinaToAustralia;
