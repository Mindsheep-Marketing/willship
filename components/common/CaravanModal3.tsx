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

const CaravanModal3 = ({ isOpen, onClose }: ModalProps) => {
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
                            Travelling to New Zealand temporarily?
                        </h2>
                        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight sm:tracking-[-0.03em] md:tracking-[-0.05em] leading-tight">
                            Let us be part of your travel journey
                        </h3>
                    </div>

                    <div className="relative flex flex-col md:flex-row gap-8 pt-1 px-4 sm:px-6 md:px-12 md:items-center">
                        {/* Image Section with Overlay Text */}
                        <div className="relative flex-1 min-h-[320px] sm:min-h-[400px] md:min-h-[550px] lg:min-h-[650px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/assets/images/caravan/caravan-popup7.png"
                                alt="Caravan Dealer New Zealand"
                                layout="fill"
                                className="object-cover"
                                priority
                            />

                            {/* Text Overlay */}
                            <div
                                className="
                                    absolute inset-0 flex flex-col
                                    items-center md:items-end
                                    px-4 sm:px-6 md:px-12 py-8
                                    text-center md:text-right
                                "
                            >
                                <p
                                    className="
                                        text-white font-semibold
                                        text-base sm:text-lg md:text-2xl lg:text-3xl
                                        leading-relaxed max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl
                                    "
                                    style={{
                                        textShadow: `
                                            2px 2px 4px rgba(0, 0, 0, 0.4),
                                            -2px -2px 4px rgba(0, 0, 0, 0.4)
                                        `,
                                    }}
                                >
                                    Whether you’re here for a holiday, event, or seasonal stay, we manage the full
                                    temporary import and export process — so you can travel confidently without
                                    the need to rent or repurchase.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What Willship does for you */}
                    <section className="w-full bg-white py-16 px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue mb-6 tracking-[-0.05em]">
                            What Willship does for you:
                        </h2>

                        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
                            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-[150px]">
                                {/* Item 1 */}
                                <div className="flex flex-col items-center max-w-[220px] text-center mb-6">
                                    <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] flex justify-center items-center">
                                        <img
                                            src="/assets/images/caravan/caravan-icons/14.png"
                                            alt="Temporary import customs entries and formalities"
                                            className="w-full h-full object-contain md:object-cover"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl tracking-[-0.05em] text-darkBlue font-semibold leading-snug mt-[-20px]">
                                        Temporary import customs entries and formalities
                                    </p>
                                </div>

                                {/* Item 2 */}
                                <div className="flex flex-col items-center max-w-[220px] text-center mb-8">
                                    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center items-center">
                                        <img
                                            src="/assets/images/caravan/caravan-icons/15.png"
                                            alt="Biosecurity clearance on arrival"
                                            className="w-full h-full object-contain md:object-cover"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl tracking-[-0.05em] text-darkBlue font-semibold leading-snug">
                                        Biosecurity clearance on arrival
                                    </p>
                                </div>

                                {/* Item 3 */}
                                <div className="flex flex-col items-center max-w-[220px] text-center">
                                    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center items-center">
                                        <img
                                            src="/assets/images/caravan/caravan-icons/16.png"
                                            alt="Advice on road compliance and temporary registration"
                                            className="w-full h-full object-contain md:object-cover"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl tracking-[-0.05em] text-darkBlue font-semibold leading-snug">
                                        Advice on road compliance and temporary registration
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-[150px]">
                                {/* Item 4 */}
                                <div className="flex flex-col items-center max-w-[220px] text-center">
                                    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center items-center">
                                        <img
                                            src="/assets/images/caravan/caravan-icons/17.png"
                                            alt="Re-export coordination"
                                            className="w-full h-full object-contain md:object-cover"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl tracking-[-0.05em] text-darkBlue font-semibold leading-snug mt-3">
                                        Re-export coordination if you’re bringing it back to Australia
                                    </p>
                                </div>

                                {/* Item 5 */}
                                <div className="flex flex-col items-center max-w-[220px] text-center">
                                    <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] flex justify-center items-center">
                                        <img
                                            src="/assets/images/caravan/caravan-icons/18.png"
                                            alt="Support for continued travel"
                                            className="w-full h-full object-contain md:object-cover"
                                        />
                                    </div>
                                    <p className="text-lg sm:text-xl md:text-2xl tracking-[-0.05em] text-darkBlue font-semibold leading-snug mt-3">
                                        Support if you’re continuing travel to other countries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full bg-darkBlue py-12 px-6 text-center md:h-[450px]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ed4023] tracking-[-0.05em] mb-10">
                            The Three Main Documents You Need:
                        </h2>

                        <div
                            className="
                                max-w-6xl mx-auto 
                                flex flex-col sm:flex-row 
                                justify-center items-center 
                                gap-8 sm:gap-10 md:gap-12
                            "
                        >
                            {/* Document 1 */}
                            <div className="flex justify-center w-full sm:w-1/3">
                                <img
                                    src="/assets/images/caravan/caravan-icons/main-document1.png"
                                    alt="Proof of Ownership"
                                    className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px] h-auto object-contain"
                                />
                            </div>

                            {/* Document 2 */}
                            <div className="flex justify-center w-full sm:w-1/3">
                                <img
                                    src="/assets/images/caravan/caravan-icons/main-document2.png"
                                    alt="Passport/ID"
                                    className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px] h-auto object-contain"
                                />
                            </div>

                            {/* Document 3 */}
                            <div className="flex justify-center w-full sm:w-1/3">
                                <img
                                    src="/assets/images/caravan/caravan-icons/main-document3.png"
                                    alt="Travel Itinerary"
                                    className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="w-full pt-24 sm:pt-32 lg:pt-[150px] px-6 sm:px-10 lg:px-0">
                        <h2 className="text-darkBlue font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.04em] text-center md:text-left md:ml-20">
                            We make it easy for you to:
                        </h2>

                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch mt-10 md:mt-16">
                            {/* Left Column */}
                            <div className="w-full md:w-1/2 text-darkBlue px-2 sm:px-8 md:px-12 lg:px-20">
                                <ul className="space-y-6 mb-12">
                                    {[
                                        "Bring your caravan into NZ",
                                        "Travel stress-free on your schedule",
                                        "Ship it back out when you’re done",
                                    ].map((text, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <img
                                                src="/assets/images/caravan/caravan-icons/arrow.png"
                                                alt="arrow"
                                                className="w-10 sm:w-16 lg:w-20 h-6 sm:h-8 mt-1 flex-shrink-0"
                                            />
                                            <span className="font-extrabold text-lg sm:text-xl lg:text-2xl tracking-[-0.03em] leading-snug">
                                                {text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Pro Tip Section */}
                                <div className="space-y-3 sm:space-y-4 text-left font-extrabold text-lg sm:text-xl lg:text-2xl tracking-[-0.05em] leading-snug">
                                    <p>Pro tip:</p>
                                    <p>
                                        Want to go one way? We’ll even help you export from NZ to another
                                        country when your trip ends.
                                    </p>
                                    <p>We’re not just caravan shippers — we’re global logistics pros.</p>
                                </div>
                            </div>

                            {/* Right Column - Image (hidden on small screens) */}
                            <div className="hidden md:flex w-full md:w-1/2 justify-center">
                                <img
                                    src="/assets/images/caravan/caravan-icons/13.png"
                                    alt="Caravan"
                                    className="w-full max-w-md lg:max-w-none h-auto lg:h-[600px] object-cover"
                                />
                            </div>
                        </div>
                    </section>

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

export default CaravanModal3;
