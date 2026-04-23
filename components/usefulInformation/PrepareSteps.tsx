import Image from "next/image";

const data1 = {
  heading: 'WASH YOUR CAR',
  image: '/assets/images/prepare/wash.png',
  text: [
    'First off you should wash your car. As well as making sure your car arrives at its new destination looking in tip top condition, this also has a number of practical uses.',
    'Many countries will not allow cars to enter if they are unclean as they could have plant material or insects that could have a negative effect on the local environment. Not washing your car can cause the vehicle to fail its quarantine inspection upon arrival and can lead to additional cleaning and re-inspection costs and delays.',
    'So, make sure you thoroughly clean any grass, cobwebs and other plant material from your car before it gets shipped.',
    'Unfortunately, there is no way to ‘guarantee’ the vehicle will pass its inspection in NZ, it always comes down to the officers discretion on the day so you just need to do the best you can to get it clean, and then cross your fingers it passes its inspection.',
  ]
};

const data2 = [
  {
    heading: 'REMOVE ITEMS FROM INSIDE YOU CAR',
    image: '/assets/images/prepare/remove.png',
    text: [
      'This checkpoint only applied when shipping via roll on, roll off…When your car gets shipped using this method there can be no personal goods inside your car. Because of this make sure to remove everything from your car, trunk and glove compartment. Things that belong with the vehicle, like logbooks etc can remain with the car.'
    ]
  },
  {
    heading: 'REMOVE OR SECURE ANY LOOSE PARTS',
    image: '/assets/images/prepare/parts.png',
    text: [
      'If your car has any removable parts such as bike racks, antennas etc make sure you remove or fully secure them before your shipping date.'
    ]
  },
  {
    heading: 'EMPTY YOUR GAS TANK',
    image: '/assets/images/prepare/gas.png',
    text: [
      'This only applies if you choose to ship the vehicle inside a container. To meet dangerous goods regulations we need to ensure the vehicle has minimal fuel, and the battery is disconnected. If choosing to ship via roll on, roll off then the vehicle can contain any amount of fuel. See the differences between roll-on / roll-off sand container shipping here.'
    ]
  },
  {
    heading: 'MAKE SURE YOU HAVE AN EXTRA SET OF KEYS',
    image: '/assets/images/prepare/keys.png',
    text: [
      'While not 100 percent necessary it is good practice to make sure you have a spare set of keys. As you will be leaving one set with your car it is always nice to have an extra set just in case something happens to the ones you left with the car.'
    ]
  },
]

const PrepareSteps = () => (
  <section className="w-full flex flex-col items-center px-4 py-12">
    <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-row items-start gap-8 p-4 lg:p-10">
        <div className="w-1/4 aspect-square relative">
          <Image src={data1.image} layout='fill' objectFit='contain' alt='Prepare Your Car' />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col items-start gap-2">
          <h4 className="text-darkBlue font-medium text-lg">
            {data1.heading}
          </h4>
          {data1.text.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-8 p-4 lg:p-10">
        {data2.map((item, i) => (
          <div key={i} className="w-full flex flex-row items-start gap-8">
            <div className="w-1/4 aspect-square relative">
              <Image src={item.image} layout='fill' objectFit='contain' alt='Prepare Your Car' />
            </div>
            <div className="w-3/4 flex flex-col items-start gap-2">
              <h4 className="text-darkBlue font-medium text-lg">
                {item.heading}
              </h4>
              {item.text.map((item, j) => (
                <p key={j}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrepareSteps;