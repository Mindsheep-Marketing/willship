import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import LearnMoreButtonNz from "../../components/common/LearnMoreButtonNz";
import Button from "../../components/common/Button";
import siteMap from "../../siteMap";


// @ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import '../../node_modules/react-modal-video/css/modal-video.css';


const NzUpdateTax = () => {
  const [showVideo, setShowVideo] = useState(false);


  return (
    <section
      className="relative w-full px-3 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/car2.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {showVideo && (
        <ModalVideo
          // @ts-ignore
          channel="youtube"
          autoplay
          loop={1}
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoId="9WhnWTvcTDk"
          
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left order-2 md:order-1 ">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 mb-4">
            <h2 className="text-xl md:text-xl text-center text-white font-semibold leading-snug">
              Important Update ━ Clean Car Tax Now Reduced! (NZ)
            </h2>
          </div>

          <p className="text-lg text-center text-white mb-6 px-4">
            From 1 January 2026, the New Zealand Government has reduced the Clean Car Tax by around 80%.
            As a result, any Clean Car Tax amounts mentioned in the below video are no longer accurate.
            <br /><br />
            The import process remains the same ━ it&rsquo;s simply cheaper than shown here.
            <br />
            Contact us if you&rsquo;d like updated figures for your situation.
          </p>

          <div className="text-center px-4">
            <Button
              buttonText="Get Instant Quote"
              linkTo={siteMap.vehicle.vehicleQuote.path}
              theme="redBlue"
              className="!w-[70%] !font-bold px-4"
            />
          </div>
        </div>
        {/* Video Section */}
        <div
          className="relative w-full aspect-video max-w-xl mx-auto cursor-pointer shadow-lg rounded-lg overflow-hidden order-1 md:order-2"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src="/assets/images/nickproctor.jpg"
            layout="fill"
            objectFit="cover"
            alt="Australia To NZ video"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/assets/images/icons/custom-play-button.png"
              height={64}
              width={64}
              alt="Video Play Button"
            />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default NzUpdateTax;


