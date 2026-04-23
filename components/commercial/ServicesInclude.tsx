import siteMap from "../../siteMap";
import RenderCard from "../common/RenderCard";

const data = [
  {
    heading: 'International Freight Forwarding To Australia',
    linkTo: siteMap.commercial.importingToAustralia.path,
    image: '/assets/images/plane2.jpg',
  },
  {
    heading: 'International Freight Forwarding From Australia',
    linkTo: siteMap.commercial.exportingFromAustralia.path,
    image: '/assets/images/ship.jpg'
  },
  {
    heading: 'Customs Services & Clearances',
    linkTo: siteMap.commercial.customsClearance.path,
    image: '/assets/images/customs.jpg'
  },
  {
    heading: 'Warehousing And Transport',
    linkTo: siteMap.commercial.wareHousing.path,
    image: '/assets/images/warehouse.jpg'
  },
  {
    heading: 'Project Logistics & Management',
    linkTo: siteMap.commercial.freightLogistics.path,
    image: '/assets/images/ship-cranes2.jpg'
  },
  {
    heading: 'Vehicle Shipping',
    linkTo: siteMap.vehicle.path,
    image: '/assets/images/car5.jpg'
  }
];

const ServicesInclude = () => {
  return (
    <section className="w-full flex flex-col items-center p-8 lg:p-16">
      <div className="flex flex-col gap-8 items-center w-full max-w-6xl">
        <h2 className="text-forty font-medium text-darkBlue">
          Our Services Include
        </h2>
        <div className="w-full flex flex-row flex-wrap gap-4 justify-center">
          {data.map((item, i) => (
            <RenderCard key={i} link={item} width='w-full sm:w-1/3 lg:w-1/4' textSize="text-sm" />
          ))}
        </div>
      </div>
    </section>
  )
};

export default ServicesInclude;