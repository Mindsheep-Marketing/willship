import React from "react";
import { MailIcon, LocationMarkerIcon, PhoneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Button from "../common/Button";
    
const CommercialContactForm = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-2xl px-6 py-6 mx-auto text-white sm:px-8 sm:py-8">
        <h2 className="mb-6 text-3xl font-bold text-center">📩 Help Us Help You Faster</h2>
        <p className="mb-6 text-base text-center">We have just launched our Smart Online Form is the quickest way for you to reach our team. It asks all the necessary details upfront, so we can get back to you faster — with the exact info you need!</p>
        
        <div className="mb-8 text-left">
          <p className="mb-2 text-sm">✔️ Complete in under 2 minutes</p>
          <p className="mb-2 text-sm">✔️ Priority response — faster than email</p>
          <p className="mb-2 text-sm">✔️ Lets us serve you better</p>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            buttonText={'Get Started'}
            linkTo={'paperform'}
            dataPaperformId={'mlc28uxr'}
            dataPaperformPopup={true}
            theme='redBlue'
          />
        </div>

        <div className="flex flex-col items-start w-full py-4">
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-black/20">
              <MailIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col grow">
              <p className="font-light">
                Email
              </p>
              <a href="mailto:commercial@willship.com.au" className="text-xl font-medium sm:text-2xl">
                  commercial@willship.com.au
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center w-16 h-16 bg-black/20">
              <PhoneIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col grow">
              <p className="font-light">
                Phone
              </p>
              <a href={`tel:07 3267 0575`} className="text-2xl font-medium">
                  07 3267 0575 
              </a>
            </div>
          </div>
          <div className="flex-row hidden gap-4 sm:flex">
            <div className="flex items-center justify-center w-16 h-16 bg-black/20">
              <LocationMarkerIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col w-5/6">
              <p className="font-light">
                Address
              </p>
              <p className="text-2xl font-medium">
                {/* {contactData.location} */}
                16/853 Nudgee Road, Northgate, QLD
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-left border-t border-gray-400">
          <p className="mb-4 text-base font-bold">Prefer to email? No problem.</p>
          <p className="mb-4 text-sm">Please include as much information as possible upfront so we can respond effectively.</p>
          <p className="mb-4 text-sm">To ensure we fully understand your needs, we need details such as:</p>
          <ul className="pl-6 mb-4 space-y-1 text-sm list-disc">
            <li>Shipment size, volume, and weight</li>
            <li>Origin and destination (including delivery address and unloading capabilities)</li>
            <li>Commodity</li>
            <li>Incoterms (e.g., EXW / FOB)</li>
            <li>Value</li>
            <li>Any other relevant information</li> 
          </ul>
          <p className="mb-6 text-sm">Simply emailing &quot;want help with freight&quot; won&apos;t give us enough context to provide proper support, so the more detail you can provide, the better we can assist you.</p>
        </div>
      </div>
    </div>
  );
};

export default CommercialContactForm;