import Head from "next/head";
import Image from "next/image";
import Hero from "../../components/common/Hero";
import MapSection from "../../components/common/MapSection";
import WarehouseContactForm from "../../components/forms/WarehouseContactForm";
import siteMap from "../../siteMap";

const WareHousingNew = () => {

  return (
    <>
      <Head>
        <title>{siteMap.commercial.wareHousingNew.title}</title>
        <meta name='description' content={siteMap.commercial.wareHousingNew.description} />
      </Head>
      <Hero
        heading='WAREHOUSING SPACE AVAILABLE - BRISBANE NORTHSIDE.'
        subHeading='Willship has a 2000sqm warehouse located on Nudgee Road in Northgate, just minutes away from the airport and major arterials. We currently have space for several hundred pallets, as well as floor space available for bulk stacked items.'
        bgImage='/assets/images/warehouse-banner-bg.jpg'
        hasButton={false}
        hasMouseScroll={false}
        hasMinHeight={true}
      />

      {/* <div className="w-full max-w-12xl pt-12 pb-0 flex flex-row justify-center flex-wrap gap-4">  */}
      <div className="w-full undefined flex flex-col sm:flex-row md:flex-row lg:flex-row pt-12 pb-0 gap-4 justify-center">

        <div className="w-full lg:max-w-lg p-4 flex flex-col gap-4 lg:gap-6 text-xl leading-relaxed">
          <h2 className='text-darkBlue text-2xl sm:text-3xl lg:text-forty font-medium leading-none text-left lg:text-left'>OUR FULL LIST OF SERVICES INCLUDE</h2>
          <ul className="list-disc pl-6">
            <li>Full International Freight Forwarding Service</li>
            <li>Customs Clearance</li>
            <li>Wharf Cartage of full container loads (FCL)</li>
            <li>FCL unpacks</li>
            <li>LCL unload and storage</li>
            <li>Pallet and Bulk Storage</li>
            <li>Picking / Packing and delivery</li>
          </ul>
        </div>

        <div className="w-full lg:max-w-lg p-4 flex flex-col gap-4 lg:gap-6">
          <Image src='/assets/images/warehouse-1.jpg' width="590px" height="473px" alt="Warehousing" />
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-8 px-2 pt-0 pb-12">
        <div className="flex flex-row flex-wrap w-full max-w-5xl gap-y-4 items-stretch">
          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 lg:max-w-lg p-2 flex flex-col gap-4 lg:gap-6">
            <Image src='/assets/images/warehouse-2.jpg' width="750px" height="502px" alt="Warehousing" />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 lg:max-w-lg p-2 flex flex-col gap-4 lg:gap-6">
            <Image src='/assets/images/warehouse-3.jpg' width="750px" height="502px" alt="Warehousing" />
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 lg:max-w-lg p-2 flex flex-col gap-4 lg:gap-6">
            <Image src='/assets/images/warehouse-4.jpg' width="750px" height="502px" alt="Warehousing" />
          </div>
        </div>
      </div>
      <section className="w-full relative flex flex-col px-6 gap-4 sm:gap-8 items-center justify-start sm:justify-center ">
        <div className={`absolute w-full h-full top-0 left-0 -z-10`}>
          <Image layout="fill" objectFit="cover" alt='Hero Background Image' src="/assets/images/warehouse-bg.jpg" />
        </div>
        <div className="w-full max-w-8xl flex flex-col lg:flex-row md:flex-row gap-8 justify-between items-center">
          <div className="w-1/2 md:w-1/2 lg:w-1/2 relative aspect-square">
            <Image src='/assets/images/logo.webp' layout="fill" objectFit="cover" alt='Willship Logo' />
          </div>
          <div className="w-full my-10 p-6 lg:w-1/2 md:w-1/2 z-10 bg-white">
            <h3 className="text-sm lg:text-xl font-bold pb-6 text-darkBlue">If you think we might be able to help with your freight requirements, then please get in touch by emailing us at <a className="underline" href='commercial@willship.com.au'>commercial@willship.com.au</a>, calling us on <a className="underline" href='tel:+61732670575'>07 3267 0575</a> or completing the form below</h3>
            <WarehouseContactForm />
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
};

export default WareHousingNew
