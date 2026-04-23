import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import Button from "../common/Button";

// @ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import '../../node_modules/react-modal-video/css/modal-video.css';

interface Props {
  heading: string;
  paragraphs: string[];
  buttonText?: string;
  buttonLink: string;
  youtubeId: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
}

const VideoSection = ({
  heading,
  paragraphs,
  buttonText = "Watch Now",
  buttonLink,
  youtubeId,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
}: Props) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full px-3 py-12 bg-cover bg-center bg-darkBlue">
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
          videoId={youtubeId}
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left order-2 md:order-1">
          <div className="py-3 mb-4">
            <h2 className="text-3xl md:text-3xl text-center text-white font-semibold leading-snug">
              {heading}
            </h2>
          </div>

          {paragraphs.map((para, i) => (
            <p key={i} className="text-lg text-center text-white mb-6 px-4">
              {para}
            </p>
          ))}

          <div className="text-center px-4">
            <Button
              buttonText={buttonText}
              linkTo={buttonLink}
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
            src={thumbnailSrc}
            layout="fill"
            objectFit="cover"
            alt={thumbnailAlt}
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

export default VideoSection;