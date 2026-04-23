import Head from "next/head";
import { useRouter } from "next/router";
import AutoQuoteChecklist from "../../components/Automotive/AutoQuoteChecklist";
import WhatWeCanShip from "../../components/Automotive/WhatCanWeShip";
import Hero from "../../components/common/Hero";
import ImageAndText from "../../components/common/ImageAndText";
import QuoteContactButtons from "../../components/common/QuoteContactButtons";
import Testimonials10 from "../../components/common/Testimonials10";
import WhiteWithIcons from "../../components/common/WhiteWithIcons";
import VehicleFAQ from "../../components/FAQs/VehicleFAQ";
import ShippingOptions from "../../components/ShippingOptions";
import siteMap from "../../siteMap";



const vehicleChecklist = () => (

    <>
        <AutoQuoteChecklist />
        {/* <WhatWeCanShip /> */}
        {/* <VehicleFAQ /> */}
        {/* <Testimonials10 /> */}
    </>
);



export default vehicleChecklist;