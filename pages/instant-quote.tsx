import { useContext, useEffect } from "react";
import Hero from "../components/common/Hero";
import VehicleFAQ from "../components/FAQs/VehicleFAQ";
import ModalContext from "../context/ModalContext";
import siteMap from "../siteMap";

const InstantQuotePage = () => {
  const {showVehicleQuote} = useContext(ModalContext);

  useEffect(() => {
    showVehicleQuote(true);
  });

  return (
    <>
      <Hero
        bgImage="/assets/images/bg-car.jpg"
        heading="GET AN INSTANT VEHICLE SHIPPING QUOTE EMAILED TO YOU"
        hasButton={true}
        buttonLink={siteMap.vehicle.vehicleQuote.path}
        hasMouseScroll={false}
        buttonText="Get Instant Quote"
        hasMinHeight={true}
      />
      <VehicleFAQ />
    </>
  );
};

export default InstantQuotePage;