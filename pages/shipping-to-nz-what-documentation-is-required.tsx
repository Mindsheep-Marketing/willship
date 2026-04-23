import Head from "next/head";
import BlogList from "../components/common/blog/BlogList";
import BlogText from "../components/common/blog/BlogText";
import Hero from "../components/common/Hero";
import siteMap from "../siteMap";

const ShippingToNZDocumentation = () => (
  <>
    <Head>
      <title>{siteMap.usefulInformation.shippingToNZDocumentation.title}</title>
    </Head>
    <Hero
      bgImage="/assets/images/bg-ship4.jpg"
      hasButton={false}
      hasMouseScroll={false}
      heading="SHIPPING TO NZ – WHAT DOCUMENTATION IS REQUIRED?"
    />
    <BlogText
      bgColour="bg-white"
      textColour="text-darkGrey"
      text={[
        'The documents needed to ship a vehicle to New Zealand are very basic and easy to get together. The best part is once you pass it all on to us, we do the rest! You won’t ever have to deal with customs directly, and we can accept your documents as emails, faxes or even high-resolution picture messages.',
        'We are collecting the below documents on behalf of the team in New Zealand who will be submitting them to customs for you. If you are looking to claim and are eligible for the Import Tax Exemption, we will need all the documents below in order to prove this to NZ Customs. If you are NOT looking to Claim the Import Tax Exemption or are not eligible, you will not need to provide all these documents.',
      ]}
    />
    <BlogList
      sectionsWithSubheading={[
        {
          subHeading: 'Original Purchase Invoice or Bill of Sale for the unit.',
          text: [
            'Documents must include purchase date, purchase amount, unit details, seller and purchaser. If the unit was purchased as a private sale please provide proof of purchase date, units year, make and model, amount paid, VIN number and purchaser.'
          ]
        },
        {
          subHeading: 'Proof of Payment for the unit.',
          text: [
            ' If Finance was taken, we will need proof of payment in the form of a payout letter, confirmation from the finance company this vehicle is paid in full. A bank statement or cheque receipt to support the purchase price, date and purchaser can also be used but the dates and amounts must match with the supplied Purchase Invoice.'
          ]
        },
        {
          subHeading: 'Original Registration Certificate.',
          text: [
            'With name of registered person and full VIN Number. (Must be an Original, if it has not been posted to you, it will need to be stamped and signed by a Department of Transport. You Will need to Keep this Document with you to hand to Compliance Team in New Zealand).'
          ]
        },
        {
          subHeading: 'Passport Photo',
          text: [
            'High quality colour photo of your NZ/AUS passport OR other passport with Visa - Please ensure the passport is signed and clearly shows your signature'
          ]
        },
        {
          subHeading: 'Customs Number Application for an Individual Person.',
          text: [
            'We provide this form for you to fill out. We can provide a guide on how to complete this form at time of booking.'
          ]
        },
        {
          subHeading: 'Copy of your flight ticket to New Zealand',
          text: [
            'This is to show NZ Customs when you are moving to New Zealand. If you are already in NZ, please let us know when you arrived into NZ.'
          ]
        }, 
        {
          subHeading: 'Pre-Shipment Condition Report',
          text: [
            'We provide a Template for this, OR you can provide photos of the inside and outside of the vehicle, must provide photos of <u>ADR Plate</u> and <u>Odometer</u>.'
          ]
        },
        {
          subHeading: 'Booking Agreement Form.',
          text: [
            'We provide this form for you to fill out.'
          ]
        },
      ]}
      text={[
        'If you have trouble getting any of these documents together, please let us know and we will work with you for a solution or advise on the next steps. Even if we do provide all the above-listed documents, it is up to the discretion of the NZ Customs officer processing your Import Clearance to determine if they would like further information or documentation. NZ Customs are very particular in what documentation they like to see to support your Import clearance.'
      ]}
    />
  </>
);

export default ShippingToNZDocumentation;