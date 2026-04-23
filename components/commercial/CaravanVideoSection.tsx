import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

//@ts-ignore
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });
import '../../node_modules/react-modal-video/css/modal-video.css';


interface Props {
    videoSide: 'left' | 'right';
    theme?: 'dark' | 'light';
    bgImage: string;
    imageAlt: string;
    heading?: string;
    subHeading?: string;
    precedingParagraphs?: string[];
    customStyles?: {
        container?: string;
        textContainer?: string;
        textContainerStyle?: React.CSSProperties;
        imageContainer?: string;
        slant?: string;
    };
    hasMinHeight?: boolean;
    videoId?: string;
    videoButton?: boolean;
    contentMaxWidth?: string;
    hasSubHeading: boolean;
};

const CaravanVideoSection = ({
    videoSide,
    theme,
    bgImage,
    imageAlt,
    heading,
    subHeading,
    precedingParagraphs,
    hasMinHeight,
    videoId,
    contentMaxWidth = 'max-w-4xl',
    hasSubHeading,
    customStyles = {},
    videoButton
}: Props) => {

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
        ? 'text-white text-2xl lg:text-3xl font-medium leading-snug text-center max-w-[500px] mx-auto'
        : 'text-darkBlue text-2xl lg:text-3xl font-medium leading-snug text-center max-w-[500px] mx-auto';

    const sectionStyle = `w-full ${hasMinHeight && 'min-h-600'} flex flex-col ${videoSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`

    return (
        <div className={sectionStyle + ' bg-darkBlue'}>
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

            <div className="relative w-full h-[35rem] w-full lg:h-auto lg:w-1/2 flex justify-center items-center">
                <Image src={bgImage} alt={imageAlt} layout='fill' width='480' height='320' objectFit='cover' />
                {/* <div
                    className="absolute h-16 w-16 cursor-pointer"
                    onClick={() => setShowVideo(true)}
                >
                    <Image src='/assets/images/icons/custom-play-button.png' layout='fill' alt='play button' />
                </div> */}
            </div>

            <div
                className={`w-full lg:w-1/2 flex flex-col lg:p-15 ${bgStyle} items-center text-center ${customStyles?.textContainer || ""}`}
            >
                <div
                    className={`w-full ${contentMaxWidth} p-[4.75rem] lg:pt-12 pb-12 flex flex-col gap-4 lg:gap-6 text-xl text-center leading-relaxed ${textColour}`}
                >
                    <h2 className={`${headingStyle} mb-6`}>{heading}</h2>
                    {hasSubHeading && (
                        <h3 className={`font-extrabold ${theme === "dark" ? "text-white" : "text-darkGrey"}`}>
                            {subHeading}
                        </h3>
                    )}
                    {precedingParagraphs &&
                        precedingParagraphs.map((item, i) => (
                            <p
                                key={i}
                                className="text-left"
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        ))}
                    <div className="flex justify-center">
                        {videoButton &&
                            <button className="w-full bg-red lg:w-2/5 font-medium cursor-pointer text-xl py-3" onClick={() => setShowVideo(true)}>Watch Video</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaravanVideoSection;