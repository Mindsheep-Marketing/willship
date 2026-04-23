import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), {ssr: false});
import '../../node_modules/react-modal-video/css/modal-video.css';
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import siteMap from "../../siteMap";
import VideoSection from "../common/VideoSection";

const Concerns = () => {

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="flex flex-col lg:flex-row w-full relative">

      {showVideo &&
          <ModalVideo 
            //@ts-ignore
            channel='youtube' 
            loop={1} 
            autoplay={true}
            isOpen={showVideo} 
            onClose={() => setShowVideo(false)} videoId='e6C5NBCAV5c' 
          />
      }
      <VideoSection
        bgImage="/assets/images/concerns-bg.jpg"
        videoId="e6C5NBCAV5c"
      />
      <div className="w-full lg:w-1/2 bg-darkBlue text-white p-12">
        <div className="flex flex-col w-full lg:max-w-md items-start">
          <SectionHeading textColour='text-white' classes='pb-6 text-center lg:text-left w-full' text='With Willship, All Your Concerns Are Gone' />
          <ul className="list-disc text-xl leading-loose pl-4 pb-4">
            <li>will it arrive safely?</li>
            <li>what documentation do I need?</li>
            <li>will I need to pay tax?</li>
            <li>am I able to leave anything in the car?</li>
            <li>what happens at the destination?</li>
            <li>how long does it take?</li>
            <li>how much will it cost?</li>
          </ul>
          <p className="text-xl pb-4">Willship will make the process easy - we&apos;re here to handle it all and answer all your questions.</p>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <Button
              theme="redBlue"
              buttonText="Get Instant Quote"
              linkTo={siteMap.vehicle.vehicleQuote.path}
            />
            <Button
              theme="whiteBlue"
              buttonText="Contact Us"
              linkTo={siteMap.contact.path}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concerns;