import { ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import { RiPhoneFill, RiMessage2Fill } from 'react-icons/ri';

const autoNavData = [
  {
    heading: 'What We Ship',
    headingLink: false,
    links: [
      {
        linkText: 'Vehicles',
        linkTo: siteMap.vehicle.importCarToAustralia.path
      },
      {
        linkText: 'TrailerBoats',
        linkTo: siteMap.vehicle.importBoatToAustralia.path
      },
      {
        linkText: 'Motorcycles',
        linkTo: siteMap.vehicle.importMotorcycleToAustralia.path
      },
      {
        linkText: 'Caravans',
        linkTo: siteMap.vehicle.importCaravanToAustralia.path
      },
      {
        linkText: 'Motorhomes',
        linkTo: siteMap.vehicle.importMotorhomesToAustralia.path
      },
      {
        linkText: 'Machinery',
        linkTo: siteMap.vehicle.importMachineryToAustralia.path
      },
      {
        linkText: 'Crates',
        linkTo: siteMap.crates.path
      }
    ]
  },
  {
    heading: 'Where We Ship',
    headingLink: false,
    links: [
      {
        linkText: 'Australia To New Zealand',
        linkTo: siteMap.vehicle.importCarToNZ.path
      },
      {
        linkText: 'United Kingdom',
        linkTo: siteMap.vehicle.importCarToUK.path
      },
      {
        linkText: 'Ireland',
        linkTo: siteMap.vehicle.importCarToIreland.path
      },
      {
        linkText: 'New Zealand To Australia',
        linkTo: siteMap.vehicle.importCarNZtoAustralia.path
      },
      {
        linkText: 'Rest Of The World To Australia',
        linkTo: siteMap.vehicle.importCarGlobalToAustralia.path
      },
    ]
  },
  {
    heading: 'Crates Shipping',
    headingLink: siteMap.crates.path
  },
  {
    heading: 'Useful Information',
    headingLink: siteMap.usefulInformation.path
  },
  {
    heading: 'Gallery',
    headingLink: siteMap.gallery.path
  },
  // {
  //   heading: 'News',
  //   headingLink: siteMap.news.path
  // },
  {
    heading: 'About Us',
    headingLink: siteMap.about.path
  },
  {
    heading: 'Contact Us',
    headingLink: siteMap.contact.path
  }
];

const commercialNavData = [
  {
    heading: 'Services',
    headingLink: false,
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
        linkText: 'Customs Services & Clearances',
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
      {
        linkText: 'Vehicle Shipping',
        linkTo: siteMap.whatWeShip.path
      },
      {
        linkText: 'Trade Finance',
        linkTo: siteMap.commercial.tradeFinance.path
      },
    ]
  },
  {
    heading: 'Routes',
    headingLink: false,
    links: [
      {
        linkText: 'China To Australia',
        linkTo: siteMap.chinaToAustralia.path
      },
      {
        linkText: 'India To Australia',
        linkTo: siteMap.indiaToAustralia.path
      },
      {
        linkText: 'Vietnam To Australia',
        linkTo: siteMap.vietnamToAustralia.path
      },
      {
        linkText: 'Australia to Pacific Islands',
        linkTo: siteMap.pacificIslands.path
      }
    ]
  },
  {
    heading: 'Quote',
    headingLink: siteMap.commercial.commercialFreightQuote.path
  },
  {
    heading: 'FAQ',
    headingLink: siteMap.commercial.internationalFreightFaq.path
  },
  {
    heading: 'Blog',
    headingLink: siteMap.commercial.freightBlog.path
  },
  {
    heading: 'Education Hub',
    headingLink: siteMap.commercial.educationHub.path
  },
  {
    heading: 'About Us',
    headingLink: siteMap.about.path
  },
  {
    heading: 'Contact Us',
    headingLink: siteMap.contact.path
  }
];

