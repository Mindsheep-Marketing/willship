import Head from "next/head";
import ShowBlogs from "../../components/commercial/ShowBlogs";
import HaveAnyQuestions from "../../components/common/HaveAnyQuestions";
import Hero from "../../components/common/Hero";
import Testimonials3 from "../../components/common/Testimonials3";
import YouTubeGrid from "../../components/commercial/EducationHubVideos";
import NewsLetter from "../../components/commercial/Newsletter";
import siteMap from "../../siteMap";

const additionalButtons = [
  { name: 'Watch', link: '#watch' },
  { name: 'Read', link: '#read' },
  { name: 'Success Stories', link: '#success-stories' },
  // Add more buttons as needed
];

const EducationHub = () => (
  
  <>
    <Head>
      <title>{siteMap.commercial.freightBlog.title}</title>
      <meta name='description' content={siteMap.commercial.freightBlog.description} />
    </Head>
    
    <Hero
      heading="Education Hub"
      subHeading="Whether you are a first time importer or a seasoned logistics expert, Willship's Educational Hub stands as the #1 destination for all things importing, exporting, and logistics in Australia. Our goal is to keep our customed well-informed and ahead of the curve with daily updates on the latest trends and developments in the shipping insdustry."
      hasButton={false}
      additionalButtons={additionalButtons}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-blog.jpg'
      hasImageOpacity={true}
      hasMinHeight={true}
    />
    <span id='watch'/>

    <YouTubeGrid
      data={[
        { 
          title: 'Importing Goods to Australia? Why You Need a Freight Forwarder',
          link: 'https://www.youtube.com/watch?v=ttUmvYyfveE'
        },
        { 
          title: 'Selling Internationally? Here\'s Why Should You Use a Freight Forwarder',
          link: 'https://www.youtube.com/watch?v=Gg7jw9KXHyU'
        },
        { 
          title: 'What can Willship ship?',
          link: 'https://www.youtube.com/watch?v=3ClBAK7oLO4'
        },
        { 
          title: 'How long does it take to ship something overseas?',
          link: 'https://www.youtube.com/watch?v=7cKIyFqy1xs'
        },
        { 
          title: 'Is it safe to ship my car overseas?', 
          link: 'https://www.youtube.com/watch?v=rehh1a32-yQ'
        },
        { 
          title: 'What documentation is required to ship a car?',
          link: 'https://www.youtube.com/watch?v=9COzRltwPuY'
        },
        { 
          title: 'How does customs clearance work?', 
          link: 'https://www.youtube.com/watch?v=-c1pIlt72-w'
        },
      ]}
    />
    
    <span id='read'/>
    <ShowBlogs subHeading={true} />
    <span id='success-stories'/>
    <ShowBlogs title='Success Stories' directory="success-stories" bg='bg-white'/>
    <NewsLetter />
    <Testimonials3 />
    <HaveAnyQuestions />
  </>
);

export default EducationHub;