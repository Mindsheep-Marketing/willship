import Head from "next/head";
import Hero from "../../components/common/Hero";
import siteMap from "../../siteMap";
import BlogText from "../../components/common/blog/BlogText";
import BlogImageAndText from "../../components/common/blog/BlogImageAndText";

const TopRoroShippingDestinations = () => (
  <>  
    <Head>
      <title>{siteMap.usefulInformation.topRoroShippingDestinations.title}</title>
      <meta name='description' content={siteMap.usefulInformation.topRoroShippingDestinations.description} />
    </Head>
    <Hero
      heading={siteMap.usefulInformation.topRoroShippingDestinations.title}
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/blog/23911-2-min.jpg'
      hasImageOpacity={true}
    />
    <BlogText
      textColour="text-darkGrey"
      bgColour="bg-White"
      text={[
        'In the vast ocean of international logistics, roro shipping sails as a pivotal player. For those not acquainted with the term, "roro" stands for roll-on/roll-off, a method uniquely tailored for the transportation of wheeled cargo, such as cars, trucks, and heavy equipment. As the demand for such services continues to rise, it\'s worth taking a moment to dive deep into the top roro shipping destinations and routes that dominate this sector.',
        'With its roots firmly anchored in efficiency and simplicity, roro shipping is favoured by many businesses globally. The method allows vehicles to be driven directly onto the ship and off again, eliminating the need for complex loading and unloading procedures. But where, exactly, are these vessels headed?',
        'One prime destination on the roro shipping map is the busy ports of Northern Europe. With bustling hubs like Rotterdam and Hamburg, this region witnesses a steady inflow and outflow of wheeled cargo. Asia, with its rapidly expanding automotive industry, is not far behind. Ports in Japan, South Korea, and Singapore have become integral stops for roro vessels.',
        'Then, there\'s the significant player down under: Australia. With its vast coastline and ever-growing automotive demands, Australia is both a key destination and a departure point. Ports like those in Brisbane and Melbourne are often buzzing with roro shipping activities.',
        'Of course, the intricate web of roro shipping routes doesn\'t end here. The expansive stretches between North America and Europe, as well as the corridors connecting Asia and Africa, play a crucial role in this domain.',
        'The landscape of roro shipping is vast and varied. As global trade dynamics evolve, these routes and destinations might shift, but the significance of roro shipping in international logistics remains unwavering. For businesses, staying attuned to these primary arteries of wheeled cargo transport can pave the way for smoother, more efficient operations.',
        '<a href="/contact-us" title="Contact us" style="text-decoration: underline;">Contact</a> Willship International today for more information.',
    ]}
    />
  </>
);

export default TopRoroShippingDestinations;