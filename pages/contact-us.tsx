import Head from "next/head";
import Image from "next/image";
import Hero from "../components/common/Hero";
import SectionSection from "../components/common/SectionSection";
import Testimonials3 from "../components/common/Testimonials3";
import ContactDetails from "../components/contact/ContactDetails";
import siteMap from "../siteMap";

const Contact = () => (
  <>
    <Head>
      <title>{siteMap.contact.title}</title>
      <meta name='description' content={siteMap.contact.description} />
    </Head>
    <Hero
      heading="CONTACT US"
      hasButton={false}
      hasMouseScroll={false}
      bgImage="/assets/images/bg-about.jpg"
    />
    <ContactDetails />
    <div className="w-full max-w-5xl mx-auto aspect-4/3 relative my-10">
      <Image src='/assets/images/warehouse-inside-2.jpg' layout='fill' objectFit="cover" alt='Willship International' />
    </div>
    <Testimonials3 />
  </>
);

export default Contact;