import siteMap from "../../siteMap";
import FAQBuilder from "./FAQbuilder";

const CommercialFAQ = () => {

  const faqData = [
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
          <b>Most common Incoterms used today are:</b>
        </p>
        <p>
          <b>EXW (Exworks) -</b>when a seller makes a product available at a designated location, and the buyer of the product must cover the transport costs.
        </p>
        <p>
          <b>FOB (Free on Board) -</b> indicates whether the seller or the buyer is liable for goods that are damaged or destroyed during shipping.
        </p>
        <p>
          <b>CFR ( Cost and Freight) -</b> in a contract specifying that a sale is a cost and freight, the seller is required to arrange for the carriage of goods by sea to a port of destination and provide the buyer with the documents necessary to obtain them from the carrier.
        </p>
        <p>
          <b>CIF ( Cost Insurance and Freight) -</b> an expense paid by a seller to cover the costs, insurance, and freight of a buyer&apos;s order while it is in transit. The goods are exported to a port named in the sales contract
        </p>
        <p>
          <b>DDU (Delivered Duty Unpaid) -</b> the seller is responsible for ensuring goods arrive safely to a destination; the buyer is responsible for import duties.
        </p>
        <p>
          <b>DDP (Delivered Duty Paid) -</b> indicates that the seller must cover duties, import clearance, and any taxes.
        </p>
      `
    },
    {
      question: 'What is a HS Code?',
      answer: `
        <p>
          HS code is short for the <b>Harmonised</b> Commodity Description and Coding System <b>(HS code)</b> of the <b>tariff</b> nomenclature.
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
          A freight forwarder is a company that organizes the <b>international freight</b> and/or domestic movement of goods for individuals or businesses and their role is to move goods from one part of the world to another. On top of organizing the physical movement of the goods, they also help with all the paperwork required, they organize the local customs and <b>quarantine clearance</b> of the cargo. A good <b>freight forwarder</b> will also ensure the goods travel in the most economical and efficient way to reduce lead times and costs to the companies and people they work for.
        </p>
      `
    },
    {
      question: 'How much does Freight forwarding Cost?',
      answer: `
        <p>
          The cost for freight services can vary wildly depending on several factors. Firstly, it very much depends on the origin and destination – the further apart two places are, of the lower the volume of cargo that moves between those locations will always mean higher freight costs. The other major factor is the method of shipping. Goods can be moved by either air freight, sea freight, or road freight – <b>air freight</b> will be the most expensive, but it was also the fastest way to move goods from one place to the next. Sea freight and road freight are much cheaper, although transit times will be much higher. The last factor is the size and weight of the goods, the larger the shipment, the higher the cost.
        </p>
      `
    },
    {
      question: 'What documentation is required for the freight-forwarding process?',
      answer: `
        <p>
          The <b>documentation required varies depending</b> on a number of factors, firstly the origin and destination. Each country has their own import laws requirements, so every country will have a unique set of documentation requirements. Generally, you will need something showing the value or sale of the goods (a commercial invoice) at the very least. Additional documentation can be a passport, import customs forms, certificates of origin, packing declarations, personal effects declarations, health certificates etc – a good freight forwarder will be able to guide you through all the documentational requirements for every <b>international freight shipment</b>.
        </p>
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
  ]

  return (
    <FAQBuilder
      heading="FREQUENTLY ASKED QUESTIONS"
      faqQuestions={faqData}
    />
  )

};

export default CommercialFAQ;