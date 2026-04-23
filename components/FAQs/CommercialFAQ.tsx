import { useState } from "react";
import siteMap from "../../siteMap";
import FAQBuilder from "./FAQbuilder";
import SectionSection from "../common/SectionSection";
import { ArrowDownIcon } from "@heroicons/react/solid";

//Redeployment - Paolo

const CommercialFAQ = () => {
  const faqData = [
    {
      question: 'What is freight forwarding?',
      answer: `
        <p>
        Freight forwarding is the process of organizing the shipment and transportation of goods from one location to another, ensuring they reach their destination efficiently and cost-effectively.
        </p>
      `
    },
    {
      question: 'Why should I use a freight forwarding service?',
      answer: `
        <p>
        <a href="/freight-forwarder/" title="Freight Forwarding Australia">Freight forwarding</a> services offer several benefits, including expertise in logistics, customs clearance, and documentation requirements. By using a freight forwarding service, you can save time, reduce costs, and ensure your goods are handled professionally throughout the shipping process.
        </p>
      `
    },
    {
      question: 'What modes of transportation do you offer for freight forwarding?',
      answer: `
        <p>
        We offer a wide range of transportation modes to suit your specific needs, including air freight, ocean freight, road freight, and rail freight. Our team will work closely with you to determine the most suitable mode of transportation for your cargo.
        </p>
      `
    },
    {
      question: 'Do you provide international freight forwarding services?',
      answer: `
        <p>
        Yes, we specialize in international freight forwarding. Whether you need to ship your goods across the globe or just to a neighbouring country, we have the experience and network to handle your international shipments efficiently and securely.
        </p>
      `
    },
    {
      question: 'Can you handle customs clearance for my shipments?',
      answer: `
        <p>
        Absolutely! We have a dedicated team of experts who are well-versed in customs regulations and procedures. We will ensure that all necessary documentation is prepared accurately and submitted on time to facilitate smooth customs clearance for your shipments.
        </p>
      `
    },
    {
      question: 'How do I track my shipments?',
      answer: `
        <p>
        We provide comprehensive shipment tracking services, allowing you to monitor the progress of your shipments from origin to destination. You can easily access real-time tracking information through our online tracking system or by contacting our customer service team.
        </p>
      `
    },
    {
      question: 'Are my goods insured during transit?',
      answer: `
        <p>
        Yes, we offer cargo insurance options to provide coverage for your goods during transit. Our insurance offerings can be tailored to meet your specific requirements and provide you with peace of mind knowing that your cargo is protected against unforeseen events.
        </p>
      `
    },
    {
      question: 'What industries do you specialize in?',
      answer: `
        <p>
        We cater to a wide range of industries, including but not limited to manufacturing, retail, e-commerce, automotive, pharmaceuticals, and perishable goods. Our expertise extends across various sectors, allowing us to handle diverse cargo requirements effectively.
        </p>
      `
    },
    {
      question: 'How can I request a freight forwarding quote?',
      answer: `
        <p>
        Requesting a freight forwarding quote is easy! Simply fill out our online quote form or contact our team directly with details about your shipment, including the origin, destination, dimensions, weight, and any specific requirements. We will promptly provide you with a competitive quote tailored to your needs.
        </p>
      `
    },
    {
      question: 'How experienced is your freight forwarding team?',
      answer: `
        <p>
        Our freight forwarding team comprises highly experienced professionals who have in-depth knowledge of the industry. With years of expertise and a commitment to customer satisfaction, our team is well-equipped to handle all aspects of your freight forwarding needs.
        </p>
      `
    },
    {
      question: 'Can I import plant material?',
      answer: `
      <p>Most plant materials can be imported as long as import conditions are met.</p>
      <p>For some products, you may need to:</p>
      <ul className='faqList'>
        <li>treat the plant prior to importing into Australia</li>
        <li>check if it requires an import permit before it can be imported</li>
      </ul>
      <p>*Do note that some plants cannot be imported into Australia at all. Please contact us for further information if you are looking to import these products.</p>
      <p>For more details, visit:</p>
        <a target='_blank' rel='noreferrer' href='https://www.agriculture.gov.au/import/goods/plant-products/how-to-import-plants'>
            https://www.agriculture.gov.au/import/goods/plant-products/how-to-import-plants
        </a>
      `
    },
    {
      question: 'Do I need an ABN to import?',
      answer: `
      <p>
        No, if you have an ABN (Australian Business Number), it will be used as an Identifier.
      </p>
      <p>
        If you do not have an ABN, you will need to supply 100 points of identification.
      </p>
      <p>
        You will then be allocated a CCID (Customs Client Identifier) which will be used to identify you as the importer.
      </p>
      `
    },
    {
      question: 'How is Customs Duty and GST calculated?',
      answer: `
        <p>
          The Customs Duty rate is determined by the tariff classification that covers the goods.
        </p>
        <p>
          Without taking into account Free Trade Agreements, most goods attract 5% duty.
        </p>
        <p>
          This is payable against the FOB (Free on Board) value of the goods.
        </p>
        <p>
          FOB value is the cost of the goods plus any additional costs incurred in getting the goods ready for export and delivered to the export port.
        </p>
        <p>
          If you buy goods on a FOB contract this price will be the Customs Value of the goods on Import.
        </p>
        <p>
          Customs use their own rate of exchange on the day the goods were exported to convert foreign currency into Australian dollars for calculation of the Customs Value.
        </p>
        <p>
          GST is payable on the CIF (Cost, Insurance and Freight) value plus any Customs duty payable, so this includes all costs in getting the goods to the port in Australia plus any duty payable.
        </p>
      `
    },
    {
      question: 'What are the most common incoterms?',
      answer: `
        <p>
          Incoterms is an abbreviation for &quot;International Commercial Terms&quot; used to reduce confusion between buyers and sellers.
        </p>
        <p>
          Most common Incoterms used today are:
        </p>
        <p>
          EXW (Exworks) -when a seller makes a product available at a designated location, and the buyer of the product must cover the transport costs.
        </p>
        <p>
          FOB (Free on Board) - indicates whether the seller or the buyer is liable for goods that are damaged or destroyed during shipping.
        </p>
        <p>
          CFR ( Cost and Freight) - in a contract specifying that a sale is a cost and freight, the seller is required to arrange for the carriage of goods by sea to a port of destination and provide the buyer with the documents necessary to obtain them from the carrier.
        </p>
        <p>
          CIF ( Cost Insurance and Freight) - an expense paid by a seller to cover the costs, insurance, and freight of a buyer&apos;s order while it is in transit. The goods are exported to a port named in the sales contract
        </p>
        <p>
          DDU (Delivered Duty Unpaid) - the seller is responsible for ensuring goods arrive safely to a destination; the buyer is responsible for import duties.
        </p>
        <p>
          DDP (Delivered Duty Paid) - indicates that the seller must cover duties, import clearance, and any taxes.
        </p>
      `
    },
    {
      question: 'What is a HS Code?',
      answer: `
        <p>
          HS code is short for the Harmonised Commodity Description and Coding System (HS code) of the tariff nomenclature.
        </p>
        <p>
          The tariff nomenclature is an international standard system created by the World Customs Organisation for the classification of commodities. It is used by up to 200 Countries around the world.
        </p>
        <p>
          The first 6 digits of the HS code are common throughout the countries that use the system, any numbers after the first 6 are for local use within that country.
        </p>
      `
    },
    {
      question: 'Can you guide me through the whole process?',
      answer: `
      <p>
        Yes. you can start by getting an instant quote so that you have an idea of the process. Alternatively, give us a call at (61) 7 3267 3694 or email <Link href='mailto:info@willship.com.au'><a>info@willship.com.au</a></Link>
      </p>
      `
    },
    {
      question: 'What does a freight forwarding company do?',
      answer: `
        <p>
          A freight forwarder is a company that organizes the international freight and/or domestic movement of goods for individuals or businesses and their role is to move goods from one part of the world to another. On top of organizing the physical movement of the goods, they also help with all the paperwork required, they organize the local customs and quarantine clearance of the cargo. A good freight forwarder will also ensure the goods travel in the most economical and efficient way to reduce lead times and costs to the companies and people they work for.
        </p>
      `
    },
    {
      question: 'How much does Freight forwarding Cost?',
      answer: `
        <p>
          The cost for freight services can vary wildly depending on several factors. Firstly, it very much depends on the origin and destination – the further apart two places are, of the lower the volume of cargo that moves between those locations will always mean higher freight costs. The other major factor is the method of shipping. Goods can be moved by either air freight, sea freight, or road freight – air freight will be the most expensive, but it was also the fastest way to move goods from one place to the next. Sea freight and road freight are much cheaper, although transit times will be much higher. The last factor is the size and weight of the goods, the larger the shipment, the higher the cost.
        </p>
      `
    },
    {
      question: 'What documentation is required for the freight-forwarding process?',
      answer: `
        <p>
          The documentation required varies depending on a number of factors, firstly the origin and destination. Each country has their own import laws requirements, so every country will have a unique set of documentation requirements. Generally, you will need something showing the value or sale of the goods (a commercial invoice) at the very least. Additional documentation can be a passport, import customs forms, certificates of origin, packing declarations, personal effects declarations, health certificates etc – a good freight forwarder will be able to guide you through all the documentational requirements for every international freight shipment.
        </p>
      `
    },
    {
      question: 'Where is Willship located?',
      answer: `
        <p>
          Willship operates all over Australia, with our headquarters based in Brisbane. <br><br>Check out our freight forwarding locations below:

        </p>
        <style>
          .btn-location {
            color: white;
            background: #ef4123;
          }
        </style>
        <a class='btn-location' href='${siteMap.commercial.freightForwarderBrisbane.path}'>Brisbane</a>
        <a class='btn-location' href='${siteMap.commercial.freightForwarderSydney.path}'>Sydney</a>
        <a class='btn-location' href='${siteMap.commercial.freightForwarderMelbourne.path}'>Melbourne</a>
        <a class='btn-location' href='${siteMap.commercial.freightForwarderPerth.path}'>Perth</a>
        <a class='btn-location' href='${siteMap.commercial.freightForwarderAdelaide.path}'>Adelaide</a>
      `
    },
    {
      question: 'What is a container type? How many types of containers are used in freight forwarding?',
      answer: `
        <p>
          Back in 1950&apos;s a man by the name of Malcom McLean invented the first shipping container. Ever since then it&apos;s revolutionised the way the world deals with international trade. In 1970 several different types of containers were standardised and they are now industry standard all around the world. They are the 20ft and 40ft containers. A standard 20ft or 40ft container are the most commonly used type of container in the market. You can learn more about the parameters of these shipping containers here.There are now a range of variations to these standard containers, these include flat racks, open top containers, double door containers, refrigerated containers, side door containers, and several other unique variants
        </p>
      `
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const faqQuestionsToShow = showAll ? faqData : faqData.slice(0, 6);

  return (
    <>
      <FAQBuilder heading="FREQUENTLY ASKED QUESTIONS" faqQuestions={faqQuestionsToShow} />
      {!showAll && (
            <SectionSection bgColour='bg-nearlyWhite' classes="pt-0">
            {!showAll && 
              <div 
                className="w-full max-w-sm flex flex-row items-center justify-center border-slate-400 border text-xl py-2 hover:cursor-pointer hover:bg-slate-200 font-medium gap-4"
                onClick={() => setShowAll(true)}
              >
                SHOW ALL FAQS
                <ArrowDownIcon className="h-6" />
              </div>
            }
          </SectionSection>
      )}
    </>
  );
};

export default CommercialFAQ;