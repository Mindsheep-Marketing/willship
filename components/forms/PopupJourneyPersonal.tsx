import React, { useContext, useRef } from "react";
import ModalContext from "../../context/ModalContext";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import Button from "../common/Button";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";
import { useRouter } from "next/router";

const PopupJourneyPersonal = () => {
  const ref = useRef(null);
  const router = useRouter();

  const { 
    showPopupJourney,
    closeAllModals,
    showPersonalForm,
    showPopupJourneyPersonal
  } = useContext(ModalContext);

  const personalOptions = [
    {
      title: "IMPORT BUILDING MATERIALS",
      image: "/assets/images/import-building-materials.png",
      formValue: "I'm importing building materials",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(false);
        showPersonalForm(true);
        localStorage.setItem('selectedPersonalGoodsType', "I'm importing building materials");
      }
    },
    {
      title: "IMPORT A MODULAR/CONTAINER HOME",
      image: "/assets/images/building.jpg",
      formValue: "I'm importing portable homes",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(false);
        showPersonalForm(true);
        localStorage.setItem('selectedPersonalGoodsType', "I'm importing portable homes");
      }
    },
    {
      title: "IMPORT MACHINERY OR HEAVY EQUIPMENT",
      image: "/assets/images/import-machinery.png",
      formValue: "I'm importing machinery",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(false);
        showPersonalForm(true);
        localStorage.setItem('selectedPersonalGoodsType', "I'm importing machinery");
      }
    },
    {
      title: "IMPORT FURNITURE",
      image: "/assets/images/import-furniture.png",
      formValue: "I'm importing furniture",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(false);
        showPersonalForm(true);
        localStorage.setItem('selectedPersonalGoodsType', "I'm importing furniture");
      }
    },
    {
      title: "BUY SOMETHING FROM ALIBABA (OR SIMILAR SITES)",
      image: "/assets/images/computer.jpg",
      formValue: "I'm buying from Alibaba",
      onClick: () => {
        closeAllModals();
        showPopupJourneyPersonal(false);
        showPersonalForm(true);
        localStorage.setItem('selectedPersonalGoodsType', "I'm buying from Alibaba");
      }
    }
  ];

  const handleCloseModal = () => {
    closeAllModals();
    showPopupJourneyPersonal(false);
  };

  // useOnClickOutside(ref, handleCloseModal);

  return (
    <div className={modalStyles.modal + " text-center"}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader 
            text="Importing Personal Use Goods from China to Australia Form" 
            onClose={handleCloseModal}
          />
          <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
            <h3 className={modalStyles.formHeading}>
              What are you looking to Import?
            </h3>
            <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-6 px-4">
              {personalOptions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl shadow-2xl flex flex-col items-center gap-3 relative cursor-pointer hover:shadow-xl transition-shadow w-full max-w-[300px]"
                >
                  <div
                    onClick={item.onClick}
                    className="absolute inset-0 z-10 opacity-0 h-full cursor-pointer"
                  />
                  <div className="w-full aspect-video relative rounded-t-3xl overflow-hidden">
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="w-full p-4">
                    <h3 className="font-medium text-darkBlue text-lg uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupJourneyPersonal; 