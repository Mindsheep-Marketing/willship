import Head from "next/head";
import Image from "next/image";
import Button from "../../components/common/Button";
import CrateSizeSelector from "../../components/common/CrateSizeSelector";
import Flags from "../../components/common/Flags";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import SectionHeading from "../../components/common/SectionHeading";
import SectionSection from "../../components/common/SectionSection";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import siteMap from "../../siteMap";
import Calcumate from "../../components/crates/Calcumate";
import { useRouter } from "next/router";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import CratesFAQ from "../../components/FAQs/CratesFAQ";
import useIsSmall from "../../utils/hooks/useIsSmall";

const Crates = () => {

  const router = useRouter().query;
  const {showCratesQuote} = useContext(ModalContext);
  const isSmall = useIsSmall();

  router.quote === 'true' && showCratesQuote(true);

  return (
    <>
      <Head>
        <title>{siteMap.crates.title}</title>
        <meta name='description' content={siteMap.crates.description} />
      </Head>
      <Hero
        heading="MOVING TO NEW ZEALAND?"
        subHeading="Our International crate shipping service is a faster, cheaper, and better way to move your personal items across the Tasman"
        bgImage="/assets/images/crates/open-crates.jpg"
        hasMinHeight={true}
        hasImageOpacity={true}
        hasMouseScroll={false}
        hasButton={true}
        buttonLink={siteMap.crates.cratesQuote.path}
      />
      <SectionSection>
        <SectionHeading
          text="Our Easy Process"
        />
        <div className="w-full aspect-video relative my-8 lg:my-0">
          <Image src={isSmall ? '/assets/images/crates/path-medium.png' : '/assets/images/crates/path-large.png'} objectFit="contain" layout="fill" alt='Willship Crates' />
        </div>
        <Button
          buttonText="Get An Instant Quote"
          linkTo={siteMap.crates.cratesQuote.path}
          theme="redBlue"
          width="w-full max-w-sm"
        />
      </SectionSection>
      <CrateSizeSelector />
      {/* <Calcumate />       */}
      <WhiteWithIcons
        width="w-1/5"
        data={{
          heading: 'Why Choose Willship?',
          items: [
            {
              image: '/assets/images/crates/icons/map.svg',
              text: 'Australia & NZ owned and operated company',
              subText: 'You’ll be supporting a local business'
            },
            {
              image: '/assets/images/crates/icons/na.svg',
              text: 'No hidden charges or unquoted extraʼs',
              subText: 'We hate that stuff'
            },
            {
              image: '/assets/images/crates/icons/timer.svg',
              text: 'MUCH faster than international removalists',
              subText: '2-3 months to New Zealand? Pfft, not with us'
            },
            {
              image: '/assets/images/crates/icons/money.svg',
              text: 'MUCH cheaper than international removalists!',
              subText: 'Who doesn’t love saving a few dollars?'
            },
            {
              image: '/assets/images/crates/icons/star.svg',
              text: 'Ongoing exceptional 5 star reviews',
              subText: 'Passionate about the best possible customer service'
            },
            {
              image: '/assets/images/crates/icons/trophy.svg',
              text: 'Award winning business and team',
              subText: 'Consistently nominated for industry awards for excellence, innovation and customer service'
            },
            {
              image: '/assets/images/crates/icons/tree.svg',
              text: 'We plant trees!',
              subText: 'We plant 10 tree’s for every crate we build. We aim to offset our environmental impact.'
            },
            {
              image: '/assets/images/crates/icons/heart.svg',
              text: 'We love to give back',
              subText: 'Booking with us will help us to support charity’s that we passionately support. '
            },
          ]
        }}
      >
        <Button
          buttonText="Get An Instant Quote"
          linkTo={siteMap.crates.cratesQuote.path}
          theme="redBlue"
          width="w-full max-w-sm"
        />
      </WhiteWithIcons>


      <ImageAndText
        heading="Available Routes"
        hasSubHeading={false}
        hasRequestQuote={false}
        requestQuoteLink={siteMap.contact.path}
        requestQuoteText='Contact Us'
        theme="dark"
        imageSide="right"
        imageSrc="/assets/images/crates/willship-crates-routes.png"
        imageAlt="Willship Crates"
        quality={100}
        precedingParagraphs={[
          'As this is a new service, we are currently building out our capacity and trade lanes. For now we offer shipping between the following locations and are working hard to introduce new routes.' 
        ]}
      >
        <>
          <Flags
            countries={[
              'au', 'nz'
            ]}
            />
          <p>Looking to ship a crate to somewhere else? We might still be able to help! Please get in touch and let us know where you’d like to go. We’ll see if we can work some magic.</p>
          <div className="h-6" />
          <Button
            buttonText="Contact Us"
            linkTo={siteMap.contact.path}
            theme='redBlue'
            width="w-full max-w-sm"
          />
        </>
      </ImageAndText>
      <section className="w-full flex flex-col items-center py-12">
        <div className="w-full max-w-6xl py-20 flex items-center justify-center relative">
          <div className="flex flex-col gap-4 bg-darkBlue/90 p-16">
            <SectionHeading text="Need Storage?" textColour="text-white" />
            <Button
              buttonText="Ask Us For A Storage Quote"
              theme="redBlue"
              linkTo={siteMap.contact.path}
            />  
          </div>
          <div className="absolute top-0 left-0 h-full w-full -z-10">
            <Image src='/assets/images/crates/need-storage.jpg' objectFit="cover" layout="fill" alt='Willship Crates' />
          </div>
        </div>
      </section>
      <CratesFAQ />
    </>
  )
};

export default Crates;