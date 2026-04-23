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
          'At Willship International, we are a leading international freight forwarder and customs brokerage that provides comprehensive freight solutions to businesses across Australia and New Zealand. With over 50 years of experience in the industry, we have built a reputation for excellence and reliability.', 
          'Our team comprises driven and passionate professionals who are committed to providing the best possible service to our clients. We work closely with our clients to understand their unique needs and requirements, and provide tailored solutions that meet their specific needs. Our extensive network of carriers and suppliers ensures that we can offer competitive rates and timely delivery of goods.',
          'We are proud to have some of the best customers in the industry, ranging from one off importers and exporters, small businesses and right the way up to large companies like Baskin Robbins, Norco, and many other household names. Our commitment to quality, reliability, and customer service has earned us the trust and loyalty of our customers.',
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
          'At Willship International, we understand that freight can be complex and overwhelming. That\'s why we do our best to make freight easy for our customers. We take care of all aspects of the shipping process, from pickup to delivery, documentation, customs and quarantine clearance and much more so our clients can focus on their core business activities.', 
          'Whether you need air freight, sea freight, or courier services, our team has the expertise and experience to handle all your shipping needs. We pride ourselves on providing exceptional customer service and going above and beyond to ensure that our clients are satisfied with our services.',
          'At Willship International, we are committed to providing reliable, efficient, and cost-effective freight solutions to our clients. Contact us today to learn more about how we can help your business with all your <a href="/freight-forwarder/" title="Freight Forwarding Australia">freight needs.</a>'
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