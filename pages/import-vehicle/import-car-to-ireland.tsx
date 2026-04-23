import Head from "next/head";
import Button from "../../components/common/Button";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import QuoteContactButtons from "../../components/common/QuoteContactButtons";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import ShippingOptions from "../../components/ShippingOptions";
import siteMap from "../../siteMap";

const ImportCarToIe = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCarToIreland.title}</title>
      <meta name='description' content={siteMap.vehicle.importCarToIreland.description} />
    </Head>
    <Hero
      bgImage='/assets/images/bg-ie.png'
      heading="EASY AND AFFORDABLY SHIP YOUR CAR TO IRELAND"
      subHeading="Every month we help dozens of Irish expats safely move their vehicle and belongings back home, and we'd love to help you to"
      hasButton={true}
      hasMouseScroll={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
    />
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Shipping Your Vehicle Home To Ireland Has Plenty Of Benefits',
        items: [
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'Tax Free',
            subText: 'Moving to the Ireland to live means your personal vehicle enters the country tax free! Ask us how.'
          },
          {
            image: '/assets/images/reasons/car.svg',
            text: 'Keep the vehicle you know and love.',
            subText: 'You know it, you love it, keep driving it!'
          },
          {
            image: '/assets/images/reasons/heart.svg',
            text: 'Ship Personal Items FREE',
            subText: 'Our container service means you can also utilize the space around the vehicle to load your personal items.'
          },
          {
            image: '/assets/images/reasons/headphones-red.svg',
            text: 'We will listen to your needs and tailor a quote to suit YOU',
            subText: 'Use your own container If you already own a shipping container we can move it for you!'
          },
          {
            image: '/assets/images/reasons/graph.svg',
            text: 'Increased Vehicle Values',
            subText: 'Your vehicle could be worth more in Ireland than in Australia. Meaning it could have a great resale value - making you money.'
          },
        ]
      }}
    />

    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      heading='Are There Any Taxes?'
      hasSubHeading={true}
      subHeading="No Tax, No Duty, No VAT"
      imageSide="right"
      imageSrc="/assets/images/old-car2.png"
      imageAlt="Vintage Car"
      precedingParagraphs={[
        'Ownership and use over the last 6 months means you should be able to import your vehicle into Ireland tax free, Our experienced staff will be able to guide you through the required documentation. You will know what to expect from the outset – NO costly surprises'
      ]}
      theme='light'
    />

    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=""
      heading="How Do I Get The Vehicle On The Road?"
      hasSubHeading={false}
      precedingParagraphs={[
        'We can guide you through the process from getting your vehicle out of the wharf and onto the road. This includes:'
      ]}
      listItems={[
        'The National Car Test (NCT)',
        'Vehicle registration',
        'Paying VRT (if you have to - most people can avoid this by claiming the tax relief!)',
      ]}
      trailingParagraphs={[
        'Speak to our friendly team who are happy to assist you through the process.Get Instant Quote'
      ]}
      listType='list-disc'
      theme='light'
      imageSide="left"
      imageSrc="/assets/images/car4.png"
      imageAlt="Muscle Car"
    >
      <QuoteContactButtons />
    </ImageAndText>
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Leave It All To Willship',
        precedingText: [
          'This includes:'
        ],
        items: [
          {
            image: '/assets/images/reasons/book.svg',
            text: 'Supporting you to get all key documents together'
          },
          {
            image: '/assets/images/reasons/headphones.svg',
            text: 'Organizing transport and freight between Australia and Ireland'
          },
          {
            image: '/assets/images/reasons/shield.svg',
            text: 'Clearing your car through Irish customs and quarantine'
          },
          {
            image: '/assets/images/reasons/signpost.svg',
            text: 'On road compliance and registration (Optional)'
          },
        ]
      }}
    >
      <div className="w-full max-w-xs z-10">
        <Button
          theme="redBlue"
          buttonText="Get Started"
          linkTo="paperform"
          dataPaperformId="w9e9ma75"
        />
      </div>
    </WhiteWithIcons>

    <ShippingOptions
      width="w-1/3"
      options={[
        {
          heading: 'Roll On, Roll Off (RORO)',
          image: '/assets/images/white-car.jpg',
          linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path
        },
        {
          heading: 'Full Container',
          image: '/assets/images/red-car-in-container.jpg',
        }
      ]}
    />
    <Testimonials10 />
  </>
);

export default ImportCarToIe;