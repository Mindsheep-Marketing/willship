import Head from "next/head";
import Hero from "../../components/common/Hero";
import TextSection from "../../components/common/TextSection";
import siteMap from "../../siteMap";

const PrepareCaravan = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.title}</title>
      <meta name='description' content={siteMap.usefulInformation.description} />
    </Head>
    <Hero
      bgImage="/assets/images/car3.png"
      hasImageOpacity={true}
      hasButton={false}
      hasMouseScroll={false}
      heading="WHAT TO PREPARE WHEN SHIPPING A CARAVAN ABROAD"
    />
    <TextSection
      heading="WHAT TO PREPARE WHEN SHIPPING A CARAVAN ABROAD"
      text={[
        'Caravan holidays are the ultimate expression of travel freedom. Being able to move around a country and park up in one of many campsites is a holiday experience unlike any other.',
        'The feeling is even more so when you are exploring a foreign country. When doing this you are able to take in a whole new world of sights, sounds, and smells that are completely unlike what you are used to in your home country.',
        'While it is possible to just rent a caravan in the country you want to vacation in, if you are going on a longer trip the expenses involved in this can quickly build up. And that is before you take into consideration things such as the personal value of using your own caravan.',
        'The problem, of course, lies in getting your caravan across the seas to your destination of choice. With a bit of preparation, and perhaps some help from the experts, the shipping process can be much easier than you perhaps first thought.',
        'Here are some things to prepare and think about when shipping your caravan abroad.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="METHOD OF SHIPMENT"
      text={[
        'Here are two possible methods of shipment when it comes to sending a vehicle abroad. These are roll-on/roll-off and container shipping.',
        'While container shipping would, in theory, be perfect for shipping a caravan for a holiday as you are able to keep things inside the vehicle, it is quite likely that your caravan will be too large to fit inside a container.',
        'If this is the case, roll-on/roll-off shipping will be your only option. The good thing is that roll-on/roll-off is usually cheaper than container shipping so while you won’t be able to store anything in the caravan, you will save yourself some money.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="CHOOSE A SUITABLE SHIPPING DATE"
      text={[
        'Shipping a caravan can take up to a week from Australia-New Zealand and around a month for Australia-UK. Because of this, it is important to choose a shipping date that fits in with your overall travel plans.'
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    
    <TextSection
      heading="DE-GAS THE FRIDGE OR AIR CONDITIONING."
      text={[
        'Depending on the age of your caravan you may need to de-gas the fridge and air-conditioning units before your caravan is allowed to board.'
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="CLEAN THE CARAVAN"
      text={[
        'You must make sure to clean your caravan before sending it abroad. This includes all cobwebs, grass clippings, and any seed or plant matter. As well as making your caravan look in tip-top condition, the port authority can block a dirty vehicle from loading onto a ship.'
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="CHECK THE CUSTOMS/IMPORT FEES AND PROCEDURE"
      text={[
        'Customs fees vary depending on the country you are planning to visit.',
        'Assuming your trip will last for less than twelve months, many countries such as Australia and New-Zealand allow you to get a ‘Carnet de Passage en Douane’. This document allows people who are staying in the country temporarily to forgo customs/import fees.',
        'However, you should apply for this before you travel to make sure your journey goes without a hitch.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
    <TextSection
      heading="CHECK THE SPECIFIC REGISTRATION REQUIREMENTS OF THE COUNTRY YOU ARE GOING TO."
      text={[
        'If you are just traveling temporarily, it is often possible to forgo registering your caravan in the new country.',
        'For example, caravans that are registered in Australia for the duration of the trip don’t need to be registered in New-Zealand. However, you should make sure to check the specific requirements of the country you are visiting as well as the length of time you are staying for.',
        'That is all for our guide of what you should prepare when planning to ship your caravan abroad. A caravanning holiday in a foreign country is a great experience that should not be avoided just because of the perceived difficulty of shipping a caravan.',
        'If you are looking to ship a caravan or camper trailer to New Zealand you can view this link for more detailed information.',
      ]}
      textColour='text-darkGrey'
      bgColour="bg-white"
      itemAlign="items-start"
    />
  </>
);

export default PrepareCaravan;