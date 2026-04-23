//this is a copy of ImageAndText with html parser included.

import Image from "next/image";
import parse from 'html-react-parser';
import useIsSmall from "../../../utils/hooks/useIsSmall";
import Button from "../Button";

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
  subHeading ?: string; 
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
  coverContain ?: 'cover' | 'contain';
  quality ?: number;
};

const BlogImageAndText = ({
  imageSide,
  theme,
  imageSrc,
  imageAlt,
  heading,
  hasRequestQuote,
  requestQuoteLink,
  requestQuoteText,
  hasSubHeading,
  subHeading,
  precedingParagraphs,
  trailingParagraphs,
  listItems,
  children,
  secondList, 
  listType,
  hasMinHeight,
  coverContain,
  quality
} : Props) => {

  const isSmall = useIsSmall();

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
        <div className={`w-full lg:max-w-lg p-4 lg:p-12 flex flex-col gap-4 lg:gap-6 text-xl leading-relaxed ${textColour}`}>
          <h2 className={headingStyle}>{heading}</h2>  
          {hasSubHeading &&
            <h3 className={`font-extrabold ${theme === 'dark' ? 'text-white' : 'text-darkGrey'}`}>{subHeading}</h3>
          }
          {precedingParagraphs && precedingParagraphs.map((item, i) => (
            <p key={i}>
              {parse(item)}
            </p>
          ))}
          {listItems && 
            <ul className={`${listType} pl-6`}>
              {listItems.map((item, j) => (
                <li key={j}>{parse(item)}</li>
              ))}
            </ul>
          }
          {trailingParagraphs && trailingParagraphs.map((item, k) => (
            <p key={k}>
              {parse(item)}
            </p>
          ))}
          {secondList && 
            <>
              <p>{parse(secondList.text)}</p>
              {secondList.items && secondList.items.length > 0 &&
                <ul className={`${listType} pl-6`}>
                  {secondList.items.map((secondItem, j) => (
                    <li key={j}>
                      {parse(secondItem)}
                    </li>
                  ))}
                </ul>
              }
            </>
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


export default BlogImageAndText;