import Head from "next/head";
import BlogText from "../../components/common/blog/BlogText";
import Hero from "../../components/common/Hero";
import SectionHeading from "../../components/common/SectionHeading";
import siteMap from "../../siteMap";

const HowSafeIsIt = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="HOW SECURE IS IT TO SHIP A CAR OVERSEAS?"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/car3.png'
      hasImageOpacity={true}
    />
    <BlogText
      heading='How secure is it to Ship a Car Overseas?'
      text={[
        'The short answer to this question is: <b>very secure!</b>',
        '<b>However, it is also good to understand all the risks and how we at Willship International guide you to eliminate any unwanted outcomes.</b>'
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
      >
    </BlogText>
    <SectionHeading text='CHOOSING THE RIGHT SHIPPING METHOD FOR YOU' classes="text-center"/>
    <BlogText
      heading="Container Shipping"
      text={[
        'A container vessel is a specific cargo ship that is designed to load intermodal containers. It is a very common practice to move vehicles in either a 20FT or 40 FT shipping container. When using this method of shipping you can also fill the vehicle/tray with other cargo (such as Personal Effects) and you can also use the remaining space in the container to put some additional items if applicable.',
        '<b>Container shipping is the more secure method of shipping</b>. It\'s our job at Willship International, as your chosen freight forwarder, to fully secure your vehicle in the container via a lashing method and timber dunnage. We are then responsible for locking the container. The Container will not be opened until the vessel reaches its destination and the container has been moved to a secured depot to be unpacked for Inspections. If you have high-value cargo or are worried about your vehicle being damaged, container shipping would be our recommendation.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <BlogText
      heading="Roll-On/Roll-Off Shipping"
      text={[
        'Roll-on/Roll off shipping is the most common and affordable vehicle shipping method. Everyone from car dealers and manufacturers to Ordinary people moving house or going on holiday use this shipping method to send their vehicles overseas. Your vehicle will be driven onto the ship, then tied or strapped down securely onto the deck in what looks like a giant indoor car park. While the fact that the car is driven on and off the vessel does allow for the chance of superficial damage, this is incredibly rare.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <BlogText
      bgColour="bg-white"
      heading="Are you still worried or nervous about shipping your Vehicle?"
      textColour="text-darkGrey"
      text={[
        'Willship International are an Experienced Team in Automotive shipping and are here to guide you through the process every step of the way.  We handle as much of the transit as we possibly can, however we are not able to have full control over every aspect of the process. We cannot control who the ports hire to load and unload the vessels or the staff that the quarantine cleaning facilities hire. This is why we always recommend taking out a Transit Insurance policy to ensure you are covered in the unlikely event that something should go wrong. ',
        'Purchasing Transit Insurance is always a sensible thing to do. While it won’t stop any damage to your car, it will reduce the effects that any damage to your car has on your wallet!',
      ]}
    />
  </>
);

export default HowSafeIsIt;