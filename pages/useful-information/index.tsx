import Head from "next/head";
import Hero from "../../components/common/Hero";
import PostSection from "../../components/common/PostSection";
import siteMap from "../../siteMap";

const maxLength = 75;

const UsefulInformation = () => (
    <>
      <Head>
        <title>{siteMap.usefulInformation.title}</title>
        <meta name='description' content={siteMap.usefulInformation.description} />
      </Head>
      <Hero
        bgImage="/assets/images/bg-ship4.jpg"
        // hasImageOpacity={false}
        hasButton={false}
        hasMouseScroll={false}
        heading="USEFUL INFORMATION"
      />
      <PostSection 
        heading="Popular Posts"
        posts={[
          {
            heading:  siteMap.usefulInformation.topRoroShippingDestinations.title,
            image: '/assets/images/blog/23911-2-min.jpg',
            text:  siteMap.usefulInformation.topRoroShippingDestinations.description.slice(0, maxLength) + '...',
            linkTo: siteMap.usefulInformation.topRoroShippingDestinations.path,
            aboveFold: true
          },
          {
            heading:  siteMap.usefulInformation.unpackingTheBenefitsOfRoRoShipping.title,
            image: '/assets/images/blog/23808-3.jpg',
            text:  siteMap.usefulInformation.unpackingTheBenefitsOfRoRoShipping.description.slice(0, maxLength) + '...',
            linkTo: siteMap.usefulInformation.unpackingTheBenefitsOfRoRoShipping.path,
            aboveFold: true
          },
          {
            heading:  siteMap.usefulInformation.internationalShippingMadeEasy.title,
            image: '/assets/images/blog/23714-3-min.jpg',
            text:  siteMap.usefulInformation.internationalShippingMadeEasy.description.slice(0, maxLength) + '...',
            linkTo: siteMap.usefulInformation.internationalShippingMadeEasy.path,
            aboveFold: true
          },
          {
            heading:  siteMap.usefulInformation.roroShippingForHeavyMachinery.title,
            image: '/assets/images/blog/23714-2-min.jpg',
            text:  siteMap.usefulInformation.roroShippingForHeavyMachinery.description.slice(0, maxLength) + '...',
            linkTo: siteMap.usefulInformation.roroShippingForHeavyMachinery.path,
            aboveFold: true
          },
          {
            heading: 'What types of vehicles can be shipped using RORO?',
            image: '/assets/images/blog/23628-6-min.jpg',
            text: 'When it comes to transporting vehicles across the globe, Roll-On/Roll-Off...',
            linkTo: siteMap.usefulInformation.whatTypesOfVehiclesCanBeShippedUsingRoRo.path,
            aboveFold: true
          },
          {
            heading: 'Exploring Options for International Car Shipping',
            image: '/assets/images/blog/23628-5-min.jpg',
            text: 'Shipping a car overseas can present a variety of logistical challenges, but...',
            linkTo: siteMap.usefulInformation.exploringOptionsForInternationalCarShipping.path,
            aboveFold: true
          },
          {
            heading: 'Compliance in New Zealand',
            image: '/assets/images/compliance2.jpg',
            text: 'In order for your vehicle to be registered on New Zealand roads it will need...',
            linkTo: siteMap.usefulInformation.compliance.path,
            aboveFold: true
          },
          {
            heading: 'Shipping to NZ - What documentation is required?',
            image: '/assets/images/ship-cranes2.jpg',
            text: 'The documents needed to ship a vehicle to New Zealand are very basic...',
            linkTo: siteMap.usefulInformation.shippingToNZDocumentation.path,
            aboveFold: true
          },
          {
            heading: 'How Much Space Is In A Container',
            image: '/assets/images/container-space.webp',
            text: 'If you’re looking to ship a car to new zealand or worldwide with belongings along...',
            linkTo: siteMap.usefulInformation.howMuchSpaceInContainer.path,
            aboveFold: true
          },
          {
            heading: 'Transit Insurance – What it is and why it’s important.',
            text: 'INTERNATIONAL SHIPPING RISKS INCLUDE: Inclement weather Natural disaster Mechanical error Human error Multiple handlings...',
            image: '/assets/images/insurance.jpg',
            linkTo: siteMap.usefulInformation.transitInsurance.path,
            aboveFold: true
          },
          {
            heading: 'How to Prepare a Car for Shipping',
            text: 'When shipping a car overseas there are plenty of things to keep you busy. You...',
            image: '/assets/images/car-wash.jpg',
            linkTo: siteMap.usefulInformation.howToPrepareCar.path,
            aboveFold: true
          },
          {
            heading: 'Roll on, Roll off Shipping - How it\'s done.',
            text: 'There is often confusion about exactly what roll on roll off shipping is and how...',
            image: '/assets/images/roro.jpg',
            linkTo: siteMap.usefulInformation.roroShippingHowItsDone.path,
            aboveFold: true
          },
          {
            heading: 'Importing Vehicles into Australia',
            text: 'To protect our Australian car market our government has set up a complex set of...',
            image: '/assets/images/trailer2.jpg',
            linkTo: siteMap.usefulInformation.importingCarsIntoAustralia.path,
            aboveFold: true
          },
          {
            heading: 'Roll-on/Roll-off vs Container Shipping: Which is Right for You?',
            text: 'SHIPPING OPTIONS When looking to ship your car overseas you will likely come across...',
            image: '/assets/images/ship3.jpg',
            linkTo: siteMap.usefulInformation.roroVsContainer.path,
            aboveFold: true
          },
          {
            heading: 'Clean Car Tax / Rebate - Here\'s what we know',
            text: 'As of the 1st of April 2022 the NZ government has introduced...',
            linkTo: '/useful-information/clean-car-tax-rebate',
            image: '/assets/images/blog/apr1.jpg',
            aboveFold: true
          },
          {
            heading: 'How to Ship a Boat Overseas',
            text: 'Owning a boat can be the ultimate expression of freedom, the open seas...',
            linkTo: '/useful-information/how-to-ship-a-boat-overseas-2',
            image: '/assets/images/blog/feb26-2.jpg',
            aboveFold: true
          },
          {
            heading: 'Moving to New Zealand from Australia? Here\'s Everything You Need to Know',
            text: 'So you’ve decided to trade the sunny beaches of Australia for the picturesque snow-laden mountains...',
            image: '/assets/images/ship3.jpg',
            linkTo: siteMap.usefulInformation.movingFromAuToNz.path,
            aboveFold: true
          },
          {
            heading: 'WILLSHIP EXPERIENCE: HALF-MILLION DOLLAR 1930 BENTLEY FROM SYDNEY TO IRELAND!',
            text: 'While we have a lot of experience in high end and high value vehicles, this one certainly...',
            image: '/assets/images/blog/apr29-1.jpg',
            linkTo: '/useful-information/willship-experience-half-million-dollar-1930-bentley-from-sydney-to-ireland',
            aboveFold: true
          },
          {
            heading: 'How to Transfer your Car to NZ without a Hassle?',
            image: '/assets/images/blog/sep14.jpg',
            text: 'If you are not an experienced automobile importer, it is simple to ignore expenses...',
            linkTo: '/useful-information/transfer-your-car-to-nz-hassle-free',
          },
          {
            heading: 'How to Import a Car from the UK to Australia?',
            image: '/assets/images/blog/car-import-2.jpg',
            text: 'Australia has traditionally been a significant market for British automobiles...',
            linkTo: '/useful-information/importing-cars-from-uk-to-australia'
          },
          {
            heading: 'Everything you Need to Know about Importing a Car into Australia',
            image: '/assets/images/blog/car-import.jpg',
            text: 'Many countries strictly regulate laws for vehicle import and export...',
            linkTo: '/useful-information/importing-a-car-into-australia'
          },
          {
            heading: 'Container Dimensions',
            text: 'Parameters of sea containers: 40′ HIGH-CUBE List of All Container Types 20’GP INSIDE LENGTH: 5.895 m...',
            image: '/assets/images/containers6.jpg',
            linkTo: siteMap.usefulInformation.parametersOfContainers.path
          },
          {
            heading: 'How to Safely Ship a Classic Car Overseas',
            text: 'How to Safely Ship a Classic Car Overseas Classic cars are often more than just...',
            image: '/assets/images/old-car3.jpg',
            linkTo: siteMap.usefulInformation.howToShipOldCar.path
          },
          {
            heading: 'What to prepare when shipping a caravan abroad',
            text: 'What to prepare when shipping a caravan abroad Caravan holidays are the ultimate expression of...',
            image: '/assets/images/caravan3.jpg',
            linkTo: siteMap.usefulInformation.shipCaravan.path
          },
          {
            heading: 'How Safe is it to Ship a Car Overseas?',
            text: 'How Safe is it to Ship a Car Overseas? The short answer to this question...',
            image: '/assets/images/car6.jpg',
            linkTo: siteMap.usefulInformation.howSafeToShipCar.path
          },
        ]}
      />
    </>
);

export default UsefulInformation;