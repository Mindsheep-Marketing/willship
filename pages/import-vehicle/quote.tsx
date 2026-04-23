import Head from "next/head";
import { useRouter } from "next/router";
import AutoQuoteData from "../../components/Automotive/AutoQuoteData";
import WhatWeCanShip from "../../components/Automotive/WhatCanWeShip";
import Testimonials10 from "../../components/common/Testimonials10";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import siteMap from "../../siteMap";
import Link from "next/link";
import Image from "next/image";



const vehicleQuoteData = () => (

    <>
        <section className="w-full flex flex-col items-center gap-8 p-8 lg:py-16 bg-nearlyWhite">
        {/* size: 330mm 427mm; */}
            <style>
                {
                `
                .quote a:not(.z-20){
                    text-decoration: underline;
                }
                .quote .block{
                    font-size: inherit;
                    font-weight: inherit;
                }
                .displayOnPrint{ display: none; }
                @media print{ 
                    @page {
                        size: 330mm 427mm;
                        margin: 1cm;
                    }
                    body{
                        font-size: 16pt !important;
                        background-color: #FFF !important;
                        padding-top: 1cm;
                        padding-bottom: 2.5cm;
                    }
                    .quote {
                        width: 100%;
                    }
                    #header, .track-record, .awards, #footer, .quoteSidebar  { display: none; }
                    .elfsight-app-c2584fb9-5e67-4222-a7d1-280b6b6ec76b{ display: none; }
                    .displayOnPrint{ display: block; }
                    .hideOnPrint{ display: none; }
                    .quote{ margin-top: -190px; background-color: #FFF !important; }

                    .bg-darkBlue{ background-color: #022356 !important;  -webkit-print-color-adjust: exact; }
                    .text-white{ color: #FFF !important; }
                    .pageBreak{page-break-after: always;}
                    .text-center{ text-align: center; }
                    .quoteBanner{ 
                        width: 100%;
                        height: 300px;
                        visibility: visible;
                        margin-bottom: 50px;
                    }
                    img {
                        -webkit-print-color-adjust: exact;
                    }
                }
                `
                }
            </style>
            <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 items-stretch">

                <div className="w-full flex flex-col lg:w-2/3 quote">
                    <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch bg-nearlyWhite lg:hidden md:block hideOnPrint" style={{'marginBottom':'20px'}}>
                        <Link href={siteMap.contact.path}>
                            <a className="w-full bg-red text-white text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'textDecoration':'none'}}><b>CONTACT US</b></a>
                        </Link>
                        <br/>
                        <a onClick={() => setTimeout(function () { window.print()}, 500)} className="w-full bg-white text-darkBlue text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'cursor':'pointer', 'textDecoration':'none'}}><b>PRINT QUOTE</b></a>
                    </div>
                    <AutoQuoteData />
                </div>

                <div className="w-full flex flex-col lg:w-1/3 quoteSidebar">
                    <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch bg-nearlyWhite">
                        <Link href={siteMap.contact.path}>
                            <a className="w-full bg-red text-white text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}><b>CONTACT US</b></a>
                        </Link>
                        <br/>
                        <a onClick={() => setTimeout(function () { window.print()}, 500)} className="w-full bg-white text-darkBlue text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'cursor':'pointer'}}><b>PRINT QUOTE</b></a>
                    </div>
                    <br/>
                    {
                    /* <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'background':'#fafafa', 'display':'none'}}>
                        <div className="w-full text-center" style={{"background": "#e7e7e7", "padding":"17px", "borderBottom":"2px solid #ccc"}}>
                            <b>VERY IMPORTANT INFORMATION</b>
                        </div>
                        <div className="w-full p-4" >

                            <b>1. TRANSIT INSURANCE</b>
                            <p>We can arrange this on your behalf. For more details on the rates, minimum policy and other information, click on the link below.</p>
                            <br/>
                            <a href="#" target="_blank" rel="noreferrer" className="bg-darkBlue text-white px-4 py-2">READ MORE</a>
                            
                            <br /><br />

                            <b>2. IMPORT TAXES AND DUTIES</b>
                            <p>We have a great set up between Australia, NZ and the UK and many people are eligible for duty and VAT exemption, meaning you pay NO taxes on import. To know if you are eligible for VAT exemption, click on the link below.</p>
                            <br/>
                            <a href="#" target="_blank" rel="noreferrer" className="bg-darkBlue text-white px-4 py-2">READ MORE</a>

                            <br /><br />

                            <b>3. COMPLIANCE AND REGISTRATION</b>
                            <p>This depends on the type of vehicle and the country to which the vehicle is being imported. To find out more information, click on the link below.</p>
                            <br/>
                            <a href="#" target="_blank" rel="noreferrer" className="bg-darkBlue text-white px-4 py-2">READ MORE</a>

                            <br /><br />

                            <b>4. CLEANING AND PREPARATION OF CARGO FOR EXPORT</b>
                            <p>It is important that you take the time to clean your cargo as much as possible before handing it over for shipment.</p>
                            <br/>
                            <a href="#" target="_blank" rel="noreferrer" className="bg-darkBlue text-white px-4 py-2">READ MORE</a>
                        </div>
                    </div> */
                    }
                    <Link href={siteMap.usefulInformation.roroVsContainer.path}>
                        <a
                        className={`flex flex-col gap-2 hover:text-white hover:bg-darkBlue bg-nearlyWhite text-darkGrey shadow-lg w-full`}
                        >
                        <div className="w-full aspect-video relative">
                            <Image src="/assets/images/ship3.jpg" layout='fill' objectFit="cover" alt="Roll-on/Roll-off vs Container Shipping: Which is Right for You?" />
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">
                            Roll-on/Roll-off vs Container Shipping: Which is Right for You?
                            </h3>
                            <p>
                            SHIPPING OPTIONS When looking to ship your car overseas you will likely come across...
                            </p>
                        </div>
                        </a>
                    </Link>
                    <br/>
                    <Link href={siteMap.usefulInformation.roroShippingHowItsDone.path}>
                        <a
                        className={`flex flex-col gap-2 hover:text-white hover:bg-darkBlue bg-nearlyWhite text-darkGrey shadow-lg w-full`}
                        >
                        <div className="w-full aspect-video relative">
                            <Image src="/assets/images/roro.jpg" layout='fill' objectFit="cover" alt="Roll on, Roll off Shipping - How it's done." />
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">
                            Roll on, Roll off Shipping - How it&apos;s done.
                            </h3>
                            <p>
                            There is often confusion about exactly what roll on roll off shipping is and how...
                            </p>
                        </div>
                        </a>
                    </Link>
                    <br/>
                    <Link href={siteMap.usefulInformation.parametersOfContainers.path}>
                        <a
                        className={`flex flex-col gap-2 hover:text-white hover:bg-darkBlue bg-nearlyWhite text-darkGrey shadow-lg w-full`}
                        >
                        <div className="w-full aspect-video relative">
                            <Image src="/assets/images/containers6.jpg" layout='fill' objectFit="cover" alt="Container Dimensions" />
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">
                            Container Dimensions
                            </h3>
                            <p>
                            Parameters of sea containers: 40&apos; HIGH-CUBE List of All Container Types 20&apos;GP INSIDE LENGTH: 5.895 m...
                            </p>
                        </div>
                        </a>
                    </Link>
                    <br/>
                    <Link href={siteMap.usefulInformation.howMuchSpaceInContainer.path}>
                        <a
                        className={`flex flex-col gap-2 hover:text-white hover:bg-darkBlue bg-nearlyWhite text-darkGrey shadow-lg w-full`}
                        >
                        <div className="w-full aspect-video relative">
                            <Image src="/assets/images/container-space.webp" layout='fill' objectFit="cover" alt="How Much Space Is In A Container" />
                        </div>
                        <div className="p-2 flex flex-col gap-2">
                            <h3 className="font-semibold text-lg">
                            How Much Space Is In A Container
                            </h3>
                            <p>
                            If you are looking to ship a car to new zealand or worldwide with belongings along...
                            </p>
                        </div>
                        </a>
                    </Link>
                </div>

            </div>
        </section>
        
        {/* <WhatWeCanShip /> */}
        {/* <VehicleFAQ /> */}
        {/* <Testimonials10 /> */}
    </>
);



export default vehicleQuoteData;