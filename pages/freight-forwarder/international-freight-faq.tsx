import Head from "next/head";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import Testimonials3 from "../../components/common/Testimonials3";
import CommercialFAQ from "../../components/FAQs/CommercialFAQ";
import siteMap from "../../siteMap";

const FreightFaq = () => (
  <>
    <Head>
      <title>{siteMap.commercial.internationalFreightFaq.title}</title>
      <meta name='description' content={siteMap.commercial.internationalFreightFaq.description} />
    </Head>
    <Hero
      heading="HAVE QUESTIONS?"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-faq.jpg'
      hasImageOpacity={true}
      hasMinHeight={true}
    />
    <CommercialFAQ />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default FreightFaq;