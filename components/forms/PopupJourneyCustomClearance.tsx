import React, { useContext, useRef } from "react";
import ModalContext from "../../context/ModalContext";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import Button from "../common/Button";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";
import { useRouter } from "next/router";

const PopupJourneyCustomClearance = () => {
  const ref = useRef(null);
  const router = useRouter();

  const { 
    closeAllModals,
    showCustomsClearanceForm,
    showPopupJourneyCustomClearance,
  } = useContext(ModalContext);
  // {
  //   title: "I'M JUST DOING RESEARCH AND FEASIBILITY",
  //   image: "/assets/images/risks/human-error.jpg",
  //   formValue: "I'm just doing research/feasibility at the moment",
  //   onClick: () => handleOptionClick("I'm just doing research/feasibility at the moment")
  // },
  // {
  //   title: "MY GOODS HAVE NOT BEEN SHIPPED YET",
  //   image: "/assets/images/warehouse2.jpg",
  //   formValue: "My goods have not been shipped yet",
  //   onClick: () => handleOptionClick("My goods have not been shipped yet")
  // },
  // {
  //   title: "MY GOODS HAVE BEEN SHIPPED AND ON ITS WAY",
  //   image: "/assets/images/customs-clearance/air-freight-clearance.jpg",
  //   formValue: "My goods have already been shipped and are on their way",
  //   onClick: () => handleOptionClick("My goods have already been shipped and are on their way")
  // },
  // {
  //   title: "MY GOODS HAVE ALREADY ARRIVED",
  //   image: "/assets/images/blog/international-freight-bg.jpg",
  //   formValue: "My goods have already arrived",
  //   onClick: () => handleOptionClick("My goods have already arrived")
  // },


  const customsClearanceOptions = [
    {
      title: "I'M JUST DOING RESEARCH/FEASIBILITY AT THE MOMENT",
      image: "/assets/images/customs-clearance/banner-image.jpg",
      formValue: "I'm just doing research/feasibility at the moment",
      onClick: () => {
        closeAllModals();
        showPopupJourneyCustomClearance(false);
        showCustomsClearanceForm(true);
        localStorage.setItem('selectedStatusShipment', "I'm just doing research/feasibility at the moment");
      }
    },
    {
      title: "MY GOODS HAVE NOT BEEN SHIPPED YET",
      image: "/assets/images/warehouse2.jpg",
      formValue: "My goods have not been shipped yet",
      onClick: () => {
        closeAllModals();
        showPopupJourneyCustomClearance(false);
        showCustomsClearanceForm(true);
        localStorage.setItem('selectedStatusShipment', "My goods have not been shipped yet");
      }
    },
    {
      title: "MY GOODS HAVE BEEN SHIPPED, AND ARE ON THEIR WAY",
      image: "/assets/images/customs-clearance/air-freight-clearance.jpg",
      formValue: "My goods have already been shipped and are on their way",
      onClick: () => {
        closeAllModals();
        showPopupJourneyCustomClearance(false);
        showCustomsClearanceForm(true);
        localStorage.setItem('selectedStatusShipment', "My goods have already been shipped and are on their way");
      }
    },
    {
      title: "MY GOODS HAVE ALREADY ARRIVED",
      image: "/assets/images/blog/international-freight-bg.jpg",
      formValue: "My goods have already arrived",
      onClick: () => {
        closeAllModals();
        showPopupJourneyCustomClearance(false);
        showCustomsClearanceForm(true);
        localStorage.setItem('selectedStatusShipment', "My goods have already arrived");
      }
    },
  ];

  const handleCloseModal = () => {
    closeAllModals();
    showPopupJourneyCustomClearance(false);
  };

  // useOnClickOutside(ref, handleCloseModal);

  return (
    <div className={modalStyles.modal + " text-center"}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader 
            text="Customs Clearance Form" 
            onClose={handleCloseModal}
          />
          <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
            <h3 className={modalStyles.formHeading}>
              What is the current status of your shipment?
            </h3>
            <div className="w-full max-w-5xl mx-auto flex flex-wrap md:flex-nowrap justify-center gap-6 px-4 py-10">
              {customsClearanceOptions.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl shadow-2xl flex flex-col items-center gap-3 relative cursor-pointer hover:shadow-xl transition-shadow w-full max-w-[300px] md:max-w-[320px]"
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

export default PopupJourneyCustomClearance; 