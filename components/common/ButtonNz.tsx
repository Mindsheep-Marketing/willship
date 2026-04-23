import Link from "next/link";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import { useRef } from "react";
import siteMap from "../../siteMap";

interface Props {
    buttonText: string;
    theme: "redBlue" | "whiteBlue" | "blueRed";
    linkTo: string;
    width?: string;
    fontSize?: string;
    target?: string;
    rel?: string;    // Added rel for security reasons
    context?: string;
    className?: string;
}

const ButtonNz = ({
    buttonText,
    theme,
    linkTo,
    width = "w-full",
    fontSize = "text-xl",
    target,
    rel,
    context,
    className,
}: Props) => {
    const {
        showVehicleQuote,
        showCommercialQuote,
        showChinaAustraliaQuote,
        showChatToUs,
        showCratesQuote,
        showFinanceModal,
        showPopupJourney,
        showInstantFCLQuote,
        showChinaAirFreightQuote,
        showProductSampleQuote,
        showCustomsClearanceForm,
        setJourney,
        showChinaToAusMultiPopup,
        showPopupJourneyChinatoAus,
        showPersonalForm,
        setChinaToAusJourneyType,
        showPopupJourneyCustomClearance,
    } = useContext(ModalContext);

    function Journey() {
        showPopupJourney(true);
        setJourney(context as string);
    }

    function JourneyChinatoAus() {
        setChinaToAusJourneyType(context || '');
        showPopupJourneyChinatoAus(true);
    }

    function PersonalForm() {
        showPersonalForm(true);
    }

    const RenderContent = () => {
        return (
            <div
                className={`
relative py-3 px-6 md:px-24 text-xl font-medium group z-10
          ${width}
          ${theme === "redBlue"
                        ? "border border-red"
                        : theme === "whiteBlue"
                            ? "border border-white hover:border-darkBlue"
                            : theme === "blueRed"
                                ? "border border-darkBlue hover:border-red"
                                : "border-0"
                    }
          //added classname here
           ${className || ""} // Apply className here
        `}
            >
                <p
                    className={`
            text-center
            ${theme === "redBlue"
                            ? "text-white"
                            : theme === "whiteBlue"
                                ? "text-darkBlue group-hover:text-white"
                                : theme === "blueRed"
                                    ? "text-white group-hover:text-blue"
                                    : "text-red group-hover:text-darkBlue"
                        }
            ${fontSize}
          `}
                >
                    {buttonText}
                </p>
                <div
                    className={`
            absolute z-1 w-full h-full top-0 left-0 -z-10
            ${theme === "redBlue"
                            ? "bg-red"
                            : theme === "whiteBlue"
                                ? "bg-white"
                                : theme === "blueRed"
                                    ? "bg-darkBlue"
                                    : "bg-red"
                        }
          `}
                />
                <div
                    className={`
            absolute h-full top-0 left-0 -z-10 
            transition-width duration-500 ease-out
            ${theme === "redBlue" || theme === "whiteBlue"
                            ? "bg-darkBlue"
                            : "bg-red"
                        }
            w-0 group-hover:w-full
          `}
                />
            </div>
        );
    };

    const pickLink = (link: string) => {
        switch (link) {
            case siteMap.vehicle.vehicleQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showVehicleQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.commercial.commercialFreightQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showCommercialQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.chinaAustraliaQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showChinaAustraliaQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.chatToUs.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showChatToUs(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.commercial.tradeFinance.financeModal.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showFinanceModal(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.crates.cratesQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showCratesQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.instantFCLQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showInstantFCLQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.airFreight.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showChinaAirFreightQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.productSampleQuote.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showProductSampleQuote(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.customsClearanceForm.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showCustomsClearanceForm(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.ChinaToAusMultiPopup.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showChinaToAusMultiPopup(true)}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.popupJourney.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => Journey()}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.personalOrBusiness.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => JourneyChinatoAus()}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.personalOrBusiness.personal.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => PersonalForm()}
                    >
                        <RenderContent />
                    </button>
                );
            case siteMap.chinaToAustralia.customsClearanceForm.journey.path:
                return (
                    <button
                        className="z-20 w-full flex flex-col items-center"
                        onClick={() => showPopupJourneyCustomClearance(true)}
                    >
                        <RenderContent />
                    </button>
                );
            default:
                return (
                    <Link href={linkTo}>
                        <a className="z-20 w-full flex flex-col items-center" target={target} rel={rel}>
                            <RenderContent />
                        </a>
                    </Link>
                );
        }
    };

    return pickLink(linkTo);
};

export default ButtonNz;
