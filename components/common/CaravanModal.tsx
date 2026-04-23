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

const CaravanModal = ({ isOpen, onClose }: ModalProps) => {
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
                            Moving to New Zealand?
                        </h2>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight sm:tracking-[-0.03em] md:tracking-[-0.05em] leading-tight">
                            Take your home with you.
                        </h3>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-6 sm:gap-8 pt-1 px-4 sm:px-6 md:px-12 md:items-center">
                        {/* Image Section with Overlay Text */}
                        <div className="relative flex-none w-full md:flex-1 h-[380px] sm:h-[480px] md:h-[580px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/images/caravan/caravan-popup1.png"
                                alt="Moving to New Zealand"
                                layout="fill"
                                className="object-cover"
                                priority
                            />

                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center items-end md:items-end text-darkBlue font-extrabold px-4 sm:px-8 md:px-12 text-right space-y-3 sm:space-y-4">
                                <p className="text-base sm:text-lg md:text-[22px] tracking-[-0.03em] md:tracking-[-0.05em] leading-snug sm:leading-relaxed max-w-[260px] sm:max-w-[300px]">
                                    Moving to NZ is a big enough life change — let us make sure your caravan comes with you,
                                    without the stress.
                                </p>

                                <p className="text-base sm:text-lg md:text-[22px] tracking-[-0.03em] md:tracking-[-0.05em] leading-snug sm:leading-relaxed max-w-[260px] sm:max-w-[280px]">
                                    We’ll help you bring your caravan over — fully cleared, delivered, and ready to roll.
                                </p>

                                <p className="text-base sm:text-lg md:text-[22px] tracking-[-0.03em] md:tracking-[-0.05em] leading-snug sm:leading-relaxed max-w-[260px] sm:max-w-[280px]">
                                    No stress, no guesswork, just expert help from start to finish.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Blue Box */}
                    <div className="relative z-20 -mt-10 sm:-mt-12 md:-mt-16 bg-darkBlue text-white px-5 py-8 sm:px-8 sm:py-10 md:p-9 rounded-2xl sm:rounded-3xl shadow-lg max-w-lg sm:max-w-2xl mx-auto mb-8 sm:mb-10">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-4 sm:mb-6 tracking-tight md:tracking-[-0.05em]">
                            What Willship does for you:
                        </h4>

                        <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg md:text-xl font-medium list-inside">
                            <li>
                                ✔ Full door-to-door or port-to-port shipping
                            </li>
                            <li>
                                ✔ Custom clearance + MPI (Biosecurity) inspections
                            </li>
                            <li>
                                ✔ Compliance and Registration Guidance
                            </li>
                            <li>
                                ✔ Delivery to a WOF testing centre or your address — your choice
                            </li>
                            <li>
                                ✔ Optional insurance for peace of mind
                            </li>
                        </ul>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center md:text-left">
                            Most people don’t realise they might be GST-exempt — we’ll help you find out and save big!
                        </p>
                    </div>

                    <BlueWithIcons
                        width="w-64"
                        data={{
                            heading: 'Why People Choose to Ship Their Caravans to NZ',
                            items: [
                                {
                                    image: '/assets/images/why-better/gst.svg',
                                    text: 'It’s GST Free',
                                    description: 'If you’re a first-time immigrant or a returning NZ resident, you may qualify for a GST exemption—meaning NO import tax on arrival!'
                                },
                                {
                                    image: '/assets/images/why-better/cheaper.svg',
                                    text: 'It’s Cheaper Than You Think!',
                                    description: 'Caravans in NZ often cost more than in Australia. Instead of selling your car at a loss, save money by bringing it with you!'
                                },
                                {
                                    image: '/assets/images/why-better/cars-in-nz.svg',
                                    text: 'Caravans in NZ Are More Expensive',
                                    description: 'Caravan prices in NZ are typically 10% higher than in Australia. Even with shipping costs, bringing your caravan is often cheaper than buying new!'
                                },
                                {
                                    image: '/assets/images/customs-clearance/icon-caravan-orange.svg',
                                    imageWidth: 90,
                                    imageHeight: 90,
                                    imageClass: '-mt-3',
                                    text: 'Avoid Losing Money on Your Private Sale',
                                    description: 'Selling in Australia mean dealing with tire-kickers and losing thousands on resale. Keep your caravan and ship it instead!'
                                },
                            ]


                        }}
                    />

                    {/* GST Exemption */}
                    <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
                        <div className="flex flex-row items-center justify-center mb-4">
                            <Image
                                src="/assets/images/caravan/caravan-icons/cash-popup.png"
                                alt="GST Exemption"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-darkBlue tracking-tight sm:tracking-[-0.03em] md:tracking-[-0.05em] leading-snug">
                                NZ Import GST — Exemption Criteria (Caravans)
                            </h3>
                        </div>

                        <h2 className="text-base sm:text-xl md:text-2xl font-extrabold text-center text-darkBlue mb-6 sm:mb-10 tracking-tight leading-snug">
                            To qualify for GST exemption, you must meet all of the following:<br />
                            You are moving to New Zealand permanently (first-time immigrant or returning resident)
                        </h2>

                        <ul className="max-w-3xl sm:max-w-4xl md:max-w-[60rem] mx-auto space-y-2 sm:space-y-3 text-[#199b00] text-base sm:text-lg md:text-2xl font-extrabold tracking-tight">
                            {[
                                "You have lived outside of NZ for at least 21 consecutive months",
                                "You have owned and used the caravan in your personal name for at least 1 day prior to shipment",
                                "The caravan is intended for your personal use (not resale or business use)",
                                "No Finance or security interest over the caravan",
                                "You will arrive in NZ around the same time as your caravan",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center">
                                    <Image
                                        src="/assets/images/caravan/caravan-icons/check-popup.png"
                                        alt="Check"
                                        width={50}
                                        height={50}
                                        className="flex-shrink-0"
                                    />
                                    <span className="leading-snug">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-base sm:text-xl md:text-2xl font-extrabold text-center text-darkBlue mt-8 sm:mt-10 tracking-tight leading-snug px-4">
                            If you meet these requirements, you will likely be eligible for the import tax exemption -
                            <br /> which means you do not have to pay any import GST.
                        </p>
                    </div>

                    <ImageAndText2
                        heading="Leave the Hard Part With Us"
                        hasSubHeading={true}
                        subHeading="Trying to organise this yourself means dealing with ports, customs, NZTA, MPI, and strict registration rules.
                                We know the ins and outs — and we know how to avoid costly mistakes. With Willship, you get"
                        listItems={[
                            "✅ Specialists in caravan and vehicle shipping who have done this a thousand times",
                            "✅ Transparent pricing, no hidden fees - no surprises",
                            "✅ A hands-on team who will guide you from pick-up to delivery",
                            "✅ Peace of mind that your caravan is handled with care and reliability. No need for guesswork, just sit back and relax while we bring your caravan to you",
                        ]}
                        imageAlt={imageAlt}
                        imageSide="left"
                        imageSrc="/assets/images/caravan/caravan-popup2.png"
                        theme="dark"
                    />
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
            </div>
        </div>
    );
};

export default CaravanModal;
