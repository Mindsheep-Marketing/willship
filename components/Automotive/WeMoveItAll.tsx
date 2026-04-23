import Image from "next/image";
import Flags from "../common/Flags";
import SectionHeading from "../common/SectionHeading";

const WeMoveItAll = () => (
  <section className="w-full flex flex-col-reverse lg:flex-row bg-nearlyWhite p-8 lg:p-16 text-center">
    <div className="w-full lg:w-1/2 flex flex-row justify-end py-12">
      <div className="lg:w-2/3 text-xl text-grey">
        <SectionHeading text='We Can Move It All' />
        <p className="pb-8 pt-4">Vehicles, Caravans, Motorhomes, Trailer Boats, Motorcycles, Machinery - All Over The World.</p>
        <p>Please Click On The Below Destination For Information Specific To Each Location</p>
        <div className="pt-12 w-5/6 mx-auto">
          <Flags countries={['nz', 'uk', 'ie', 'au']}/>
        </div>
      </div>
    </div>
    <div className="w-full h-96 lg:h-auto lg:w-1/2 relative">
      <Image src='/assets/images/world-map.svg' layout="fill" objectFit="contain" alt="destinations map" />
    </div>
  </section>
);

export default WeMoveItAll;