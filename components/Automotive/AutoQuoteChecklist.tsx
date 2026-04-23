import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useEffect, useState, useRef } from "react"
import parse from 'html-react-parser';
import SectionHeading from "../common/SectionHeading";
import siteMap from "../../siteMap";

const AutoQuoteChecklist = () => {

    const router = useRouter();
    const id = router.query["id"];

    const ref = useRef(false)
    
    const [quotes, setQuotes] = useState<any[]>([]);
    
    useEffect(() => {
        if (!id) return // This ensures that the API call isn't made until query id is defined

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

            if (result.data.length > 0) {
                setQuotes(result.data)
                console.log("test")
            }
        }
        
        fetchData()
    }, [id])
    
    return (
        <>
        {quotes.length > 0 && (quotes.map((quote, i) => {
            let quoteData = JSON.parse(quote.quoteData)
            let checklistTemplateData = quoteData[0].checklistTemplateData;
            //console.log(checklistTemplateData)
            //console.log(quote.vehicleText)

            checklistTemplateData = checklistTemplateData.replaceAll("##VEHICLETYPE##",quote.vehicleText.toLowerCase())
            checklistTemplateData = checklistTemplateData.replaceAll("##DEPARTURE##",quote.departureText)
            checklistTemplateData = checklistTemplateData.replaceAll("##DESTINATION##",quote.destinationText)

            //var heading = "Quote to ship "+quote.vehicleText+" for "+quote.name+" "+quote.last_name
            var heading = "Important Information"
            var quoteURL = siteMap.vehicle.vehicleQuoteData.path+ "/?id=" + quote.id

            return (
                <section key={i} className="w-full flex flex-col items-center gap-8 p-8 lg:py-16 bg-nearlyWhite">
                    <br />
                    <SectionHeading text={heading} />
                        <div className="w-full flex flex-row justify-center max-w-2xl">
                            <div className="w-full flex flex-col lg:w-1/2 p-4">
                                <a href={quoteURL} className="bg-darkBlue text-white px-4 py-2 text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}><b>VIEW QUOTE</b></a>
                            </div>
                            <div className="w-full flex flex-col lg:w-1/2 p-4">
                                <a href="tel:+61 7 3267 3694" className="w-full bg-red text-white text-center" style={{"padding":"17px", 'boxShadow':'rgb(0 0 0 / 20%) 0px 6px 12px 0px'}}><b>CONTACT US</b></a>
                            </div>                         
                        </div>
                        <style>
                            {
                            `
                            .checklist ul {
                                list-style: disc;
                                padding: 0px 0px 0px 15px;
                                display: grid;
                                gap: 20px;
                                margin-left: 30px;
                                margin-bottom: 20px;
                            }
                            .checklist a{
                                text-decoration: underline;
                            }
                            .checklist b{
                                text-transform: uppercase;
                            }
                            .checklist p{
                                margin: 10px 0;
                            }
                            `
                            }
                        </style>
                        <div className="flex flex-row flex-wrap w-full max-w-7xl gap-y-4 items-stretch checklist">
                            <div className="w-full flex flex-col p-4">
                                { parse(checklistTemplateData) }
                            </div>
                        </div>
                </section>
            )
        }))}
        </>
    )
};

export default AutoQuoteChecklist;