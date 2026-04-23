import Link from "next/link";
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
  // }
]

const AutoHeader = () => {

  const isSmall = useIsSmall();

  const RenderNoLinks = ({menuItem} : {menuItem: MenuItem}) => {
    return (
      <Link href={menuItem.headingLink as string}>
        <a className="font-medium text-lg">{menuItem.heading}</a>
      </Link>
    )
  };

  return (
    isSmall
      ? <SmallHeader preSelected="Automotive" />
      : (
      <HomeHeader autoOrCommercial="auto">
        <div className="w-full flex flex-row justify-center">
          <div className="w-full max-w-5xl flex flex-row items-center gap-4 py-4">
            <nav className="flex flex-row justify-start gap-6 grow text-white font-medium text-base">
              {navMenuData.map((menuItem : MenuItem, i : number) => {
                return menuItem.links 
                  ? <DropdownLink key={i} menuItem={{heading: menuItem.heading, links: menuItem.links}} />
                  : <RenderNoLinks key={i} menuItem={menuItem} />
              })}
            </nav>
            <div className="flex flex-row gap-4 w-96 z-10">
              <Button
                buttonText='AU-NZ Shipping Dates'
                linkTo={siteMap.roroSchedule.path}
                fontSize='text-base font-bold'
                theme="whiteBlue"
              />
              <Button
                buttonText='Get Started'
                linkTo={"paperform"}
                dataPaperformId="w9e9ma75"
                fontSize='text-base font-bold'
                theme="redBlue"
              />
            </div>
          </div>
        </div>
      </HomeHeader>
    )
  );
};

export default AutoHeader;
