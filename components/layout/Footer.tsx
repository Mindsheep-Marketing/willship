import { LocationMarkerIcon, MailIcon, NewspaperIcon, PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap, { externalLinks } from "../../siteMap";

const footerData = [
  {
    heading: 'NAVIGATION',
    links: [
      {
        linkText: 'About Us',
        linkTo: siteMap.about.path
      },
      {
        linkText: 'What We Ship',
        linkTo: siteMap.whatWeShip.path
      },
      {
        linkText: 'Roro Shipping Schedule',
        linkTo: siteMap.roroSchedule.path
      },
      {
        linkText: 'Gallery',
        linkTo: siteMap.gallery.path
      },
      {
        linkText: 'Contact Us',
        linkTo: siteMap.contact.path
      },
    ]
  },
  {
    heading: 'SERVICES',
    links: [
      {
        linkText: 'Importing Into Australia',
        linkTo: siteMap.commercial.importingToAustralia.path
      },
      {
        linkText: 'Exporting From Australia',
        linkTo: siteMap.commercial.exportingFromAustralia.path
      },
      {
        linkText: 'China To Australia',
        linkTo: siteMap.chinaToAustralia.path
      },
      {
        linkText: 'Freight Forwarding',
        linkTo: siteMap.commercial.path
      },
      {
        linkText: 'Custom Services & Clearances',
        linkTo: siteMap.commercial.customsClearance.path
      },
      {
        linkText: 'Warehousing & Transport',
        linkTo: siteMap.commercial.wareHousing.path
      },
      {
        linkText: 'Project Logistics & Management',
        linkTo: siteMap.commercial.freightLogistics.path
      },
    ]
  },
  {
    heading: 'WHAT WE SHIP',
    links: [
      {
        linkText: 'Vehicles',
        linkTo: siteMap.vehicle.importCarToAustralia.path
      },
      {
        linkText: 'Boats',
        linkTo: siteMap.vehicle.importBoatToAustralia.path
      },
      {
        linkText: 'Motorcycles',
        linkTo: siteMap.vehicle.importMotorcycleToAustralia.path
      },
      {
        linkText: 'Motorhomes',
        linkTo: siteMap.vehicle.importMotorhomesToAustralia.path
      },
      {
        linkText: 'Caravans',
        linkTo: siteMap.vehicle.importCaravanToAustralia.path
      },
      {
        linkText: 'Machinery',
        linkTo: siteMap.vehicle.importMachineryToAustralia.path
      },
    ]
  },
  {
    heading: 'QUICK LINKS',
    links: [
      {
        linkText: 'Who are we?',
        linkTo: siteMap.about.path
      },
      {
        linkText: 'Contact Us',
        linkTo: siteMap.contact.path
      },
      {
        linkText: 'Get Instant Quote',
        linkTo: siteMap.vehicle.vehicleQuote.path
      },
      {
        linkText: 'Blog',
        linkTo: siteMap.blog.path
      },
    ]
  },
]

const Footer = () => {

  const {showVehicleQuote} = useContext(ModalContext);

  return (
  <>
    <footer
      id="footer" className="w-full bg-darkBlue flex flex-col text-white"
    >
      <nav className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto justify-center py-20 gap-8">
        {footerData.map((section, i) => (
          <div key={i} className="flex flex-col items-center whitespace-nowrap text-center lg:text-left lg:whitespace-normal lg:items-start gap-2 w-full lg:w-1/6">
            <h2 className="text-2xl font-semibold pb-6">{section.heading}</h2>
            {section.links.map((link, j) => (
              link.linkTo === siteMap.vehicle.vehicleQuote.path
                ? (
                  <p 
                    onClick={() => showVehicleQuote(true)}
                    key={j} 
                    className="text-lg font-light hover:cursor-pointer"
                  >
                    {link.linkText}
                  </p>
                ) : (
                  <Link key={j} href={link.linkTo}>
                    <a className="text-lg font-light">{link.linkText}</a>
                  </Link>
                )
            ))}
          </div>
        ))}
        <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/6 font-light text-lg px-4 lg:px-0">
          <h2 className="text-2xl font-semibold pb-6">CONTACT US</h2>
          <Link href='https://goo.gl/maps/kNe5sHZ5z97hmssE8'>
            <a target='_blank' rel='noreferrer' className="w-full">
              <div className="flex flex-row items-center w-full">
                <div className="w-1/6">
                  <LocationMarkerIcon className="h-4 w-4" />
                </div>
                <div className="w-5/6">
                  Willship International Pty Ltd 16/853 Nudgee Road, Northgate, QLD 4013
                </div>
              </div>
            </a>
          </Link>
          <Link href='tel:+61732670575'>
            <a target='_blank' rel='noreferrer' className="w-full">
              <div className="flex flex-row items-center">
                <div className="w-1/6">
                  <PhoneIcon className="h-4 w-4" />
                </div>
                <div className="w-5/6">
                  +61 7 3267 0575
                </div>
              </div>
            </a>
          </Link>
          <Link href='tel:+61732671225'>
            <a target='_blank' rel='noreferrer' className="w-full">
              <div className="flex flex-row items-center">
                <div className="w-1/6">
                  <NewspaperIcon className="h-4 w-4" />
                </div>
                <div className="w-5/6">
                  +61 7 3267 1225
                </div>
              </div>
            </a>
          </Link>
          <Link href='mailto:commercial@willship.com.au'>
            <a target='_blank' rel='noreferrer' className="w-full">
              <div className="flex flex-row items-center ">
                <div className="w-1/6">
                  <MailIcon className="h-4 w-4" />
                </div>
                <div className="w-5/6">
                  commercial@willship.com.au
                </div>
              </div>
            </a>
          </Link>
          <div className="w-full">
            <a href={externalLinks.dmcaLink.path} target="_blank" rel="noreferrer" title="DMCA.com Protection Status" className="dmca-badge mt-4"><img src ="https://images.dmca.com/Badges/dmca-badge-w100-5x1-02.png?ID=9a6c36a3-f00b-4c23-a61b-c64a57fac914"  alt="DMCA.com Protection Status" /></a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col lg:flex-row items-center gap-4 mx-auto font-light text-xl py-5">
        <div className="flex flex-row gap-4">
          <Link href={siteMap.termsAndConditions.path}>
            <a>Terms</a>
          </Link>
          <Link href={siteMap.privacy.path}>
            <a>Privacy</a>
          </Link>
          <Link href={siteMap.commercial.internationalFreightFaq.path}>
            <a>FAQs</a>
          </Link>
        </div>
        <p className="lg:ml-40 text-base font-medium">&copy; 2025 Willship International. All Rights Reserved.</p>
      </div>

    </footer>
    <div className="elfsight-app-c2584fb9-5e67-4222-a7d1-280b6b6ec76b" />
  </>
  )
};

export default Footer;
