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

const IndiaToAustralia = () => {

  const imageAlt = "India To Australia Shipping"

  return (
    <>
      <Head>
        <title>{siteMap.indiaToAustralia.title}</title>
        <meta name='description' content={siteMap.indiaToAustralia.description} />
      </Head>
      <Hero
        heading="SHIPPING FROM INDIA TO AUSTRALIA IS EASIER THAN YOU THINK!"
        bgImage="/assets/images/aus-india-bg-min.jpg"
        hasImageOpacity={true}
        hasBlur={false}
        hasButton={false}
        hasMouseScroll={true}
        isFullHeight={true}
        hasMinHeight={false}
        subHeading='We specialise in the India to Australia trade route and can assist with FCL, LCL, Airfreight, Breakbulk and much more, from start to finish.'
      >
        <VietnamHeaderSelector />
      </Hero>

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText="Get Started"
        heading="Importing from India to Australia"
        precedingParagraphs={[
          'India’s economy has grown exponentially over the last few years, so much so that the country is expected to overtake the UK in 2024 to become the world’s 5th largest economy, so finding reliable shipping from India to Australia is essential.',
          'Australia and India have a solid long term trading relationship - more than 30 Billion worth of goods is traded between the countries annually. After years of negotiation, The Australia-India Economic Cooperation and Trade Agreement (ECTA) will come into force on the 29th of December 2022. This mean that 96% of goods imported from India will enjoy a duty-free status, and 85% of exports to India have also had their import tariff’s eliminated to allow Australian manufacturers an easier path to be able to tap into the Indian market. to export from India to Australia is more affordable than ever.',
          'India produces goods across a wide range of industries, the countries primary exports include engineering products (Steel, Iron, Industrial Machinery, Auto components etc), Gems and Jewelry, Petroleum Products, Drugs and Pharmaceuticals, Clothing and Fabrics, Electronic Goods, Rice, and Plastic and Linoleum Goods like soft luggage, packing, and consumer goods.',
        ]}
        hasSubHeading={false}
        imageSide='right'
        imageAlt={imageAlt}
        imageSrc='/assets/images/india-to-australia-trade-min.jpg'
      />
      <ImageAndText
        heading='Great Network, Great Rates'
        hasRequestQuote={true}
        requestQuoteText='Get Started'
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        hasSubHeading={false}
        imageAlt={imageAlt}
        imageSide='left'
        imageSrc="/assets/images/india-to-australia-great-rates-min.jpg"
        precedingParagraphs={[
          'Willship have partnered up with experienced agents in India and we have the ability to handle all shipping from India to Australia affairs from start to finish.'
        ]}
        listItems={[
          'Collection of cargo from your Indian Supplier',
          'All relevant Indiaese export paperwork, customs clearance and formalities',
          'International Air and Sea Freight from India to Australia - all ports in India',
          'Customs Clearance and delivery to anywhere in Australia',
          'Track and Trace for real time cargo location',
          'Warehousing and Distribution',
          'Transit Insurance',
        ]}
        listType='list-disc'
        trailingParagraphs={[
          'At Willship, we look at all options to find you the best possible solution to export from India to Australia. We will educate and guide you through the process from start to finish, and offer up to date advise and recommendations to ensure your cargo is moved in the most cost effective and timely manner. We’re here to support you in running your business.'
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
        heading="What routes are available?"
        hasRequestQuote={true}
        requestQuoteText="Get Started"
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        imageAlt={imageAlt}
        imageSide="left"
        hasSubHeading={false}
        imageSrc='/assets/images/india-to-aus-shipping-containers-min.jpg'
        precedingParagraphs={[
          "We specialise in sea freight from India to Australia and service all of the major ports in India. We can assist with moving goods from your suppliers location anywhere in the country.",
          "The main export ports are Mundra, Mumbai, Kandla, Mangalore, JNPT, Mormugao, and Cochin on the west coast and Chennai, Tuticorin, Visakhapatnam, Paradip, Kolkata, and Ennore on the east coast.",
          "The main arrival ports here in Australia are Brisbane, Sydney, Melbourne, Adelaide and Fremantle.",
          "Our shipping from India to Australia service includes the ability to customs clear and deliver your goods from any of these major ports to anywhere in Australia.",
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

export default IndiaToAustralia;