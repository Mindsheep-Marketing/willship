import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import ModalHeader from "./ModalHeader";
import Image from "next/image";
import Button from "../common/Button";
import "../../utils/hooks/dataLayer";
import { modalStyles } from "./VehicleQuoteModal";
import styles from "yet-another-react-lightbox/styles.css";

const firstRowItems = [
    {
        title: 'LCL',
        subtitle: 'Less than a Container Load',
        cbm: '(1-12 cbm/m3)',
        image: '/assets/images/china-to-australia/lcl.jpg',
        link: siteMap.chinaToAustralia.popupJourney.path,
        context: 'LCL'
    },
    {
        title: '20ft FCL',
        subtitle: '20 FT Full Container',
        cbm: '(13-28 cbm/m3)',
        image: '/assets/images/china-to-australia/20ft-fcl.jpg',
        link: siteMap.chinaToAustralia.popupJourney.path,
        context: 'FCL'
    },
    {
        title: '40ft FCL',
        subtitle: '40 FT Full Container',
        cbm: '(29 cbm/m3 or more)',
        image: '/assets/images/china-to-australia/40ft-fcl.jpg',
        link: siteMap.chinaToAustralia.popupJourney.path,
        context: 'FCL'
    }
];

const secondRowItems = [
    {
        title: 'Air Freight',
        image: '/assets/images/air-freight.png',
        link: siteMap.chinaToAustralia.airFreight.path
    },
    {
        title: 'Product Sample',
        image: '/assets/images/product-sample.png',
        link: siteMap.chinaToAustralia.productSampleQuote.path
    },
    {
        title: 'Small Packages',
        image: '/assets/images/small-packages.png',
        link: siteMap.chinaToAustralia.popupJourney.path,
        context: 'Small Packages & Parcels'
    },
    {
        title: 'Customs Clearance',
        image: '/assets/images/customs-clearance.png',
        link: siteMap.chinaToAustralia.customsClearanceForm.path
    }
];


const ChinaToAusMultiPopup = () => {
    const ref = useRef(null);

    const { showCommercialQuote } = useContext(ModalContext);

    return (
        <div className={modalStyles.modal + " text-center"}>
            <div ref={ref} className={modalStyles.formWrapper}>
                <div className={modalStyles.formContainer}>
                    <ModalHeader
                        text={"Let's Get Started"}
                    />
                    <div className="w-full max-w-8xl p-4 lg:p-12 flex flex-col gap-6">
                        <h3 className={modalStyles.formHeading + ' text-xl'}>
                            Please answer the following questions so we can provide you with accurate information and pricing tailored to your specific requirements.
                            <br />Select one: What are you wanting a quote for?
                        </h3>
                        <section className={modalStyles.sectionWrapper}>
                            <div className="w-full max-w-8xl flex lg:flex-row flex-col flex-wrap 2xl:flex-nowrap gap-8 2xl:gap-20 justify-center px-4 sm:px-0">
                                {firstRowItems.map(item => (
                                    <div key={item.title} className="rounded-3xl shadow-2xl lg:w-1/4 second-row-item flex flex-col items-center gap-3 relative">
                                        <div className="ribbon absolute text-white -top-3 -left-3 bg-darkBlue z-10 p-3 px-8 uppercase text-lg font-bold rounded-tl-3xl">Instant Quote!</div>
                                        <span className="bg-gradient-to-tl from-red to-rose-900 w-3 h-6 absolute top-10 -left-3 z-20 rounded-bl-3xl rounded-tl-3xl"></span>
                                        <span className="bg-darkBlue w-5 h-11 absolute top-5 -left-3 rounded-bl-3xl"></span>
                                        <div className="w-full aspect-video relative rounded-t-3xl overflow-hidden">
                                            <Image
                                                src={item.image}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={item.title}
                                            />
                                            <h3 className="absolute z-10 text-center bottom-5 w-full font-black text-white text-6xl">{item.title}</h3>
                                            <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 overflow-hidden"></span>
                                        </div>
                                        <div className="w-full first-letter:p-4 flex flex-col gap-2 p-6 pt-0">
                                            <h3 className="font-bold text-darkBlue text-lg uppercase">{item.subtitle}</h3>
                                            <h4 className="font-medium text-darkBlue text-xl">{item.cbm}</h4>
                                            <Button
                                                linkTo={item.link}
                                                buttonText="Get Instant Quote"
                                                theme="redBlue"
                                                context={item.context}
                                            />

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className={modalStyles.sectionWrapper + ' pt-4'}>
                            <div className="w-full max-w-8xl flex lg:flex-row flex-col flex-wrap 2xl:flex-nowrap gap-8 2xl:gap-20 justify-center px-4 sm:px-0">

                                {secondRowItems.map(item => (
                                    <div key={item.title} className="lg:w-1/6 second-row-item flex flex-col items-center gap-3">

                                        <h3 className="font-medium text-darkBlue text-2xl">{item.title}</h3>

                                        <div className={"w-24 aspect-square relative rounded-full border-black border overflow-hidden"}>
                                            <Image
                                                src={item.image}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={item.title}
                                            />
                                        </div>

                                        <Button
                                            linkTo={item.link}
                                            buttonText="Request a Quote"
                                            theme="redBlue"
                                            context={item.context}
                                        />

                                    </div>
                                ))}

                            </div>
                        </section>
                        <p className="text-xl">
                    {"Not sure which is the right option for you? "}
                    <button
                      className="underline text-blue-900"
                      onClick={() => showCommercialQuote(true)}
                    >
                      Click here to submit a request
                    </button>
                  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChinaToAusMultiPopup;