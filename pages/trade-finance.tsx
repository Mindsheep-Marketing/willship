import Head from "next/head";
import Problems from "../components/commercial/Problems";
import RequestAQuote from "../components/commercial/RequestAQuote";
import WorldWideNetwork from "../components/commercial/WorldWideNetwork";
import Button from "../components/common/Button";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import ImageAndText from "../components/common/ImageAndText";
import Testimonials3 from "../components/common/Testimonials3";
import WhiteWithIcons from "../components/common/WhiteWithIcons";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";
import TextSection from "../components/common/TextSection";

const TradeFinance = () => {
  return (
    <>
      <Head>
        <title>{siteMap.commercial.tradeFinance.title}</title>
        <meta name='description' content={siteMap.commercial.tradeFinance.description} />
      </Head>
      <Hero
        heading='PREMIER ASSET FINANCE in parternship with WILLSHIP INTERNATIONAL'
        subHeading=''
        buttonLink={siteMap.commercial.tradeFinance.financeModal.path}
        bgImage='/assets/images/trade-finance-bg-min.jpg'
        hasButton={true}
        buttonText="Enquire Now"
        hasMouseScroll={false}
        hasMinHeight={true}
      />
      <WhiteWithIcons
        width="w-1/5"
        data={{
          items: [
            {
              image: '/assets/images/premier-asset-finance.png',
              width: '200'
            },
            {
              image: '/assets/images/willship-logo-dark.png',
              width: '200'
            },
          ]
        }}
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={siteMap.commercial.tradeFinance.financeModal.path}
        requestQuoteText='Enquire Now'
        hasSubHeading={false}
        heading="Trade Finance for Your Business Needs"
        precedingParagraphs={[
          'Premier Asset Finance, a leading finance brokerage, collaborates with Willship International to assist our esteemed import clients. Together, we not only support you in settling payments with your suppliers for ordered goods but also ensure that your product moves seamlessly from start to end.',
          'Expanding our horizons, Premier Asset Finance offers comprehensive financial solutions for SMEs, aiming to optimise current offerings or propel new ventures.',
          'Availability of up to A$250,000.00 within 5 working days post application approval.'
        ]}
        imageSide="right"
        imageSrc="/assets/images/finance-figure-min.jpg"
        imageAlt="Customs And Clearance"
        theme='dark'
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={siteMap.commercial.tradeFinance.financeModal.path}
        requestQuoteText='Enquire Now'
        heading="Key Features"
        trailingParagraphs={[
          'Premier Asset Finance can offer a wide range of Finance Products including Asset Finance, Trade & Invoice Finance, Home Lending and both Consumer and Commercial Loans.'
        ]}
        listType="list-disc"
        listItems={[
          '<b>Facilitate Cash</b> Flow through Trade Finance',
          '<b>No Collateral</b> for amounts up to $250,000.00, backed solely by Director\'s guarantee',
          '<b>No Mortgage Necessary</b>',
          '<b>Swift & Simple:</b> One-page application process',
          '<b>Adaptable Terms:</b> Opt between 30, 60, or 90 days from BOL Date',
          '<b>Maintain Your Banking Relations:</b> Our service ensures no disruptions with your existing bank arrangements',
          '<b>Efficient Supplier Payments:</b> Your suppliers are paid timely and as needed',
          '<b>Vast Network of Lenders</b> – Pivotal factor in our ability to negotiate and offer competitive rates',
        ]}
        hasSubHeading={false}
        imageSide="left"
        imageSrc="/assets/images/happy-clients-figure.jpg"
        imageAlt="Customs and Clearance"
        theme='light'
      />
      <TextSection
        heading="For a Holistic Funding & Import Solution, Get in touch now!"
        textColour="red"
        bgColour="blue"
        itemAlign="center"
        buttonText='Enquire Now'
        buttonLink={siteMap.commercial.tradeFinance.financeModal.path}
      />
    </>
  );
};

export default TradeFinance;