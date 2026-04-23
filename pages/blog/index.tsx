import Head from "next/head";
import ShowBlogs from "../../components/blog/ShowBlogs";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import Testimonials3 from "../../components/common/Testimonials3";
import siteMap from "../../siteMap";

const FreightBlog = () => (
  <>
    <Head>
      <title>{siteMap.blog.title}</title>
      <meta name='description' content={siteMap.blog.description} />
    </Head>
    <Hero
      heading="Blog"
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