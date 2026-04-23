import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

const trackData = [
  {
    image: '/assets/images/customs-clearance/icon-notes-white.svg',
    count: 50,
    countText: ' years',
    text: 'of experience',
    textWidth: 'lg:w-40'
  },
  {
    image: '/assets/images/customs-clearance/icon-box-white.svg',
    count: 15000,
    countText: '+',
    text: 'shipments shipped to date',
    textWidth: 'lg:w-32'
  },
  {
    image: '/assets/images/customs-clearance/icon-five-star-reviews-white.svg',
    count: 200,
    countText: '+',
    text: '5-star reviews in Google and Facebook',
    textWidth: 'lg:w-40'
  },
  {
    image: '/assets/images/customs-clearance/icon-boat-white.svg',
    count: 1,
    countText: ' Billion+',
    text: 'worth of automotive cargo shipped',
    textWidth: 'lg:w-40'
  }
];

const TrackRecord2 = () => {
  return (
    <section className="w-full bg-red willship-track-record">
      <div className="text-white grid grid-flow-col grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 max-w-8xl gap-2 lg:gap-4 px-4 py-2 pb-12 lg:p-6 mx-auto">
        {trackData.map((item, i) => (
          <div key={i} className="flex basis-50 items-center lg:justify-center xl:gap-4">
            <div className="shrink-0 scale-75 xl:scale-100">
              <Image className="icon" height={58} width={58} objectFit="contain" src={item.image} alt="icon" />
            </div>
            <div className="flex flex-col grow md:grow-0 items-center text-center">
              <h3 className="text-2xl xl:text-5xl font-bold">
                <AnimatedCounter
                  endValue={item.count}
                  countText={item.countText}
                />
              </h3>
              <p className={`${item.textWidth} text-sm lg:text-base font-bold`} style={{lineHeight: "1"}}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackRecord2;