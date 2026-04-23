import WhiteWithIcons from "../common/WhiteWithIcons";

const WeTakeCareOfEntireJourney = () => (
  <WhiteWithIcons
    data={{
      heading: 'We Take Care Of The Entire Journey',
      trailingText: [
        '*Some of these are optional...'
      ],
      items: [
        {image: '/assets/images/icons/white-page.svg', text: 'Supporting you to get all key documents together'},
        {image: '/assets/images/icons/white-globe.svg', text: 'Organizing the international shipping from start to finish'},
        {image: '/assets/images/icons/white-shield.svg', text: 'Clearing your car through customs'},
        {image: '/assets/images/icons/white-ribbon.svg', text: 'On road registration at your destination country*'},
      ]
    }}
    width="w-1/6"
    bgColour="bg-darkBlue"
    headingColour="text-white"
    textColour="text-white"
  />
);

export default WeTakeCareOfEntireJourney;