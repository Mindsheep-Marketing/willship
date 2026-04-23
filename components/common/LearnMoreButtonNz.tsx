import Link from "next/link";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import LearnMore from "../Automotive/LearnMore";

interface Props {
  buttonText: string;
  theme: "redBlue" | "whiteBlue" | "blueRed";
  linkTo?: string;
  width?: string;
  fontSize?: string;
  target?: string;
  rel?: string;
  context?: string;
  className?: string;
  onClick?: () => void;
}

const LearnMoreButtonNz = ({
  buttonText,
  theme,
  linkTo = "",
  width = "w-full",
  fontSize = "text-xl",
  target,
  rel,
  context,
  className = "",
  onClick,
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

  const handleContextModals = (path: string) => {
    const map = {
      [siteMap.vehicle.vehicleQuote.path]: () => showVehicleQuote(true),
      [siteMap.commercial.commercialFreightQuote.path]: () => showCommercialQuote(true),
      [siteMap.chinaToAustralia.chinaAustraliaQuote.path]: () => showChinaAustraliaQuote(true),
      [siteMap.chinaToAustralia.chatToUs.path]: () => showChatToUs(true),
      [siteMap.commercial.tradeFinance.financeModal.path]: () => showFinanceModal(true),
      [siteMap.crates.cratesQuote.path]: () => showCratesQuote(true),
      [siteMap.chinaToAustralia.instantFCLQuote.path]: () => showInstantFCLQuote(true),
      [siteMap.chinaToAustralia.airFreight.path]: () => showChinaAirFreightQuote(true),
      [siteMap.chinaToAustralia.productSampleQuote.path]: () => showProductSampleQuote(true),
      [siteMap.chinaToAustralia.customsClearanceForm.path]: () => showCustomsClearanceForm(true),
      [siteMap.chinaToAustralia.ChinaToAusMultiPopup.path]: () => showChinaToAusMultiPopup(true),
      [siteMap.chinaToAustralia.popupJourney.path]: () => {
        setJourney(context || "");
        showPopupJourney(true);
      },
      [siteMap.chinaToAustralia.personalOrBusiness.path]: () => {
        setChinaToAusJourneyType(context || "");
        showPopupJourneyChinatoAus(true);
      },
      [siteMap.chinaToAustralia.personalOrBusiness.personal.path]: () => showPersonalForm(true),
      [siteMap.chinaToAustralia.customsClearanceForm.journey.path]: () => showPopupJourneyCustomClearance(true),
    };

    if (map[path]) {
      return map[path];
    }

    return null;
  };

  const baseStyle = `
    relative py-3 font-medium group z-10 ${width} ${className}
    ${theme === "redBlue" ? "border border-red"
      : theme === "whiteBlue" ? "border border-white hover:border-darkBlue"
      : theme === "blueRed" ? "border border-darkBlue hover:border-red"
      : "border-0"}
  `;

  const textStyle = `
    text-center ${fontSize}
    ${theme === "redBlue" ? "text-white"
      : theme === "whiteBlue" ? "text-darkBlue group-hover:text-white"
      : theme === "blueRed" ? "text-white group-hover:text-blue"
      : "text-red group-hover:text-darkBlue"}
  `;

  const backgroundStyle = `
    absolute z-1 w-full h-full top-0 left-0 -z-10
    ${theme === "redBlue" ? "bg-red"
      : theme === "whiteBlue" ? "bg-white"
      : theme === "blueRed" ? "bg-darkBlue"
      : "bg-red"}
  `;

  const hoverBackgroundStyle = `
    absolute h-full top-0 left-0 -z-10
    transition-width duration-500 ease-out
    ${theme === "redBlue" || theme === "whiteBlue" ? "bg-darkBlue" : "bg-red"}
    w-0 group-hover:w-full
  `;

  const RenderContent = () => (
    <div className={baseStyle}>
      <p className={textStyle}>{buttonText}</p>
      <div className={backgroundStyle} />
      <div className={hoverBackgroundStyle} />
    </div>
  );

  const modalHandler = handleContextModals(linkTo);

  if (modalHandler || onClick) {
    return (
      <button
        onClick={onClick || modalHandler || undefined}
        className="z-20 w-full flex flex-col items-center"
        type="button"
      >
        <RenderContent />
      </button>
    );
  }

  return (
    <Link href={linkTo} passHref>
      <a
        className="z-20 w-full flex flex-col items-center"
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      >
        <RenderContent />
      </a>
    </Link>
  );
};

export default LearnMoreButtonNz;
