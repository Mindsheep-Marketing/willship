import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "../common/Button";

interface Button {
  text: string;
  linkTo: string;
  theme: 'redBlue' | 'whiteBlue'
}

const servicesData = [
  {
    heading: 'Commercial Freight',
    headingImg: '/assets/images/plane.png',
    listHeading: 'Our commercial freight division provides:',
    listItems: [
      'International Air Freight Services',
      'International Sea Freight Services - both full and partial container loads',
      'Project Logistics',
      'Customs Clearance',
      'Quarantine Clearance',
      'Order Tracking',
      'Warehousing',
      'Domestic Transportation',
    ],
    buttons: [
      {
        text: 'Get Started', 
        linkTo: "paperform",
        theme: 'redBlue'
      },
      {
        text: 'Learn More', 
        linkTo: siteMap.commercial.path,
        theme: 'blueRed'
      }
    ] as Button[]
  },
  {
    heading: 'Automotive',
    headingImg: '/assets/images/boat-side.png',
    listHeading: 'Our automotive freight division provides:',
    listItems: [
      'International door to door services for all automotive cargo - vehicles, motorcycles, caravans, motorhomes, trailer boats, and much more',
      'Guidance on all compliance and registration issues',
      'Expertise on foreign import tax laws tailored to your personal situation',
      'Full assistance with transit insurance',
      'Breakbulk and RoRo specialized shipments',
    ],
    buttons: [
      {
        text: 'Get Instant Quote', 
        linkTo: siteMap.vehicle.vehicleQuote.path,
        theme: 'redBlue'
      },
      {
        text: 'Learn More', 
        linkTo: siteMap.vehicle.path,
        theme: 'blueRed'
      }
    ] as Button[]
  }
];

const Services = () => {
  return (
    <section className="w-full py-16 flex flex-col gap-12 bg-darkBlue items-center">
      <h2 className="text-white font-medium text-forty">Our Services</h2>
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 lg:justify-center z-10 p-4 lg:p-0">
        {servicesData.map((item, i) => (
          <div key={i} className='w-full lg:w-1/2 flex flex-col bg-white relative pb-40 lg:pb-20'>
            <div className="flex flex-col relative h-56 w-full items-center justify-center">

                <Image src={item.headingImg} layout='fill' alt={item.heading} />
                
              <h2 className="text-white text-forty text-center z-10">{item.heading}</h2>
              <p className="text-white text-xl text-center z-10">{item.listHeading}</p>
            </div>
            <div className="w-full bg-white text-xl text-grey flex flex-col gap-1 py-4 relative">
              
              <div className="flex flex-col px-4 gap-2">
                {item.listItems.map((listItem, j) => (
                  <div key={j} className='flex flex-col items-center bg-darkBlue/10 rounded-md p-4'>
                    <div className="relative w-2/12 h-7 pl-4 mb-2">
                      <Image src='/assets/images/OurServices-Tick.svg' layout='fill' objectFit='contain' alt='check mark' />
                    </div>
                    <div className="w-full text-center">
                      <p className="s">{listItem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 w-full z-20 flex flex-col lg:flex-row gap-4 px-2 pb-4">
              {item.buttons.map((buttonItem, k) => {
                return (
                  <Button
                    key={k}
                    linkTo={buttonItem.linkTo}
                    buttonText={buttonItem.text}
                    theme={buttonItem.theme}
                    tracking={false}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Services;