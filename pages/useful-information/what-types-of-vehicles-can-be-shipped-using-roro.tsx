import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import BlogText from "../../components/common/blog/BlogText";
import BlogImageAndText from "../../components/common/blog/BlogImageAndText";

const WhatTypesOfVehiclesCanBeShippedUsingRoRo = () => (
  <>  
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="What types of vehicles can be shipped using RORO?"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/blog/23628-6-min.jpg'
      hasImageOpacity={true}
    />
    <BlogText
      textColour="text-darkGrey"
      bgColour="bg-White"
      text={[
        'When it comes to transporting vehicles across the globe, Roll-On/Roll-Off (RORO) shipping proves to be an efficient, reliable, and safe method. As a trusted name in freight forwarding, Willship International offers comprehensive RORO shipping services to meet diverse requirements. But one may ask, what types of vehicles can be shipped using RORO?',
        'RORO shipping is incredibly versatile, capable of transporting a wide array of vehicles. From cars and motorcycles to trucks and buses, RORO shipping can handle it all. The vehicles are simply driven onto the vessel at the point of origin and driven off at the destination, making it a convenient and efficient solution for shipping wheeled cargo.',
        'Perhaps one of the key advantages of RORO shipping is its capacity to handle large, heavy vehicles. Construction and farming machinery, such as tractors, bulldozers, or excavators, can be easily transported using RORO. This method bypasses the complexities associated with disassembling and reassembling these large pieces of equipment.',
        'Furthermore, RORO shipping can also cater to recreational vehicles like motorhomes, trailers, or even boats. Regardless of the size or type of your wheeled vehicle, RORO shipping can ensure its safe and secure transportation across international waters.',
        'For those seeking to transport high-value vehicles like vintage cars or luxury automobiles, RORO shipping offers secure internal decks, reducing exposure to weather elements and ensuring the vehicle reaches its destination in pristine condition.',
        'At Willship International, the team understands the varying needs of their clients and offers customised solutions to ensure optimal results. RORO shipping, with its wide range of application and high standards of safety, is just one of the many ways Willship International delivers on its promise of quality freight forwarding. Whether for personal or commercial needs, RORO shipping stands as a flexible and reliable solution for all types of vehicles.',
      ]}
    />
  </>
);

export default WhatTypesOfVehiclesCanBeShippedUsingRoRo;