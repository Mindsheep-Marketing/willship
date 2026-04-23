import Head from "next/head";
import Button from "../../components/common/Button";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import QuoteContactButtons from "../../components/common/QuoteContactButtons";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import ShippingOptions from "../../components/ShippingOptions";
import siteMap from "../../siteMap";

const ImportCarToUk = () => (
  <>
    <Head>
      <title>{siteMap.vehicle.importCarToUK.title}</title>
      <meta name='description' content={siteMap.vehicle.importCarToUK.description} />
    </Head>
    <Hero
      heading='SHIPPING YOUR VEHICLE TO THE UK HAS NEVER BEEN EASIER'
      subHeading='Let the experts take all of the hassle out of international shipping'
      bgImage='/assets/images/bg-uk.jpg'
      hasButton={true}
      buttonText="Get Started"
      buttonLink={"paperform"}
      dataPaperformId="w9e9ma75"
      hasMouseScroll={true}
    />
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Shipping Your Car Makes Good Economic Sense',
        items: [
          {
            image: '/assets/images/reasons/tax2.svg',
            text: 'Tax Free',
            subText: 'Moving to the UK to live means your personal vehicle enters the country tax free! Ask us how.'
          },
          {
            image: '/assets/images/reasons/clock.svg',
            text: 'Save Time and Hassle',
            subText: 'The time and effort of selling then buying just doesn\'t add up.'
          },
          {
            image: '/assets/images/reasons/car-heart.svg',
            text: 'Keep the vehicle you know and love.',
            subText: 'You know it, you love it - keep driving it!'
          },
          {
            image: '/assets/images/reasons/graph.svg',
            text: 'Increased Vehicle Values',
            subText: 'Your vehicle could be worth more in the UK than in Australia. Your classic car could have great resale value - making you money.'
          },
          {
            image: '/assets/images/reasons/heart.svg',
            text: 'Ship Personal Items FREE',
            subText: 'Our container service means you can also utilize the space around the vehicle to load your personal items.'
          },
        ]
      }}
    />
    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      imageSide="right"
      imageSrc="/assets/images/london.png"
      imageAlt="Import To The UK"
      heading='Are There Taxes, Duties Or VAT?'
      precedingParagraphs={[
        'We have a great set up between Australia and the UK and many people are eligible for duty and VAT exemption,meaning you pay NO taxes on import.',
        'In general if you meet below criteria, you will be successful in gaining a tax exemption:',
      ]}
      listItems={[
        'That you have lived outside the UK for at least 12 months.',
        'That you have possessed and used the vehicle outside the UK for at least 6 months.',
        'That you are moving to the UK to live for at least 6 months in the following 12 months.',
        'That the vehicle arrives no more than 6 months after you arrive.',
        'That you do not sell the car for at least 12 months after UK customs clearance.',
      ]}
      listType='list-disc'
      trailingParagraphs={[
        'If you are unsure if you meet the above criteria then please contact us and we can provide you with more information on the local taxes.',
        'Our experienced team will take care of everything. We will even guide you through the collection of all documentation requirements.',
      ]}
      theme='light'
      hasSubHeading={false}
    />
    <ImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      hasSubHeading={false}
      heading="Shipping To The UK From Australia Can Be A Profitable Exercise!"
      imageSide="left"
      imageSrc="/assets/images/old-car.jpg"
      imageAlt="Vintage Car"
      theme='light'      
      precedingParagraphs={[
        'Both Australia and New Zealand have a treasure trove of vintage vehicles that are worth a lot more over in the UK than they are here to our local markets. We\'ve had clients make thousands of pounds on imports over the years through buying, importing, and selling vehicles that are worth a pretty penny over in the UK.',
        'Willship is more than happy to act as the intermediary party on your behalf to work with the seller, organize payments and so on to ensure the process is smooth and easy.',
        'The UK also has great incentives to import classic cars of historical interest. That means, if you buy a classic car, you could import the vehicle without needing to pay any import duty, and with a reduced VAT rate of only 5% – making it potentially very lucrative!',
      ]}
    >
      <QuoteContactButtons />
    </ImageAndText>

    <ImageAndText
      hasRequestQuote={true}
      requestQuoteLink={"paperform"}
      dataPaperformId="w9e9ma75"
      requestQuoteText='Get Started'
      heading="How Do I Handle Compliance And Registration"
      imageSide="right"
      imageSrc="/assets/images/car3.png"
      imageAlt="Sports Car"
      precedingParagraphs={[
        'Willship can assist you with all necessary safety and compliance checks in order for the vehicle to be registered in the UK. We can even organize the registration for you so all you have to do is drive away.'
      ]}
      theme='light'
      hasSubHeading={false}
    />
    <WhiteWithIcons
      width="w-1/6"
      data={{
        heading: 'Leave It All To Willship',
        precedingText:[
          'This includes:'
        ],
        items: [
          {
            image: '/assets/images/reasons/book.svg',
            text: 'Supporting you to get all key documents together'
          },
          {
            image: '/assets/images/reasons/headphones.svg',
            text: 'Organizing transport and freight between Australia and the UK'
          },
          {
            image: '/assets/images/reasons/shield.svg',
            text: 'Clearing your car through UK customs and quarantine'
          },
          {
            image: '/assets/images/reasons/signpost.svg',
            text: 'On road compliance and registration (Optional)'
          },
        ]
      }}
    >
      <div className="w-full max-w-xs">
        <Button
          theme="redBlue"
          buttonText="Get Started"
          linkTo="paperform"
          dataPaperformId="w9e9ma75"
        />
      </div>
    </WhiteWithIcons>
    <ShippingOptions
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
    />
    <Testimonials10 />
  </>
);

export default ImportCarToUk;