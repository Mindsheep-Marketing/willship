import Image from "next/image";
import React from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";

interface Props {
  data: {
    heading: string;
    subHeading?: string;
    precedingText?: string[];
    trailingText?: string[];
    items?: {
      image: string;
      width?: string;
      text?: string;
      subText?: string;
    }[]
  },
  children?: React.ReactNode;
  childrenMaxWidth?: string;
  bgColour?: string;
  textColour?: string;
  headingColour?: string;
}

const ProcessCustomsClearance = ({
  data,
  children, 
  childrenMaxWidth = 'max-w-5xl',
  bgColour = 'bg-white',
  headingColour = 'text-darkBlue',
  textColour = 'text-darkGrey'

} : Props) => {

  const isSmall = useIsSmall();

  return (
    <section className={`willship-cc-process w-full flex flex-col items-center text-center pt-10 p-4 pb-10 lg:pb-16 lg:px-16 ${bgColour} ${textColour}`}>
      <h2 className={`max-w-5xl text-3xl lg:text-forty font-medium ${headingColour} lg:mb-2`}>{data.heading}</h2>
      <h3 className="text-darkBlue text-xl lg:text-3xl font-medium mb-12">{data.subHeading}</h3>

      <div className="w-full max-w-7xl flex flex-row flex-wrap justify-center gap-14">
        {data.precedingText &&
          <div className="flex flex-col items-center text-center w-full text-base md:text-xl gap-4">
            {data.precedingText.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        }
        {data.items && data.items.map((item, i) => (
          <div key={i} className={`item relative lg:w-1/5 flex lg:flex-col lg:items-center text-center ${textColour} gap-4 lg:gap-0`}>
            <div className="relative lg:right-2 shrink-0">
              <Image height={item.width || 58} width={item.width || 58} objectFit='contain' src={item.image} alt={`${item.text} Icon`} />
            </div>
            <div>
              <p className={`${textColour} text-lg lg:text-xl font-bold leading-tight mb-4`}>{item.text}</p>
              {item.subText && 
                <p className="text-darkBlue text-lg">{item.subText}</p>
              }
            </div>
          </div>
        ))}
        {data.trailingText &&
          <div className="w-full max-w-5xl flex flex-col items-center text-center text-base md:text-xl gap-4">
            {data.trailingText.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        }
      </div>
      {children && 
        <div className={`w-full ${childrenMaxWidth} flex flex-col gap-2 items-center text-center text-xl pt-12 text-darkGrey`}>
          {children}
        </div>      
      }
    </section>
  );

};

export default ProcessCustomsClearance;