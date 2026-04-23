import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";
import AutoHeader from "./AutoHeader";
import CommercialHeader from "./CommercialHeader";
import HomeHeader from "./HomeHeader";
import SmallHeader from "./SmallHeader";
import SmallHeaderCrates from "./SmallHeaderCrates";

const Header = () => {
  const [height, setHeight] = useState(0);
  const isSmall = useIsSmall();
  const router = useRouter();

  useEffect(() => {
    const getHeight = () => {
      const header = document.getElementById('header');
      if (header) {
        setHeight(header.getBoundingClientRect().height);
      }
    };

    const timer = window.setInterval(() => {
      getHeight();
    }, 500);

    getHeight();

    return () => window.clearInterval(timer);
  }, []);

  const cleanPath = router.asPath.split('?')[0];
  const splitPath = cleanPath.split('/').filter((item) => item !== '');

  const autoRoutes = [
    'import-vehicle',
    'instantquote',
    'useful-information',
    'what-we-ship',
    'moving-to-new-zealand-from-australia',
    'gallery',
    'roro-shipping-schedule',
    'roll-on-roll-off-shipping-how-its-done',
    'best-way-to-ship-multiple-cars-overseas',
    'parameters-of-sea-containers',
    'how-much-space-is-in-a-container',
    'how-to-prepare-a-car-for-shipping',
    'roll-on-roll-off-vs-container-shipping-which-is-right-for-you',
    'thank-you'
  ];

  const commercialRoutes = [
    'freight-forwarder',
    'shipping-from-australia-to-the-pacific-islands',
    'shipping-between-china-and-australia',
    'shipping-between-india-and-australia',
    'shipping-between-vietnam-and-australia',
    'freight-privacy-policy',
    'freight-trading-terms-and-conditions',
    'about-us',
    'contact-us',
    'blog'
  ];

  const cratesRoutes = [
    'crates'
  ];

  const SelectHeader = () => {
    if (cleanPath === '/import-vehicle/import-caravan-to-australia') {
      return <CommercialHeader />;
    }
    if (splitPath.length === 0) {
      return <HomeHeader />;
    } else if (autoRoutes.includes(splitPath[0])) {
      return <AutoHeader />;
    } else if (commercialRoutes.includes(splitPath[0])) {
      return <CommercialHeader />;
    } else {
      return <HomeHeader autoOrCommercial={cratesRoutes.includes(splitPath[0]) ? 'auto' : 'commercial'} />;
    }
  };

  return (
    <>
      {isSmall ? <SmallHeader preSelected="Automotive" /> : <SelectHeader />}
      <div style={{ height }} />
    </>
  );
};

export default Header;
