import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), {ssr: false});
import '../../node_modules/react-modal-video/css/modal-video.css';
import SectionSection from "../common/SectionSection";

const ChinaVideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <SectionSection>
      {showVideo &&
        <ModalVideo 
          //@ts-ignore
          channel='youtube' 
          loop={1} 
          isOpen={showVideo} 
          onClose={() => setShowVideo(false)} videoId='7rt_4SrnBiI' 
        />
      }

      <div className="text-darkGrey w-full text-center text-2xl flex flex-col gap-4 items-center">
        <p>Do you want to import less than 12m3 of cargo? Watch our video below to learn more about our China to Australia instant LCL quote calculator!</p>
        <p>(there are also a lot of great tips if you&apos;re a first time importer!)</p>
        <div 
          className="w-full sm:w-2/3 lg:w-1/2"
          onClick={() => setShowVideo(true)}
        >
          <div className="relative w-full aspect-video flex justify-center items-center">
            <div className="absolute top-0 left-0 w-full aspect-video">
              <Image src='/assets/images/china-aus-video-bg.webp' layout="fill" objectFit="cover" alt="video link" />
            </div>
            <div className="absolute w-10 h-10">
              <Image src='/assets/images/icons/custom-play-button.png' layout="fill" objectFit="contain" alt='play button' />
            </div>
          </div>
        </div>
      </div>
    </SectionSection>
  );
};

export default ChinaVideoSection;