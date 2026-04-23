import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PhoneIcon } from '@heroicons/react/solid';
import Image from "next/image";
import siteMap from "../../siteMap";
import useIsSmall from "../../utils/hooks/useIsSmall";
import SmallHeader from "./SmallHeader";
import SmallHeaderCrates from "./SmallHeaderCrates";

interface Props {
  children?: React.ReactNode;
  autoOrCommercial?: 'auto' | 'commercial';
}

const HomeHeader = ({ children, autoOrCommercial = 'commercial' }: Props) => {

  const [selected, setSelected] = useState('');

  const path = useRouter().asPath;
  const isSmall = useIsSmall();

  useEffect(() => {
    setSelected(path);
  }, [path]);

  const links = [
    { text: 'HOME', link: '/' },
    { text: 'COMMERCIAL FREIGHT', link: siteMap.commercial.path },
    { text: 'AUTOMOTIVE', link: siteMap.vehicle.path },
    { text: 'CRATES', link: siteMap.crates.path }
  ];

  return (
    isSmall
      // ? <SmallHeader preSelected="Automotive"/>
      ? <SmallHeaderCrates />
      : (
        <header
          id='header'
          className="w-full bg-darkBlue flex flex-col items-center text-white fixed z-50"
        >
          <div className="flex flex-col w-full max-w-5xl pt-2 pb-3">
            <div className="flex flex-row items-center justify-between">
              <div className="font-sackLight">
                <h2><b>Global Shipping Experts</b> - With Over <b>50 Years</b> Experience</h2>
              </div>
              <div className="font-light text-lg flex flex-row items-center gap-4">
                <Link href={siteMap.about.path}><a>About Us</a></Link>
                <Link href={siteMap.contact.path}><a>Contact Us</a></Link>
              </div>
              {/* <div className="flex flex-row font-sackMed text-xl items-center gap-4 "> */}
              <div className="flex flex-row font-bold text-lg items-center gap-4 ">
                <Link href={(autoOrCommercial == 'auto' ? 'tel:+61732673694' : '') || (autoOrCommercial == 'commercial' ? 'tel:+61732670575' : '')}>
                  <a className="bg-green-500 px-4 py-1 flex items-center justify-center rounded-3xl gap-3">
                    <PhoneIcon className="h-5 aspect-square" />
                    {/* <p className="pb-1">{(autoOrCommercial == 'auto' ? '+61 7 3267 3694' : '') || (autoOrCommercial == 'commercial' ? '+61 7 3267 0575' : '')}</p> */}
                    <p>Call an expert today</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-row items-center pt-3">
              <nav className="flex flex-row justify-center items-center grow">
                <Link href='/'>
                  <a className="h-[52px] w-[262px] relative">
                    <Image src='/assets/images/willship-logo.png' layout='fill' objectFit="contain" alt='Willship Logo' />
                  </a>
                </Link>
                <div className="flex flex-row grow justify-around">
                  {links.map((link, i) => (
                    <Link key={i} href={link.link}>
                      <a className={`px-4 pb-1 text-xl ${selected === link.link && 'font-bold border-b border-white'}`}>{link.text}</a>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          {children && children}
        </header>
      )
  );
};

export default HomeHeader;