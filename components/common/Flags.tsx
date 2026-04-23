import Image from "next/image";
import Link from "next/link";
import siteMap from "../../siteMap";

interface CountryList {
  [key: string]: {
    image: string;
    text: string;
    linkTo: string;
  };
};

interface Props {
  countries: string[];
  areLinks ?: boolean;
}

const Flags = ({countries, areLinks = false} : Props) => {

  const countryList : CountryList = {
    'nz': {
        image: '/assets/images/flags/nz-flag.webp',
        text: 'NZ',
        linkTo: siteMap.vehicle.importCarToNZ.path
    },
    'ie': {
      image: '/assets/images/flags/ie-flag.webp',
      text: 'Ireland',
      linkTo: siteMap.vehicle.importCarToIreland.path
    },
    'uk': {
      image: '/assets/images/flags/uk-flag.webp',
      text: 'UK',
      linkTo: siteMap.vehicle.importCarToUK.path
    },
    'au': {
      image: '/assets/images/flags/au-flag.webp',
      text: 'Australia',
      linkTo: siteMap.vehicle.importCarToAustralia.path
    }
  };

  return (
    <div className="flex flex-row justify-center gap-1">
      {areLinks
        ? (
          countries.map((country, i) => {
            const countryDetails = countryList[country];
            return (
    
              <Link key={i} href={countryDetails.linkTo}>
                <a className="flex flex-col w-20 gap-2">
                  <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg p-2 bg-white">
                    <div className="w-full h-full relative">
                      <Image src={countryDetails.image} objectFit='contain' layout="fill" alt={countryDetails.text} />
                    </div>
                  </div>
                  <p className="text-center">{countryDetails.text}</p>
                </a>
          
              </Link>
            )
          })

        ) : (
          countries.map((country, i) => {
            const countryDetails = countryList[country];
            return (
              <div className="flex flex-col w-20 gap-2" key={i}>
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg p-2 bg-white">
                  <div className="w-full h-full relative">
                    <Image src={countryDetails.image} objectFit='contain' layout="fill" alt={countryDetails.text} />
                  </div>
                </div>
                <p className="text-center">{countryDetails.text}</p>
              </div>
            )
          })
        )
      }
    </div>
  )
};

export default Flags;