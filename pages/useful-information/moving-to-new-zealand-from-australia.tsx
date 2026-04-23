import Head from "next/head";
import Hero from "../../components/common/Hero";
import Section1 from "../../components/usefulInformation/Section1";
import WhatToConsider from "../../components/usefulInformation/WhatToConsider";
import siteMap from "../../siteMap";

const MovingToNZFromAu = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.movingFromAuToNz.title}</title>
      <meta name='description' content={siteMap.usefulInformation.movingFromAuToNz.description} />
    </Head>
    <Hero
      heading="Moving To New Zealand From Australia"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/ship4.jfif'
      hasImageOpacity={true}
    />
    <Section1 />
    <WhatToConsider />
  </>
);

export default MovingToNZFromAu;