import AutoQuoteButton from "../../components/common/AutoQuoteButton";
import Hero from "../../components/common/Hero";
import SectionSection from "../../components/common/SectionSection";
import TextSection from "../../components/common/TextSection";

const BestWayToShipMuliple = () => (
  <>
    <Hero
      hasButton={false}
      hasMouseScroll={false}
      heading="BEST WAY TO SHIP MULTIPLE CARS OVERSEAS"
      bgImage="/assets/images/bg-best.jfif"
      hasImageOpacity={true}
    />
    <TextSection
      bgColour="bg-white"
      textColour="text-darkGrey"
      text={[
        'Perhaps you are moving home, perhaps you are a car dealership who has just taken a big order from one client, whatever the reason shipping multiple cars to one destination brings up its own set of challenges.',
        'However, the main choice is essentially the same as if you were shipping a single vehicle. That is, whether to ship via the Roll-on/Roll-off shipping method or the container shipping method.',
        'Both methods have their upsides and downsides so please read on to find out about each shipping method.',
      ]}
      itemAlign='items-start'
    />
    <TextSection
      heading="ROLL-ON/ROLL-OFF"
      text={[
        'Roll-on/Roll-off is generally a great way to ship a car. It is a fairly easy and cost-effective way to send you car overseas.',
        'However, when it comes to shipping multiple cars, there are a couple of extra things to take into consideration when thinking about Roll-on/Roll-off shipping.',
        'First is the basic problem of how to drop your car off at your shipping company. If you are just shipping one car, it is simple enough to drive it in. Shipping two cars, on the other hand, means either making multiple trips or using a car carrier trailer. Whether this a good idea for you will depend on a number things including your budget and how far you live from your shipping company.',
        'As well as this, you should remember that while Roll-on/Roll-off shipping is generally the cheapest option for shipping your car, every car that you add will increase the cost. This means that if you ship three or four cars, the price will be three or four times as much as if you just ship one car.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="CONTAINER SHIPPING"
      text={[
        'This brings us to the main advantage of container shipping. If you choose to use the container shipping method, you will be able to ship up to four cars (depending on their size and the origin location) in a container, and include contents or spare parts for no additional cost.',
        'You will also get the extra benefits of container shipping such as a higher number of potential destinations and a slight reduction in the chance of superficial damage to your car. This can also be beneficial if you are planning to ship high value cars.',
        'When it comes to down to which method of shipping is best for you, the main factor will likely be the overall price. We’ve written another article to help you better understand which shipping method would be best for you visit this link. To get a quote or to find out more information about which is the best shipping method for your needs please don’t hesitate to contact Willship. You can give us a call on (61) 7 3267 3694 or email us at info@willship.com.au to discuss your requirements.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <SectionSection>
      <AutoQuoteButton />
    </SectionSection>
  </>
);

export default BestWayToShipMuliple;