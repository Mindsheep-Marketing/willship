import React from "react";
import ConsultationForm from "../../components/forms/ConsultationForm";

const BookConsultation = () => {
  return (
    <div className="w-full bg-darkBlue py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-sackHeavy text-white text-center mb-8">
          Let&apos;s Book Your Consultation!
        </h2>
        
        <div className="max-screen mx-auto">
          <ConsultationForm/>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation; 