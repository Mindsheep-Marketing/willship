import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Head from "next/head";
import siteMap from "../siteMap";
import Hero from "../components/common/Hero";
import TermsStatement from "../components/termsAndConditions/TermsStatement";

const TermsAndConditions = () => (
  <>
    <Head>
      <title>{siteMap.termsAndConditions.title}</title>
      <meta name='description' content={siteMap.termsAndConditions.description} />
    </Head>
    <Hero
      heading="TRADING TERMS AND CONDITIONS"
      bgImage="/assets/images/bg-terms.jfif"
      hasButton={false}
      hasMouseScroll={false}
      hasImageOpacity={true}
    />
    <TermsStatement />
    <HaveAnyQuestions />
  </>
);

export default TermsAndConditions;