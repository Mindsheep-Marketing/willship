import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import LearnMoreButtonNz from "../../components/common/LearnMoreButtonNz";


// @ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import '../../node_modules/react-modal-video/css/modal-video.css';


const LearnMore = () => {
  const [showVideo, setShowVideo] = useState(false);


  return (
    <section className="w-full bg-white px-4 py-12">
      {showVideo &&
        <ModalVideo
          // @ts-ignore
          channel='youtube'
          autoplay
          loop={1}
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoId='UrGU8YztcdU'
        />
      }


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl text-center font-semibold text-darkBlue mb-4 leading-snug">
            First time shipping a vehicle from Australia to New Zealand?
          </h2>
          <p className="text-lg text-center text-darkBlue mb-6">
            Shipping a car from Australia to New Zealand might seem daunting, but with Willship by your side, it&apos;s a smooth and stress-free ride. Our step-by-step guide will walk you through the entire process-from compliance checks to customs clearance. Watch our video for a visual breakdown of everything you need to do before shipping your car!
          </p>
          <div className="text-center">
            <div className="inline-block">
              <LearnMoreButtonNz
                className="px-12 py-2"
                buttonText="Watch Now"
                onClick={() => setShowVideo(true)}
                theme="redBlue"
              />
            </div>
          </div>
        </div>


        {/* Video Section */}
        <div
          className="relative w-full aspect-video max-w-xl mx-auto cursor-pointer shadow-lg rounded-lg overflow-hidden"
          onClick={() => setShowVideo(true)}
        >
          <Image
            src="/assets/images/maxresdefault.jpg"
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


export default LearnMore;


