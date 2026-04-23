import Head from "next/head";
import Hero from "../../components/common/Hero";
import TextSection from "../../components/common/TextSection";
import siteMap from "../../siteMap";

const ShipClassicCar = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      heading="HOW TO SAFELY SHIP A CLASSIC CAR OVERSEAS"
      hasButton={false}
      hasMouseScroll={false}
      bgImage='/assets/images/car3.png'
      hasImageOpacity={true}
    />
    <TextSection
      heading="HOW TO SAFELY SHIP A CLASSIC CAR OVERSEAS"
      text={[
        'Classic cars are often more than just a car to their owners. They are prized possessions that come with their own individual histories and huge sentimental value.',
        'As well as this they often have individual quirks and requirements that only their owner or a classic car specialist has knowledge about.',
        'Because of this unique set of conditions, shipping your classic car overseas is a different challenge when compared to shipping a regular car.',
        'It also means that the utmost care must be taken to ensure they are delivered safely.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
      itemAlign="items-start"
    />
    <TextSection
      heading="SHIPPING METHOD"
      text={[
        'Normally when choosing to ship your car overseas you have two choices; roll-on/roll-off shipping and container shipping.',
        'However, when shipping a classic car it can be advantageous to choose container shipping.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
      itemAlign="items-start"
    />
    <TextSection
      heading="WHY ROLL-ON/ROLL-OFF SHIPPING IS NOT THE BEST OPTION FOR SHIPPING CLASSIC CARS."
      text={[
        'With roll-on/roll-off shipping your car will be quite simply driven (or towed) straight onto the ship using its own wheels. It is then tied down into what essentially looks like a giant floating car park.',
        'There are a number of problems with this way of shipping when it comes to classic cars.',
        'Firstly unless your car is in absolute tip top condition, classic cars are not the most dependable. This means that when it comes to driving your car onto the ship if your car fails to start it could lead to delays and possibly even your car being unable to load.',
        'Furthermore, while you are likely an expert who knows all the little quirks of your car, the employees of the ocean line are more likely to be familiar with modern cars which can compound the problem.',
        'As well as this, small problems your car may have that may be ok for general use of the car on the roads, (leaks, wiring etc), could turn out to be a liability risk for the liner. If it turns out that this is the case it will also cause problems and delays when trying to board the ship.',
      ]}
      bgColour='text-white'
      textColour="text-darkGrey"
      itemAlign="items-start"
    />
    <TextSection
      heading="WHY IS CONTAINER SHIPPING BETTER FOR CLASSIC CARS?"
      text={[
        'Container shipping is a better option for classic cars because before boarding they are safely tied down inside a shipping container.',
        'This means that any slight problems with the way the car runs will not matter as from the moment the car is inside the container it does not need to be moved.',
        'The container is simply placed onto the liner and sent on its way. The fact that the car is never out of its container on the ship also minimizes the chance of any issues.',
        'Here is some more information about the difference between roll on roll off (RORO) shipping and container shipping.',
      ]}
      bgColour='bg-white'
      textColour="text-darkGrey"
      itemAlign="items-start"
    />
    <TextSection
      heading="CHOOSE A SHIPPING COMPANY WITH EXPERIENCE IN SHIPPING CLASSIC CARS."
      text={[
        'Of course no matter which method of shipping you choose, if the company you pick doesn’t have experience with shipping classic cars problems could still arise.',
        'The company you pick must have the knowledge and the experience of classic car shipping to ensure that nothing goes wrong with the shipment. As well as this they must have all the tools that a classic car needs.',
        'If you are thinking of shipping a classic car abroad, we hope this article has been a good introduction into some of the things you need to think about.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
  </>
);

export default ShipClassicCar;