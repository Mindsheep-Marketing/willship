import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import Button from "../common/Button";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";
import { useRouter } from "next/router";

const PopupJourneyChinatoAus = () => {
  const ref = useRef(null);
  const router = useRouter();

  const { 
    showPopupJourney, 
    showCommercialQuote, 
    closeAllModals, 
    showChatToUs, 
    setJourney,
    chinaToAusJourneyType,
    showPopupJourneyPersonal
  } = useContext(ModalContext);

  // Log initial value

  function otherVideoLink() {
    return { __html: '<a href="https://youtu.be/JsLYHE69zj4">here</a>' };
  }

  let info = "";

  const incoterms = [
    {
      title: "BUSINESS",
      subtitle: "",
      image: "/assets/images/china-to-australia/fob.jpg",
      onClick: () => {
        closeAllModals();
        if (chinaToAusJourneyType) {
          setJourney(chinaToAusJourneyType);
        }
        showPopupJourney(true);
      }
    },
    {
      title: "PERSONAL",
      subtitle: "",
      image: "/assets/images/china-to-australia/exw.jpg",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(true);
      }
    },
  ];

  const filterIncoterms = incoterms.slice(0, 3);

  const [step, setStep] = useState("");

  const handleCloseModal = () => {
    closeAllModals();
  };
  // useOnClickOutside(ref, handleCloseModal);

  return (
    <div className={modalStyles.modal + " text-center"}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader
            text={`China to Australia ${chinaToAusJourneyType} Form`}
          />
          <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
            {step == "" &&
              (
                <>
                  <div className="flex flex-col">
                    <h3 className={modalStyles.formHeading}>
                      Are you importing as a business or for personal use?
                    </h3>
                    <p className={`!text-base ${modalStyles.formText}`}>
                    <strong>Please note:</strong> Instant quotes are only available for commercial shipments.
                    If you&apos;re importing for personal use, there are often more variables involved — but don&apos;t worry, we&apos;ll guide you through everything step-by-step and explain what&apos;s needed to get accurate pricing.
                    </p>
                  </div>
                  <div className="w-full flex flex-col lg:flex-row justify-evenly gap-4 lg:py-6">
                    {filterIncoterms.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl shadow-2xl lg:w-1/4 second-row-item flex flex-col items-center gap-3 relative cursor-pointer"
                      >
                        {item.onClick && (
                          <div
                            onClick={item.onClick}
                            className="!absolute inset-0 z-10 opacity-0 h-full cursor-pointer"
                          />
                        )}
                        <div className="w-full aspect-video max-h-[100px] lg:max-h-[unset] relative rounded-t-3xl overflow-hidden">
                          <Image
                            src={item.image}
                            layout="fill"
                            objectFit="cover"
                            alt={item.title}
                          />
                        </div>
                        <div className="w-full first-letter:p-4 flex flex-col gap-2 p-6 pt-0">
                          <h3 className="font-medium text-darkBlue text-4xl uppercase">
                            {item.title}
                          </h3>
                          <h4 className="font-medium text-darkBlue text-xl uppercase">
                            {item.subtitle}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xl font-medium">
                      Kindly select one of the options above
                  </p>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupJourneyChinatoAus;
