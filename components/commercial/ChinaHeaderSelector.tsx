import Image from "next/image";
import { useContext, useRef } from "react";
import ModalContext from "../../context/ModalContext";
import siteMap from "../../siteMap";
import Button from "../common/Button";
import styles from "yet-another-react-lightbox/styles.css";
import { useFacebookPixel } from "../../utils/hooks/useFacebookPixel";

const ChinaHeaderSelector = () => {

  const ref = useRef(null);

  const {
    showChinaFCLQuote,
    showInstantFCLQuote,
    showChinaAustraliaQuote,
    showChinaAirFreightQuote,
    showProductSampleQuote,
    showPopupJourney
  } = useContext(ModalContext);

  const styles = {
    section: "p-12 w-full relative flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-center text-white text-center false",
    section2: "py-12 w-full -mt-40 relative flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-center text-white text-center false",
    wrapper: "w-full max-w-8xl flex lg:flex-row flex-col flex-wrap 2xl:flex-nowrap gap-8 2xl:gap-20 justify-center px-4 sm:px-0",
    container: "w-full sm:w-1/3 2xl:w-1/6 flex flex-col items-center gap-2 pb-14 relative hover:cursor-pointer",
    image: "w-32 aspect-square relative rounded-full border-black border overflow-hidden",
    textWrapper: "w-full flex flex-col items-center justify-center text-white text-xl font-medium text-center",
    secondRow: "text-base font-normal",
    buttonWrapper: "absolute bottom-0 w-full max-w-xs",
  };

  const firstRowItems = [
    {
      title: 'LCL',
      subtitle: 'Less than a Container Load',
      cbm: '(1-12 cbm/m3)',
      image: '/assets/images/china-to-australia/lcl.jpg',
      link: siteMap.chinaToAustralia.personalOrBusiness.path,
      context: 'LCL',
      modalType: 'freight',
    },
    {
      title: '20ft FCL',
      subtitle: '20 FT Full Container',
      cbm: '(13-28 cbm/m3)',
      image: '/assets/images/china-to-australia/20ft-fcl.jpg',
      link: siteMap.chinaToAustralia.personalOrBusiness.path,
      context: 'FCL',
      modalType: 'freight',
    },
    {
      title: '40ft FCL',
      subtitle: '40 FT Full Container',
      cbm: '(29 cbm/m3 or more)',
      image: '/assets/images/china-to-australia/40ft-fcl.jpg',
      link: siteMap.chinaToAustralia.personalOrBusiness.path,
      context: 'FCL',
      modalType: 'freight',
    }
  ];

  const secondRowItems = [
    {
      title: 'Air Freight',
      image: '/assets/images/air-freight.png',
      link: 'paperform',
      modalType: '',
      dataPaperformId: 'mlc28uxr',
      dataPaperformPopup: true,
    },
    {
      title: 'Product Sample',
      image: '/assets/images/product-sample.png',
      link: 'paperform',
      modalType: '',
      dataPaperformId: 'mlc28uxr',
      dataPaperformPopup: true,
    },
    {
      title: 'Small Packages',
      image: '/assets/images/small-packages.png',
      link: 'paperform',
      context: 'Small Packages & Parcels',
      modalType: '',
      dataPaperformId: 'mlc28uxr',
      dataPaperformPopup: true,
    },
    {
      title: 'Customs Clearance',
      image: '/assets/images/customs-clearance.png',
      link: siteMap.chinaToAustralia.customsClearanceForm.journey.path,
      modalType: '',
    }
  ];

  return (
    <>
      <section className={styles.section2}>
        <div className={'w-full max-w-8xl flex lg:flex-row flex-col flex-wrap 2xl:flex-nowrap gap-0 lg:gap-8 2xl:gap-20 justify-center px-4 sm:px-0'}>
          {firstRowItems.map(item => (
            <div key={item.title} className="rounded-3xl shadow-2xl lg:w-1/4 second-row-item flex flex-col items-center gap-3 relative scale-[0.8] lg:scale-100">
              <div 
                className="ribbon absolute -top-3 -left-3 bg-darkBlue z-10 p-3 px-8 uppercase text-xl font-bold rounded-tl-3xl cursor-pointer"
              >
                Instant Quote!
              </div>
              <span className="bg-gradient-to-tl from-red to-rose-900 w-3 h-6 absolute top-10 -left-3 z-20 rounded-bl-3xl rounded-tl-3xl"></span>
              <span className="bg-darkBlue w-5 h-11 absolute top-5 -left-3 -z-10 rounded-bl-3xl"></span>
              <div className="w-full aspect-video relative rounded-t-3xl overflow-hidden"
              >
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                />
                <h3 className="absolute z-10 text-center bottom-5 w-full font-black text-white text-6xl">{item.title}</h3>
                <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 overflow-hidden"></span>
              </div>
              <div className="w-full first-letter:p-4 flex flex-col gap-2 p-6 pt-0">
                <h3 className="font-bold text-darkBlue text-xl uppercase">{item.subtitle}</h3>
                <h4 className="font-medium text-darkBlue text-xl">{item.cbm}</h4>
                <Button
                  linkTo={'paperform'}
                  dataPaperformId={'mlc28uxr'}
                  dataPaperformPopup={true}
                  buttonText="Get Started"
                  theme="redBlue"
                  context={item.context}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section + ' pt-4'}>
        <div className={styles.wrapper}>

          {secondRowItems.map(item => (
            <div key={item.title} className={`lg:w-1/6 second-row-item flex flex-col items-center gap-3`} 
            >


              <h3 className="font-medium text-darkBlue text-2xl">{item.title}</h3>

              <div className={styles.image + ' border-0'}>
                <Image
                  src={item.image}
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                />
              </div>

              <Button
                linkTo={item.link}
                buttonText="Get Started"
                theme="redBlue"
                context={item.context}
                dataPaperformId={item.dataPaperformId}
                dataPaperformPopup={item.dataPaperformPopup}
              />
            </div>
          ))}

        </div>
      </section>
    </>
  );
};

export default ChinaHeaderSelector;
