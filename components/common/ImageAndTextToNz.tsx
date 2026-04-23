import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";
import ButtonNz from "./ButtonNz";
import siteMap from "../../siteMap";


interface Props {
  imageSide: 'left' | 'right';
  theme?: 'dark' | 'light';
  customStyles?: {
    container?: string;
    textContainer?: string;
    textContainerStyle?: React.CSSProperties;
    imageContainer?: string;
    slant?: string;
  };
  imageSrc: string;
  imageAlt: string;
  heading?: string;
  hasSubHeading: boolean;
  hasRequestQuote: boolean;
  requestQuoteLink: string;
  requestQuoteText: string;
  requestQuoteWidth?: string;
  subHeading?: string;
  precedingParagraphs?: string[];
  trailingParagraphs?: string[];
  textAlign?: string;
  listItems?: string[];
  iconList?: {
    textColour?: string;
    items?: {
      text: string;
      image: string;
    }[]
  }
  children?: React.ReactNode;
  secondList?: {
    text: string;
    items: string[];
  }
  listType?: "list-disc" | "list-decimal" | "list-none";
  hasMinHeight?: boolean;
  coverContain?: 'cover' | 'contain';
  quality?: number;
  contentMaxWidth?: string;
};


const ImageAndTextToNz = ({
  imageSide,
  theme,
  imageSrc,
  imageAlt,
  heading,
  hasRequestQuote,
  requestQuoteLink,
  requestQuoteText,
  requestQuoteWidth = 'w-full',
  hasSubHeading,
  subHeading,
  precedingParagraphs,
  trailingParagraphs,
  textAlign,
  listItems,
  iconList,
  children,
  secondList,
  listType,
  hasMinHeight,
  coverContain,
  quality,
  customStyles = {},
  contentMaxWidth = 'max-w-4xl'
}: Props) => {


  const isDarkTheme = theme === 'dark';


  const isSmall = useIsSmall();


  const router = useRouter();
  const { pathname } = router;
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const showOnPages =
      pathname === siteMap.chinaToAustralia.path || pathname.startsWith(siteMap.chinaToAustralia.path) ||
      pathname === siteMap.home.path;


    setShowButton(showOnPages);
  }, [pathname]);


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
    ? `text-white text-2xl sm:text-3xl lg:text-forty font-medium leading-none ${textAlign ? textAlign : 'text-center'}`
    : `text-darkBlue text-2xl sm:text-3xl lg:text-forty font-medium leading-none ${textAlign ? textAlign : 'text-center'}`;


  const sectionStyle = `w-full ${hasMinHeight ? 'min-h-600' : ''} flex flex-col ${imageSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`;

  return (
    <div className={`${sectionStyle} relative`}>
      {isSmall ? (
        <div className={`w-full h-52 sm:h-72 md:h-96 relative ${bgStyle}`}>
          <Image
            src={imageSrc}
            layout="fill"
            objectFit={coverContain ? coverContain : "cover"}
            alt={imageAlt}
            quality={quality ? quality : 75}
          />
        </div>
      ) : (
        <div
          className={`w-1/2 h-auto relative ${bgStyle} ${customStyles?.imageContainer || ""}`}
        >
          <Image
            src={imageSrc}
            layout="fill"
            objectFit={coverContain ? coverContain : "cover"}
            alt={imageAlt}
            quality={quality ? quality : 75}
          />
          {customStyles?.slant && (
            <div className={`${customStyles.slant}`}></div>
          )}
        </div>
      )}
      <div
        className={`w-full lg:w-1/2 flex flex-col p-4 lg:p-20 ${bgStyle} items-center text-center ${customStyles?.textContainer || ""}`}
      >
        <div
          className={`w-full ${contentMaxWidth} p-4 lg:pt-12 pb-12 flex flex-col gap-4 lg:gap-6 text-xl text-center leading-relaxed ${textColour}`}
        >
          <h2 className={`${headingStyle} mb-5`}>{heading}</h2>
          {hasSubHeading && (
            <h3 className={`font-extrabold ${theme === "dark" ? "text-white" : "text-darkGrey"}`}>
              {subHeading}
            </h3>
          )}
          {precedingParagraphs &&
            precedingParagraphs.map((item, i) => (
              <p
                key={i}
                className="text-center"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          {listItems && (
            <ul className={`${listType} pl-8 text-center self-center`}>
              {listItems.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}
          {iconList && iconList.items && (
            <div className="grid grid-cols-2 text-center justify-center gap-6 py-4">
              {iconList.items.map((item, j) => (
                <div key={j} className="flex flex-col items-center">
                  <Image
                    height={58}
                    width={58}
                    objectFit="contain"
                    src={item.image}
                    alt="icon"
                  />
                  <p className={`${iconList.textColour} text-base font-medium leading-tight mt-2`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}
          {trailingParagraphs &&
            trailingParagraphs.map((item, k) => (
              <p key={k} className="text-center" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          {secondList && (
            <>
              <p className="text-center">{secondList.text}</p>
              {secondList.items && secondList.items.length > 0 && (
                <ul className={`${listType} pl-8 text-center self-center`}>
                  {secondList.items.map((secondItem, j) => (
                    <li key={j}>{secondItem}</li>
                  ))}
                </ul>
              )}
            </>
          )}
          <div className="flex md:flex-row lg:flex-row flex-col justify-center items-center gap-3 mx-auto px-4">
            {hasRequestQuote && (
              <ButtonNz
                buttonText={requestQuoteText}
                linkTo={requestQuoteLink}
                width={isSmall ? "w-full max-w-xs" : requestQuoteWidth}
                theme="redBlue"
              />
            )}
            {showButton && (
              <ButtonNz
                buttonText="Chat to Us"
                linkTo={siteMap.chinaToAustralia.chatToUs.path}
                width={isSmall ? "w-full max-w-xs" : "w-full max-w-xs"}
                theme={isDarkTheme ? "whiteBlue" : "blueRed"}
              />
            )}
          </div>
          {children && <div className="w-full">{children}</div>}
        </div>
      </div>
    </div>
  );
};


export default ImageAndTextToNz;