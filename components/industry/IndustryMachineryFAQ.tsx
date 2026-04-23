import FAQBuilder from "../FAQs/FAQbuilder";

interface VehicleFAQProps {
    subHeading?: string | JSX.Element;
}

const IndustryMachineryFAQ = ({ subHeading }: VehicleFAQProps) => {

    const faqData = [
        {
            question: "What machinery can be shipped internationally?",
            answer:
                "We can ship almost any type of heavy equipment, including excavators, graders, loaders, cranes, rollers, agricultural machinery, forklifts, and attachments. If you’re unsure whether your unit is eligible, we can assess dimensions, weight, and port requirements for you.",
        },
        {
            question: "Does my machinery need to be cleaned before export?",
            answer:
                "Yes. All machinery must meet strict Australian biosecurity standards. This includes full wash-down, degreasing, removal of soil and organic matter, and cleaning of radiators, tracks, undercarriages, and enclosed compartments. We can coordinate compliant cleaning or provide a checklist.",
        },
        {
            question: "Should I choose RoRo or container/flat-rack shipping?",
            answer:
                "RoRo is best for machinery that can be driven or towed. Container or flat-rack shipping is ideal for oversized, dismantled, or non-operational equipment. We’ll recommend the best option based on your shipment.",
        },
        {
            question: "What documentation is required for heavy machinery shipping?",
            answer:
                "Typical documents include a commercial invoice, packing list, ownership details, export declaration, import permits (if required), and biosecurity records. We can assist with the full process to ensure compliance.",
        },
        {
            question: "How long does it take to ship heavy machinery overseas?",
            answer:
                "Most sea freight shipments take around 3–8 weeks port-to-port. Asia is typically 2–5 weeks, India 3–6 weeks, USA 4–8 weeks, and Europe 6–8+ weeks. Additional time may be needed for customs clearance, quarantine, and delivery.",
        },
        {
            question: "What costs should I expect?",
            answer:
                "Quotes usually include international freight, port handling, documentation, and clearance support. Additional costs may apply for quarantine cleaning, demurrage, or duties. We provide fully itemised quotes.",
        },
        {
            question: "Can deliveries be arranged to remote or project sites?",
            answer:
                "Yes. After customs clearance, delivery can be arranged to metro, regional, or remote locations using specialised heavy-haul transport.",
        },
        {
            question: "Who is this service for?",
            answer:
                "This service is designed for construction companies, farmers, agricultural operators, engineering businesses, and individuals importing single machines. Whether scaling operations or starting out, the process is tailored to your needs.",
        },
        {
            question: "Why import machinery instead of buying locally?",
            answer:
                "Importing provides cost savings, access to a wider range of suppliers, availability of rare or discontinued models, and the ability to customise or purchase refurbished equipment at lower prices.",
        },
        {
            question: "What are the biggest risks when importing machinery?",
            answer:
                "Key risks include compliance issues, incorrect documentation, and biosecurity failures. Machinery with asbestos is prohibited, and unclean equipment can lead to delays and extra costs. Proper preparation helps avoid these issues.",
        },
        {
            question: "How does delivery work for heavy machinery?",
            answer:
                "Delivery involves specialised transport such as low-loaders, tilt trays, or drop-deck trailers. Depending on the equipment, cranes or forklifts may be required for unloading.",
        },
        {
            question: "What should I prepare before delivery arrives?",
            answer:
                "Ensure your site has wide access, stable ground, and enough space for transport vehicles. Avoid obstacles like low powerlines or tight entry points. Alternative delivery options can be arranged if needed.",
        },
        {
            question: "How long does it take to import machinery?",
            answer:
                "Most imports take around 4–8 weeks from start to finish, depending on origin, supplier readiness, and shipping method. A clear timeline will be provided upfront.",
        },
        {
            question: "Will my machinery be inspected on arrival?",
            answer:
                "Used machinery undergoes mandatory biosecurity inspection. Brand new machinery is usually exempt if properly declared with correct documentation.",
        },
        {
            question: "Is it easier to import brand new machinery?",
            answer:
                "Yes. New machinery typically avoids inspections, clears faster, and has fewer risks. Documentation confirming it is unused is required.",
        },
        {
            question: "Can multiple machines be shipped together?",
            answer:
                "Yes, multiple machines or parts can be consolidated into one shipment to reduce costs. Each item must still meet documentation and biosecurity requirements.",
        },
        {
            question: "How much does it cost to import machinery?",
            answer:
                "Costs vary based on size, weight, and shipping method. Containerised shipments typically range from $5,000–$10,000+, while oversized freight can range from $5,000–$15,000 or more.",
        },
    ];

    return (
        <FAQBuilder
            heading='Frequently Asked Questions for Building Materials'
            faqQuestions={faqData}
        />
    )

};

export default IndustryMachineryFAQ;