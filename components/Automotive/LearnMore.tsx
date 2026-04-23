import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), {ssr: false});
// import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/css/modal-video.css';

const LearnMore = () => {
  
  const [showVideo, setShowVideo] = useState (false);
  
  return (
    <section className="w-full flex flex-col items-center bg-white text-center px-4 py-12">
      {showVideo &&
        <ModalVideo 
          // @ts-ignore
          channel='youtube' 
          autoplay
          loop={1} 
          isOpen={showVideo} 
          onClose={() => setShowVideo(false)} videoId='cfAQTLhFeys' 
        />
      }
      <h2 className="text-forty text-darkBlue font-medium">Want To Learn More About The Process?</h2>
      <p className="text-xl">Watch Our Video Below</p>
      <div 
        className="relative w-full max-w-3xl aspect-video flex justify-center items-center shadow-lg"
        onClick={() => setShowVideo(true)}
      >
        <Image src='/assets/images/ausnzvideobg.webp' layout="fill" alt='Australia To NZ video' />
        <Image src='/assets/images/icons/custom-play-button.png' height={64} width={64} alt='Video Play Button' />
      </div>
    </section>
  );
};

export default LearnMore;