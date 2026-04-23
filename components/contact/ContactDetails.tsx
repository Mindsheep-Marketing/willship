import { LocationMarkerIcon, MailIcon, NewspaperIcon, PhoneIcon } from "@heroicons/react/outline";
import Link from "next/link";
import siteMap from "../../siteMap";
import Button from "../common/Button";
import Image from "next/image";
import AutoContactForm from "../forms/AutoContactForm";
import CommercialContactForm from "../forms/CommercialContactForm";

const contactData = {
  auto: {
    email: 'auto@willship.com.au',
    phone: '+61 7 3267 3694',
  },
  commercial: {
    email: 'commercial@willship.com.au',
    phone: '+61 7 3267 0575',
  },
  fax: '+61 7 3267 1225',
  location: '16/853 Nudgee Road, Northgate, QLD 4013',
  faceBook: 'https://www.facebook.com/willshipinternational',
  insta: 'http://instagram.com/willship_international'
};

const ContactDetails = () => (
  <section className="flex flex-col items-center w-full">
    <div className="flex flex-col items-center w-full max-w-5xl lg:items-start lg:flex-row sm:gap-8">
    <div className="flex flex-col items-center w-full max-w-lg gap-12 p-4 text-white lg:w-1/2 sm:p-0 sm:pt-8 sm:shadow-lg">
        <div className="flex flex-col items-center w-full text-white rounded bg-darkBlue">
          <h2 className="pt-4 text-3xl font-medium sm:text-forty">
            COMMERCIAL FREIGHT
          </h2>
          <CommercialContactForm />
        </div>
       
      </div>
      <div className="flex flex-col items-center w-full max-w-lg gap-12 p-4 pt-0 text-white lg:w-1/2 sm:p-0 sm:pt-8 sm:shadow-lg">
        <div className="flex flex-col items-center w-full h-[1131px] text-white rounded bg-darkBlue">
          <h2 className="pt-4 text-3xl font-medium sm:text-forty">
            AUTOMOTIVE
          </h2>
          <div className="w-full">
            <div className="w-full max-w-2xl px-6 py-6 mx-auto text-white sm:px-8 sm:py-8">
              <h2 className="mb-6 text-3xl font-bold text-center">📩 Help Us Help You Faster</h2>
              <p className="mb-6 text-base text-center">We’ve launched our new Smart Online Form — the fastest way to start your automotive shipment, giving us the info we need upfront so we can respond faster with accurate pricing and clear next steps.</p>
              
              <div className="mb-8 text-left">
                <p className="mb-2 text-sm">✔️ Complete in under 2 minutes</p>
                <p className="mb-2 text-sm">✔️ Priority response — faster than email</p>
                <p className="mb-2 text-sm">✔️ Ensures we give you the right info the first time</p>
              </div>

              <div className="flex justify-center mb-8">
                {/* <Button
                  buttonText={'Get Started'}
                  linkTo={'paperform'}
                  dataPaperformId={'w9e9ma75'}
                  dataPaperformPopup={false}
                  theme='redBlue'
                /> */}
                <a
                  href="https://w9e9ma75.paperform.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-20 flex flex-col items-center w-full"
                >
                  <div
                    className={`
                      relative py-3 text-xl font-medium group z-10 w-full border border-red
                      bg-red text-white
                    `}
                  >
                    <p className="text-xl text-center text-white">Get Started</p>
                    <div className="absolute top-0 left-0 w-full h-full z-1 -z-10 bg-red" />
                    <div className="absolute top-0 left-0 w-0 h-full duration-500 ease-out -z-10 transition-width bg-darkBlue group-hover:w-full" />
                  </div>
                </a>
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
                    <a href={`mailto:${contactData.auto.email}`} className="text-xl font-medium sm:text-2xl">
                      {contactData.auto.email}
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
                    <a href={`tel:07 3267 3694`} className="text-2xl font-medium">
                        {/* {contactData.auto.phone} */}
                        07 3267 3694
                    </a>
                  </div>
                </div>
                {/* <div className="flex-row hidden gap-4 sm:flex">
                  <div className="flex items-center justify-center w-16 h-16 bg-black/20">
                    <NewspaperIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col grow">
                    <p className="font-light">
                      Fax No
                    </p>
                    <Link href={`tel:${contactData.fax}`} className="text-2xl font-medium">
                        {contactData.fax}
                    </Link>
                  </div>
                </div> */}
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
                {/* <div className="flex flex-row w-full gap-4 sm:hidden">
                  <Button
                    buttonText="Get Instant Quote"
                    linkTo={siteMap.vehicle.vehicleQuote.path}
                    theme='redBlue'
                  />
                </div> */}
              </div>

              <div className="pt-6 text-left border-t border-gray-400">
                <p className="mb-4 text-base font-bold">Prefer to email? No problem.</p>
                {/* <p className="mb-4 text-sm">Please include as much information as possible upfront so we can respond effectively.</p> */}
                <p className="mb-4 text-sm">If you&apos;d prefer to reach out by email, please include as much detail as possible so we can respond effectively. For automotive shipments, we need:</p>
                <ul className="pl-6 mb-4 space-y-1 text-sm list-disc">
                  <li><b>Cargo type:</b> car, caravan, trailer, motorbike, boat, machinery, etc.<br/>
(Please include year / make / model where relevant)</li>
                  <li><b>Origin & destination:</b> including suburb/postcode</li>
                  <li><b>Cargo value</b></li>
                  <li><b>What you need help with:</b> a clear explanation of your request</li>
                  <li><b>Import Approval:</b> for imports into Australia, advise whether you already have one</li>
                </ul>
                <p className="mb-6 text-sm">Providing complete details upfront allows us to give accurate guidance and avoid delays.</p>
                
                {/* <div className="flex flex-row gap-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-black/20">
                    <MailIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col grow">
                    <p className="font-light">
                      Email
                    </p>
                    <Link href="mailto:commercial@willship.com.au" className="text-xl font-medium sm:text-2xl">
                        commercial@willship.com.au
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex-col hidden w-full gap-4 p-2 text-center bg-white sm:flex">
          <p className="text-2xl text-blue-500">
            Are you looking for pricing and information on shipping a vehicle or similar cargo to Australia, New Zealand, the UK or Ireland?
          </p>
          <p className="text-black">Click Below to Get an Instant Quote.</p>
          <div className="z-10 w-full">
            <Button
              buttonText="Get Instant Quote"
              linkTo={siteMap.vehicle.vehicleQuote.path}
              theme='redBlue'
            />
          </div>
          <p className="text-black">
            If not, please fill out the form below and we will get back to you.
          </p>
        </div>
        <div className="hidden w-full sm:block">
        <AutoContactForm />
        </div> */}
      </div>
      <div className="flex flex-col items-center w-full max-w-lg gap-0 p-4 pt-0 text-white sm:hidden lg:w-1/2 sm:p-0 sm:pt-8 sm:shadow-lg">
        <div className="relative w-full max-w-5xl mx-auto aspect-4/3">
          <Image className="rounded-t" src='/assets/images/team.png' layout='fill' objectFit="cover" alt='Willship International' />
        </div>
        <div className="flex flex-col items-center w-full text-white rounded-b bg-darkBlue">
          <h2 className="pt-4 text-3xl font-medium sm:text-forty">
            Visit our location
          </h2>
          <div className="flex flex-col items-start w-full gap-8 p-8">
            <div className="flex flex-row gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-black/20">
                <LocationMarkerIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col w-5/6">
                <p className="font-light">
                  Address
                </p>
                <p className="text-xl font-medium">
                  {contactData.location}
                </p>
              </div>
            </div>
            <div className="flex flex-row w-full gap-4">
              <Button
                buttonText="Get Directions"
                linkTo={'https://maps.app.goo.gl/q3NPSx1m6nQFGXAT8'}
                theme='redBlue'
              />
            </div>
          </div>
        </div>
      </div>

    </div>
    <p className="p-4 pt-12">
      Your information is used solely in conjunction with our <a href={siteMap.privacy.path} className="text-blue-700">
          <b>Privacy Policy</b>
      </a> and is not sold or distributed to any other company.
    </p>
  </section>

);

export default ContactDetails;