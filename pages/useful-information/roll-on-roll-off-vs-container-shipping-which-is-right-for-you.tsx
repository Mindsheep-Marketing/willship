import AutoQuoteButton from "../../components/common/AutoQuoteButton";
import Hero from "../../components/common/Hero";
import SectionSection from "../../components/common/SectionSection";
import TextSection from "../../components/common/TextSection";

const RoroVContainer = () => (
  <>
    <Hero
      heading="ROLL-ON/ROLL-OFF VS CONTAINER SHIPPING:"
      heading2=" WHICH IS RIGHT FOR YOU?"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/bg-roro2.jfif'
      hasImageOpacity={true}
    />
    <TextSection
      heading="SHIPPING OPTIONS"
      text={[
        'When looking to ship your car overseas you will likely come across the shipping terms Roll-on/Roll-off and container shipping. But what exactly are these two methods of shipping? And which is the correct one for you?',
        'In this article, we will look at exactly what you can expect from each type of shipping, as well as analyse their advantages and disadvantages. This will help you make an informed decision about how exactly you should ship your car when sending it internationally.',
      ]}
      bgColour='bg-white'
      textColour="text-grey"
    />
    <TextSection
      heading='ROLL-ON/ROLL-OFF'
      text={[
        'Roll-on/Roll-off (often written as RoRo) is generally the simplest way to ship cars, motorbikes, trucks or any other kind of wheeled cargo. It is fast, efficient and the most cost-effective method of transporting a car or similar cargo.',
        'As you may have guessed from the name, Roll on, Roll off (RoRo) ships are designed so that cars and other vehicles can be driven or towed directly onto the ship using their own wheels. Once on board, they are safely secured to the deck of the ship in a wind and watertight vessel – picture it like a huge underground carpark. Click here to see what the inside of a Roll on, Roll off vessel looks like.',
        'RoRo is the ideal mode of transport if you’re just looking to move an empty vehicle on its own, it’s far cheaper than container shipping, although the downside to shipping via this method is that you are not allowed to include any personal effects along with your cargo, it needs to be completely empty except for things like spare tyres / jacks / log books etc – all these are treated as ‘part of the vehicle’ and can travel with the car as they normally would in everyday use.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <TextSection
      heading="20ft / 40ft SHIPPING CONTAINER"
      text={[
        'If you are moving abroad you may have extra items, tools, equipment or furniture that you need to send across as well as your car then it can be worth while getting a 20ft or 40ft shipping container and filling it up with your car and other personal items.',
        'At Willship, we commonly use 20ft shipping containers to move vehicles. Once a vehicle is loaded into a 20ft container there is often still enough room for a chest of draws or a few boxes of personal belongings. You can also fill your vehicle with whatever you like as long as you keep a list of the contents. If you would like to see what you can fit inside a 20ft container please click here to view our article on how much space is inside a 20ft container.',
        'Shipping a car in a container is the safest option and the preferred option for valued vehicles as it is least likely to incur any damage during transit. However container shipping is the more expensive option to move your car.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <TextSection
      heading='CONSOLIDATED CONTAINER SERVICE'
      text={[
        'A consolidated container is when you share a 40ft container with someone else who is going between the same origin and destination as you, at roughly the same time. The benefit of this method of shipping is that you often use the space equivalent to a 20ft container for a much lower cost point. This means you can ship personal effects along with the vehicle without having to bear the cost of a 20ft container all to yourself.',
        'The downside of this option is that it’s difficult to be time specific, if you need the vehicle and personal goods within a set time-frame then this method of shipping is not for you. In order to utilise this consolidated option we need to wait until we have someone else going between the same locations, who are looking to ship around the time as you. Because of this, we can only offer consolidated serviced on the most popular routes (eg: Brisbane / Sydney / Melbourne to Auckland) otherwise the wait to find enough cargo would be far too long. Since are in the midst of COVID-19 the shared container services are now also less frequent as people are having difficulty moving Internationally but we can still make things work as long as you are able to be flexible with your timing.',
        'If timing isn’t a huge concern of yours, going for this option can save you around 30% of the cost of getting your own 20ft container, which can equate to well over $1000 depending on your port combination.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <TextSection
      heading='CONCLUSION'
      text={[
        'All in all the shipping method you choose will eventually come down to your own personal circumstances. If you are sending a car and you want the cheapest option then RoRo will be the method for you.',
        'On the other hand, if you are shipping many items together or have a high value car, then it could turn out that container shipping or a consolidated container service is the way to go.',
        'Shipping your vehicle or personal belongings with Willship is easy and straight-forward. We can help you ship a car, motorhome, motorcycle, caravan, boat or any other vehicle. Moving overseas can be an overwhelming process without the right help, so give us a call today on (61) 7 3267 3694 or enquire online to find out how we can help you!',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
    />
    <SectionSection>
      <AutoQuoteButton />
    </SectionSection>
  </>
);

export default RoroVContainer;