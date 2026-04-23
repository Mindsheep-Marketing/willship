import Head from "next/head";
import LeadershipTeam from "../components/about/LeadershipTeam";
import MissionStatement from "../components/about/MissionStatement";
import QuoteLinks from "../components/about/QuoteLinks";
import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import ImageAndText from "../components/common/ImageAndText";
import Testimonials3 from "../components/common/Testimonials3";
import VideoAndText from "../components/common/VideoAndText";
import WhiteWithIcons from "../components/common/WhiteWithIcons";
import Services from "../components/home/Services";
import siteMap from "../siteMap";

const About = () => {

  return (
    <>
      <Head>
        <title>{siteMap.about.title}</title>
        <meta name='description' content={siteMap.about.description} />
      </Head>
      <Hero
        bgImage='/assets/images/bg-about.jpg'
        heading='TRUSTED BY SOME OF AUSTRALIA&apos;S LARGEST BRANDS, WILLSHIP SAFELY SHIPS BILLIONS IN CARGO ANNUALLY' 
        buttonLink={siteMap.contact.path}
        buttonText="Contact Us"
        hasButton={true}
        hasMouseScroll={false}      
      />
      <VideoAndText
        heading='About Us'
        bgImage="/assets/images/team1.png"
        hasRequestQuote={false}
        requestQuoteLink='/'
        requestQuoteText=""
        imageAlt="Willship International"
        videoSide="right"
        theme="light"
        precedingParagraphs={[
          'We work out effective solutions for individuals, families, and business’s who are trying to navigate the complex world of international logistics.', 
          'We are always looking for ways we can make improvements in the current supply chain and how we can assist in cutting costs and lead times through effective freight management.',
          'This industry needed disrupting and we are proud to be shaking off the shackles and making international shipping EASY for our customers.',
        ]}
        videoId='p1ish6J1wJY'
      />
      <ImageAndText
        heading="We&apos;re Here For You"
        hasSubHeading={false}
        hasRequestQuote={false}
        requestQuoteLink=''
        requestQuoteText=""
        imageSide="left"
        imageAlt="background image"
        imageSrc="/assets/images/welcome-background-3.jpg"
        precedingParagraphs={[
          'As one of Australia’s leading freight forwarders, we’re committed to providing ongoing support, strategy, and solutions that make your life EASIER. Because when you succeed, so do we.', 
          'We like to think of ourselves as more than just freight forwarders, we feel that freight consultants or logistics strategists would be a more accurate description of what we do. Because we take the time to make sure it’s as EASY for you as humanly possible!'
        ]}
        listType='list-disc'
        theme='dark'
      />
      <MissionStatement />
      <Services />
      <WhiteWithIcons
        width="w-1/4"
        bgColour="bg-nearlyWhite"
        data={{
          heading: 'Why Work With Willship?',
          items: [
            {
              text: 'Problem Solving',
              image: '/assets/images/reasons/brain.svg'
            },
            {
              text: 'Experienced Team',
              image: '/assets/images/reasons/headphones.svg'
            },
            {
              text: 'World-wide Connections',
              image: '/assets/images/reasons/world2.svg'
            }
          ]
        }}
      >
        <div className="w-full max-w-4xl text-darkGrey text-xl">
          <p>
            If problems arise, our staff have the experience to find the solutions. And it doesn&apos;t hurt to have contacts and relationships extending around the globe.
          </p>
        </div>
      </WhiteWithIcons>
      <LeadershipTeam />
      <QuoteLinks />
      <Testimonials3 />
      <HaveAnyQuestions />
    </>
  );
};

export default About;