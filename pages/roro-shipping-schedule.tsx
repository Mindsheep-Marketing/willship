import Head from "next/head";
import Hero from "../components/common/Hero";
import RoroBlurb from "../components/roroSchedule/RoroBlurb";
import RoroLinksList from "../components/roroSchedule/RoroLinksList";
import RoroScheduleGenerator from "../components/roroSchedule/RoroScheduleGenerator";
import siteMap from "../siteMap";

const RoroSchedule = () => (
  <>
    <Head>
      <title>{siteMap.roroSchedule.title}</title>
      <meta name='description' content={siteMap.roroSchedule.description} />
    </Head>
    <Hero
      heading="ROLL ON ROLL OFF (RORO)"
      heading2="SHIPPING SCHEDULE"
      hasButton={false}
      hasMouseScroll={false}
      bgImage="/assets/images/roro.jpg"
      hasImageOpacity={true}
    />
    <RoroBlurb />
    <RoroLinksList />
    <RoroScheduleGenerator />
  </>
);

export default RoroSchedule;