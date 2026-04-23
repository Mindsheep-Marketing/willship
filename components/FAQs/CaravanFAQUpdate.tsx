import { useState } from "react";
import FAQBuilder from "./FAQbuilder";
import SectionSection from "../common/SectionSection";
import { ArrowDownIcon } from "@heroicons/react/solid";

//Redeployment - Paolo

interface VehicleFAQProps {
  subHeading?: string | JSX.Element;
}

const CaravanFAQUpdate = ({ subHeading }: VehicleFAQProps) => {
  const faqData = [
    {
      question: 'How does the process work?',
      answer: `
        <p>
        Shipping a caravan from Australia to New Zealand is quite straightforward. The caravan is either collected or delivered to the port, then towed onto a roll-on/roll-off ship and secured for transport. When it arrives in New Zealand, it’s towed off, inspected by biosecurity (MPI), and then taken to an NZTA-approved testing station. It will need a Warrant of Fitness (WOF) and, if it has gas appliances, a gas safety certificate before it can be registered for use on NZ roads.
        </p>
      `
    },
    {
      question: 'What does the shipping quote include?',
      answer: `
        <p>
        The quote generally covers pickup and delivery near the ports, shipping between Australia and NZ, and port fees, customs, and quarantine clearance. In most cases, it includes everything needed to move your caravan from point A to point B safely.
        </p>
      `
    },
    {
      question: 'Are there extra costs I should know about?',
      answer: `
        <p>
        Yes, there can be some extra costs. These may include the WOF and gas certificate (around NZD $300), registration fees, optional transit insurance (from about AUD $455), and possibly 15% GST if you don’t qualify for exemption. If your caravan fails quarantine cleaning, extra cleaning fees may apply starting around NZD $750.
        </p>
      `
    },
    {
      question: 'What is “landed value” and why does it matter?',
      answer: `
        <p>
        The landed value is the total of the caravan’s purchase price, shipping, and insurance. GST is calculated on this amount unless you’re exempt. The purchase price is converted to NZ dollars using the official customs rate at the time of import.
        </p>
      `
    },
    {
      question: 'Who can get a GST exemption?',
      answer: `
        <p>
        You can qualify for exemption if you’re moving to NZ permanently, have lived overseas for more than 21 months, and have owned and used the caravan in your name before shipping. It must be for personal use and free of finance. You should also be arriving in NZ around the same time as your caravan.
        </p>
      `
    },
    {
      question: 'What documents are needed for GST exemption?',
      answer: `
        <p>
        You’ll need proof of purchase and payment, registration papers, proof of ownership, passport ID, travel details, and several customs forms (NZCS 224A, NZCS 218, and MPI declarations). Photos of the caravan are also required.
        </p>
      `
    },
    {
      question: 'What checks or certificates are needed in NZ?',
      answer: `
        <p>
        Once it arrives, the caravan needs a Warrant of Fitness (WOF) and, if fitted with gas, a Gas Safety Certificate. Once these are issued, it can be registered for road use.
        </p>
      `
    },
    {
      question: 'Can I leave things inside the caravan?',
      answer: `
        <p>
        You can leave items that are part of the caravan setup, like cutlery, linen, or camping gear. However, personal belongings, moving boxes, food, and valuables are not allowed. Anything left inside is shipped at your own risk and could cause inspection issues.
        </p>
      `
    },
    {
      question: 'Can gas bottles or fire extinguishers stay inside?',
      answer: `
        <p>
        No. Gas bottles, even if empty, and fire extinguishers must be removed before shipping. All flammable or pressurised items need to be taken out.
        </p>
      `
    },
    {
      question: 'Does the caravan need to be cleaned?',
      answer: `
        <p>
        Yes. It must be spotless inside and out to pass biosecurity checks in NZ. Wash the roof, sides, wheels, underside, and compartments. Vacuum the interior and remove all dirt, rubbish, and food. Missed areas or leftover debris can lead to cleaning fees starting from about NZD $750.
        </p>
      `
    },
    {
      question: 'How do I book the shipment?',
      answer: `
        <p>
        You can book online by filling out the form on Willship’s website and uploading your documents. You can also save your progress and return to it later.
        </p>
      `
    },
    {
      question: 'Do I have to be there when the Caravan is collected?',
      answer: `
        <p>
        No, you can nominate a friend or family member to hand the Caravan over to us.
        </p>
      `
    },
    {
      question: 'Do I have to be in NZ to pick up my Caravan?',
      answer: `
        <p>
        No, you can nominate anyone to collect the caravan on your behalf. If you are claiming the GST exemption however you will need to ensure you are somewhere in New Zealand when the vessel carrying your caravan arrives into NZ. If you are not claiming the GST exemption and are happy to pay the import tax then you don’t need to be in New Zealand and anyone can collect the caravan for you.
        </p>
      `
    },
    {
      question: 'When do I need to pay my invoice?',
      answer: `
        <p>
        Once we have your booking in place and we know exactly which of our services you wish to use, then we will send you through an invoice and this will need to be paid prior to the vessel departure date. We can accept payment via bank transfer or credit card. We do not require a deposit in order to proceed with a booking.
        </p>
      `
    },
    {
      question: 'How long does it take to receive my caravan after the vessel arrives?',
      answer: `
        <p>
        For Roll on Roll off shipping, it is usually 3 to 5 Business days after vessel arrival.
        </p>
      `
    },
  ];

  // const [showAll, setShowAll] = useState(false);

  // const faqQuestionsToShow = showAll ? faqData : faqData.slice(0, 6);

  return (
    <FAQBuilder
      heading='Common Questions And Responses'
      subHeading={
        subHeading || (
          <span className="text-2xl font-extrabold text-darkBlue tracking-tight">
            Got a question regarding how to import caravan from Australia to New Zealand? We have got your back!
          </span>
        )
      }
      faqQuestions={faqData}
    />

  )
};

export default CaravanFAQUpdate;