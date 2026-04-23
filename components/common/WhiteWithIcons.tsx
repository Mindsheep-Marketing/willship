import Image from "next/image";
import React from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";

interface Props {
  data: {
    heading?: string;
    precedingText?: string[];
    trailingText?: string[];
    items?: {
      image: string;
      width?: string;
      text?: string;
      textWidth?: string;
      subText?: string;
    }[]
  },
  width: string;
  children?: React.ReactNode;
  childrenMaxWidth?: string;
  bgColour?: string;
  headingColour?: string;
  textColour?: string;
  textSize?: string;
}

const WhiteWithIcons = ({
  data,
  width, 
  children, 
  childrenMaxWidth = 'max-w-5xl',
  bgColour = 'bg-white',
  headingColour = 'text-darkBlue',
  textColour = 'text-darkGrey',
  textSize = 'text-xl'

} : Props) => {

  const isSmall = useIsSmall();

  return (
    <section className={`w-full flex flex-col items-center px-4 py-10 lg:p-16 gap-4 ${bgColour} ${textColour}`}>
      {data.heading &&
      <h2 className={`font-medium max-w-5xl text-center text-3xl lg:text-[37px] ${headingColour} mb-12`}>{data.heading}</h2>
      }
      <div className="flex flex-row w-full max-w-6xl flex-wrap justify-center gap-8">
        {data.precedingText &&
          <div className="flex flex-col items-center text-center w-full text-base md:text-xl gap-4">
            {data.precedingText.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        }
        {data.items && data.items.map((item, i) => (
          <div key={i} className={`${isSmall ? 'w-1/3 sm:w-1/3' : width} flex flex-col items-center text-center ${textColour} gap-6`}>
            <Image height={item.width || 58} width={item.width || 58} objectFit='contain' src={item.image} alt='reasons icon' />
            <p className={`${textColour} ${textSize} ${item.textWidth} font-medium leading-tight`}>{item.text}</p>
            {item.subText && 
              <p className="text-sm">{item.subText}</p>
            }
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

export default WhiteWithIcons;