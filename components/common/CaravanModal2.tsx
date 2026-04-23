import Image from "next/image";
import BlueWithIcons from "./BlueWithIcons";
import siteMap from "../../siteMap";
import ImageAndText2 from "./ImageAndText2";
import Button from "./Button";
import { useEffect, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CaravanModal2 = ({ isOpen, onClose }: ModalProps) => {
    const [visible, setVisible] = useState(isOpen);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setIsFadingOut(false);
        } else {
            setIsFadingOut(true);
            const timer = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible) return null;

    const handleClose = () => {
        setIsFadingOut(true);
        setTimeout(onClose, 300);
    };
    const imageAlt = "Caravan Shipping";

    return (
        <div
            className={`fixed inset-0 z-[999999] flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${isFadingOut ? "opacity-0" : "opacity-100"
                }`} style={{ isolation: "isolate" }}
            aria-modal="true"
            role="dialog"
        >
            {/* Modal container */}
            <div
                className={`relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-[95%] sm:w-[90%] md:w-full max-w-7xl 
              h-auto md:h-[90vh] max-h-[95vh] overflow-y-auto overflow-x-hidden 
              animate-fadeIn z-[1000000] flex flex-col transform transition-all duration-300 
              ${isFadingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
            >
                <div className="absolute top-5 right-8 z-[1000001]">
                    <button
                        onClick={handleClose}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-gray-500 text-3xl font-bold leading-none transition-colors duration-200 hover:text-orange-500"
                    >
                        &times;
                    </button>
                </div>

                {/* Scrollable content area */}
                <div className="overflow-y-auto flex-1 rounded-3xl">

                    {/* Header Section */}
                    <div className="text-darkBlue px-4 py-8 sm:px-6 md:px-10 md:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 mb-2 sm:mb-3">
                            Importing Caravans for Resale?
                        </h2>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight sm:tracking-[-0.03em] md:tracking-[-0.05em] leading-tight">
                            You focus on selling. We’ll handle the shipping.
                        </h3>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 sm:gap-8 pt-1 px-4 sm:px-6 md:px-12 md:items-center">
                        {/* Image Section with Overlay Text */}
                        <div className="relative flex-1 h-[320px] min-h-[320px] sm:h-[480px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/images/caravan/caravan-popup3.png"
                                alt="Caravan Dealer New Zealand"
                                layout="fill"
                                className="object-cover"
                                priority
                            />

                            {/* Text Overlay */}
                            <div className="absolute inset-0 md:justify-start items-center md:items-start 
                                            md:text-left px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:pt-10">
                                <p className="text-darkBlue font-extrabold text-base sm:text-lg md:text-2xl 
                                            leading-relaxed tracking-[-0.03em] sm:tracking-[-0.04em] 
                                            sm:max-w-2xl md:max-w-4xl">
                                    If you’re a caravan dealer or looking to bring in stock to sell in New Zealand, Willship is
                                    your trusted import logistics partner. We’ve helped caravan businesses streamline their
                                    operations and reduce risk — with reliable, fast, and fully compliant imports.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blue Box - Overlapping Section */}
                    <div className="relative z-20 -mt-10 sm:-mt-12 md:-mt-16 bg-darkBlue text-white px-5 py-8 sm:px-8 sm:py-10 md:p-9 rounded-2xl sm:rounded-3xl shadow-lg max-w-lg sm:max-w-2xl mx-auto mb-8 sm:mb-10">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 tracking-tight md:tracking-[-0.05em]">
                            Who We Help:
                        </h4>

                        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl font-medium list-inside">
                            <li>
                                ✔ Caravan and motorhome dealerships
                            </li>
                            <li>
                                ✔ Auction house resellers
                            </li>
                            <li>
                                ✔ Small business importers
                            </li>
                            <li>
                                ✔ Freelance flippers or caravan renovators
                            </li>
                        </ul>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center md:text-left">
                            If any of the above sounds like you, we’re perfectly positioned to
                            support your business.
                        </p>
                    </div>

                    {/* Caravan + Brands Section */}
                    <section className="relative w-full md:h-[600px] bg-white overflow-hidden">
                        <div className="absolute inset-0 hidden md:block mr-[135px] -left-[250px]">
                            <img
                                src="/assets/images/caravan/caravan-popup4.png"
                                alt="Caravan"
                                className="w-[1000px] h-[610px] object-cover"
                            />
                        </div>

                        <div className="block md:hidden w-full h-[250px] sm:h-[320px]">
                            <img
                                src="/assets/images/caravan/caravan-popup4.png"
                                alt="Caravan"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-center md:justify-end h-auto md:h-full">
                            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 text-center bg-white/90 md:bg-transparent">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-darkBlue mb-6 md:mb-8 tracking-[-0.05em]">
                                    Brands We Have Worked With
                                </h2>

                                {/* Logos Section */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                        <Image
                                            src="/assets/images/caravan/caravan-icons/brand1-popup.png"
                                            alt="Snowy River Caravans"
                                            width={220}
                                            height={170}
                                            className="object-contain md:object-cover"
                                        />
                                        <Image
                                            src="/assets/images/caravan/caravan-icons/brand3-popup.png"
                                            alt="Titan Caravans"
                                            width={220}
                                            height={170}
                                            className="object-contain md:object-cover"
                                        />
                                    </div>

                                    <div className="flex justify-center">
                                        <Image
                                            src="/assets/images/caravan/caravan-icons/brand2-popup.png"
                                            alt="Regent Caravans"
                                            width={220}
                                            height={170}
                                            className="object-contain md:object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="w-full bg-[#001F3F] pt-10 pb-20 px-4 sm:px-6 md:px-12 text-white text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-[-0.04em]">
                            How It Works
                        </h2>

                        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-10 sm:gap-8 md:gap-0">
                            {/* Step Template */}
                            {[
                                {
                                    img: "/assets/images/caravan/caravan-icons/how-it-works1.png",
                                    alt: "Request Your Quote",
                                    title: "Request Your Quote",
                                    desc: "Provide your caravan details, origin port, and delivery location.",
                                    offset: "-mt-14 sm:-mt-16 md:-mt-20",
                                },
                                {
                                    img: "/assets/images/caravan/caravan-icons/how-it-works2.png",
                                    alt: "We Handle All The Paperwork",
                                    title: "We Handle All The Paperwork",
                                    desc: "We take care of shipping, customs clearance, and import approvals.",
                                    offset: "-mt-12 sm:-mt-14 md:-mt-16",
                                },
                                {
                                    img: "/assets/images/caravan/caravan-icons/how-it-works3.png",
                                    alt: "Your Caravan Is Shipped Safely",
                                    title: "Your Caravan Is Shipped Safely",
                                    desc: "Your caravan is shipped and tracked throughout its journey.",
                                    offset: "-mt-12 sm:-mt-14 md:-mt-16",
                                },
                                {
                                    img: "/assets/images/caravan/caravan-icons/how-it-works4.png",
                                    alt: "Delivered, Ready For Resale",
                                    title: "Delivered, Ready For Resale",
                                    desc: "We deliver your caravan, prepped for resale.",
                                    offset: "-mt-12 sm:-mt-14 md:-mt-16",
                                },
                            ].map((step, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center w-full sm:w-[45%] md:w-1/4 mb-10 sm:mb-8"
                                >
                                    <div className="flex justify-center items-center mb-2 w-[200px] sm:w-[250px] md:w-[350px]">
                                        <Image
                                            src={step.img}
                                            alt={step.alt}
                                            width={350}
                                            height={350}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3
                                        className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-[-0.04em] !leading-[1.1] ${step.offset} max-w-[150px] sm:max-w-[160px] md:max-w-[180px]`}
                                    >
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg leading-tight max-w-[150px] sm:max-w-[160px] md:max-w-[180px] mt-2 text-[#D8E1EB]">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="relative w-full">
                        <div className="absolute inset-0 -top-[60px] md:-top-[100px] ml-[370px] opacity-70 md:opacity-100 hidden md:block">
                            <img
                                src="/assets/images/caravan/caravan-popup10.png"
                                alt="Customer support representative"
                                className="w-full h-full object-cover md:object-contain"
                            />
                        </div>

                        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center md:items-start justify-center px-4 sm:px-8 md:px-12 py-10 md:py-20">
                            <div className="md:w-1/2 md:text-center text-darkBlue">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.05em] mb-4 sm:mb-6 leading-tight">
                                    Your Stock, Handled with Care. <br className="hidden sm:block" /> Updates You Can Rely On.
                                </h2>

                                <p className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-[-0.05em] mb-8 sm:mb-12 leading-snug">
                                    We know your business depends on timely arrivals and healthy margins. That’s why we offer:
                                </p>

                                <ul className="text-base sm:text-lg md:text-2xl space-y-3 sm:space-y-4 leading-tight sm:leading-none">
                                    <li>✅ Weekly sailings from major ports</li>
                                    <li>✅ Live shipment updates via our tracking portal</li>
                                    <li>✅ Discounts for bulk shipments</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="[&_h2]:text-3xl [&_h2]:leading-[1.1] [&_h2]:max-w-xs">
                        <ImageAndText2
                            heading="Why Businesses Use Willship when Importing Their Goods"
                            hasSubHeading={true}
                            subHeading="Handling it yourself means juggling ports, shipping, customs and MPI clearance. At Willship, we know the
                                        process inside out and help you avoid expensive delays. With us, you get a smooth, fully managed import experience from start to finish."
                            listItems={[
                                "✅ Transparent pricing, no hidden fees - no surprises",
                                "✅ We move multiple units at once, saving time and money. High volume shipping rates available",
                                "✅ We provide consistent ETA updates and delivery support",
                                "✅ We’ve built relationships with both Australian and NZ ports",
                            ]}
                            imageAlt={imageAlt}
                            imageSide="left"
                            imageSrc="/assets/images/caravan/caravan-popup6.png"
                            theme="dark"
                        />
                    </div>

                    <section className="w-full relative flex items-center justify-center py-20 object-cover">
                        <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 items-center justify-center px-4 lg:p-0 text-darkBlue text-center">
                            <h2 className="font-extrabold text-4xl max-w-4xl tracking-[-0.05em]">
                                What’s next? Let’s start with an instant quote so you know exactly what it’ll cost. Click the button below to get started
                            </h2>

                            {/* Quote Card Component */}
                            <div className="relative w-full max-w-md mx-auto mt-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-tl-[2rem] rounded-br-[4rem] rounded-bl-[4rem] rounded-tr-[4rem]">
                                {/* Dark Blue Background behind the orange shape */}
                                <div className="hidden lg:block absolute -top-5 -left-7 z-[-1] bg-darkBlue w-28 h-[110px] rounded-tl-[2rem] rounded-bl-[1rem] shadow-md" />

                                {/* Orange shape behind the tag */}
                                <div className="hidden lg:block absolute top-12 -left-7 z-0 bg-red w-24 h-12 rounded-tl-[4rem] rounded-bl-[4rem] shadow-lg " />
                                {/* Quote Card */}
                                <div className="relative z-10 bg-white shadow-lg rounded-tl-[2rem] rounded-br-[4rem] rounded-bl-[4rem] rounded-tr-[4rem]  overflow-hidden">
                                    <div className="relative h-40 sm:h-48 w-full">
                                        <Image
                                            src="/assets/images/quote.png"
                                            alt="Car"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-b-[30px]"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-darkBlue/40 flex flex-col items-center justify-end pb-8 px-4 text-white text-center">
                                            <h3 className="text-3xl font-Montserrat sm:text-4xl lg:text-4xl mt-2 font-bold leading-snug">
                                                Instant Quote in <br className="hidden sm:block" /> Just Seconds!
                                            </h3>
                                        </div>
                                    </div>


                                    <div className="text-center py-6 px-4">
                                        <p className="text-red text-base sm:text-lg lg:text-2xl font-semibold mb-4">
                                            + Free Step-by-step Shipping Guide
                                        </p>
                                        <Button
                                            buttonText="GET STARTED"
                                            linkTo="paperform"
                                            dataPaperformId="w9e9ma75"
                                            theme="redBlue"
                                            className="!w-[70%] !font-bold px-4"
                                            onClick={() => {
                                                onClose();
                                                setTimeout(() => {
                                                    const event = new CustomEvent("openVehicleQuote");
                                                    window.dispatchEvent(event);
                                                }, 300);
                                            }}
                                        />
                                    </div>
                                </div>


                                {/* Blue Tag */}
                                <div className="absolute -top-5 z-20 bg-darkBlue text-white pr-3 pl-4 py-2 rounded-tl-2xl lg:pr-10 leading-tight">
                                    <span className="block lg:text-lg sm:text-md font-semibold relative z-10">
                                        NO COMMITMENTS,
                                    </span>
                                    <span className="block lg:text-lg sm:text-md font-semibold relative z-10">
                                        NO HIDDEN COSTS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
        </div >
    );
};

export default CaravanModal2;
