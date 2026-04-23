import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import BlogText from "../../components/common/blog/BlogText";
import BlogImageAndText from "../../components/common/blog/BlogImageAndText";

const OptionsForInternationalCarShipping = () => (
  <>  
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="Exploring Options for International Car Shipping"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/blog/23628-5-min.jpg'
      hasImageOpacity={true}
    />
    <BlogText
      textColour="text-darkGrey"
      bgColour="bg-White"
      text={[
        'Shipping a car overseas can present a variety of logistical challenges, but with the right knowledge and support, it can be a smooth process. For those looking to import a car internationally or simply move a car overseas, understanding the available shipping options is a crucial first step',
        'Two of the most popular methods for shipping cars internationally are roll-on/roll-off (RoRo) and container shipping. Both offer unique advantages and can be tailored to meet the specific needs of each import car operation.',
        'RoRo shipping is often the preferred choice for those looking to import a car in a cost-effective and efficient manner. In this method, vehicles are driven directly onto the ship at the point of origin and driven off at the destination. This simplifies the loading and unloading process, reducing handling costs. It’s an especially suitable method for operable vehicles and offers the quickest shipping time.',
        'Alternatively, container shipping offers an extra layer of protection, making it the preferred choice for high-value vehicles. When you choose to import a car via container shipping, it is securely placed within a steel container, offering increased security and protection from the elements during the journey. While this method can be slightly more expensive than RoRo, the added peace of mind is often worth the investment for valuable vehicles.',
        'Whether you choose RoRo or container shipping to import a car depends largely on the specific needs and circumstances of the shipment. Factors such as the value of the car, the destination, and personal preferences all play a role in determining the best shipping method.',
        'In conclusion, shipping a car internationally requires careful consideration and planning. By understanding the available options, you can make the right choice to ensure your vehicle arrives safely and in pristine condition at its new home. Willship International, as a leading freight forwarder, is here to guide you through each step of the process, providing expert advice and personalised service for all your car import needs.',
      ]}
    />
  </>
);

export default OptionsForInternationalCarShipping;