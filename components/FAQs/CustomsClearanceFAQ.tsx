import { useState } from "react";
import siteMap from "../../siteMap";
import FAQBuilder from "./FAQbuilder";
import SectionSection from "../common/SectionSection";
import { ArrowDownIcon } from "@heroicons/react/solid";

const CustomsClearanceFAQ = () => {
  const faqData = [
    {
      question: 'What is Customs Clearance?',
      answer: `
        <p>
          Customs clearance is the mandatory process of declaring goods, whether for personal use or business purposes, when entering or exiting a country. It's like presenting your passport and bags at the airport, but for imported or exported goods. 
        </p>
        <p>
          This involves meeting all the rules and procedures set by customs authorities to ensure compliance with regulations, including biosecurity measures. This process also guarantees that all legal obligations are fulfilled, such as paying any required import duties or taxes. In Australia, customs clearance is handled entirely by the Australian Border Force. A licensed customs broker can help advise and even handle the paperwork and documentation needed for customs clearance.
        </p>
      `
    },
    {
      question: 'Do I need to use a customs broker?',
      answer: `
        For simpler imports, you might not need a broker. But if you are a business importing products to Australia or handling a complicated shipment, an experienced broker can make the customs clearance process smoother and easier, saving you time and frustration. Customs brokers and agents guide individuals and companies about import duties and taxes, classification of your goods through HS code system, valuations, and proper import/export declarations. Customs brokers communicate directly with individuals and occasionally with suppliers to gather all the needed information about your product. Even the smallest mistakes in paperwork can lead to delays and penalties, so engaging with a customs broker is a smart decision to ensure you don’t end up paying extra fees or surprise costs.
      `
    },
    {
      question: 'Is it a legal requirement to use a customs broker?',
      answer: `
        In Australia, using a customs broker for import clearance is entirely optional. You can legally handle the process yourself. The Australian law allows you to manage your own import clearance procedures. However, incorrect declaration or missing paperwork can result in delays, significant storage costs, fines, or even confiscation of goods.  For those unfamiliar with the import process, consulting or hiring a licensed customs broker in Australia to work on your behalf can help ensure a smooth clearance process. 
      `
    },
    {
      question: 'What documents do I need for customs clearance?',
      answer: `
        <p>The documents required for customs clearance can vary depending on the specific situation, but here are some of the most common ones you might need:</p>
        <ul className='faqList'>
          <li><b>Bill of Lading (BOL) or Airwaybill (AWB):</b> This document outlines your shipment's details, including origin, destination, carrier information, and goods descriptions.</li>
          <li><b>Packing Declaration (sea freight shipments only):</b> This document is required by Australian Biosecurity and is used to access the packaging materials used with your goods. Without this document Australian Biosecurity will examine your shipment, this results in additional costs and possibly delays..</li>
          <li><b>Packing List:</b> This provides a detailed breakdown of individual items within each package, including quantity, product descriptions, and weight/dimensions.</li>
          <li><b>Commercial Invoice:</b> This document verifies the transaction between you and your supplier, including the value of the goods, currency, shipping terms and any discounts applied.</li>
          <li><b>Certificate of Origin (if applicable):</b> This document verifies the country of origin of your goods, a certificate of origin is required to take advantage of Free Trade Agreements (FTA).</li>
        </ul>
        <p>There may also be instances where you need further documentation such as:</p>
        <ul className="faqList">
          <li>Manufacturer’s declarations</li>
          <li>Asbestos declarations</li>
          <li>Fumigation certificates</li>
          <li>Other certificates and declarations that will help the broker understand your shipment</li>
        </ul>
        <p>Important: The more information you can provide the broker upfront about your shipment, the more accurate their quote will be and the less likely there will be surprises later (we don’t like hidden costs!).</p>
      `
    },
    {
      question: 'How long does it take to clear a cargo in Customs?',
      answer: `
        <p>There's no one-size-fits-all answer to how long customs clearance will take for your cargo in Australia. Straightforward clearances can be quick, but complex ones with permits or inspections may take longer. But, we’ve put a quick guide for you on the general time frames below:</p>
        <ul className="faqList">
          <li>Straightforward shipments (low value, international small parcels, no permits needed): These can clear customs in as little as 24-48 hours if all the paperwork is correct.</li>
          <li>Average shipments: Most shipments with proper documentation can expect clearance within 3-5 business days from the time the cargo arrives in Australia. This includes the processing time by the Australian Border Force (ABF) and the Department of Agriculture, Fisheries and Forestry (DAFF).</li>
          <li>Complex shipments (permits required, restricted items, inspections needed): These can take longer, anywhere from a week to several weeks depending on the specific requirements. The timeframe can also vary depending on different factors such as the complexity of your shipment, complete and accurate paperwork, cargo selection for inspection (this is usually randomly selected), and how quickly you pay any duties or taxes that are owed.</li>
        </ul>
        <p>There are no guarantees for clearance times, Australian Border Force and Australian Biosecurity have the power to hold shipments until they are satisfied the goods are safe to enter or exit Australia.</p>
      `
    },
    {
      question: 'What are the import costs I need to be aware of?',
      answer: `
        <p>You need to be aware of the import costs and charges you might have to pay when bringing goods into Australia. Apart from shipping costs, there are other charges when your cargo arrives at an Australian port. Depending on what you're bringing and iit's customs value, you'll need to budget for the following:</p>
        <ul className="faqList">
          <li>Import Processing charges</li>
          <li>Port charges</li>
          <li>Storage Charges</li>
          <li>Handling fees</li>
          <li>Import Duties (depending on the country of origin, if Australia has a free trade agreement with a certain country, import duty may not be necessary)</li>
          <li>Customs User Fee</li>
          <li>Goods and Services Tax (GST)</li>
          <li>Additional tariffs for specific products and commodities</li>
          <li>Customs Brokerage fees</li>
          <li>Biosecurity fees  * if required</li>
          <li>Transport costs/Final delivery to your door</li>
        </ul>
        <p>This list can seem overwhelming at a first glance. This is why hiring a licensed customs broker can help sort out all the documentation for you. They can make the importing process way easier and less stressful (and you won't accidentally miss anything important).</p>
      `
    },
    {
      question: 'How is import GST calculated?',
      answer: `
        <p>As an importer, you are responsible for paying GST on imported goods, even if you're a private individual. Your goods cannot be released until you have paid all your import taxes and duties including GST. Import GST is 10% of the <b>total customs landed value</b> of the imported goods, which includes:</p>
        <ul className="faqList">
          <li>The purchase price of the goods</li>
          <li>Any customs duty payable</li>
          <li>Total shipping charges in getting your goods to the port of Australia</li>
        </ul>
        <p>Note: Businesses with an ABN and registered for GST may be able to claim a credit for the import GST they pay on imports.</p>
      `
    },
    {
      question: 'How is Customs Duty calculated?',
      answer: `
        <p>The Customs Duty rate is determined by the tariff classification that covers the goods. Without taking into account Free Trade Agreements, most goods attract 5% duty. This is payable against the FOB (Free on Board) value of the goods. FOB value is the cost of the goods plus any additional costs incurred in getting the goods ready for export and delivered to the export port.</p>
        <p>If you buy goods on a FOB contract this price will be the Customs Value of the goods on Import. Customs use their own rate of exchange on the day the goods were exported to convert foreign currency into Australian dollars for calculation of the Customs Value.</p>
        <p>GST is payable on the CIF (Cost, Insurance and Freight) value plus any Customs duty payable, so this includes all costs in getting the goods to the port in Australia plus any duty payable.</p>
      `
    },
    {
      question: 'What is an HS code?',
      answer: `
        <p>HS code is short for the Harmonised System Code, an abbreviation of the Harmonised Commodity Description and Coding System of the tariff nomenclature. The tariff nomenclature is an international standard system created by the World Customs Organisation for the classification of commodities. It is used by up to 200 Countries around the world.</p>
        <p>The first 6 digits of the HS code are common throughout the countries that use the system, any numbers after the first 6 are for local use within that country.</p>
      `
    },
    {
      question: 'When do I need to pay import tax?',
      answer: `
        <p>In Australia, generally imports under AUD$1,000 are exempt from customs duties and taxes. This applies to most goods, except for alcohol and tobacco.</p>
        <p>For items exceeding AUD1000 in value, you will need to complete an Import Declaration and settle duties, taxes, and charges upon arrival at the border. Import Duties, Import GST and the Customs entry fee need to be paid to the ABF before the goods are released.</p>
      `
    },
    {
      question: 'Do I need an import permit?',
      answer: `
        <p>Generally, Importers (companies or individuals) don't need a license to import goods into Australia. However, depending on the type of item, they may need to acquire import permits to ensure clearance through customs, regardless of their value. You can do your own research whether your item requires an import permit, or for peace of mind, seeking advice from a customs broker is more advisable to ensure you get accurate information.</p>
        <p>Note: You must apply for an import permit in advance <b>before your goods arrive in Australia.</b> That's why business owners might choose to work with a freight forwarder offering customs clearance services to understand any necessary permits before importing items, particularly high-value materials.</p>
        <p>If an import permit is required and the importer does not have one the goods cannot be cleared and re-export or destruction of the goods may be your only option.</p>
      `
    },
    {
      question: 'What are restricted or prohibited goods?',
      answer: `
        <p>Australia has strict biosecurity laws in place to protect its environment and agriculture.  Check the <a target="_blank" rel="noreferrer" href="https://www.agriculture.gov.au/biosecurity-trade/import/online-services/bicon">BICON database</a> to see if your items need permits or are banned altogether. This means there are certain items you cannot import at all, and others that require permits or specific conditions. Here's a rundown:</p>
        <ul className="faqList">
          <li><b>Prohibited Goods:</b> These items are completely banned from entering Australia. Examples include some weapons, wildlife products, certain medications, and some narcotic and psychotropic substances.  You can find a full list on the Australian Border Force (ABF) website using the <a target="_blank" rel="noreferrer" href="https://www.agriculture.gov.au/biosecurity-trade/import/online-services/bicon">BICON database</a>.</li>
          <li><b>Restricted Goods:</b> These items require a permit or may have specific conditions for import. This can include certain food items (like meat or fresh fruit), plants and plant products (seeds or wooden articles), animal products (like wool or leather goods), and some consumer goods.</li>
        </ul>
      `
    },
    {
      question: 'Why are my goods being held up by Australian Customs?',
      answer: `
        <p>Here are several common problems that can cause a shipment to get held up in customs clearance in Australia:</p>
        <ul className="faqList">
          <li><b>Missing or Incorrect Documentation:</b> This is the most frequent reason for delays. Customs needs accurate information to assess duties and taxes, and ensure the goods comply with regulations. Missing documents, typos, or inconsistencies can raise red flags and lead to delays while you provide the missing information.</li>
          <li><b>Incorrect HS Code Classification:</b> Every good entering or leaving Australia has a specific Harmonized System (HS) code that determines the duty rate and any restrictions. Incorrect classification can result in delays and potential penalties if the wrong duty is paid.</li>
          <li><b>Restricted or Prohibited Goods:</b> Some goods are restricted or even prohibited from entering Australia due to biosecurity concerns or other regulations.</li>
          <li><b>Incomplete or Inaccurate Invoices:</b> A detailed commercial invoice should accurately reflect the value, quantity, and description of the goods. Discrepancies between the invoice and the actual shipment can cause delays for verification.</li>
          <li><b>Physical Inspection:</b> Customs may choose your shipment for a random physical inspection to verify the contents and ensure they match the declared information.</li>
          <li><b>Payment Issues:</b> Your goods will not be released until all duties, taxes, and any other customs fees are paid correctly and promptly. Delays or errors in payment can hold up your shipment until resolved.</li>
        </ul>
      `
    },
    {
      question: 'Can I claim back the GST on my imported commercial goods?',
      answer: `
        <p>Yes, you can claim GST credits on imported goods if 1) you have an ABN and 2) you are registered for GST. You can claim it when you lodge your business’s BAS (business activity statement). In order for you to be identified as the “importer”, you have to fulfill both criteria:</p>
        <ul className="faqList">
          <li>You arranged for the goods to be brought to Australia <b>to use them in your business.</b></li>
          <li>You (or your agent) are listed as the <b>owner</b> on the import declaration</li>
        </ul>
      `
    },
    {
      question: 'Do you do customs clearance consultancy and advice?',
      answer: `
        <p>Yes we do.  If you are looking to bring an item to Australia but unsure about duties, taxes or the import costs involved  in terms of customs clearance, our brokers can help you for a competitive fee. We highly recommend getting advice on your shipments. Customs regulations can change frequently. Our brokers keep themselves updated on the latest rules and ensure you're following the most current procedures. They'll also explain what paperwork is needed, what duties and taxes might apply, and how to classify your goods correctly using the Harmonized System (HS) coding system. With Willship's help, you'll avoid delays and surprises at customs, saving you time and money.</p>
      `
    },
    {
      question: 'Difference between a freight forwarder and customs clearance broker?',
      answer: `
        <p>The big difference is freight forwarders handle the movement of the goods, while customs brokers deal with all the regulatory and compliance aspects of bringing goods into or out of Australia. A freight forwarder primarily focuses on acting as an intermediary between shippers and carriers to arrange transportation via various modes such as air, sea, road, or rail.  They take care of things like organizing shipping and handling paperwork, and they might also offer insurance for cargo. Customs brokers, on the other hand, help goods get through customs when they cross borders. They make sure everything follows the rules, fill out forms and declarations , pay taxes and fees, and talk to customs officers on behalf of the importer or exporter. While freight forwarders handle moving the goods, customs brokers deal with all the rules and paperwork for crossing borders. Both are really important for making sure things move smoothly in the global supply chain.</p>
      `
    },
    {
      question: 'Where are your brokers based?',
      answer: `
        <p>Our customs brokers are based in Brisbane Queensland but we also cater to clients all over Australia. We <b>DO NOT</b> outsource our customs services offshore or to third parties. We handle all of our services, including customs clearance, in-house in our Northgate headquarters and warehouse. Our brokers, operations and sales team are all located in the same physical office where we can coordinate efficiently on your shipments and give you prompt responses in case of any setbacks or challenges.</p>
      `
    },
    {
      question: 'Do you do freight forwarding with customs clearance services?',
      answer: `
        <p>Absolutely! We specialise in both freight forwarding and customs clearance services in Australia. We offer end-to-end logistics solutions from coordinating with your supplier up to customs documentation and compliance + final delivery to the goods destination. Think of it as a one-stop shop when you are importing and exporting products to and from Australia. When you use both our freight forwarding and customs clearance services, you'll have a dedicated contact person who will manage your shipments from start to finish, working with our brokers until your goods reach your warehouse or destination.</p>
      `
    },
    {
      question: 'How experienced is your customs clearance team?',
      answer: `
        <p>Our customs brokers and operators have well over 30 years of experience. Our brokerage team is known for their attention to detail, efficiency and competitive clearance rates in Australia. We are licensed with the Australian Border Force, all our brokers complete annual continuing professional development (CPD) training. We also hold biosecurity accreditation and can assist in the quarantine clearance of all cargo.</p>
        <p>Additionally, our brokers have expertise in a diverse range of industries, including construction and building materials, fashion and textiles, heavy machinery and out of gauge equipment, consumer goods, homewares, furniture, tech products, health and wellness, cars, caravans and motorhomes (and many more!). You are in good hands, we take care of your cargo like it’s our own.</p>
      `
    },
    {
      question: 'How can I find a reliable customs broker in Australia?',
      answer: `
        <p>You can find a reliable customs broker in Australia by researching reputable firms, checking for relevant certifications or accreditations, reading customer reviews, and obtaining referrals from other businesses or industry contacts. Additionally, you can verify the broker's credentials with the Australian Border Force. Always make sure they are licensed by the Australian Border Force and accredited with Biosecurity.</p>
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

export default CustomsClearanceFAQ;