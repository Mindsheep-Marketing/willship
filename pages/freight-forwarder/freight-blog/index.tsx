import Head from "next/head";
import ShowBlogs from "../../../components/commercial/ShowBlogs";
import HaveAnyQuestions from "../../../components/common/HaveAnyQuestions";
import Hero from "../../../components/common/Hero";
import Testimonials3 from "../../../components/common/Testimonials3";
import siteMap from "../../../siteMap";

const FreightBlog = () => (
  <>
    <Head>
      <title>{siteMap.commercial.freightBlog.title}</title>
      <meta name='description' content={siteMap.commercial.freightBlog.description} />
    </Head>
    <Hero
      heading="KNOWLEDGE BASE"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-blog.jpg'
      hasImageOpacity={true}
      hasMinHeight={false}
    />
    <ShowBlogs />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default FreightBlog;