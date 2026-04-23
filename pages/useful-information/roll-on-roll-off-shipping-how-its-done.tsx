import Head from "next/head";
import Hero from "../../components/common/Hero";
import TextSection from "../../components/common/TextSection";
import MoreRoroImages from "../../components/usefulInformation/MoreRoroImages";
import RoroImages from "../../components/usefulInformation/RoroImages";
import siteMap from "../../siteMap";

const RoroShippingHowItsDone = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.roroShippingHowItsDone.title}</title>
      <meta name='description' content={siteMap.usefulInformation.roroShippingHowItsDone.description} />
    </Head>
    <Hero
      hasButton={false}
      hasMouseScroll={false}
      heading="ROLL ON, ROLL OFF SHIPPING"
      heading2="- HOW IT'S DONE"
      bgImage="/assets/images/roro.jpg"
      hasImageOpacity={true}
    />
    <TextSection
      bgColour="bg-white"
      text={[
        'There is often confusion about exactly what roll on roll off shipping is and how the process works.',
        'The best way to think of a Roll on, Roll off vessel is like a huge underground floating carpark. Vehicles are driven up a ramp and on to one of the many decks of the vessel. All vehicles are then secured from four points with lashing straps to ensure they are secure for transit.',
        'Often people have an image in their mind of an open-air barge or a ferry, although this is not the case. The cargo is not exposed to the elements in any way and modern Roll on, Roll off shipping is a very cheap and safe method of international transport.',
      ]}
      itemAlign='items-start'
      textColour="text-darkGrey"
    />
    <RoroImages />
    <MoreRoroImages />
  </>
);

export default RoroShippingHowItsDone;