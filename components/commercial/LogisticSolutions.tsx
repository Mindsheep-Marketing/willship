import Image from "next/image";
import WhiteWithIcons from "../common/WhiteWithIcons";

const LogisticSolutions = () => {
  return (
    <WhiteWithIcons
      data={{
        heading: 'Australia Wide Logistic Solutions',
        items: [],
      }}
      width="w-1/2"
    >
      <p className="-mt-12">
        We can provide end to end logistics solutions for your business - anywhere in Australia. Take advantage of our pre-negotiated rates with national carriers.
      </p>
      <div className="relative w-full max-w-2xl aspect-[3/2]">
        <Image src='/assets/images/logistics.svg' layout="fill" objectFit="cover" alt='Warehousing map' />
      </div>
    </WhiteWithIcons>
  )

};

export default LogisticSolutions;