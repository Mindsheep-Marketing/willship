import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import siteMap from "../../siteMap";

const data = [
  {
    image: '/assets/images/vehicle.jpg',
    linkTo: siteMap.vehicle.importCarToAustralia.path,
    heading: 'Vehicles',
    text: 'The cost for car shipping in and out of Australia can vary depending on a number of factors, click here to learn more.'
  },
  {
    image: '/assets/images/boat.jpg',
    linkTo: siteMap.vehicle.importBoatToAustralia.path,
    heading: 'Trailer Boats',
    text: 'Shipping a trailer boat makes good economic sense, click here to learn more.'
  },
  {
    image: '/assets/images/motorbike.jpg',
    linkTo: siteMap.vehicle.importMotorcycleToAustralia.path,
    heading: 'Motorcycles',
    text: 'Shipping a motorcycle in and out of Australia has never been easier, click here to learn more.'
  },
  {
    image: '/assets/images/caravan.jpg',
    linkTo: siteMap.vehicle.importCaravanToAustralia.path,
    heading: 'Caravans',
    text: 'Our International Caravan Shipping Service is Easy, Safe, And Affordable, click here to learn more.'
  },
  {
    image: '/assets/images/motorhome.jpg',
    linkTo: siteMap.vehicle.importMotorhomesToAustralia.path,
    heading: 'Motorhomes',
    text: 'Shipping a Motorhome between Australia and New Zealand has plenty of benefits, click here to learn more.'
  },
  {
    image: '/assets/images/machinery.jpg',
    linkTo: siteMap.vehicle.importMachineryToAustralia.path,
    heading: 'Machinery',
    text: 'International Machinery Shipping can be complicated and costly - it\'s important your chosen freight forwarder knows what they\'re doing. Click here to see how we can help.'
  },
];

const RenderCard = ({link} : {link : {heading: string; image: string; linkTo: string; text: string;}} ) => {
  const [hovered, setHovered] = useState (false);

  return (
    <div className="w-full flex flex-col items-center sm:w-1/2 lg:w-1/3 p-2 group justify-items-stretch bg-nearlyWhite hover:bg-darkBlue">
      <Link href={link.linkTo}>
        <a 
          className="w-full flex flex-col group-hover:bg-darkBlue text-darkBlue group-hover:text-white text-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="w-full aspect-video relative">
            <Image src={link.image} objectFit='cover' layout='fill' alt={link.heading} />
          </div>
          <div className="flex flex-col items-center p-6 group-hover:bg-darkBlue">
            <h3 className={`font-medium text-forty`}>
              {link.heading}
            </h3>
            <div className="relative h-10 w-full">
              <Image src={hovered ? '/assets/images/dividers/wtw-white.png' : '/assets/images/dividers/wtwi.png'} layout='fill' objectFit="contain" alt="divider" />
            </div>
            <p className="text-center leading-snug">{link.text}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export const WhatWeCanShip = () => {
  return (
    <section className="w-full flex flex-col items-center gap-8 p-8 lg:py-16">
      <h2 className="font-medium text-forty text-darkBlue text-center">
        What We Can Help You Ship
      </h2>
      <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch">
        {data.map((item , i) => (
          <RenderCard key={i} link={item} />
        ))}
      </div>
    </section>
  );
};

export default WhatWeCanShip;