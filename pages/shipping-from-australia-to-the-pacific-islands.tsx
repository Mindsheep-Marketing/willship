import Head from "next/head";
import ChinaHeaderSelector from "../components/commercial/ChinaHeaderSelector";
import ChinaVideoSection from "../components/commercial/ChinaVideoSection";
import CountryGrid from "../components/CountryFlags";
import Button from "../components/common/Button";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import ImageAndText from "../components/common/ImageAndText";
import WhiteWithIcons from "../components/common/WhiteWithIcons";
import CommercialFAQ from "../components/FAQs/CommercialFAQ";
import Testimonials10 from "../components/common/Testimonials10";
import siteMap from "../siteMap";

const PacificIslands = () => {

  const imageAlt = "Pacific Islands"

  return (
    <>
        <Head>
        <title>{siteMap.pacificIslands.title}</title>
        <meta name='description' content={siteMap.pacificIslands.description} />
      </Head>
      <Hero
        heading="SHIPPING FROM AUSTRALIA TO THE PACIFIC ISLANDS"
        bgImage="/assets/images/pacific-islands-bg.jpg"
        hasImageOpacity={true}
        hasBlur={false}
        hasButton={false}
        hasMouseScroll={true}
        isFullHeight={true}
        hasMinHeight={false}
        subHeading='We specialise in cargo movements to the Solomon Islands, Tonga, Samoa, New Caledonia, Fiji, Kiribati, Nauru and Vanuatu'
      >
                      <Button
                buttonText='Get Started'
                linkTo={'paperform'}
                dataPaperformId={'mlc28uxr'}
                dataPaperformPopup={true}
                theme='redBlue'
                width="w-44"
              />
               <CountryGrid countryCodes={['nc', 'nz', 'pf', 'to', 'ws', 'as', 'fj', 'ki', 'nr', 'vu', 'pg', 'sb']} />
      </Hero>

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        theme="light"
        hasSubHeading={false}
        imageAlt={imageAlt}
        imageSide="right"
        imageSrc="/assets/images/pacific-islands-sending-cargo.jpg"
        heading='Sending Cargo from Australia to the Pacific Islands'
        precedingParagraphs={['Willship International offers a range of services to the Pacific Islands']}
        listType='list-disc'
        listItems={[
          'Air Freight',
          'Sea Freight',
          'Project Cargo',
          'Procurement',
          'Warehousing',
          'Transport',
        ]}
        trailingParagraphs={[
          'We work with a diverse range of clients and we can help with ongoing complex commercial shipments as well as one off small shipments for people just wanting to send some items back to their family.'
        ]}
      />

<ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        theme="dark"
        hasSubHeading={false}
        imageAlt={imageAlt}
        imageSide="left"
        imageSrc="/assets/images/pacific-islands-covered.jpg"
        heading="We've got you covered"
        precedingParagraphs={['Willship have partnered up with experienced agents across the Pacific Islands and we have the ability to handle everything from start to finish.']}
        listType='list-disc'
        listItems={[
          'Collection of cargo here in Australia',
          'All relevant export paperwork, customs clearance and formalities',
          'International Air and Sea Freight from all ports in Australia',
          'Customs Clearance and delivery to any of the Pacific Islands if required',
          'Track and Trace for real time cargo location',
          'Warehousing and Distribution',
          'Transit Insurance',
        ]}
        trailingParagraphs={[
          'At Willship, we look at all options to find you the best possible solution to move your goods.',
          'We will educate and guide you through the process from start to finish, and offer up to date advise and recommendations to ensure your cargo is moved in the most cost effective and timely manner.'
        ]}
      />

      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        heading="What Routes Are Available?"
        hasSubHeading={false}
        precedingParagraphs={[
          'We service all of the major ports in Australia and can assist:'
        ]}
        listType='list-disc'
        listItems={[
          'New Caledonia',
          'New Zealand',
          'Tahiti',
          'Tonga',
          'Western Samoa',
          'American Samoa',
          'Fiji',
          'Kiribati',
          'Nauru',
          'Vanuatu',
          'Papua New Guinea',
          'Solomon Island'
        ]}
        imageAlt={imageAlt}
        imageSide='right'
        imageSrc="/assets/images/pacific-islands-shipping-routes.jpg"
        theme="light"
      />
            <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId={'mlc28uxr'}
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        heading="Procurement Services"
        hasSubHeading={false}
        precedingParagraphs={[
          'Willship has the ability to procure goods from Australian business\'s on your behalf.',
          'We can organize the purchase, consolidation, storage and shipping of anything that you wish to buy.',
          'Some of the items we regularly assist our clients with are:'
        ]}
        listType='list-disc'
        listItems={[
          'Machinery and Equipment',
          'IT equipment',
          'Furniture',
          'Pet Food',
          'Building Materials',
          'And much more!'
        ]}
        trailingParagraphs={[
          'If you’d like us to help with a purchase on your behalf, please get In touch and we\'ll discuss the process.'
        ]}
        imageAlt={imageAlt}
        imageSide='left'
        imageSrc="/assets/images/pacific-islands-procurement.jpg"
        theme="dark"
      />
      <Testimonials10></Testimonials10>
      <HaveAnyQuestions 
        quoteLink={siteMap.commercial.commercialFreightQuote.path}
      />
    </>
  );
};

export default PacificIslands;