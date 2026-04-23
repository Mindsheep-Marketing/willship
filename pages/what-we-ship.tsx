import Head from "next/head";
import WhatWeCanShip from "../components/Automotive/WhatCanWeShip";
import Hero from "../components/common/Hero";
import Testimonials10 from "../components/common/Testimonials10";
import VehicleFAQ from "../components/FAQs/VehicleFAQ";
import siteMap from "../siteMap";

const WhatWeShip = () => (
  <>
    <Head>
      <title>{siteMap.whatWeShip.title}</title>
      <meta name='description' content={siteMap.whatWeShip.description} />
    </Head>
    <Hero
      heading="AUTOMOTIVE INTERNATIONAL SHIPPING"
      hasButton={false}
      hasMouseScroll={false}
      bgImage="/assets/images/bg-ship3.jpg"
    />
    <WhatWeCanShip />
    <Testimonials10 />
    <VehicleFAQ />
  </>
);

export default WhatWeShip;