import Image from "next/image";
import WhiteWithIcons from "../common/WhiteWithIcons";

const WorldWideNetwork = () => {
  return (
    <WhiteWithIcons
      data={{
        heading: 'Our Worldwide Network Means You Can Ship From Anywhere',
        precedingText: [
          'Take advantage of great services and competitive rates from USA, Asia, Europe and the Middle East'
        ]
      }}
      width="w-1/2"
    >
      <div className="relative w-full max-w-2xl aspect-[3/2]">
        <Image src='/assets/images/routes3.svg' layout="fill" objectFit="cover" alt='Routes map' />
      </div>
    </WhiteWithIcons>
  )
};

export default WorldWideNetwork;