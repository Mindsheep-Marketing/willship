import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import BlogText from "../../components/common/blog/BlogText";
import BlogImageAndText from "../../components/common/blog/BlogImageAndText";

const Compliance = () => (
  <>  
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="Compliance in New Zealand"
      subHeading="In order for your vehicle to be registered on New Zealand roads it will need to undergo compliance. This is completed after the importation process. "
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/car3.png'
      hasImageOpacity={true}
    />
    <BlogText
      heading="Willship International has teamed up with a compliance facility in both Auckland and Christchurch.  "
      textColour="text-darkGrey"
      bgColour="bg-White"
      text={[
        'We can now offer full vehicle compliance into these ports as part of our shipping service. Compliance essentially checks that your vehicle is suitable and safe for use on the roads in New Zealand and that it meets or exceeds all the required <a class="blogLink" href="https://www.nzta.govt.nz/vehicles/vehicle-types/cars-and-passenger-vehicles/#Class-MA">safety standards</a>. The whole process costs around AUD 840 as long as the vehicle does not need any additional work to meet New Zealand safety standard. Once completed you will end up with a Warrant of Fitness and an Compliance Certificate (MR2A form) which is required to register your car for use on the roads of New Zealand.',
        'If you choose not to have Willship cover your compliance, it’s always best to touch base with a compliance facility prior to deciding to ship the vehicle across to New Zealand. They will be able to confirm right away whether or not your vehicle will meet the required standards and can confirm the costs for you so there are no surprises on arrival. In terms of paperwork, the three documents you will need is an original registration document, the bill of lading which we will supply to you, and proof of ownership and identification.',
        'Most Australian built vehicles require very little work in order to become New Zealand compliant and the process generally takes less than 48 hours. Of course, if there are any major mechanical or safety issues with the vehicle that prevents it from passing a warrant of fitness, then this timing can increase.',
        'For more information on shipping a car or vehicle to New Zealand please visit <a class="blogLink" href="/import-vehicle/import-car-to-nz">this link</a>.'
      ]}
    />
 
    <BlogImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="Compliance Process In Depth"
      hasSubHeading={true}
      subHeading="Compliance done right!"
      precedingParagraphs={[
        'Willships trusted compliance facility are more than thorough when making sure your vehicle is compliant. They start with removing the interior trimming which offers a Independent Vehicle Safety Specialist (VINZ) full access behind the interior trim of your vehicle. They will inspect the condition and structure, seats and seat belts while gathering all relevant documentation for your vehicle. A VIN Plate is then assigned while we put your interior back together.',
        'From here they inspect the underbody and mechanical components via hoist to view the brakes, suspension, tires, engine components, and vehicle structure. They measure and examine all mechanical parts for Original Equipment Manufacturers (OEM) minimum requirements as dictated by New Zealand Transport Agency (NZTA). The goal here is to confirm that your vehicle structure has no deformation, cracking, fractures, corrosive damage or poor repairs that affect the safe tolerance of the structure. We then run a final inspection of vehicles emissions, lighting and brakes to ensure everything is functional and performing as it should be.',
        'If it is all green lights for your vehicle, we issue a Warrant of Fitness (WOF) and prepare an Compliance Certificate (MR2A form) for registration. Should there be a need for any repairs which may be discovered during the above process, we will give you a no-obligation quote which you can choose to proceed with or opt for your own repairer. All repairs must meet NZTA requirements.',
      ]}
      imageSide="right"
      imageSrc="/assets/images/compliance.jpg"
      imageAlt="Compliance"
      theme='light'
    />
    <BlogImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="IMMIGRANTS EXEMPTIONS"
      hasSubHeading={false}
      subHeading="State of the art repairs facility"
      precedingParagraphs={[
        'Depending on the age of the vehicle, whether or not it has ESC (electronic stability control) or your vehicle does not have an ADR/VIN Plate, you may need an Immigrants Exemption.',
        'An immigrant’s exemption makes you exempt from certain rules set out by the NZTA. It’s designed to allow people that are moving to New Zealand to live to get their personal vehicle on the road without having to meet all of the usual on-road standards. This is necessary for vehicles that aren’t fitted with the ESC or some older vehicles that don’t meet the Euro 4 emission standard or frontal impact standard.  ',
        'Usually, it will be required for Petrol vehicles that are manufactured before July 2010 and Diesel vehicles that are manufactured before January 2007. It is also required for any vehicle without ESC. However, is NOT required for vehicles over 20 years old.',
        'The Immigrant Exemption will incur an additional fee of <b>AUD 210</b> (this is on top of the compliance cost of AUD 840).',
      ]}
      imageSide="left"
      imageSrc="/assets/images/exemption-sign-min.jpg"
      imageAlt="Compliance"
      theme='dark'
    />
    <BlogImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading='LOW VOLUME VEHICLE CERTIFICATION'
      hasSubHeading={false}
      precedingParagraphs={[
        'Any modifications that surpass factory specifications require an LVV. These can include adjustable suspension, larger wheels, engine modifications, roll cage fitments, and other popular mods. An independent certified inspector will need to sign off on any modifications to ensure that all LVVTA requirements are met. We can complete any required repairs in our workshop to help save you time.'
      ]}
      imageSide="right"
      imageAlt="Compliance"
      imageSrc="/assets/images/compliance3.webp"
      theme='light'
    />
    <BlogImageAndText
      hasRequestQuote={false}
      requestQuoteLink=''
      requestQuoteText=''
      heading="REPAIR CERTIFICATION"
      hasSubHeading={false}
      precedingParagraphs={[
        'In the unfortunate event of any structural damage, corrosion or previous damage repairs your vehicle may fail the inspection. This process is carried out by an independent workshop in conjunction with a Repair Certifier Inspector. The certifier dictates the process and guidelines for repair to ensure OEM requirements are met. You have the option to organise your own certifier, however, keep in mind that the correct documentation must be supplied to complete the compliance process.',
        '<b>State of the art repairs facility!</b> Our repairs facility is a cutting-edge area which focuses on the necessary repairs to get you safely on the road. Our team of mechanics have over 50 years of experience, the finest equipment available and the process ensures we complete our job in a time-efficient manner.',
      ]}
      imageSrc='/assets/images/compliance4.webp'
      imageSide="left"
      imageAlt="Compliance"
      theme='dark'
    />
  </>
);

export default Compliance;