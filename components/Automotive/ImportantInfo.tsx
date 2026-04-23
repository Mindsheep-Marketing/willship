import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import FAQBuilder from "../FAQs/FAQbuilder";

const ImportantInfo = ({showInitial = true} : {showInitial ?: boolean}) => {

  return (
    <section className="w-full flex flex-col items-center pt-12 gap-8 text-center text-darkGrey bg-nearlyWhite">
      {showInitial && 
        <div className="flex flex-col gap-4 max-w-5xl px-4">
          <h2 className="font-medium text-darkBlue text-forty">
            Important Information
          </h2>
          <p className="text-xl">
            Almost anything with wheels that&apos;s imported into Australia requires an import approval, its important that you check to ensure that your vehicle, motorcycle, caravan, camper trailer, motorhome etc is eligible for an approval prior to shipping. Vehicle&apos;s and motorcycles are the most complicated, so please read through the below information to check to see if you think you&apos;ll be eligible for an import approval. If you have any questions, or you&apos;d like to speak with us on the phone then please give us a call and one of our friendly team can talk through it with you.
          </p>
        </div>
      }
      <div className={`w-full bg-nearlyWhite ${showInitial && 'pt-12'} pb-12 px-4`}>
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 text-xl">
          <h2 className="text-forty font-medium text-darkBlue leading-normal">
            First Step: Obtaining An Import Approval
          </h2>
          <p>
            To protect our Australian car market our government has set up a complex set of rules and regulations to heavily restrict the import of vehicles and similar cargo into Australia. To try and understand the laws in full would take pages and pages of information so we will do our best to summarise the basics below.
          </p>
          <p>
            Your first step when importing is to gain an import approval, these are issued through the <a href='https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia' target="_blank" rel='noreferrer' className="underline text-blue-700">Department of Infrastructure</a> – the type of import approval depends on the circumstances surrounding the import. For the purpose of this article we will focus solely on vehicles intended to be registered for use on Australian roads.
          </p>
          <p>
            If you don&apos;t intend to register the vehicle on Australian roads then you are welcome to import pretty much anything you like – Race cars, monster trucks, dirt bikes, dune buggies etc will be all OK to import under the <a className="underline text-blue-700" href='https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-vehicle/advisory-notice-narv' target='_blank' rel="noreferrer">‘Non-Road Vehicles Option</a>‘
          </p>
        </div>
        <FAQBuilder
          faqQuestions={[
            {
              question: 'My vehicle is older than 25 years old',
              answer: `
                <p>
                  For your vehicle, there are no major restrictions. You will simply need to apply for a vehicle import approval under the ‘Interim measure: vehicles older than 25 years&apos; option.
                </p>
                <p>
                  The approval should be granted on the basis that the vehicle is older than 25 years old at the time of import approval application.
                </p>
                <p>
                  For more information as well as details on how to apply please see the following link – <a className="text-blue-700 underline" href='https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia' target="_blank" rel='noreferrer'>https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia</a>
                </p>
              `
            },
            {
              question: 'My vehicle was manufactured in the last 25 years',
              answer: `
                <p>
                  This option is probably the most complicated, it means your vehicle needs to be imported under the Australian Governments ‘Registered Automotive Workshop Scheme&apos; (RAWS)
                </p>
                <p>
                  It means the vehicle MUST be on the RAWS list in order to be eligible to import into Australia, here is a link to the list (RAWS List)
                </p>
                <p>
                  If you find the make and model of vehicle you are looking to import on the list, then it will display a list of RAWS depot&apos;s around Australia who are able to handle the import approval and compliance process for you. Your first step would be to contact the RAWS depot to check on costs and the process. If you are happy with the costs for the approval and the compliance, then it&apos;s best to get in touch with Willship so we can advise on freight costs, import taxes etc and we can move forward from there.
                </p>
                <p>
                  This option can be a little complicated and tricky to understand so please give us a call on 07 3267 3694 if you&apos;d like a better understanding as to how this option works.
                </p>
              `
            },
            {
              question: 'My vehicle has been owned and used by an individual for in excess of 12 months in a foreign country.',
              answer: `
                <p>
                  If this is the case, then you can apply for a ‘personal import approval&apos; which allows you to import a vehicle and bypass the RAWS requirements on newer model vehicles. It&apos;s a great option for ex-pats looking to move back to Australia who are lucky enough to of owned and used their vehicle&apos;s overseas for in excess of 12 months.
                </p>
                <p>
                  More information on personal imports on the following link – <a href='https://infrastructure.gov.au/vehicles/imports/import_options/pis.aspx' target='_blank' rel='noreferrer'>https://infrastructure.gov.au/vehicles/imports/import_options/pis.aspx</a>
                </p>
              `
            },
            {
              question: 'My vehicle was originally exported out of Australia and is now returning',
              answer: `
                <p>
                  Awesome! This makes things really easy, if the vehicle is fitted with an Australian compliance plate then you&apos;ll just need to apply for an import approval under the Australian Plated Vehicle&apos;s option.
                </p>
                <p>
                  If you can prove that the vehicle was originally exported from Australia then you&apos;re also able to import it back into Australia without having to pay any import tax. Getting it back on the road is also really easy as well, it will just need a safety certificate and then you can re-register it.
                </p>
              `
            }
          ]}
        />

        {/* xxxxxxxxxxxxxxxx */}

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 leading-normal text-xl py-12">
          <h2 className="text-forty font-medium text-darkBlue">
            What Australian Import Taxes Apply?
          </h2>
          <p className='font-bold'>
            Please select each of the following options that apply.
          </p>
          <p>
          Almost anything with wheels that&apos;s imported into Australia requires an import approval, its important that you check to ensure that your vehicle, motorcycle, caravan, camper trailer, motorhome etc is eligible for an approval prior to shipping. Vehicle&apos;s and motorcycles are the most complicated, so please read through the below information to check to see if you think you&apos;ll be eligible for an import approval. If you have any questions, or you&apos;d like to speak with us on the phone then please <Link href='tel:+61732673964'><a className="font-bold text-darkBlue">give us a call</a></Link> and one of our friendly team can talk through it with you.
          </p>
        </div>

        <FAQBuilder
          faqQuestions={[
            {
              question: 'My vehicle is a returning vehicle to Australia',
              answer: `
                <p>
                  If you are able to prove that the vehicle was originally exported from Australia, then you&apos;ll likely be able to bypass paying Australian import tax.
                </p>
              `
            },
            {
              question: 'The vehicle is less than 25 years old',
              answer: `
                <p>
                  Both a duty of 5% and GST of 10% will be applicable.
                </p>
              `
            },
            {
              question: 'The vehicle is older than 25 years old',
              answer: `
                <p>
                  Import of duty of 5% may apply depending on the specifics of the vehicle. Import GST of 10% will also be applicable along with Luxury Car Tax (LCT) if the value is above the LCT threshold.
                </p>
              `
            },
            {
              question: 'The vehicle is worth more than AUD 68,740.00 (The 2021 luxury car tax (LCT) threshold)',
              answer: `
                <p>
                  The vehicle will incur both duty (if applicable) and GST as normal, but on top of this it will also incur Luxury Car Tax at a rate of 33% for every dollar over the threshold.
                </p>
                <p>
                  LCT is calculated on the ‘landed value&apos; of the vehicle (value + freight + insurance + duty + GST)
                </p>
                <p>
                  We know what you&apos;re thinking – that&apos;s ridiculous, and yes we agree!
                </p>
                <p>
                  If the vehicle is fuel efficient, then the threshold is slightly higher at AUD 77,565.00
                </p>
              `
            },
          ]}
        />
      </div>
    </section>
  );
};

export default ImportantInfo;