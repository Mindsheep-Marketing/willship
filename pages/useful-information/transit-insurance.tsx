import Head from "next/head";
import Image from "next/image";
import BlogList from "../../components/common/blog/BlogList";
import Hero from "../../components/common/Hero";
import TextSection from "../../components/common/TextSection";
import RisksInclude from "../../components/usefulInformation/RisksInclude";
import siteMap from "../../siteMap";

const TransitInsurance = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="TRANSIT INSURANCE – WHAT IT IS AND WHY IT’S IMPORTANT"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-insurance.jfif'
      hasImageOpacity={true}
    >
      <div className="w-full flex flex-col text-xl leading-none gap-4 px-4">
        <p>
          All Risk Cargo Transit insurance protects your goods while in transit.
        </p>
        <p>
          It’s estimated that 30-50 billion dollars is lost annually due to cargo damage and losses as a result of marine, air and land incidents.
        </p>
      </div>
    </Hero>
    <RisksInclude />
    <BlogList
      text={[
        'Here at Willship, we work directly with Insurer NTI Marine Protect and Citycover Insurance Brokers to provide the best transit cover in the freight forwarding industry.',
        'The NTI Marine Protect Policy provides is Full Accidental Damage Cover.',
        'The policy covers loss or damage to goods in transit in Australia or imports/exports to and from Australia.',
        'Modern-day shipping is very safe and claims are rare but for the sake of a few hundred dollars, it could be well worth having the peace of mind to know you are protected.',
        'It is effective from the moment Willship take control of the client&apos;s goods (usually on pick up or drop off at a depot) until we relinquish control of the goods, usually when the client receives the goods, or if they organise their own transport to collect the goods our policy will end when their transporter takes control of the goods.',
        'The policy price will be 1.25% of your chosen value + shipping costs, minimum policy price is AUD 325. There is an excess of AUD 500, this is not an upfront payment, it will be deducted from the total claim amount should you need to go down this path.',
        'Whilst transit insurance is completely optional, Willship would always recommend taking out a policy to ensure you are covered in the event of damage or loss.',
        'In the unfortunate event of a claim, you are fully supported by Citycover’s 24 hour claims services, who is your claims advocate to ensure you get your full entitlement.',
        'Policy terms & conditions apply. Please contact us at Willship for a quote and/or a copy of the PDS.',
      ]}
    />
    <section className="w-full py-12 relative px-4">
      <div className="mx-auto w-full max-w-5xl text-center text-white font-medium text-2xl">
        IF YOU WOULD LIKE TO SPEAK FURTHER ABOUT TRANSIT INSURANCE OR WOULD LIKE A COPY OF THE POLICY INFORMATION THEN PLEASE CONTACT US DIRECTLY ON (61) 7 3267 3694, OR ENQUIRE ONLINE AND WE CAN SEND IT THROUGH.
      </div>
      <div className="absolute -z-10 w-full h-full top-0 left-0">
        <Image src='/assets/images/bg-insurance2.jfif' layout="fill" objectFit='cover' alt='Insurance' />
      </div>
    </section>
  </>
);

export default TransitInsurance;