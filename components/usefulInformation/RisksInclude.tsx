import Image from "next/image";
import SectionHeading from "../common/SectionHeading";

const data = [
  {
    text: 'Inclement weather',
    image: '/assets/images/risks/weather.jpg'
  },
  {
    text: 'Natural disaster',
    image: '/assets/images/risks/natural-disaster.jpg'
  },
  {
    text: 'Mechanical error',
    image: '/assets/images/risks/mechanical-error.jpg'
  },
  {
    text: 'Human error',
    image: '/assets/images/risks/human-error.jpg'
  },
  {
    text: 'Multiple handlings',
    image: '/assets/images/risks/multiple-handlings.jpg'
  },
];


const RisksInclude = () => (
  <section className="w-full flex flex-col items-center py-12 px-4 lg:px-0">
    <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
      <SectionHeading text='INTERNATIONAL SHIPPING RISKS INCLUDE:' classes="text-center" />
      <div className="flex flex-row flex-wrap w-full gap-6 justify-center">
        {data.map((item, i) => (
          <div className="w-1/3 sm:w-1/4 lg:w-1/6 text-center text-darkBlue" key={i}>
            <div className="relative w-full aspect-square">
              <Image src={item.image} layout='fill' objectFit="contain" alt='Shipping Risks' />
            </div>
            <p className="py-6 font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RisksInclude;