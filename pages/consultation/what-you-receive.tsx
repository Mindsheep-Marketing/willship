import React from "react";
import { FaFileAlt, FaTag, FaLightbulb, FaEnvelope, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";
import Button from "../../components/common/Button";
import siteMap from "../../siteMap";

const items = [
  {
    icon: <FaFileAlt size={50} />,
    text: "A full assessment of your shipment details",
  },
  {
    icon: <FaTag size={50} />,
    text: "Transparent pricing estimates (freight, duties, GST, customs clearance, etc.)",
  },
  {
    icon: <FaLightbulb size={50} />,
    text: "Practical advice based on your buying terms and supplier arrangements",
  },
  {
    icon: <FaEnvelope size={50} />,
    text: "A detailed written email response outlining your options, recommendations, and potential red flags",
  },
  {
    icon: <FaPhoneAlt size={50} />,
    text: "The option to schedule a follow-up phone call (up to 30 minutes) to clarify anything after you review our recommendations",
  },
];

const WhatYouReceive = () => {
  return (
    <div className="w-full mx-auto py-12 px-4 bg-white">
      <h2 className="text-3xl lg:text-4xl font-sackHeavy text-darkBlue text-center mb-8">
        What You&apos;ll Receive
      </h2>
      
      <div className="flex items-center gap-2 justify-center mb-10">
        <div className="text-green-700 text-xl">
          <FaInfoCircle />
        </div>
        <p className="text-lg text-green-700 font-medium">
          For $250 + GST, your consultation includes the following:
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center mb-12 w-full max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 mb-8">
            <div className="text-red w-16 h-16 mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <p className="font-medium text-darkBlue">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 justify-center mb-10 text-darkBlue">
        <div className="text-darkBlue">
          <FaInfoCircle />
        </div>
        <p className="text-sm italic">
          This service is a one-time consultation designed to provide clarity and direction. Ongoing support beyond this scope may be offered separately on a case-by-case basis.
        </p>
      </div>
      
      <div className="flex justify-center">
        <div className="w-64">
          <Button
            buttonText="BOOK A CONSULT"
            linkTo="#consultation-section"
            theme="redBlue"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatYouReceive; 