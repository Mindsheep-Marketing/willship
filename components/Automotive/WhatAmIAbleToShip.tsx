import siteMap from "../../siteMap";
import Button from "../common/Button";
import RenderCard from "../common/RenderCard";

const topRowCards = [
  {
    heading: 'Vehicles',
    image: '/assets/images/vehicle.jpg',
    linkTo: siteMap.vehicle.importCarToAustralia.path
  },
  {
    heading: 'Trailer Boats',
    image: '/assets/images/boat.jpg',
    linkTo: siteMap.vehicle.importBoatToAustralia.path
  },{
    heading: 'Motorcycles',
    image: '/assets/images/motorbike.jpg',
    linkTo: siteMap.vehicle.importMotorcycleToAustralia.path
  },{
    heading: 'Caravans',
    image: '/assets/images/caravan.jpg',
    linkTo: siteMap.vehicle.importCaravanToAustralia.path
  },{
    heading: 'Motorhomes',
    image: '/assets/images/motorhome.jpg',
    linkTo: siteMap.vehicle.importMotorhomesToAustralia.path
  },{
    heading: 'Machinery',
    image: '/assets/images/machinery.jpg',
    linkTo: siteMap.vehicle.importMachineryToAustralia.path
  },
];

const secondRowCards = [
  {
    heading: 'Trucks',
    image: '/assets/images/truck.jpg',
  },
  {
    heading: 'Camper Trailers',
    image: '/assets/images/camper-trailer.jpg',
  },
  {
    heading: 'Quad Bikes',
    image: '/assets/images/quad-bike.jpg',
  },
  {
    heading: 'Trailers',
    image: '/assets/images/trailer.jpg',
  },
  {
    heading: 'Commercial Goods',
    image: '/assets/images/commercial-goods.jpg',
  },
  {
    heading: 'Containers',
    image: '/assets/images/containers3.jpg',
  },
  {
    heading: 'Transportable Buildings',
    image: '/assets/images/building.jpg',
  },
  {
    heading: 'Pools',
    image: '/assets/images/pool.jpg',
  },
];

const WhatAmIAbleToShip = () => {

  return (
    <section className="w-full flex flex-col items-center py-20 text-xl text-darkGrey gap-12">
      <h2 className="text-forty text-darkBlue font-medium">
        What Am I Able To Ship?
      </h2>
      <p>
        Willship primarily specialized in the movement of Automotive cargo, this means we generally ship:
      </p>
      <div className="flex flex-row flex-wrap w-full max-w-5xl justify-center gap-4 text-center px-4">
        {topRowCards.map((item, i) => (
          <RenderCard width='w-full sm:w-1/3 lg:w-1/4' key={i} link={item} />
        ))}
      </div>
      <p>But that&apos;s not it! We can also move:</p>
      <div className="flex flex-row w-full flex-wrap max-w-5xl justify-center gap-4 text-center px-4">
        {secondRowCards.map((item, i) => (
          <RenderCard width='w-full sm:w-1/3 lg:w-1/5' key={i} link={item} />
        ))}
      </div>
      <div className="w-full max-w-sm">
        <Button
          buttonText="Get Instant Quote"
          linkTo={siteMap.vehicle.vehicleQuote.path}
          theme="redBlue"
        />
      </div>
    </section>
  );
};

export default WhatAmIAbleToShip;