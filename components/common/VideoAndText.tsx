import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import dynamic from "next/dynamic";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), {ssr: false});
import '../../node_modules/react-modal-video/css/modal-video.css';


interface Props {
  videoSide: 'left' | 'right';
  theme ?: 'dark' | 'light';
  bgImage: string;
  imageAlt: string;
  heading ?: string;
  subHeading ?: string;
  hasRequestQuote: boolean;
  requestQuoteLink: string;
  requestQuoteText: string;
  precedingParagraphs ?: string[];
  trailingParagraphs ?: string[];
  listItems ?: string[];
  children ?: React.ReactNode;
  secondList ?: {
    text: string;
    items: string[];
  }
  listType ?: "list-disc" | "list-decimal" | "list-none";
  hasMinHeight ?: boolean;
  videoId: string;
  videoButton ?: boolean;
};

const VideoAndText = ({
  videoSide,
  theme,
  bgImage,
  imageAlt,
  heading,
  subHeading,
  hasRequestQuote,
  requestQuoteLink,
  requestQuoteText,
  precedingParagraphs,
  trailingParagraphs,
  listItems,
  children,
  secondList,
  listType,
  hasMinHeight, 
  videoId,
  videoButton
} : Props) => {

  const [showVideo, setShowVideo] = useState(false);

  const bgStyle = theme === 'dark' 
    ? 'bg-darkBlue' 
    : theme === 'light' 
      ? 'bg-nearlyWhite' 
      : 'bg-white';

  const textColour = theme === 'dark'
    ? 'text-white'
    : theme === 'light' 
      ? 'text-nearlyBlack'
      : 'text-black';

  const headingStyle = theme === 'dark'
    ? 'text-white text-2xl sm:text-3xl lg:text-forty font-medium leading-none text-center lg:text-left'
    : 'text-darkBlue text-2xl sm:text-3xl lg:text-forty font-medium leading-none text-center lg:text-left';

  const sectionStyle = `w-full ${hasMinHeight && 'min-h-600'} flex flex-col ${videoSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`

  return (
    <div className={sectionStyle + ' bg-darkBlue px-4 lg:px-16'}>
      {showVideo && 
        <ModalVideo
          //@ts-ignore
          channel='youtube'
          loop={1}
          autoplay={1}
          isOpen={showVideo}
          onClose={() => setShowVideo(false)} 
          videoId={videoId}
        />
      }

      <div className="relative w-full h-52 mt-8 lg:mt-0 w-full lg:h-auto lg:w-1/2 flex justify-center items-center">
        <Image src={bgImage} alt={imageAlt} layout='fill' width='480' height='320' objectFit='contain' />
        <div
          className="absolute h-16 w-16 cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <Image src='/assets/images/icons/custom-play-button.png' layout='fill' alt='play button' />
        </div>
      </div>
  
      <div className={`w-full lg:w-1/2 flex flex-col items-center p-8 lg:p-12 ${bgStyle} ${videoSide === 'left' ? 'lg:items-start': 'lg:items-end'}`}>
        <div className={`w-full lg:max-w-2xl flex flex-col gap-4 lg:gap-6 text-xl leading-relaxed ${textColour}`}>
          {heading && 
            <h2 className={headingStyle}>{heading}</h2>
          }
          {subHeading &&
            <h3 className={`font-extrabold ${theme === 'dark' ? 'text-white' : 'text-darkGrey'}`}>{subHeading}</h3>
          }
          {precedingParagraphs && precedingParagraphs.map((item, i) => (
            <p key={i}>
              {item}
            </p>
          ))}
          {listItems && 
            <ul className={`${listType} pl-6`}>
              {listItems.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          }
          {trailingParagraphs && trailingParagraphs.map((item, k) => (
            <p key={k}>
              {item}
            </p>
          ))}
          {secondList && 
            <>
              <p>{secondList.text}</p>
              {secondList.items && secondList.items.length > 0 &&
                <ul className={`${listType} pl-6`}>
                  {secondList.items.map((secondItem, j) => (
                    <li key={j}>
                      {secondItem}
                    </li>
                  ))}
                </ul>
              }
            </>
          }
          {videoButton &&
            <button className="w-full bg-red lg:w-2/3 font-medium cursor-pointer text-xl py-3" onClick={() => setShowVideo(true)}>Watch Now</button>
          }
          {hasRequestQuote && 
            <Button
              buttonText={requestQuoteText}
              linkTo={requestQuoteLink}
              width="w-full lg:w-2/3"
              theme="redBlue"
            />
          }
          {children && 
            <div className="w-full">
              {children}
            </div>
          }
        </div>  
      </div>
    </div>
  );
};

export default VideoAndText;