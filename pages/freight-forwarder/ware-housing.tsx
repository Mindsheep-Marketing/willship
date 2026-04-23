import Head from "next/head";
import LogisticSolutions from "../../components/commercial/LogisticSolutions";
import Problems from "../../components/commercial/Problems";
import RequestAQuote from "../../components/commercial/RequestAQuote";
import Button from "../../components/common/Button";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import Testimonials3 from "../../components/common/Testimonials3";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";
import siteMap from "../../siteMap";

const WareHousing = () => {

  return (
    <>
      <Head>
        <title>{siteMap.commercial.wareHousing.title}</title>
        <meta name='description' content={siteMap.commercial.wareHousing.description} />
      </Head>
      <Hero
        heading='BRISBANE WAREHOUSING AND TRANSPORT SERVICES'
        subHeading='Our Brisbane warehousing services include CCTV monitoring, full insurance for cargo, easy access, national carrier networks, swing lift and flatbed trailer full container deliveries, and secured hardstand for unloading and loading containers. Whether you are looking to store or transport goods for your business or a personal automotive, trust our warehousing and transport service to safely handle your cargo.'
        bgImage='/assets/images/bg-warehouse.jpg'
        hasButton={true}
        buttonLink='paperform'
        buttonText='Get Started'
        hasMouseScroll={false}
        hasMinHeight={true}
      />
      <LogisticSolutions />
      {/* <Problems /> */}
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        heading="Willship Will Take Care Of Everything"
        hasSubHeading={false}
        precedingParagraphs={[
          'Willship can arrange a complete warehousing and logistics package tailored to your business. We take care of everything – from the time of ordering right through to delivery, direct to you or to your customer. It’s all part of our commitment to making our services as seamless as possible. This gives you the ultimate peace of mind that you can relax and focus on more important matters, confident that your goods are in safe and reliable hands.'
        ]}
        imageSide="right"
        imageAlt="Warehousing"
        imageSrc="/assets/images/warehouse2.jpg"
        theme='dark'
      />
      <ImageAndText
        hasRequestQuote={true}
        requestQuoteLink={'paperform'}
        dataPaperformId="mlc28uxr"
        dataPaperformPopup={true}
        requestQuoteText='Get Started'
        heading="Brisbane Warehousing Services for Small to Large Businesses"
        hasSubHeading={false}
        precedingParagraphs={[
          'We’re not going to say our movements run smoothly all the time, as we don’t control the carriers or the roads. Through communication we can find warehousing and transport solutions to problems when they arise. We can then implement changes and keep our customers advised. We pride ourselves on being open and transparent with our clients, ensuring you always know the status and location of your cargo.'
        ]}
        imageSide="left"
        imageAlt="Warehousing"
        imageSrc="/assets/images/containers5.jpg"
        theme='light'
      />

      <WhiteWithIcons
        width="w-1/5"
        data={{
          heading: 'Full Distribution and Warehousing Services',
          items: [
            {
              text: 'Full container swing lift transport',
              image: '/assets/images/reasons/truck.svg'
            },
            {
              text: 'Full container flat bed transport',
              image: '/assets/images/reasons/truck2.svg'
            },
            {
              text: 'LCL and air freight deliveries',
              image: '/assets/images/reasons/plane.svg'
            },
            {
              text: 'Container loading and unloading facilities',
              image: '/assets/images/reasons/crane.svg'
            },
            {
              text: 'Secured warehousing',
              image: '/assets/images/reasons/shield.svg'
            },
            {
              text: 'Pick and pack',
              image: '/assets/images/reasons/box.svg'
            },
            {
              text: 'Distribution',
              image: '/assets/images/reasons/box2.svg'
            },
            {
              text: 'National transport network',
              image: '/assets/images/reasons/map.svg'
            },
          ]
        }}
      >
        <div className="z-10 w-72">
          <Button
            buttonText="Get Started"
            linkTo={'paperform'}
            dataPaperformId="mlc28uxr"
            dataPaperformPopup={true}
            theme='redBlue'
          />
        </div>
      </WhiteWithIcons>
      <ImageAndText
        hasRequestQuote={false}
        requestQuoteLink=''
        requestQuoteText=''
        heading="We Offer End to End Brisbane Warehousing Solutions"
        hasSubHeading={true}
        subHeading="Values, honestly and advice."
        precedingParagraphs={[
          'We are a boutique, one-stop, international warehousing and logistics provider that operates in both Australia and throughout the rest of the world. Having worked with over a billion dollars’ worth of cargo each year, and guiding thousands of successful shipments throughout this period, we have established deep relationships with more than 125 trusted worldwide agents. That’s why we are trusted by some of Australia’s biggest and most recognisable brands.',
          'With over 5 decades worth of experience as a leading Australian freight forwarder, we have cultivated a reputation for delivering an excellent and reliable service. We are driven and passionate professionals committed to delivering the best outcomes and service for every client to build long lasting relationships. We understand that everyone has different requirements for their cargo, which is why we tailor all our solutions to your unique needs.',
        ]}
        imageSide="right"
        imageAlt="Brisbane Warehousing"
        imageSrc="/assets/images/welcome-background-4.jpg"
        theme='light'
      />
      <RequestAQuote />
      <CommercialFAQ />
      <Testimonials3 />
      <HaveAnyQuestions />
    </>
  );
};

export default WareHousing;