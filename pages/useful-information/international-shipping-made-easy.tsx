import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import BlogText from "../../components/common/blog/BlogText";
import BlogImageAndText from "../../components/common/blog/BlogImageAndText";

const InternationalShippingMadeEasy = () => (
  <>  
    <Head>
      <title>{siteMap.usefulInformation.internationalShippingMadeEasy.title}</title>
      <meta name='description' content={siteMap.usefulInformation.internationalShippingMadeEasy.description} />
    </Head>
    <Hero
      heading={siteMap.usefulInformation.internationalShippingMadeEasy.title}
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/blog/23714-3-min.jpg'
      hasImageOpacity={true}
    />
    <BlogText
      textColour="text-darkGrey"
      bgColour="bg-White"
      text={[
        'Navigating the complexities of international shipping can be a daunting task, whether you are a seasoned exporter or a small business trying to expand globally. Thankfully, with Willship International, the process to ship international goods can be simplified and made more efficient.',
        'First and foremost, the key to simplifying international shipping lies in partnering with an experienced and knowledgeable freight forwarder like Willship International. Their skilled team knows the ins and outs of international shipping, from documentation requirements to customs regulations. By entrusting the process to them, businesses can focus on their core operations, while leaving the complexities of shipping logistics to the experts.',
        'Another essential step in streamlining the process to ship international goods involves leveraging technology. Willship International utilises a state-of-the-art tracking system, providing real-time updates about the cargo\'s location and status. This technology not only enhances transparency but also reduces uncertainties and the stress often associated with international shipping.',
        'Understanding customs regulations of the destination country is a fundamental aspect of international shipping. Non-compliance can result in delays, penalties, or confiscation of goods. As part of its comprehensive service, Willship International ensures strict adherence to all relevant customs laws, thereby ensuring a smooth and hassle-free shipping process.',
        'Packaging also plays a critical role when you ship international goods. Willship International advises clients on the best practices for packaging to minimise damage, loss, and ensure safety during transit. Their experts meticulously handle all goods, ensuring they reach their destination in perfect condition.',
        'Simplifying the process to ship international goods should not be such a difficult task when you have the right partner. By leveraging expertise, technology, and understanding of regulations, Willship International simplifies the complexities of international shipping. As a result, businesses can focus on growth and expansion while leaving their shipping needs in capable hands.'
    ]}
    />
  </>
);

export default InternationalShippingMadeEasy;