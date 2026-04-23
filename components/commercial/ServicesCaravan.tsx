import Image from "next/image";
import BackgroundImage from "../common/BackgroundImage";
import { useEffect, useState } from "react";
import CaravanModal from "../common/CaravanModal";
import CaravanModal2 from "../common/CaravanModal2";
import CaravanModal3 from "../common/CaravanModal3";

interface Props {
    bgColour?: string;
    data: {
        title: string;
        text: string;
        image: string;
    }[];
    heading?: string;
    subHeading?: string;
}

const ServicesCaravan = ({
    bgColour,
    heading,
    subHeading,
    data,
}: Props) => {
    const [activeModal, setActiveModal] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        if (activeModal !== null) {
            setActiveModal(null);
            setTimeout(() => setActiveModal(index), 300);
        } else {
            setActiveModal(index);
        }
    };

    const handleClose = () => setActiveModal(null);

    const activeItem = activeModal !== null ? data[activeModal] : null;

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = activeModal !== null ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeModal]);

    // Choose which modal to render
    const renderModal = () => {
        if (activeModal === null) return null;

        switch (activeModal) {
            case 0:
                return (
                    <CaravanModal
                        isOpen={true}
                        onClose={handleClose}
                    />
                );
            case 1:
                return (
                    <CaravanModal2
                        isOpen={true}
                        onClose={handleClose}
                    />
                );
            case 2:
                return (
                    <CaravanModal3
                        isOpen={true}
                        onClose={handleClose}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <section
            className={`willship-cc-services ${bgColour} lg:bg-inherit relative w-full py-10 px-4 sm:px-6 lg:px-10`}
        >
            <BackgroundImage
                fallbackColour="true"
                imageOrVideo="image"
                src="/assets/images/customs-clearance/bg-blue-texture.jpg"
                hasOpacity={false}
            />

            <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-semibold max-w-5xl text-darkBlue lg:text-white text-2xl sm:text-3xl lg:text-4xl mx-auto mb-4 leading-tight">
                    {heading}
                </h2>
                <h3 className="font-normal max-w-5xl text-darkBlue sm:text-darkBlue lg:text-white text-lg sm:text-xl lg:text-2xl mx-auto leading-snug">
                    {subHeading}
                </h3>
            </div>

            {/* Cards */}
            <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12 mx-auto">
                {data.map((item, index) => (
                    <div
                        key={item.title}
                        className="bg-white relative w-full sm:w-[45%] lg:w-[30%] rounded-t-3xl rounded-b-[60px] shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col items-center mx-auto z-10"
                    >
                        <div className="w-full aspect-[16/9] relative rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
                            <Image
                                src={item.image}
                                layout="fill"
                                objectFit="cover"
                                alt={item.title}
                            />
                            <h3 className="absolute font-Montserrat z-10 text-center inset-x-0 top-6 sm:top-8 w-full font-extrabold leading-tight text-white text-xl sm:text-2xl md:text-3xl px-4 sm:px-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                                {item.title}
                            </h3>
                            <span className="absolute inset-0 bg-bannerBlue/30 bg-opacity-30"></span>
                        </div>

                        <div className="w-full flex flex-col justify-between grow p-5 pt-0 text-center">
                            <p className="text-sm sm:text-base md:text-lg font-semibold sm:font-extrabold leading-snug mb-4 flex-1">
                                {item.text}
                            </p>
                            <div className="mt-auto flex justify-center">
                                <button
                                    aria-label="Read More"
                                    type="button"
                                    onClick={() => handleOpen(index)}
                                    className="relative w-[160px] sm:w-[180px] md:w-[190px] px-5 py-2.5 font-semibold text-white text-sm sm:text-base bg-red"
                                >
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Modal */}
            {renderModal()}
        </section>
    );
};

export default ServicesCaravan;