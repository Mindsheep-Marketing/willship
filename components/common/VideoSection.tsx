import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), {ssr: false});
import '../../node_modules/react-modal-video/css/modal-video.css';

interface Props {
  videoId: string;
  bgImage: string;
}

const VideoSection = ({videoId, bgImage} : Props) => {
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className="relative w-full h-96 lg:h-auto lg:w-1/2 flex justify-center items-center">

      {showVideo && 
        <ModalVideo
          //@ts-ignore
          channel='youtube'
          loop={1}
          isOpen={showVideo}
          onClose={() => setShowVideo(false)} 
          videoId={videoId}
        />
      }

      <Image src={bgImage} alt='Willship International' layout='fill' objectFit='cover' />
      <div
        className="absolute h-16 w-16 cursor-pointer"
        onClick={() => setShowVideo(true)}
      >
        <Image src='/assets/images/icons/custom-play-button.png' layout='fill' alt='play button' />
      </div>
    </div>
  );
};

export default VideoSection;