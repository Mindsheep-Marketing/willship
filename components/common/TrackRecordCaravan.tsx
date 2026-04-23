import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

const trackData = [
    {
        image: "/assets/images/customs-clearance/icon-notes-white.svg",
        count: 100,
        countText: "+ years",
        text: "of combined experience",
        textWidth: "lg:w-50",
    },
    {
        image: "/assets/images/customs-clearance/icon-caravan-white.svg",
        count: 1000,
        countText: "+",
        text: "caravans shipped to New Zealand and worldwide",
        textWidth: "lg:w-48",
        imageWidth: 75,
        imageHeight: 75,
    },
    {
        image: "/assets/images/customs-clearance/icon-five-star-reviews-white.svg",
        count: 200,
        countText: "+",
        text: "5-star reviews in Google and Facebook",
        textWidth: "lg:w-40",
    },
    {
        image: "/assets/images/customs-clearance/icon-boat-white.svg",
        count: 2,
        countText: " Billion+",
        text: "worth of cargo shipped",
        textWidth: "lg:w-40",
    },
];

const TrackRecordCaravan = () => {
    return (
        <section className="w-full bg-red willship-track-record">
            <div className="text-white grid grid-flow-col grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 max-w-8xl gap-2 lg:gap-4 px-4 py-8 pb-12 lg:p-5 mx-auto">
                {trackData.map((item, i) => (
                    <div
                        key={i}
                        className="flex basis-50 items-center lg:justify-center xl:gap-1"
                    >
                        <div className="shrink-0 scale-75 xl:scale-100">
                            <Image
                                className="icon"
                                height={item.imageHeight || 50}
                                width={item.imageWidth || 50}
                                objectFit="contain"
                                src={item.image}
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col grow md:grow-0 items-center text-center">
                            <h3 className="text-2xl xl:text-5xl font-bold">
                                {/* Add $ only for "Billion+" */}
                                {item.countText.includes("Billion") && "$"}
                                <AnimatedCounter
                                    endValue={item.count}
                                    countText={item.countText}
                                />
                            </h3>
                            <p
                                className={`${item.textWidth} text-sm lg:text-base font-bold`}
                                style={{ lineHeight: "1" }}
                            >
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrackRecordCaravan;
