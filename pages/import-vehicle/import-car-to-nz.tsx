import Head from "next/head";
import LearnMoreToNz from "../../components/Automotive/LearnMoreToNz";
import Button from "../../components/common/Button";
import Image from 'next/image';
import Banner from "../../components/common/Banner";
import ImageAndChecklist from "../../components/common/ImageAndChecklist";
import ImageAndTextToNz from "../../components/common/ImageAndTextToNz";
import TestimonialCarToNz from "../../components/common/TestimonialCarToNz";
import WhiteWithIconsToNz from "../../components/common/WhiteWithIconsToNz";
import BackgroundImage from "../../components/common/BackgroundImage";
import BlueWithIcons from "../../components/common/BlueWithIcons";
import ProcessCustomsClearance from "../../components/commercial/ProcessCustomsClearance";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import ShippingOptionsToNz from "../../components/ShippingOptionsToNz";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import useIsSmall from "../../utils/hooks/useIsSmall";
import TrackRecordNZ from "../../components/common/TrackRecordNZ";
import NzUpdateTax from "../../components/Automotive/NzUpdateTax";

const ImportCarToNz = () => {

  const screenSize = useGetScreenSize();


  const isSmall = useIsSmall();

  return (
    <>
      <Head>
        <title>{siteMap.vehicle.importCarToNZ.title}</title>
        <meta name='description' content={siteMap.vehicle.importCarToNZ.description} />
      </Head>
      <section

        className="w-full relative flex items-center justify-center py-20 object-cover"
        style={{ minHeight: `calc(100vh - ${isSmall ? '112px' : '198px'})` }}
      >
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo={screenSize === 'xs' ? 'image' : 'video'}
          src={
            screenSize === 'xs'
              ? '/assets/images/bg-vehicle-small.jpg'
              : 'https://www.youtube.com/embed/zL0i26aN6Ms?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=zL0i26aN6Ms'
          }
          hasOpacity={true}
          opacityColour="bg-darkBlue/80"
        />


        <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 items-center justify-center px-4 lg:p-0 text-white text-center">
          <h1 className="font-Montserrat font-bold text-2xl lg:text-5xl pt-2 sm:pb-4">
            SHIPPING A CAR FROM AUSTRALIA TO NEW ZEALAND IS EASIER THAN YOU THINK
          </h1>
          <h2 className="font-medium text-base max-w-4xl lg:text-22">
            Willship is the most trusted vehicle freight forwarder from Australia to New Zealand. Cars, boats, trailers, caravans—we ship them all to NZ with care.
          </h2>


          {/* Quote Card Component */}
          <div className="relative w-full max-w-md mx-auto mt-5">
            {/* Dark Blue Background behind the orange shape */}
            <div className="hidden lg:block absolute -top-5 -left-7 z-[-1] bg-darkBlue w-28 h-[110px] rounded-tl-[2rem] shadow-md" />


            {/* Orange shape behind the tag */}
            <div className="hidden lg:block absolute top-12 -left-7 z-0 bg-red w-24 h-12 rounded-tl-[4rem] rounded-br-[4rem] shadow-lg" />
            {/* Quote Card */}
            <div className="relative z-10 bg-white shadow-lg rounded-tl-[2rem] rounded-br-[4rem] rounded-bl-[4rem] rounded-tr-[4rem]  overflow-hidden">
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src="/assets/images/quote.png"
                  alt="Car"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-b-[30px]"
                  priority
                />
                <div className="absolute inset-0 bg-darkBlue/40 flex flex-col items-center justify-end pb-8 px-4 text-white text-center">
                  <h3 className="text-3xl font-Montserrat sm:text-4xl lg:text-4xl mt-2 font-bold leading-snug">
                    Instant Quote in <br className="hidden sm:block" /> Just Seconds!
                  </h3>
                </div>
              </div>


              <div className="text-center py-6 px-4">
                <p className="text-red text-base sm:text-lg lg:text-2xl font-semibold mb-4">
                  + Free Step-by-step Shipping Guide
                </p>
                <Button
                  buttonText="Get Started"
                  theme="redBlue"
                  linkTo="paperform"
                  dataPaperformId="w9e9ma75"
                  className="!w-[70%] !font-bold px-4"
                />
              </div>
            </div>


            {/* Blue Tag */}
            <div className="absolute -top-5 z-20 bg-darkBlue text-white pr-3 pl-4 py-2 rounded-tl-2xl lg:pr-10 leading-tight">
              <span className="block lg:text-lg sm:text-md font-semibold relative z-10">
                NO COMMITMENTS,
              </span>
              <span className="block lg:text-lg sm:text-md font-semibold relative z-10">
                NO HIDDEN COSTS
              </span>
            </div>


          </div>
        </div>


      </section>

      <TrackRecordNZ />
      <NzUpdateTax />
      <BlueWithIcons
        width="w-1/5"
        data={{
          heading: 'Why It’s Better to Ship Car from Australia to New Zealand',
          items: [
            {
              image: '/assets/images/why-better/gst.svg',
              text: 'It’s GST Free',
              description: 'If you’re a first-time immigrant or a returning NZ resident, you may qualify for a GST exemption—meaning NO import tax on arrival!'
            },
            {
              image: '/assets/images/why-better/cheaper.svg',
              text: 'It’s Cheaper Than You Think!',
              description: 'Vehicles in NZ often cost more than in Australia. Instead of selling your car at a loss, save money by bringing it with you!'
            },
            {
              image: '/assets/images/why-better/cars-in-nz.svg',
              text: 'Cars in NZ Are More Expensive',
              description: 'Car prices in New Zealand are typically 10% higher than in Australia. Even with shipping costs, bringing your car is often cheaper than buying new!'
            },
            {
              image: '/assets/images/why-better/car-icon.svg',
              text: 'Avoid Losing Money on Your Private Sale',
              description: 'Selling in Australia can mean dealing with tire-kickers and losing thousands on resale. Keep your car and ship it instead!'
            },
          ]


        }}
      >
        <div className="w-full max-w-xs z-10">
          <Button
            buttonText="Get Started"
            theme="redBlue"
            linkTo="paperform"
            dataPaperformId="w9e9ma75"
          />
        </div>
      </BlueWithIcons>
      <LearnMoreToNz />
      <ImageAndChecklist
        heading="Take Advantage Of The NZ Import GST Exemption"
        imageSrc="/assets/images/customs-clearance/penlope-and-rhyss.png"
        requestQuoteLink={"paperform"}
        dataPaperformId="w9e9ma75"
        requestQuoteText="Get Started"
        requestQuoteWidth="w-full lg:w-80"
        precedingParagraphs={[
          "You may be exempt from paying import GST if you are looking to import car to New Zealand. Here’s a list of criteria to find out if this applies to you:"
        ]}
        listItems={[
          "Be a first time immigrant or a returning New Zealand citizen.",
          "If a returning citizen, you must have been out of New Zealand for over 21 months.",
          "Be prepared to sign a deed where you agree not to sell the vehicle for at least 2 years.",
          "Vehicle must have been owned and used in your personal name for last 12 months.",
          "You must be physically in New Zealand in order to claim exemption."
        ]}
      />

      <div className="relative  h-auto lg:h-[700px] bg-darkBlue overflow-hidden">
        {/* Main container with flex-col on mobile and flex-row on large screens */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative">
            <img
              src="/assets/images/car2.png"
              alt="Shipping"
              className="w-full h-full object-cover"
            />
          </div>


          {/* Text Section */}
          <div className="w-full lg:w-1/2 bg-darkBlue text-white flex items-center">
            <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 text-left">
              <h2 className="text-2xl sm:text-3xl text-center lg:text-4xl font-medium mb-6">
                Pioneers in Hassle-Free Car Shipping to New Zealand
              </h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Willship established the first Trans-Tasman route for personal cargo back in
                  2014, ever since then we have helped tens of thousands of people in shipping a
                  car from Australia to New Zealand. In fact, we have offices in both AU and NZ
                  with a highly experienced team specialising in much more than just the shipping
                  process.
                </p>
                <p>
                  We are here to answer any questions you might have on import approvals,
                  insurance, compliance, registration, transit times, or anything else you can think
                  of.
                </p>
                <p>
                  The vast majority of our clients are people doing this for the first time, and we
                  understand that it could get confusing when navigating the complexity of car
                  shipping to New Zealand, but that is what we are here for.
                </p>
                <p>
                  At Willship, our goal is to make this process as simple and easy to understand as
                  possible. Our shipping experts will be right by your side for the entire journey to
                  ensure things go to plan.
                </p>
              </div>
              <div className="w-full max-w-xs z-10 justify-center items-center mx-auto mt-8">
                <Button
                  buttonText="Get Started"
                  theme="redBlue"
                  linkTo="paperform"
                  dataPaperformId="w9e9ma75"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Background overlay */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/assets/images/14.png')",
            backgroundPosition: "100px center",
            opacity: 1,
            zIndex: 5,
          }}
        />
      </div>
      <ProcessCustomsClearance
        childrenMaxWidth="max-w-8xl"
        textColour="text-darkBlue"
        data={{
          heading: "How Shipping a Vehicle from Australia to New Zealand Works",
          subHeading: "",
          items: [
            {
              text: "Confirm Costs, Book, and Submit Documents",
              subText: "Get an instant quote, confirm your costs, and book your shipment. Once confirmed, submit the required documents (ownership proof, registration, and associated documents). Our team will guide you every step of the way.",
              image: "/assets/images/how-shipping/1.svg",
              width: "100",
            },
            {
              text: "Expert Review",
              subText: "After submitting your paperwork, our experience team will review all of your documentation and confirm your GST exemption status",
              image: "/assets/images/how-shipping/2.svg",
              width: "100",
            },
            {
              text: "Vehicle Collection and Shipping",
              subText: "We will get your vehicle booked on a suitable sailing and organise a pick up or delivery date that works in with your timeline",
              image: "/assets/images/how-shipping/3.svg",
              width: "100",
            },
            {
              text: "Arrival into NZ",
              subText: "Your vehicle is moved off the vessel and on to the port where it's staged for it's MPI biosecurity inspection, once passed, your vehicle can be moved off the port and into a compliance facility to undergo it's compliance requirements so it can be registered and driven on NZ roads",
              image: "/assets/images/how-shipping/4.svg",
              width: "100",
            }
          ]
        }}
      >
        <div className="w-full max-w-xs z-10">
          <Button
            buttonText="Get Started"
            theme="redBlue"
            linkTo="paperform"
            dataPaperformId="w9e9ma75"
          />
        </div>
      </ProcessCustomsClearance>

      {/* 
        <WhiteWithIcons
          width="w-1/4"
          data={{
            heading: 'Take Advantage Of All The Great Benefits',
            items: [
              {
                image: '/assets/images/reasons/tax2.svg',
                text: 'It\'s Tax Free',
                subText: 'If you\'re a first time immigrant or a returning resident, and you have owned and used the vehicle for in excess of 12 months then you are likely eligible for the import GST exemption meaning you pay no tax on arrival! More Information below.',
              },
              {
                image: '/assets/images/reasons/value.svg',
                text: 'It\'s Cheaper Than You Think!',
                subText: 'Vehicles in NZ almost always cost more than the same vehicle would in Australia, so don\'t waste time with tire-kickers and lose money selling your vehicle before you move. You could actually be saving money by bringing it with you!'
              },
              {
                image: '/assets/images/reasons/price-tag.svg',
                text: 'Purchase Of A New Vehicle In NZ At An Inflated Price',
                subText: 'On average, vehicle prices in New Zealand are around 10% higher than they are here in Australia, you\'ll be paying more for the same vehicle in NZ. It will often be more cost effective to ship your car to New Zealand, even with the additional cost of the freight it will still likely work out cheaper overall than buying a similar car once you arrive in NZ.'
              },
              {
                image: '/assets/images/reasons/graph.svg',
                text: 'Loss On The Private Sale Of Your Vehicle In Australia',
                subText: 'It\'s often a far better option to ship your car to NZ rather than dealing with the hassle of selling it here in Australia and losing thousands on its value.'
              },
              {
                image: '/assets/images/reasons/car.svg',
                text: 'Keep the vehicle you know and love.',
                subText: 'You know it, you love it - keep driving it!'
              },
              {
                image: '/assets/images/reasons/heart.svg',
                text: 'Ship Personal Items FREE',
                subText: 'Our container service means you can also utilize the space around the vehicle to load your personal items.'
              },
            ]
          }}
        /> */}

      <ImageAndTextToNz
        hasRequestQuote={true}
        requestQuoteLink={siteMap.vehicle.vehicleNewPaperformLink.path}
        requestQuoteText="Get Started"
        hasSubHeading={false}
        heading="Car Shipping to New Zealand is Fast and Easy"
        theme='dark'
        imageSide="left"
        imageAlt="Compliance Check"
        imageSrc="/assets/images/phone.png"
        precedingParagraphs={[


          'Shipping a car from Australia and New Zealand is very simple, transit times can be as little as 4 days on the water and the whole process can take as little as two weeks. The documents we require are minimal and we handle everything for you from start to finish.'
        ]}
      >
      </ImageAndTextToNz>


      <ImageAndTextToNz
        hasRequestQuote={true}
        requestQuoteLink={siteMap.vehicle.vehicleNewPaperformLink.path}
        requestQuoteText="Get Started"
        heading='How Do I Handle Compliance And Registration?'
        hasSubHeading={false}
        imageSide="right"
        imageAlt="Car in container"
        imageSrc="/assets/images/compliance.jpg"
        precedingParagraphs={[
          'When you import car to New Zealand, all imported vehicles entering NZ for the first time need to undergo compliance in order to ensure it’s safe for use on NZ roads. The best way to think of compliance is like a safety certificate or a warrant of fitness, although a little more thorough.',
          'Willship International has a network of experienced teams all over New Zealand who can either handle this process on your behalf or guide you through what you need to do to get your vehicle on to New Zealand roads.',
        ]}
        theme='light'
      />


      <WhiteWithIconsToNz
        width="w-1/5"
        data={{
          heading: 'Why Choose Willship When Shipping a Car from Australia to New Zealand',
          precedingText: [
            "At Willship, our dedicated automotive team specialises in hassle-free vehicle imports, ensuring a smooth and efficient process from start to finish."
          ],
          items: [
            {
              image: '/assets/images/why-choose/19.png',
              text: 'A dedicated point of contact organising all aspects of the transport and freight from your location through to New Zealand.'
            },
            {
              image: '/assets/images/why-choose/20.png',
              text: 'Supporting you to get all key documents together'
            },
            {
              image: '/assets/images/why-choose/21.png',
              text: 'Clearing your car through New Zealand customs and quarantine'
            },
            {
              image: '/assets/images/why-choose/22.png',
              text: 'Organizing compliance and assisting with on road registration in New Zealand'
            },
          ]
        }}
      >
        <p className="text-center text-2lg mb-4">
          Let our experts handle the complexities, so you can enjoy a seamless international shipping experience. Partner with Willship today!
        </p>
        <div className="w-full max-w-xs z-10">


          <Button
            buttonText="Get Started"
            theme="redBlue"
            linkTo="paperform"
            dataPaperformId="w9e9ma75"
          />
        </div>
      </WhiteWithIconsToNz>


      {/* <ShippingOptions
        width="w-1/4"
        options={[
          {
            heading: 'Roll On, Roll Off (RORO)',
            image: '/assets/images/white-car.jpg',
            linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
          },
          {
            heading: 'Shared Container',
            image: '/assets/images/4x4-in-container.jpg',
          },
          {
            heading: 'Full Container',
            image: '/assets/images/red-car-in-container.jpg',
          },
        ]}
      /> */}

      <ShippingOptionsToNz
        width="w-full"
        options={[
          {
            heading: 'Vehicles',
            image: '/assets/images/shipping/vehicles.png',
            description: 'Ship your car from Australia to New Zealand with ease. Get fast quotes, expert guidance, and a smooth shipping process for all types of vehicles.',
            buttonText: "Get Instant Quote",
          },
          {
            heading: 'Trailer Boats',
            image: '/assets/images/shipping/trailer-boats.png',
            description: 'Affordable and reliable trailer boat shipping from Australia to New Zealand. Let our team handle the logistics from pickup to delivery.',
            buttonText: "Get Instant Quote",
          },
          {
            heading: 'Motorcycles',
            image: '/assets/images/shipping/motorcycles.png',
            description: 'Motorbike shipping from Australia to New Zealand made simple. Trusted service for road bikes, cruisers, and off-road motorcycles.',
            buttonText: "Get Instant Quote",
          },
          {
            heading: 'Caravans',
            image: '/assets/images/shipping/caravans.png',
            description: 'Caravan shipping to New Zealand from Australia has never been easier. Safe, cost-effective, and handled by international freight specialists.',
            buttonText: "Get Instant Quote",
          },
          {
            heading: 'Motorhomes',
            image: '/assets/images/shipping/motorhomes.png',
            description: 'We make shipping your motorhome from Australia to New Zealand straightforward and stress-free. Get a tailored quote today.',
            buttonText: "Get Instant Quote",
          },
          {
            heading: 'Machinery',
            image: '/assets/images/shipping/machinery.png',
            description: 'Heavy machinery shipping from Australia to New Zealand by experts. Competitive rates, reliable service, and full customs support.',
            buttonText: "Get Instant Quote",
          },
        ]}
      />
      <Banner
        backgroundImage="/assets/images/banner/SH-bg.png"
        left={{
          heading: "STEP-BY-STEP GUIDE TO SHIPPING YOUR CAR TO NZ",
          smallImage: "/assets/images/banner/9.png",
          smallImage2: "/assets/images/banner/check.png",
          text: "Compliance, costs, documents, shipping methods — we've got it covered!",
          buttonText: "Get Started",
          buttonLink: "https://shippinghub.willship.com.au/",
        }}
        rightImage="/assets/images/banner/sh-page.png"
      />


      <TestimonialCarToNz />
      <VehicleFAQ />
    </>
  );
};
export default ImportCarToNz;
