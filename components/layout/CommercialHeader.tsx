import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import ModalContext from "../../context/ModalContext";

import siteMap from "../../siteMap";
import useIsSmall from "../../utils/hooks/useIsSmall";
import Button from "../common/Button";
import DropdownLink from "./DropdownLink";
import HomeHeader from "./HomeHeader";
import SmallHeader from "./SmallHeader";

interface MenuItem {
  heading: string;
  headingLink: boolean | string;
  links ?: {
    linkText: string;
    linkTo: string;
  }[];
};

const navMenuData = [
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
];

const CommercialHeader = () => {
  const router = useRouter();
  const isSmall = useIsSmall();
  const {showCommercialQuote, showPaperformModal} = useContext(ModalContext);
  
  const isCustomsClearancePage = router.pathname === '/freight-forwarder/customs-clearance';

  const RenderNoLinks = ({menuItem} : {menuItem: MenuItem}) => (
    menuItem.heading === 'Quote'
      ? (
        <button className="text-lg font-medium hover:cursor-pointer"
          onClick={() => showPaperformModal("mlc28uxr")}>
            {menuItem.heading}
        </button>
      ) : (
        <Link href={menuItem.headingLink as string}>
          <a className="text-lg font-medium">
            {menuItem.heading}
          </a>
        </Link>
      )
  );

  return (
    <>
      {isSmall
        ? <SmallHeader preSelected="Commercial" />
     : (

       <HomeHeader autoOrCommercial="commercial">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row items-center w-full max-w-5xl gap-4 py-4">
            <nav className="flex flex-row justify-start gap-8 text-base font-medium text-white grow">
              {navMenuData.map((menuItem : MenuItem, i : number) => {
                return menuItem.links 
                ? <DropdownLink key={i} menuItem={{heading: menuItem.heading, links: menuItem.links}} />
                : <RenderNoLinks key={i} menuItem={menuItem} />
              })}
            </nav>
            <div className="z-10 flex flex-row gap-4 w-96">
              <Button
                buttonText='Contact Us'
                linkTo={siteMap.contact.path}
                theme='whiteBlue'
              />
              {isCustomsClearancePage ? (
                <Button
                  buttonText='Get Started'
                  linkTo={siteMap.commercial.commercialFreightQuote.path}
                  theme='redBlue'
                />
              ) : (
                <Button
                  buttonText='Get Started'
                  linkTo={'paperform'}
                  dataPaperformId={'mlc28uxr'}
                  dataPaperformPopup={true}
                  theme='redBlue'
                />
              )}
            </div>
          </div>
        </div>
      </HomeHeader>
    )}
    </>
  );
};

export default CommercialHeader;