import Link from "next/link";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import { useRef } from "react";
import siteMap from "../../siteMap";
import { trackFacebookEvent } from "../../utils/hooks/useFacebookPixel";
import Script from "next/script";
import PaperformInlineEmbed from "./PaperformInlineEmbed";

interface Props {
  buttonText: string;
  theme: "redBlue" | "whiteBlue" | "blueRed" | "mint";
  linkTo: string;
  width?: string;
  fontSize?: string;
  target?: string;
  rel?: string;    // Added rel for security reasons
  context?: string;
  className?: string;
  fbPixelEvent?: string; // New prop for Facebook Pixel event tracking
  fbPixelParams?: any;   // Optional parameters for the event
  tracking?: boolean;
  dataPaperformId?: string; // Optional Paperform ID for form integration
  dataPaperformPopup?: boolean; // Optional flag to show Paperform as popup
  dataPaperformInline?: boolean; // Optional flag to show Paperform as inline embed
  setShowFullscreenForm?: (show: boolean) => void; // New prop for fullscreen form
  isSmall?: boolean; // New prop for checking screen size
  onClick?: () => void;
}

const Button = ({
  buttonText,
  theme,
  linkTo,
  width = "w-full",
  fontSize = "text-xl",
  target,
  rel,
  context,
  className,
  fbPixelEvent = "InitiateCheckout",
  fbPixelParams,
  tracking = true,
  dataPaperformId,
  dataPaperformPopup,
  dataPaperformInline,
  setShowFullscreenForm,
  isSmall,
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
    showPaperformModal,
  } = useContext(ModalContext);

  // Helper function to handle Facebook Pixel tracking with deduplication
  const handleFacebookTracking = () => {
    if (fbPixelEvent && tracking) {
      // Add a small delay to prevent rapid duplicate clicks
      const now = Date.now();
      const lastClick = (window as any).lastFbPixelClick || 0;

      if (now - lastClick > 2000) { // 1 second cooldown
        trackFacebookEvent(fbPixelEvent, fbPixelParams);
        (window as any).lastFbPixelClick = now;
      }
    }
  };



  // Universal click handler that always calls Facebook tracking
  const handleClick = (additionalAction?: () => void) => {
    handleFacebookTracking(); // Always call Facebook tracking first
    if (onClick) onClick();
    if (additionalAction) {
      additionalAction(); // Then call any additional action
    }
  };

  const RenderContent = () => {
    return (
      <div
        className={`
          relative py-3 text-xl font-medium group z-10
          ${width}
          ${theme === "redBlue"
            ? "border border-red"
            : theme === "whiteBlue"
              ? "border border-white hover:border-darkBlue"
              : theme === "blueRed"
                ? "border border-darkBlue hover:border-red"
                : theme === "mint"
                  ? "border border-green-300 hover:border-green-600"
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
                  : theme === "mint"
                    ? "text-white group-hover:text-white"
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
                  : theme === "mint"
                    ? "bg-green-600"
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
              : theme === "mint"
                ? "bg-green-900"
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
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showVehicleQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.commercial.commercialFreightQuote.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showCommercialQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.chinaAustraliaQuote.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showChinaAustraliaQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.chatToUs.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showChatToUs(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.commercial.tradeFinance.financeModal.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showFinanceModal(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.crates.cratesQuote.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showCratesQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.instantFCLQuote.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showInstantFCLQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.airFreight.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showChinaAirFreightQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.productSampleQuote.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showProductSampleQuote(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.customsClearanceForm.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showCustomsClearanceForm(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.ChinaToAusMultiPopup.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showChinaToAusMultiPopup(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.popupJourney.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => {
              showPopupJourney(true);
              setJourney(context as string);
            })}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.personalOrBusiness.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => {
              setChinaToAusJourneyType(context || '');
              showPopupJourneyChinatoAus(true);
            })}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.personalOrBusiness.personal.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showPersonalForm(true))}
          >
            <RenderContent />
          </button>
        );
      case siteMap.chinaToAustralia.customsClearanceForm.journey.path:
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => showPopupJourneyCustomClearance(true))}
          >
            <RenderContent />
          </button>
        );
      case 'paperform':
        return (
          <button
            className="z-20 flex flex-col items-center w-full"
            onClick={() => handleClick(() => {
              // Immediate feedback - show modal instantly
              if (isSmall && setShowFullscreenForm) {
                setShowFullscreenForm(true);
              } else {
                showPaperformModal(dataPaperformId || 'mlc28uxr');
              }

              // Optional: Prefetch if not already done
              const existingPreload = document.querySelector(`iframe[src*='${dataPaperformId || 'mlc28uxr'}.paperform.co']`);
              if (!existingPreload) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = `https://${dataPaperformId || 'mlc28uxr'}.paperform.co/`;
                document.head.appendChild(link);
              }
            })}
          >
            <RenderContent />
          </button>
        );
      default:
        return (
          <Link href={linkTo} passHref>
            <a
              className="z-20 flex flex-col items-center w-full"
              target={target}
              rel={rel}
              onClick={() => handleClick()}
            >
              <RenderContent />
            </a>
          </Link>
        );
    }
  };

  return (
    <>
      {dataPaperformId && (
        <Script
          src="https://paperform.co/__embed.min.js"
          strategy="afterInteractive"
        />
      )}
      {pickLink(linkTo)}
    </>
  );
};

export default Button;
