import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { Fragment, useEffect, useState, useRef, SetStateAction } from "react"
import parse from 'html-react-parser';
import SectionHeading from "../common/SectionHeading";
import siteMap from "../../siteMap";
import Loader from "../common/Loader";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, GlobeAltIcon } from '@heroicons/react/solid';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import VeryImportantInformationTemplate from "./VeryImportantInformationTemplate";
import ROROquoteInfo from "./ROROquoteInfo";
import OldVeryImportantInformationTemplate from "./OldVeryImportantInformationTemplate";

const AutoQuoteData = () => {

    const router = useRouter();
    const id = router.query["id"];

    const ref = useRef(false)
    
    const [quotes, setQuotes] = useState<any[]>([]);
    const [hasData, setHasData] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [vehicleText, setVehicleText] = useState<string>("")
    
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value: SetStateAction<number>) => {
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => {
        if (!id) return // This ensures that the API call isn't made until query id is defined.

        console.log('Quote ID: ' + id)

        const fetchData = async () => { 
            var url = `https://admin.willship.com.au/wp-json/automotive/v1/get/${id}`
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()

            console.log(result)
            setVehicleText(result.data[0].vehicleText)
            
            if (result.status == "200") {
                if (result.data.length > 0) {
                    setHasData(true)
                    setQuotes(result.data)
                } else {
                    setHasData(false)
                }
            } else {
                setHasData(false)
            }

            setIsLoading(false)
        }
        
        fetchData()
        
    }, [id])
    
    return (
        <>
        { !isLoading ? 
            hasData ? 
                quotes.length > 0 && (quotes.map((quote, i) => {
                    let quoteData = JSON.parse(quote.quoteData)
                    let templateData = quoteData[0].routeTemplateData;
                    let checklistTemplateData = quoteData[0].checklistTemplateData;
            
                    // console.log(templateData)

                    // Refactored block visibility logic using map
                    const blocks: Array<{
                        key: string;
                        visible: boolean;
                        data: any;
                        price: any;
                        accordionStart: number;
                        formattedPrice?: string;
                    }> = [
                        {
                            key: 'block_1',
                            visible: !Boolean(parseInt(quoteData[0].block_1_is_hidden)),
                            data: templateData.block_1,
                            price: quote.price1,
                            accordionStart: 1 // For inclusions/exclusions accordion IDs
                        },
                        {
                            key: 'block_2', 
                            visible: !Boolean(parseInt(quoteData[0].block_2_is_hidden)),
                            data: templateData.block_2,
                            price: quote.price2,
                            accordionStart: 3
                        },
                        {
                            key: 'block_3',
                            visible: !Boolean(parseInt(quoteData[0].block_3_is_hidden)),
                            data: templateData.block_3,
                            price: quote.price3,
                            accordionStart: 5
                        }
                    ];

                    // Special case handling (should be moved to config later)
                    if (quote.departureText == "Adelaide, Australia" && quote.destinationText == "Wellington, New Zealand") {
                        blocks[0].visible = true; // block_1
                    }

                    // Process each block's template data
                    blocks.forEach(block => {
                        if (!block.visible) return;

                        const blockData = block.data;
                        
                        // Transit time replacements
                        blockData.transit_time = blockData.transit_time
                            .replace("##TRANSITTIME_RORO##", quote.transitTime_RORO)
                            .replace("##TRANSITTIME_CONTAINER##", quote.transitTime_Container);

                        // Location replacements for all text fields
                        ['inclusions', 'exclusions', 'custom_text'].forEach(field => {
                            blockData[field] = blockData[field]
                                .replaceAll("##DEPARTURE##", quote.departureText)
                                .replaceAll("##DESTINATION##", quote.destinationText);
                        });

                        // Additional replacements for exclusions
                        blockData.exclusions = blockData.exclusions
                            .replaceAll("##CLOSESTPORT##", quote.closestPort);

                        // Calculate price
                        block.formattedPrice = blockData.price_desc.includes("PRICE ON APPLICATION") 
                            ? blockData.price_desc 
                            : `${quote.currency} ${block.price}`;
                            // : `${quote.currency} ${block.price} ${blockData.price_desc}`; //changed to remove DOOR TO DOOR from price_desc 6/16/25
                            
                    });
                    
                    var vehicleType = ""
                    var vehicleType2 = "vehicle is driven"
                    // vehicleType = (['1', '2', '3'].includes(quote.vehicle)) ? "Vehicle" : quote.vehicleText
                    if(quote.vehicle == 1){
                        vehicleType = "Small Vehicle"
                    }else if(quote.vehicle == 2){
                        vehicleType = "Medium Vehicle"
                    }else if(quote.vehicle == 3){
                        vehicleType = "Large Vehicle"
                    }else{
                        vehicleType = quote.vehicleText
                        vehicleType2 = "unit is towed" //caravan, boat on trailer, motorhome
                        if(quote.vehicle == 4){ //motorcycle
                            vehicleType2 = "motorcycle is driven"
                        }
                    }

                    var shippingDesc_RORO = "This is where the "+ vehicleType2 +" aboard the vessel and lashed to the deck for its journey. It must be drivable. Roll on Roll off is designed for empty vehicles and must not contain any household or personal items."

                    var shippingDesc_20FT = "When choosing this option you can fill the vehicle and the surrounds of the container with any personal effects or parts you wish to ship across as well."
                    
                    var shippingDesc_40FT = (quote.vehicle == 4) 
                        ? "When choosing this option the motorcycle is secured to the floor of the container and shipped with other items and vehicles."
                        : "When choosing this option you can fill the vehicle with as many personal effects or parts you wish to ship across aswell."
                        
                    // Function to get shipping description based on type
                    const getShippingDescription = (blockType: string) => {
                        if (blockType === "ROLL ON, ROLL OFF") return shippingDesc_RORO;
                        if (blockType === "20FT CONTAINER") return shippingDesc_20FT;
                        return shippingDesc_40FT;
                    };

                    var heading = "Quote to ship "+vehicleType+" for "+quote.name+" "+quote.last_name

                    var checklistURL : string = ""
                    var checklistURL = quote.id !== undefined ? siteMap.vehicle.vehicleChecklist.path+ "/?id=" + quote.id : ""



                    checklistTemplateData = checklistTemplateData.replaceAll("##VEHICLETYPE##",quote.vehicleText.toLowerCase())
                    checklistTemplateData = checklistTemplateData.replaceAll("##DEPARTURE##",quote.departureText)
                    checklistTemplateData = checklistTemplateData.replaceAll("##DESTINATION##",quote.destinationText)
                    

                    return (
                        <div key={i}>
                        <div className="flex flex-row flex-wrap w-full max-w-6xl items-stretch">
                            <a className="relative invisible quoteBanner">
                                <Image src='/assets/images/willship-banner.png' layout='fill' objectFit="cover" alt='Willship Logo'/>
                            </a>
                        </div>
                        <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 p-4 items-stretch bg-darkBlue text-center border-[1px] border-darkBlue">
                            <span className="w-full text-white font-sackLight text-2xl">
                                {vehicleType} SHIPPING QUOTE #{quote.id}
                            </span>
                        </div>
                        <div className="flex flex-row flex-wrap w-full max-w-6xl items-stretch" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}>
                            <div className="w-full md:w-1/2 lg:w-1/2 p-4" style={{"borderWidth":"1px", 'borderColor':"#022356", 'borderStyle':'solid'}}>
                                <b>Quote #: </b>{quote.id}<br/>
                                <b>Date: </b>{quote.created_at}<br/>
                                <b>Name: </b>{quote.name} {quote.last_name}<br/>
                                <b>Phone: </b>{quote.phone}<br/>
                                <b>Email: </b>{quote.email}
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/2 p-4" style={{"borderWidth":"1px", 'borderColor':"#022356", 'borderStyle':'solid'}}>
                                <b>Validity: </b>{quote.validity}<br/>
                                <b>Departure: </b>{ quote.departureText }<br/>
                                <b>Destination: </b>{ quote.destinationText }<br/>
                                <b>Shipping Date: </b>{ quote.shipping_date }<br/>
                                <b>Vehicle: </b>{ quote.makeModelYear }<br/>
                                {
                                    (quote.car_size != "") &&
                                    <>
                                        <b>Size: </b>{ quote.car_size } m<br/>
                                    </>
                                }                                         
                            </div>
                        </div>

                        <br /><br />
                        <h5 className="font-medium text-2xl text-darkBlue font-sackLight"><b>YOUR SHIPPING OPTIONS</b></h5>
                        <br />

                        <ROROquoteInfo 
                            blocks={blocks}
                            open={open}
                            handleOpen={handleOpen}
                            getShippingDescription={getShippingDescription}
                            vehicleType={vehicleType}
                            departureText={quote.departureText}
                            destinationText={quote.destinationText}
                        />

                        <div className="pageBreak displayOnPrint"></div>


                        {quote.departureText.includes("Australia") && quote.destinationText.includes("New Zealand") ? (
                            <VeryImportantInformationTemplate vehicleText={vehicleText} />
                        ) : (
                            <OldVeryImportantInformationTemplate checklistTemplateData={checklistTemplateData} />
                        )}

                        </div>
                        
                    )
                })) :

                    <>
                    <br />
                    <SectionHeading text="Quote not found." />
                    </>                   

            :
            <div className="w-full flex flex-col items-center gap-8 p-8 lg:py-16 bg-nearlyWhite">
                <Loader />
            </div>
        }
        </>
    )
};

export default AutoQuoteData;