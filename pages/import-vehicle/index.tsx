import Head from "next/head";
import { useEffect, useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Concerns from "../../components/Automotive/Concerns";
import LeaveItToUs from "../../components/Automotive/LeaveItToUs";
import WhatWeCanShip from "../../components/Automotive/WhatCanWeShip";
import BackgroundImage from "../../components/common/BackgroundImage";
import Button from "../../components/common/Button";
import Flags from "../../components/common/Flags";
import ImageAndText from "../../components/common/ImageAndText";
import MouseScroll from "../../components/common/MouseScroll";
import Testimonials10 from "../../components/common/Testimonials10";
import VideoAndText from "../../components/common/VideoAndText";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import useIsSmall from "../../utils/hooks/useIsSmall";

const ImportVehicle = () => {

  const screenSize = useGetScreenSize();
  const isSmall = useIsSmall();
  const router = useRouter();
  const { showVehicleQuote } = useContext(ModalContext);
  const hasModalBeenShown = useRef(false);

  useEffect(() => {
    const { query } = router;
    
    if (!hasModalBeenShown.current && router.isReady) {
      if (query.modal === 'automotives') {
        showVehicleQuote(true);
        hasModalBeenShown.current = true;
      }
    }
  }, [router.query, router.isReady, showVehicleQuote]);

  return (
    <>
      <Head>
        <title>{siteMap.vehicle.title}</title>
        <meta name='description' content={siteMap.vehicle.description} />
      </Head>

      <section 
        className={`w-full relative flex items-center justify-center py-20 object-cover`} 
        style={{minHeight: `calc(100vh - ${isSmall ? '112px' : '198px'})`}}
      >
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo={screenSize === 'xs' ? 'image' : 'video'}
          src={screenSize === 'xs' ? '/assets/images/bg-vehicle-small.jpg' : "https://www.youtube.com/embed/zL0i26aN6Ms?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=zL0i26aN6Ms"}
          hasOpacity={true}
          opacityColour='bg-darkBlue/80'
        />
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-12 items-center justify-center px-4 lg:p-0 text-white text-center">
          <h1 className="font-sackHeavy text-3xl lg:text-6xl leading-none">SHIPPING YOUR VEHICLE INTERNATIONALLY HAS NEVER BEEN EASIER</h1>
          <h2 className="font-medium text-base lg:text-22">We&apos;ve helped thousands of happy customers during our 50+ years in the business, and we&apos;d love to help you too.</h2>
          <div className="w-72">
            {/* <Button
              theme="redBlue"
              linkTo={siteMap.vehicle.vehicleNewPaperformLink.path}
              buttonText="Get Started"
            /> */}
            <Button
              buttonText="Get Started"
              theme="redBlue"
              linkTo="paperform"
              dataPaperformId="w9e9ma75"
            />
          </div>
          <MouseScroll />
        </div>
      </section>
      <WhiteWithIcons 
        width='w-1/6'
        data={{heading: '5 Key Reasons Our Customers Choose To Ship Their Cars', items: [
        {
          image: '/assets/images/reasons/value.svg',
          text: 'Vehicles are often worth more in the destination country, shipping your car can make good economic sense'
        },
        {
          image: '/assets/images/reasons/tax.svg',
          text: 'There are great import tax exemptions for immigrants and returning residents'
        },
        {
          image: '/assets/images/reasons/graph.svg',
          text: 'They don\'t have to deal with the hassle of selling the vehicle privately for a huge loss'
        },
        {
          image: '/assets/images/reasons/car.svg',
          text: 'Some car models are simply too rare or unique to attempt to buy again'
        },
        {
          image: '/assets/images/reasons/heart.svg',
          text: 'Sentimental value... they just love their car!'
        },
      ]}} />
      <VideoAndText
        hasMinHeight={true}
        bgImage="/assets/images/concerns-bg.jpg"
        hasRequestQuote={false}
        requestQuoteLink='/'
        requestQuoteText=""
        imageAlt="Willship International"
        videoSide="left"
        videoId="e6C5NBCAV5c"
        heading="With Willship, All Your Concerns Are Gone"
        listType="list-disc"
        listItems={[
          'will it arrive safely?',
          'what documentation do I need?',
          'will I need to pay tax?',
          'am I able to leave anything in the car?',
          'what happens at the destination?',
          'how long does it take?',
          'how much will it cost?',
        ]}
        trailingParagraphs={[
          "Willship will make the process easy - we're here to handle it all and answer all your questions."
        ]}
        theme="dark"
      >
        <div className="w-full flex flex-col lg:flex-row gap-4">
            <Button
              theme="redBlue"
              buttonText="Get Started"
              linkTo="paperform"
              dataPaperformId="w9e9ma75"
            />
            <Button
              theme="whiteBlue"
              buttonText="Contact Us"
              linkTo={siteMap.contact.path}
            />
          </div>
      </VideoAndText>
      <ImageAndText
        heading="A Safer Journey With High-Tech Shipping"
        imageSide="right"
        imageAlt="Car in container"
        imageSrc='/assets/images/welcome-background-2.jpg'
        hasRequestQuote={true}
        requestQuoteText='Get Started'
        requestQuoteLink={"paperform"}
        dataPaperformId="w9e9ma75"
        hasSubHeading={false}
        precedingParagraphs={[
          'With our interactive online platform, data is always logged as it moves from one stage to the next.'
        ]}
        listItems={[
          'Receiving on to the tow truck',
          'Delivery off the tow truck to the port',
          'Receiving into the port',
          'Movement from the port on to the vessel',
          'Movement from the vessel on to the destination port',
          'Clearance through customs and quarantine',
          'Handover to the destination tow truck',
          'Final delivery to your chosen destination',
        ]}
        listType='list-disc'
        trailingParagraphs={[
          'Comprehensively monitored the whole way through - so there is no chance of it \'going missing\'. We know exactly where it is every step of the way'
        ]}
        theme='light'
      />
      <LeaveItToUs />
      <WhatWeCanShip />
      <ImageAndText
        hasRequestQuote={false}
        requestQuoteLink=''
        requestQuoteText=""
        heading="We Can Move It All"
        precedingParagraphs={[
          'Vehicles, Caravans, Motorhomes, Trailer Boats, Motorcycles, Machinery - All Over The World.',
          'Please Click On The Below Destination For Information Specific To Each Location',
        ]}
        hasSubHeading={false}
        imageAlt='World Map'
        imageSide="right"
        imageSrc='/assets/images/world-map.svg'
        theme="light"
      >
        <div className="py-4">
          <Flags
            areLinks={true}
            countries={[
              'nz', 'uk', 'ie', 'au'
            ]}
          />
        </div>
      </ImageAndText>
      <Testimonials10 />
      <VehicleFAQ />
    </>
  );
};

export default ImportVehicle;