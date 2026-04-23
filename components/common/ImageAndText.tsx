import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";
import Button from "./Button";
import siteMap from "../../siteMap";

interface Props {
  imageSide: 'left' | 'right';
  theme ?: 'dark' | 'light';
  imageSrc: string;
  imageAlt: string;
  heading ?: string;
  hasSubHeading: boolean;
  hasRequestQuote: boolean;
  requestQuoteLink: string;
  requestQuoteText: string;
  requestQuoteWidth?: string;
  subHeading ?: string; 
  precedingParagraphs ?: string[];
  trailingParagraphs ?: string[];
  textAlign ?: string;
  listItems ?: string[];
  iconList ?: {
    textColour ?: string;
    items ?: {
      text: string;
      image: string;
    }[]
  }
  children ?: React.ReactNode;
  secondList ?: {
    text: string;
    items: string[];
  }
  listType ?: "list-disc" | "list-decimal" | "list-none";
  hasMinHeight ?: boolean;
  coverContain ?: 'cover' | 'contain';
  quality ?: number;
  contentMaxWidth ?: string;
  dataPaperformId ?: string;
  dataPaperformPopup ?: boolean;
  customButtonText ?: string;
  customButtonLink ?: string;
  customButtonTheme ?: "redBlue" | "whiteBlue" | "blueRed" | "mint";
  hideGetStartedButton ?: boolean;
  customRequestQuoteText ?: string;
  customRequestQuoteLink ?: string;
  customRequestQuotePaperformId ?: string;
  customRequestQuotePaperformPopup ?: boolean;
};

const ImageAndText = ({
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
  contentMaxWidth = 'max-w-lg',
  dataPaperformId,
  dataPaperformPopup,
  customButtonText,
  customButtonLink,
  customButtonTheme,
  hideGetStartedButton,
  customRequestQuoteText,
  customRequestQuoteLink,
  customRequestQuotePaperformId,
  customRequestQuotePaperformPopup,
} : Props) => {

  const isDarkTheme = theme === 'dark';

  const isSmall = useIsSmall();

  const router = useRouter();
  const { pathname } = router;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Check if the current URL matches the desired path or contains the desired path as a prefix
    const showOnPages =
    pathname === siteMap.chinaToAustralia.path || pathname.startsWith(siteMap.chinaToAustralia.path) ||
    pathname === siteMap.home.path

    // Update the showButton state based on whether it's the contact page or not
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
    ? `text-white text-2xl sm:text-3xl lg:text-forty font-medium leading-none ${textAlign ? textAlign : 'text-center lg:text-left'}`
    : `text-darkBlue text-2xl sm:text-3xl lg:text-forty font-medium leading-none ${textAlign ? textAlign : 'text-center lg:text-left'}`;

  const sectionStyle = `w-full ${hasMinHeight && 'min-h-600'} flex flex-col ${imageSide === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`

  return (
    <div className={sectionStyle}>
      {isSmall
        ? (
          <div className={`w-full h-52 sm:h-72 md:h-96 relative ${bgStyle}`}>
            <Image src={imageSrc} layout='fill' objectFit={coverContain ? coverContain : 'cover'} alt={imageAlt} quality={quality ? quality : 75} />
          </div>
        ) : (
          <div className={`w-1/2 relative ${bgStyle}`}>
            <Image src={imageSrc} layout='fill' objectFit={coverContain ? coverContain : 'cover'} alt={imageAlt} quality={quality ? quality : 75} />
          </div>
        )
      }
      <div className={`w-full lg:w-1/2 flex flex-col items-center p-4 lg:p-0 ${bgStyle} ${imageSide === 'left' ? 'lg:items-start': 'lg:items-end'}`}>
        <div className={`w-full lg:${contentMaxWidth} p-4 lg:p-12 flex flex-col gap-4 lg:gap-6 text-xl ${textAlign ? textAlign : ''} leading-relaxed ${textColour}`}>
          <h2 className={headingStyle}>{heading}</h2>  
          {hasSubHeading &&
            <h3 className={`font-extrabold ${theme === 'dark' ? 'text-white' : 'text-darkGrey'}`}>{subHeading}</h3>
          }
          {precedingParagraphs && precedingParagraphs.map((item, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
          {listItems && 
            <ul className={`${listType} pl-6`}>
              {listItems.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          }
          {iconList && iconList.items &&
            <div className="grid grid-cols-2 text-center justify-center gap-6 py-4"> 
              {iconList.items.map((item, j) => (
                <div key={j} className="">
                  <Image height={58} width={58} objectFit='contain' src={item.image} alt='icon' />
                  <p className={`${iconList.textColour} text-base font-medium leading-tight`}>{item.text}</p>
                </div>
              ))}
            </div>
          }
          {trailingParagraphs && trailingParagraphs.map((item, k) => (
            <p key={k} dangerouslySetInnerHTML={{ __html: item }} />
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
          <div className="flex md:flex-row lg:flex-row flex-col justify-between gap-3">
          {hasRequestQuote && 
            <Button
              buttonText={customRequestQuoteText || requestQuoteText}
              linkTo={customRequestQuoteLink || requestQuoteLink}
              width={requestQuoteWidth}
              theme="redBlue"
              dataPaperformId={customRequestQuotePaperformId || ( dataPaperformId ? dataPaperformId : '')}
              dataPaperformPopup={customRequestQuotePaperformPopup !== undefined ? customRequestQuotePaperformPopup : (dataPaperformPopup ? dataPaperformPopup : false)}
            />
          }
          
          {showButton && !hideGetStartedButton && (
            <Button
              buttonText={customButtonText || "Chat to Us"}
              linkTo={customButtonLink || siteMap.chinaToAustralia.chatToUs.path}
              dataPaperformId={customButtonLink ? "mlc28uxr" : ""}
              dataPaperformPopup={customButtonLink ? true : false}
              theme={customButtonTheme || (isDarkTheme ? "whiteBlue" : "blueRed")}
            />
          )}
          </div>
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

export default ImageAndText;