import React, { useContext, useRef } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";

const PopupJourneyFreights = () => {
  const ref = useRef(null);

  const { 
    closeAllModals,
    showChinaAustraliaQuote,
    showInstantFCLQuote,
  } = useContext(ModalContext);

  const freightOptions = [
    {
      title: "LCL",
      subtitle: "Less than Container Load",
      subsubtitle: "(1-12 cbm/m3)",
      image: "/assets/images/china-to-australia/lcl.jpg",
      onClick: () => {
        closeAllModals();
        showChinaAustraliaQuote(true);
      }
    },
    {
      title: "FCL",
      subtitle: "20ft Container Load",
      subsubtitle: "(13-28 cbm/m3)",
      image: "/assets/images/china-to-australia/20ft-fcl.jpg",
      onClick: () => {
        closeAllModals();
        showInstantFCLQuote(true);
      }
    },
    {
      title: "FCL",
      subtitle: "40ft Container Load",
      subsubtitle: "(28-56 cbm/m3)",
      image: "/assets/images/china-to-australia/40ft-fcl.jpg",
      onClick: () => {
        closeAllModals();
        showInstantFCLQuote(true);
      }
    },
  ];

  const handleCloseModal = () => {
    closeAllModals();
  };

  return (
    <div className={modalStyles.modal + " text-center"}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader
            text="China to Australia Freight"
          />
          <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
            <h3 className={modalStyles.formHeading}>
            Are you looking to import LCL (Less than a container load), or via a 20ft or 40ft container?
            </h3>
            <div className="w-full flex flex-col lg:flex-row justify-evenly gap-4 lg:py-6">
              {freightOptions.map((item) => (
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
                  <div className="w-full flex flex-col gap-1 p-6 pt-0">
                    <h3 className="font-bold text-darkBlue text-3xl uppercase">
                      {item.title}
                    </h3>
                    <h4 className="font-medium text-darkBlue text-lg">
                      {item.subtitle}
                    </h4>
                    <h4 className="font-medium text-darkBlue text-lg">
                      {item.subsubtitle}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl font-medium text-gray-600">
              Select the shipping method that best suits your needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupJourneyFreights;
