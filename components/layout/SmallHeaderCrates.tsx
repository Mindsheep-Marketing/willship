import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface NavData {
  service: 'COMMERCIAL FREIGHT' | 'AUTOMOTIVE' | 'CRATES'
}

const navData : NavData[] = [
  {
    service: 'COMMERCIAL FREIGHT'
  },
  {
    service: 'AUTOMOTIVE'
  },
  {
    service: 'CRATES'
  }
]

const SmallHeaderCrates = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState <'COMMERCIAL FREIGHT' | 'AUTOMOTIVE' | null> (null)

  const router = useRouter();

  const handleReRoute = (path : string) => {
    router.push(path);
    setShowMenu(false);
  };

  const handleServiceClick = (service : 'COMMERCIAL FREIGHT' | 'AUTOMOTIVE' | 'CRATES') => {
    if (service === 'CRATES') {
      handleReRoute('/crates');
      return;
    };
    setSelected(service);
  };


  return (
    <header id='header' className="flex flex-col w-full bg-darkBlue fixed z-50">
      <div className="flex flex-row items-center justify-between px-10 py-5 h-28">
        <Link href='/'>
          <a className="relative aspect-logo w-60">
            <Image src='/assets/images/willship-logo.png' layout="fill" objectFit='contain' alt='Willship International' />
          </a>
        </Link>
        <MenuIcon 
          className='w-8 h-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white' 
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {showMenu && 
        <div className={`w-full absolute top-28 flex flex-col items-center gap-2 bg-darkBlue py-4 text-white`}>
          {navData.map((service, i) => (
            <div 
              key={i} 
              className={`w-full max-w-sm px-4 text-xl cursor-pointer ${selected === service.service && 'font-medium'}`}
              onClick={() => handleServiceClick(service.service)}
            >
              {service.service}
            </div>
          ))}
          <div 
            className="w-full max-w-sm px-4 text-lg cursor-pointer"
            onClick={() => handleReRoute('/about-us') }
          >
            About Us
          </div>
          <div 
            className="w-full max-w-sm px-4 text-lg cursor-pointer"
            onClick={() => handleReRoute('/contact-us')}
          >
            Contact Us
          </div>
        </div>
      }
    </header>
  )

};

export default SmallHeaderCrates;