const SmallHeader = ({ preSelected }: { preSelected: 'Commercial' | 'Automotive' }) => {

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<'Automotive' | 'Commercial'>('Automotive');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedNav, setSelectedNav] = useState(autoNavData);

  const { showCommercialQuote, showVehicleQuote, showPaperformModal } = useContext(ModalContext);

  const router = useRouter();

  useEffect(() => {
    setSelected(preSelected);
  }, [preSelected]);

  useEffect(() => {
    setSelectedNav(selected === "Automotive" ? autoNavData : commercialNavData);
  }, [selected]);

  const RenderDropDown = ({ item }: { item: { heading: string; links: Array<{ linkText: string; linkTo: string; }> } }) => {
    return (
      <div className="flex flex-col w-full">
        <div
          className="flex flex-row items-center justify-between w-full py-2"
          onClick={() => setExpanded(expanded === item.heading ? null : item.heading)}
        >
          <div className="w-1/6" />
          {item.heading}
          <div className="flex items-center justify-start w-1/6">
            <ChevronDownIcon className={`h-7 w-7 ${expanded === item.heading && '-rotate-180'}`} />
          </div>
        </div>
        {expanded === item.heading &&
          <div className="flex flex-col w-full divide-y divide-grey">
            {item.links.map((link, j) => (
              <Link href={link.linkTo} key={j}>
                    <a className="flex flex-row justify-center py-2"
                  onClick={() => setShowMenu(false)}>
                      {link.linkText}
                    </a>
                  
              </Link>
            ))}
          </div>
        }
      </div>
    );
  };

  const RenderButtons = () => {
    return (
      <div className="flex flex-col w-full gap-1 p-1 text-lg font-medium bg-darkBlue">
        {selected === 'Commercial' &&
          <button
            className="w-full py-2 text-white bg-red"
            onClick={() => {
              setShowMenu(false);
              showCommercialQuote(true);
            }}
          >
            Request A Quote
          </button>
        }
        {selected === 'Automotive' &&
          <>
            <Link href={siteMap.roroSchedule.path}>
                <a className="w-full py-2 text-center bg-white text-darkBlue" 
              onClick={() => setShowMenu(false)}>
                    AU - NZ Shipping Schedule
                </a>
                
            </Link>
            {/* <button
              className="w-full py-2 text-white bg-red"
              onClick={() => {
                setShowMenu(false);
                showVehicleQuote(true)
              }}
            >
              Get Instant Quote
            </button> */}
            <button
              className="w-full py-2 text-white bg-red"
              onClick={() => {
                setShowMenu(false);
                showPaperformModal("w9e9ma75");
              }}
            >
              Get Started
            </button>
            {/* <Link href={siteMap.vehicle.vehicleNewPaperformLink.path}>
                <a className="w-full py-2 text-center text-white bg-red" 
              onClick={() => setShowMenu(false)}>
                  Get Started
                </a>
            </Link> */}
          </>
        }
      </div>
    )
  }

  return (
    <>

      <header id='header' className="fixed z-50 flex flex-col w-full bg-darkBlue">
          <div className="flex w-full p-2 text-lg font-medium bg-green-500">
            <Link href='tel:+61732670575'>
            <a className="flex items-center justify-center w-full gap-2 text-white">
              <RiPhoneFill/>Talk to us
            </a>
            </Link>
              <button
                className="flex items-center justify-center w-full gap-2 text-white"
                onClick={() => {
                setShowMenu(false);
                if (router.pathname.includes('import-vehicle')) {
                  showPaperformModal("w9e9ma75");
                } else {
                  showPaperformModal("mlc28uxr");
                }
                }}
                >
                <RiMessage2Fill />
                {router.pathname.includes('import-vehicle') ? 'Get Instant Quote' : 'Request a Quote'}
              </button>
          </div>
        <div className="flex flex-row items-center justify-between px-10 py-5 h-28">
          <Link href='/'>
            <a className="relative aspect-logo w-60">
              <Image src='/assets/images/willship-logo.png' layout="fill" objectFit='contain' alt='Willship International' />
            </a>
          </Link>
          <MenuIcon
            className='w-8 h-8 text-white sm:h-10 sm:w-10 md:h-12 md:w-12'
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu &&
          <div className="absolute flex flex-col w-full top-28 bg-darkBlue">

            <div className="flex flex-row justify-center w-full pb-3 text-xl text-white">
              <div
                className={`max-w-xs w-1/2 mx-4 text-center hover:cursor-pointer ${selected === 'Commercial' && 'border-b border-white font-medium'}`}
                onClick={() => selected === 'Commercial' ? router.push('/freight-forwarder') : setSelected('Commercial')}
              >
                COMMERCIAL FREIGHT
              </div>
              <div
                className={`max-w-xs w-1/2 mx-4 text-center hover:cursor-pointer ${selected === 'Automotive' && 'border-b border-white font-medium'}`}
                onClick={() => selected === 'Automotive' ? router.push('/import-vehicle') : setSelected('Automotive')}
              >
                AUTOMOTIVE / CRATES
              </div>
            </div>
            <div className="flex flex-col items-center w-full text-lg font-medium text-white divide-y divide-grey">
              {selectedNav.map((item, i) => {
                return item.headingLink && !item.links
                  ? (
                    item.heading === 'Quote'
                      ? (<p
                        className="flex flex-row justify-center w-full py-2"
                        onClick={() => {
                          setShowMenu(false);
                          {router.pathname.includes('import-vehicle') ? showPaperformModal("w9e9ma75") : showPaperformModal("mlc28uxr")}
                        }}
                        key={i}
                      >
                        {item.heading}
                      </p>
                      ) : (
                        <Link href={item.headingLink as string} key={i}>
                              <a className="flex flex-row justify-center w-full py-2"
                            onClick={() => setShowMenu(false)}>
                                {item.heading}
                              </a>

                        </Link>
                      )
                  ) : (
                    <RenderDropDown key={i} item={item as { heading: string; links: Array<{ linkText: string; linkTo: string; }> }} />
                  )
              })}
            </div>
            <RenderButtons />
          </div>
        }
      </header>
    </>
  )
};

export default SmallHeader;