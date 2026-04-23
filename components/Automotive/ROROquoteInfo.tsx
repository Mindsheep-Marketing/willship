import { Fragment } from 'react';
import parse from 'html-react-parser';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Button from '../common/Button';

interface BlockData {
    type: string;
    transit_time: string;
    transit_desc: string;
    inclusions: string;
    exclusions: string;
    custom_text: string;
    price_desc: string;
}

interface QuoteBlock {
    key: string;
    visible: boolean;
    data: BlockData;
    price: any;
    accordionStart: number;
    formattedPrice?: string;
}

interface ROROquoteInfoProps {
    blocks: QuoteBlock[];
    open: number;
    handleOpen: (value: number) => void;
    getShippingDescription: (blockType: string) => string;
    vehicleType?: string;
    departureText?: string;
    destinationText?: string;

}

const ROROquoteInfo = ({ 
    blocks, 
    open, 
    handleOpen, 
    getShippingDescription,
    vehicleType = "",
    departureText = "",
    destinationText = ""
}: ROROquoteInfoProps) => {
    // Function to get the appropriate custom text content
    const getCustomTextContent = (block: QuoteBlock) => {
        if (block.data.type !== "ROLL ON, ROLL OFF") {
            return block.data.custom_text;
        }

        const australianPorts = ["Brisbane, Australia", "Melbourne, Australia", "Sydney, Australia"];
        const nzDestinations = ["Auckland, New Zealand", "Wellington, New Zealand", "Lyttelton, New Zealand"];
        
        const isAustralianDeparture = australianPorts.some(port => departureText.includes(port));
        const isNZDestination = nzDestinations.some(dest => destinationText.includes(dest));

        if (isAustralianDeparture && destinationText === "Nelson, New Zealand") {
            return "";
        }

        if (isAustralianDeparture && isNZDestination) {
            // Check vehicle type for appropriate message
            const isSmallOrMedium = vehicleType === "Small Vehicle" || vehicleType === "Medium Vehicle";
            const isLargeOrSpecial = vehicleType === "Large Vehicle" || 
                                    vehicleType === "Motorhome" ||
                                    vehicleType === "Caravan/ Camper trailer" || 
                                    vehicleType === "Boat on trailer";

            if (isSmallOrMedium) {
                return `<strong>PLEASE NOTE:</strong> The above pricing is based on using a vessel operated by MOL, which offers a more cost-effective option.
If you would prefer to ship with Toyofuji (Trans Future vessels), an additional cost of AUD 200 will apply.

Each sailing on our schedule includes the operating carrier listed in brackets for your reference.`;
            } else if (isLargeOrSpecial) {
                return `<strong>PLEASE NOTE:</strong> The above pricing is based on using a vessel operated by MOL, which offers a more cost-effective option.
If you would prefer to ship with Toyofuji (Trans Future vessels), an additional cost of AUD 20 per cubic metre will apply.

Cubic metres are calculated by multiplying your vehicle's length x width x height (in metres).
Each sailing on our schedule includes the operating carrier listed in brackets for your reference.`;
            }
        }

        // For all other cases, return the default custom text
        return block.data.custom_text;
    };

    const getBookNowButton = (block: QuoteBlock) => {
        const otherDestinations = ["Southampton, England", "Dublin, Ireland"];


        const isOtherDestination = otherDestinations.some(dest => destinationText.includes(dest));

        if (isOtherDestination) {
            return "";
        }
        if (block.data.type === "ROLL ON, ROLL OFF") {
            return <Button
                buttonText="Book RoRo Shipping"
                linkTo="https://linktr.ee/willshipinternational"
                width='w-full'
                theme='mint'
                className='mt-4'
            />
        } else {
            return <Button
                buttonText="Book Container Shipping"
                linkTo="https://linktr.ee/willshipinternational"
                width='w-full'
                theme='mint'
                className='mt-4'
            />
        }
    }

    return (
        <>
            {blocks.filter(block => block.visible).map((block, blockIndex) => (
                <Fragment key={block.key}>
                    <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch">
                        <div className="w-full flex flex-col justify-center sm:w-1/2 lg:w-1/3 p-2 bg-darkBlue" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}>
                            <h5 className="font-medium text-2xl text-white text-center font-sackLight">{block.data.type}</h5>
                        </div>
                        <div className="w-full flex flex-col sm:w-1/2 lg:w-2/3 px-4 py-2">
                            <p>{getShippingDescription(block.data.type)}</p>
                        </div>
                    </div>
                    <br />
                    <div className="flex flex-row flex-wrap w-full max-w-6xl items-stretch bg-white" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}>
                        <div className="w-full sm:w-1/2 lg:w-2/3 p-4" style={{"borderWidth":"1px", 'borderColor':"#022356", 'borderStyle':'solid'}}>
                            <span className="font-bold" style={{ "marginRight":"15px" }}>Transit time: </span> {block.data.transit_time}
                            <p>{parse(block.data.transit_desc)}</p>
                        </div>
                        <div className="w-full flex sm:w-1/2 lg:w-1/3 p-4" style={{"borderWidth":"1px", 'borderColor':"#022356", 'borderStyle':'solid'}}>
                            <span className="font-bold" style={{ "marginRight":"15px" }}>Price: </span> {block.formattedPrice}                                            
                        </div>
                    </div>
                    <br />
                    <p className="whitespace-pre-line">{parse(getCustomTextContent(block))}</p>

                    {getBookNowButton(block)}
                    <br />
                    
                    {/* Accordion sections for mobile/web view */}
                    <div className="flex flex-col justify-center gap-4 w-full max-w-6xl hideOnPrint">
                        <div className="w-full p-4" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'background':'#fafafa'}}>
                            <Fragment>
                                <Accordion open={open === block.accordionStart} id={`${block.key}_inclusions`}>
                                    <AccordionHeader onClick={() => handleOpen(block.accordionStart)} className="p-0 border-0">
                                        <h5 className="font-medium text-xl text-red font-sackLight"><b>INCLUSIONS</b></h5>
                                    </AccordionHeader>
                                    <AccordionBody className="text-med font-regular">
                                        {parse(block.data.inclusions)}
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        </div>
                        <div className="w-full p-4" style={{'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px', 'background':'#fafafa'}}>
                            <Fragment>
                                <Accordion open={open === block.accordionStart + 1} id={`${block.key}_exclusions`}>
                                    <AccordionHeader onClick={() => handleOpen(block.accordionStart + 1)} className="p-0 border-0">
                                        <h5 className="font-medium text-xl text-red font-sackLight"><b>EXCLUSIONS</b></h5>
                                    </AccordionHeader>
                                    <AccordionBody className="text-med font-regular">
                                        {parse(block.data.exclusions)}
                                    </AccordionBody>
                                </Accordion>
                            </Fragment>
                        </div>
                    </div>    
                    
                    {/* Print view sections */}
                    <div className="flex flex-row flex-wrap w-full max-w-6xl items-stretch bg-white displayOnPrint">
                        <div className="w-full p-4" style={{'float':'left'}}>
                            <h5 className="font-medium text-xl text-red font-sackLight"><b>INCLUSIONS</b></h5>
                            <br />
                            {parse(block.data.inclusions)}
                        </div>
                        <div className="w-full p-4" style={{'float':'left'}}>
                            <h5 className="font-medium text-xl text-red font-sackLight"><b>EXCLUSIONS</b></h5>
                            <br />
                            {parse(block.data.exclusions)}                                           
                        </div>
                    </div> 

                    <hr />
                    <br />
                    
                    {/* Add page break for print except for last block */}
                    {blockIndex < blocks.filter(b => b.visible).length - 1 && (
                        <div className="pageBreak displayOnPrint"></div>
                    )}
                </Fragment>
            ))}
        </>
    );
};

export default ROROquoteInfo;
