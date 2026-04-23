import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import Button from "../common/Button";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";

const PopupJourney = () => {
  const ref = useRef(null);

  function otherVideoLink() {
    return { __html: '<a href="https://youtu.be/JsLYHE69zj4">here</a>' };
  }

  let info = "";

  const incoterms = [
    {
      title: "FOB",
      subtitle: "Free on Board",
      image: "/assets/images/china-to-australia/fob.jpg",
      data: {
        title: "FOB (Free on Board)",
        description:
          "Awesome! If you're buying on FOB terms then we are able to provide you with an instant quote for the shipment - please complete the form on the following page and we will email you a comprehensive instant quote for your shipment.",
        description2:
          "Awesome! If you're buying on FOB terms and the shipment is under 12m3 in volume, then we are able to provide you with an instant quote for the shipment - please complete the form on the following page and we will email you a comprehensive instant quote for your shipment.",
        learn: "https://youtu.be/MInOSbZ3etI",
      },
    },
    {
      title: "EXW",
      subtitle: "Ex-Works",
      image: "/assets/images/china-to-australia/exw.jpg",
      data: {
        title: "EX (EX Works)",
        description:
          "If you're buying on EXW (Ex-Works) buying terms then we will need the address of your supplier in order to provide pricing for the local charges in China, so once you get your instant quote, please just email us back with the supplier's address, and we'll provide pricing for the local charges in China so you have your full EX Works quote.",
        learn: "https://youtu.be/MInOSbZ3etI",
      },
    },
    {
      title: "Other",
      subtitle: "CIF/CFR/DAP/DDP/ETC.",
      image: "/assets/images/china-to-australia/other.jpg",
      data: {
        title: "Other",
        subtitle: "(CIF/CFR/DAP/DDP and more)",
        description:
          "So if you're considering buying any other incoterm (CIF/ CFR / DAP / DDP etc) then we would highly recommend reconsidering / renegotiating with your supplier as allowing the supplier to organise the freight removes your control and can open the door to a myriad of problems. Learn more about the reasons ",
        learn: "https://youtu.be/JsLYHE69zj4",
        important:
          "IMPORTANT: We would only ever recommend buying on FOB or EXW terms from China.",
      },
    },
    {
      title: "Small Packages & Parcels",
      subtitle: "",
      image: "",
      data: {
        title: "Small Packages & Parcels",
        description:
          "If the package/s you're looking to import are under around 75kg in total weight, then Willship will likely not be the best company to handle this import for you. There are specialised international courier companies that would be able to offer sharper pricing than what we could, we've included some links to some recommendations below:",
        learn: "https://youtu.be/JsLYHE69zj4",
        images: {
          image: {
            src: "/assets/images/dhl-logo.svg",
            link: "https://www.dhl.com/au-en/home.html",
          },
          image2: {
            src: "/assets/images/ups-logo.svg",
            link: "https://www.ups.com/au/en/Home.page",
          },
          image3: {
            src: "/assets/images/fedex-logo.svg",
            link: "https://www.fedex.com/en-au/home.html",
          },
        },
      },
    },
  ];

  const filterIncoterms = incoterms.slice(0, 3);

  const [step, setStep] = useState("");

  const { showPopupJourney, journeyContext, showCommercialQuote, closeAllModals, showChatToUs } =
    useContext(ModalContext);

  const handleCloseModal = () => {
    closeAllModals();
  };
  // useOnClickOutside(ref, handleCloseModal);

  return (
    <div className={modalStyles.modal + " text-center"}>
      <div ref={ref} className={modalStyles.formWrapper}>
        <div className={modalStyles.formContainer}>
          <ModalHeader
            text={"China to Australia " + journeyContext + " Instant Quote"}
          />
          <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
            {step == "" &&
              (journeyContext == "FCL" || journeyContext == "LCL") && (
                <>
                  <h3 className={modalStyles.formHeading}>
                    Select your shipping term/incoterm
                  </h3>
                  <div className="w-full flex flex-col lg:flex-row justify-evenly gap-4 lg:py-6">
                    {filterIncoterms.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-3xl shadow-2xl lg:w-1/4 second-row-item flex flex-col items-center gap-3 relative cursor-pointer"
                        onClick={() => setStep(item.title)}
                      >
                        <div className="w-full aspect-video max-h-[100px] lg:max-h-[unset] relative rounded-t-3xl overflow-hidden">
                          <Image
                            src={item.image}
                            layout="fill"
                            objectFit="cover"
                            alt={item.title}
                          />
                          {/* <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 overflow-hidden"></span> */}
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
                  <p className="text-xl">
                    {"Not sure about your incoterm? "}
                    <button
                      className="underline text-blue-900"
                      onClick={() => showCommercialQuote(true)}
                    >
                      Click here to request a quote anyway
                    </button>
                  </p>
                </>
              )}
            {(journeyContext ==
              incoterms.find((item) => item.title == journeyContext)?.title
              ? (info = journeyContext as string)
              : (info = step as string)) && (
                <>
                  {incoterms.find((item) => item.title === info)?.data && (
                    <>
                      {incoterms.find((item) => item.title === info)?.data
                        .title ? (
                        <h3 className={modalStyles.formHeading + " uppercase"}>
                          {
                            incoterms.find((item) => item.title === info)?.data
                              .title
                          }
                        </h3>
                      ) : (
                        ""
                      )}
                      {incoterms.find((item) => item.title === info)?.data
                        .subtitle ? (
                        <h4 className="text-xl font-bold text-darkBlue">
                          {
                            incoterms.find((item) => item.title === info)?.data
                              .subtitle
                          }
                        </h4>
                      ) : (
                        ""
                      )}
                      <div className="text-xl max-w-4xl mx-auto">
                        {incoterms.find((item) => item.title === info)?.data
                          .important ? (
                          <p className="text-red font-medium mb-4">
                            {
                              incoterms.find((item) => item.title === info)?.data
                                .important
                            }
                          </p>
                        ) : (
                          ""
                        )}
                        <>
                          {incoterms.find((item) => item.title == info)?.data
                            .description && (
                              <p className="text-darkGrey">
                                {journeyContext == "LCL" &&
                                  incoterms.find((item) => item.title == info)?.data
                                    .description2
                                  ? incoterms.find((item) => item.title == info)
                                    ?.data.description2
                                  : incoterms.find((item) => item.title == info)
                                    ?.data.description}
                                  {step == "Other" && incoterms.find((item) => item.title == info)?.data.learn && (
                                    <a className="underline text-blue-900" href={ incoterms.find((item) => item.title === step)?.data.learn as string }
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    >here.</a>
                                  )}
                              </p>
                            )}
                        </>
                        <>
                          {incoterms.find((item) => item.title == info)?.data
                            .images && incoterms.filter((item) => item.title === info) && (
                              <div className="mt-6 w-full flex justify-center gap-10 items-center">
                                <a href={incoterms.find((item) => item.title == info)?.data.images?.image.link}><img src={incoterms.find((item) => item.title == info)?.data.images?.image.src} height={120} width={180} /></a>
                                <a href={incoterms.find((item) => item.title == info)?.data.images?.image2.link}><img src={incoterms.find((item) => item.title == info)?.data.images?.image2.src} height={120} width={120} /></a>
                                <a href={incoterms.find((item) => item.title == info)?.data.images?.image3.link}><img src={incoterms.find((item) => item.title == info)?.data.images?.image3.src} height={120} width={180} /></a>
                              </div>
                            )}
                        </>
                      </div>
                      {step == "Other" && (
                        <p className="text-xl">
                        {"Still need a quote anyway? Click below to get an instant quote based on FOB terms."}
                      </p>
                      )}
                      {step ? (
                        <Button
                          linkTo={
                            journeyContext == "FCL"
                              ? siteMap.chinaToAustralia.instantFCLQuote.path
                              : journeyContext == "LCL"
                                ? siteMap.chinaToAustralia.chinaAustraliaQuote.path
                                : "/"
                          }
                          buttonText={"Get Instant Quote"}
                          theme="redBlue"
                          width="w-full max-w-[220px]"
                        />
                      ) : (
                        <>
                          <p className="text-xl font-medium">Want to use us anyway? Click here to submit a quote request:</p>
                          <Button
                            linkTo={
                              siteMap.commercial.commercialFreightQuote.path
                            }
                            buttonText="Request a Quote"
                            theme="redBlue"
                            width="w-full max-w-[220px]"
                          />
                        </>
                      )}
                      {step == "Other" &&
                        incoterms.find((item) => item.title === step)?.data
                          .learn ? (
                        <p className="text-xl">
                          <p className="text-xl border-t-2 max-w-[480px] m-auto p-2 mt-2">
                        {"Unsure on what to do? Call us on 07 3267 0575 or submit an enquiry "}
                        <button
                          className="underline text-blue-900"
                          onClick={() => showChatToUs(true)}
                        >
                          Chat to us
                        </button>
                      </p>
                        </p>
                      ) : incoterms.find((item) => item.title === step)?.data
                        .learn ? (
                        <p className="text-xl">
                          {"Learn more about " + step + " "}
                          <a className="underline text-blue-900"
                            href={
                              incoterms.find((item) => item.title === step)?.data
                                .learn as string
                            }
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            here
                          </a>
                        </p>
                      ) : (
                        ""
                      )}
                      {/* 
                    <button className="top-0 left-0 ml-4" onClick={() => setStep("")}>
                      Back
                    </button> */}
                    </>
                  )}
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupJourney;
