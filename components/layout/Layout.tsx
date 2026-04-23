import { ReactNode } from "react";
import { useRouter } from 'next/router';
import Awards from "../common/Awards";
import TrackRecord from "../common/TrackRecord";
import Footer from "./Footer";
import Header from "./Header";
import HomeHeader from "./HomeHeader";

const Layout = ({children} : {children : ReactNode}) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <Header />
      <main>
        {children}
        {/* {currentRoute !== '/freight-forwarder/customs-clearance' && <TrackRecord />} */}
        {currentRoute !== '/freight-forwarder/customs-clearance'}

        {currentRoute !== '/import-vehicle/import-caravan-to-australia' && (
          <Awards />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;