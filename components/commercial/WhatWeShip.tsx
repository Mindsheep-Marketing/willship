import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "../common/Button";

interface Props {
  quoteText?: string;
}

const topRow = [
  {
    image: '/assets/images/reasons/valuables.svg',
    text: 'Valuables'
  },
  {
    image: '/assets/images/reasons/food.svg',
    text: 'Food Products'
  },
  {
    image: '/assets/images/reasons/haberdashery.svg',
    text: 'Haberdashery'
  },
  {
    image: '/assets/images/reasons/lighting-towers.svg',
    text: 'Lighting Towers'
  },
];

const secondRow = [
  {
    image: '/assets/images/reasons/machinery.svg',
    text: 'Machinery'
  },
  {
    image: '/assets/images/reasons/tiles.svg',
    text: 'Tiles'
  },
  {
    image: '/assets/images/reasons/furniture.svg',
    text: 'Furniture'
  },
  {
    image: '/assets/images/reasons/homewares.svg',
    text: 'Homewares'
  },
  {
    image: '/assets/images/reasons/disability.svg',
    text: 'Disability and aged care goods'
  },
  {
    image: '/assets/images/reasons/transport.svg',
    text: 'Transport Equipment'
  },
  {
    image: '/assets/images/reasons/lighting.svg',
    text: 'Lighting'
  },
  {
    image: '/assets/images/reasons/medicinal.svg',
    text: 'Medical and veterinary supplies'
  },
];

const WhatWeShip = ({ quoteText }: Props) => {
  return (
    <section className="w-full flex flex-col items-center py-16">
      <h2 className="font-medium text-forty text-darkBlue pb-12">
        What We Ship
      </h2>
      <div className="w-full max-w-5xl flex flex-col text-xl leading-loose text-darkGrey text-center gap-8 items-center">
        <div className="flex flex-row w-full flex-wrap justify-center gap-8">
          {topRow.map((item, i) => (
            <div key={i} className='w-full lg:w-1/3 flex flex-col items-center gap-3'>
              <Image src={item.image} height={50} width={50} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap w-full justify-center gap-8 pb-4">
          {secondRow.map((item, i) => (
            <div key={i} className='w-full lg:w-1/5 flex flex-col items-center gap-3'>
              <Image src={item.image} height={50} width={50} alt={item.text} />
              {item.text.split('<br />').map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="text-grey">
          Plus much more! Get in touch with us for further information.
        </p>
        <div className="w-full max-w-sm z-10">
          <Button
            buttonText={quoteText || "Get Started"}
            linkTo={'paperform'}
            theme='redBlue'
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeShip;