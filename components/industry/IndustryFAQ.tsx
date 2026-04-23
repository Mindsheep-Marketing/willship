import FAQBuilder from "../FAQs/FAQbuilder";

interface VehicleFAQProps {
  subHeading?: string | JSX.Element;
}

const IndustryFAQ = ({ subHeading }: VehicleFAQProps) => {

  const faqData = [
    {
      question: 'What documentation is required to import construction materials into Australia?',
      answer: `
        <p>
          You’ll typically need a commercial invoice, packing list, bill of lading or airway bill, and any relevant treatment or fumigation certificates. We manage all of this for you and ensure the paperwork meets Australian Border Force and DAFF requirements before your shipment leaves port.
        </p>
      `
    }, {
      question: 'Do I need an import permit for construction materials?',
      answer: `
    <p>
      Some items, especially timber, adhesives, and composite materials, may require an import permit or biosecurity treatment. We’ll assess your cargo type and handle any permits or inspections required, so you won’t face unexpected delays.
    </p>
  `
    },
    {
      question: 'How much does it cost to import construction materials to Australia?',
      answer: `
    <p>
      Costs depend on shipment size, origin, and delivery destination. Our quotes include all standard fees for freight, customs, and local delivery, with optional insurance available. You’ll always receive an itemised breakdown before you confirm your booking.
    </p>
    <p>
      Click the "Get Started" button anywhere on this page to send your details and our team will swiftly reach out to give you a quote estimate.
    </p>
  `
    },
    {
      question: 'Can Willship handle large or ongoing construction imports?',
      answer: `
    <p>
      Absolutely! We regularly coordinate full-container loads, multi-supplier consolidation, and recurring deliveries for construction firms every day. Whether it’s one shipment or a long-term logistics partnership, our team ensures consistent, reliable service.
    </p>
  `
    },    
    {
      question: 'What documentation is required to import construction materials into Australia?',
      answer: `<p>You’ll typically need a commercial invoice, packing list, bill of lading or airway bill, and any relevant treatment or fumigation certificates. We manage all of this for you and ensure the paperwork meets Australian Border Force and DAFF requirements before your shipment leaves port.<p>`
    },
    {
      question: 'Do I need an import permit for construction materials?',
      answer: `
        <p>
          Most construction materials do not require an import permit. However, some products — particularly timber, wood-based items, and certain materials with biosecurity risk — may be subject to biosecurity requirements, inspections, or treatment on arrival. We’ll review your cargo and advise on any specific requirements upfront to help avoid unexpected delays.
        </p>
      `
    },
    {
      question: 'How much does it cost to import construction materials to Australia?',
      answer: `
        <p>
          Costs depend on shipment size, origin, and delivery destination. Our quotes include all standard fees for freight, customs, and local delivery, with optional insurance available. You’ll always receive an itemised breakdown before you confirm your booking. Click the "Get Started" button anywhere on this page to send your details and our team will be in touch with pricing or to schedule a consultation.
        </p>
      `
    },
    {
      question: 'Can Willship handle large or ongoing construction imports?',
      answer: `
        <p>
          Absolutely. We regularly coordinate full-container loads, multi-supplier consolidation, and recurring deliveries for construction firms every day. Whether it’s one shipment or a long-term logistics partnership, our team ensures consistent, reliable service.
        </p>
      `
    },
    {
      question: "What if my construction materials are oversized or heavy and can't fit a standard container?",
      answer: `
        <p>
          We regularly handle oversized, bulky, and heavy construction cargo, including steel beams, machinery, stone slabs, and prefabricated materials. We can arrange flat rack containers, open-top containers, or specialised equipment depending on the dimensions of your shipment.
        </p>
      `
    },
    {
      question: 'Is cargo insurance recommended for construction materials?',
      answer: `
        <p>
          Yes, we strongly recommend cargo insurance, especially for high-value materials. Insurance protects your shipment against damage, loss, or unforeseen delays during transit. We can arrange comprehensive coverage as part of your freight booking.
        </p>
      `
    },
    {
      question: 'Can you help with customs clearance and compliance for construction and building materials to Australia?',
      answer: `
        <p>
          Yes. Our licensed customs brokers based in-house at our Northgate facility in Brisbane manage the entire import clearance process, including classification, duties, GST calculation, and compliance with Australian Border Force and DAFF requirements.
        </p>
      `
    },
    {
      question: 'Do you work with builders, developers, and contractors?',
      answer: `
        <p>
          Yes. We regularly work with builders, construction companies, developers, and procurement teams importing materials for residential, commercial, and infrastructure projects to Australia. Our team understands construction timelines and the importance of proactive communication, especially when managing large-scale projects.
        </p>
        <p>
          If you need a team with solid experience in managing international shipping for construction companies and developers, Willship is one of the go-to international freight forwarding companies in Australia.
        </p>
      `
    },
    {
      question: 'My supplier quoted CIF shipping to the Australian port. Is this recommended for importing construction materials?',
      answer: `
        <p>
          In most cases, we do not recommend CIF (Cost, Insurance & Freight) when importing construction materials.
        </p>
        <p>
          Under CIF terms, the supplier controls the shipping and appoints the freight forwarder and destination agent. While the ocean freight may look competitive upfront, the arrival charges in Australia are often not transparent and can be significantly inflated once the cargo lands.
        </p>
        <p>
          Just as importantly, it means our team in China is not involved in managing the shipment from origin. For construction materials in particular, the documentation requirements can be extensive — including packing lists, commercial invoices, treatment declarations, and other supporting documents depending on the product.
        </p>
        <p>
          When we manage the shipment under FOB or EXW terms, our team can work directly with your supplier to ensure all documentation is prepared correctly before the cargo leaves the country.
        </p>
        <p>
          Under CIF, we very often see suppliers step away from the process once the goods have shipped, which can lead to missing or incorrect documentation. If this happens, it can delay customs clearance and put the shipment at risk of storage, inspection delays, or additional costs on arrival.
        </p>
        <p>
          For better control, clearer pricing, and smoother clearance in Australia, we usually recommend FOB (Free on Board) or EXW (Ex Works) terms so our team can manage the shipping and documentation properly from the start.
        </p>
        <p>
          You can also watch this short video our team prepared explaining why letting suppliers control the shipping can create problems for importers.
        </p>
      `
    },
    {
      question: 'How do I calculate the total landed cost of importing construction materials?',
      answer: `
        <p>
          The total landed cost includes freight, customs duty, GST, port charges, customs clearance, and delivery to your site or warehouse. Our team provides a clear landed cost estimate upfront, so you can accurately budget your project before shipping begins.
        </p>
      `
    },
    {
      question: 'Can you deliver construction materials directly to a building site?',
      answer: `
        <p>
          Yes. We regularly coordinate direct delivery to construction sites across Australia. Our team will assess the site access, delivery requirements, and unloading equipment needed to ensure your materials arrive safely and on schedule.
        </p>
        <p>
          The site must have sufficient space for a heavy vehicle and safe access for container trucks (especially if your cargo is in a 20ft or 40ft container). If access is limited, we can arrange alternative solutions such as unloading the container at a local depot and delivering the materials on smaller trucks.
        </p>
        <p>
          We can also arrange specialised vehicles such as crane trucks, tail-lift trucks, or forklift unloading depending on the cargo.
        </p>
      `
    },
    {
      question: 'Do I need to arrange unloading equipment at the construction site?',
      answer: `
        <p>
          In many cases, construction sites will need a forklift, crane, or other unloading equipment available when the truck arrives. If required, we can also arrange trucks with tail-lifts or crane capabilities depending on the weight and dimensions of your cargo.
        </p>
      `
    }
  ];

  return (
    <FAQBuilder
      heading='Frequently Asked Questions for Building Materials'
      faqQuestions={faqData}
    />
  )

};

export default IndustryFAQ;