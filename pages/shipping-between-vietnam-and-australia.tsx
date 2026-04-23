import Head from "next/head";
import VietnamHeaderSelector from "../components/commercial/VietnamHeaderSelector";
import Button from "../components/common/Button";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import ImageAndText from "../components/common/ImageAndText";
import Testimonials3 from "../components/common/Testimonials3";
import WhiteWithIcons from "../components/common/WhiteWithIcons";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import siteMap from "../siteMap";

const VietnamToAustralia = () => {

  const imageAlt = "Vietnam To Australia Shipping"

  return (
    <>
      <Head>
        <title>{siteMap.vietnamToAustralia.title}</title>
        <meta name='description' content={siteMap.vietnamToAustralia.description} />
      </Head>
      <Hero
        heading="SHIPPING FROM VIETNAM TO AUSTRALIA IS EASIER THAN YOU THINK!"
        bgImage="/assets/images/aus-vietnam-bg-min.jpg"
        hasImageOpacity={true}
        hasBlur={false}
        hasButton={false}
        hasMouseScroll={true}
        isFullHeight={true}
        hasMinHeight={false}
        subHeading='We specialise in the ever-growing Vietnam to Australia trade route with our FCL, LCL, Airfreight, Breakbulk, and other services. If you need shipping from Vietnam to Australia we are here to help you from start to finish.'
      >
        <VietnamHeaderSelector />
      </Hero>

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        requestQuoteText="Get Started"
        heading="Importing from Vietnam to Australia"
        precedingParagraphs={[
          'Vietnam is quickly emerging as a major trading partner with Australia. In 2021 the countries recorded a record figure of 12,4 billion USD in trading. This represents an increase of 50% year on year of shipping from Vietnam to Australia and it is still growing.',
          'The ongoing power cuts in China have limited the ability of many suppliers to produce the volumes of goods required by the Australian market. Due to this there has been a significant pivot into the Vietnamese manufacturing market by many Australian business to ensure that demands are met.',
          'Vietnam produces goods across a wide range of industries, making it a great fit for the Australian markets demands. The country’s primary exports include electrical machinery and equipment, computers, plastic and plastic articles, steel and iron, optical, technical, and medical apparatus, mineral fuels, vehicles, fabric, organic chemicals and cotton, tiles, and building products.',
          'If you are looking to optimise the supply chain for your business, you can request a quote for shipping from Vietnam to Australia by clicking the button below.',
        ]}
        hasSubHeading={false}
        imageSide='right'
        imageAlt={imageAlt}
        imageSrc='/assets/images/warehouse-inside-2.jpg'
      />
      <ImageAndText
        heading='Shipping From Vietnam to Australia with Willship International'
        hasRequestQuote={true}
        requestQuoteText='Get Started'
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        hasSubHeading={false}
        imageAlt={imageAlt}
        imageSide='left'
        imageSrc="/assets/images/vietnam-to-australia.jpg"
        precedingParagraphs={[
          'At Willship International we have partnered up with experienced agents in Vietnam to organise the shipping and importing from Vietnam to Australia. With agents in both Australia and Vietnam we can handle everything involved in the logistics and freight forwarding of your goods from start to finish, with a great network and great rates. When you work with Willship International you will have access to the following services:'
        ]}
        listItems={[
          'Collection of cargo from your Vietnamese Supplier',
          'All relevant Vietnamese export paperwork, customs clearance and formalities',
          'International Air and Sea Freight from all ports in Vietnam',
          'Customs Clearance and delivery to anywhere in Australia',
          'Track and Trace for real time cargo location',
          'Warehousing and Distribution',
          'Transit Insurance',
        ]}
        listType='list-disc'
        trailingParagraphs={[
          'The team at Willship International is dedicated to finding you the best possible solution to move your goods and will look at all the options available to us. We are with you every step of the way as we educate and guide you through the entire process. We work with you and offer up to date advice and recommendations to ensure that your cargo is moved in accordance you’re your requirements, budgets, and limitations. This can be finding the most cost-effective route, or getting it landed in Australia in the most time effective manner. Our job is to be here to help support you in running your business smoothly.'
        ]}
      />

<WhiteWithIcons
        width="w-1/5"
        data={{
          heading: 'Leave It All To Willship',
          items: [
            {
              image: '/assets/images/reasons/shield.svg',
              text: 'Assisting with supplier verification'
            },
            {
              image: '/assets/images/reasons/negotiations.svg',
              text: 'Negotiating best possible rates'
            },
            {
              image: '/assets/images/reasons/clip-board-blue.svg',
              text: 'Making all necessary bookings'
            },
            {
              image: '/assets/images/reasons/plane.svg',
              text: 'Organizing International Freight'
            },
            {
              image: '/assets/images/reasons/book.svg',
              text: 'Gathering all documents'
            },
            {
              image: '/assets/images/reasons/clip-board2.svg',
              text: 'Local Customs and Quarantine Clearance'
            },
            {
              image: '/assets/images/reasons/headphones.svg',
              text: 'Advising of any issues or delays'
            },
            {
              image: '/assets/images/reasons/box.svg',
              text: 'Final Delivery'
            },
          ]
        }}
      >
        <div className="w-full max-w-sm z-10">
          <Button
            buttonText="Get Started"
            linkTo={'paperform'}
            dataPaperformId={'mlc28uxr'}
            dataPaperformPopup={true}
            theme='redBlue'
          />
        </div>
      </WhiteWithIcons>

      <ImageAndText
        heading="Available Routes for Shipping From Vietnam to Australia"
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        imageAlt={imageAlt}
        imageSide="left"
        hasSubHeading={false}
        imageSrc='/assets/images/ship-cranes3.png'
        precedingParagraphs={[
          "With our extensive network of partners and agents based in Vietnam we service all of the major ports there and can assist in goods from your suppliers location anywhere in the country.",
          "When importing from Vietnam to Australia the main export ports that we use in Vietnam are Hai Phang, Da Nang, Ho Chi Minh, and Vung Tao. When your goods land in Australia we have them arrive near the major cities at the ports in Brisbane, Sydney, Melbourne, Adelaide, and Fremantle.",
          "Our service extends beyond landing your goods onshore in Australia and once we have cleared customs we can deliver the goods to you. This delivery service is not limited, and we can deliver your goods from any of these major ports to anywhere in Australia. ",
        ]}
      />
      <CommercialFAQ />
      <Testimonials3 />
      <HaveAnyQuestions 
        quoteLink={siteMap.commercial.commercialFreightQuote.path}
      />
    </>
  );
};

export default VietnamToAustralia;