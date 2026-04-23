import Head from "next/head";
import ShowBlogs from "../../../components/commercial/ShowBlogs";
import HaveAnyQuestions from "../../../components/common/HaveAnyQuestions";
import Hero from "../../../components/common/Hero";
import Testimonials3 from "../../../components/common/Testimonials3";
import siteMap from "../../../siteMap";

const SuccessStories = () => (
  <>
    <Head>
      <title>{siteMap.commercial.successStories.title}</title>
      <meta name='description' content={siteMap.commercial.successStories.description} />
    </Head>
    <Hero
      heading="Success Stories"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-blog.jpg'
      hasImageOpacity={true}
      hasMinHeight={false}
    />
    <ShowBlogs directory='success-stories' />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default SuccessStories;