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
      height?: string;
      text?: string;
      textWidth?: string;
      subText?: string;
      className?: string;
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

const WhiteBGIcons = ({
  data,
  width,
  children,
  childrenMaxWidth = 'max-w-5xl',
  bgColour = 'bg-white',
  headingColour = 'text-darkBlue',
  textColour = 'text-darkBlue',
  textSize = 'text-md'
} : Props) => {

  const isSmall = useIsSmall();

  return (
    <section className={`w-full flex flex-col items-center px-4 py-10 lg:p-16 gap-2 ${bgColour} ${textColour}`}>
      {data.heading &&
        <h2 className={`font-futura font-medium max-w-xl text-center text-3xl lg:text-forty ${headingColour} mb-4`}>{data.heading}</h2>
      }
      <div className="flex flex-col w-full max-w-8xl items-center gap-6">
        {data.precedingText &&
          <div className="flex flex-col items-center text-center w-full text-base lg:text-xl md:text-md gap-4">
            {data.precedingText.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        }

        {data.items &&
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {data.items.map((item, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${textColour} gap-0.2`}>
                <Image
                  height={item.height || 150}
                  width={item.width || 150}
                  objectFit="contain"
                  src={item.image}
                  alt="reasons icon"
                  className={item.className || ''}
                />
                <p className={`${textColour} text-xl font-bold leading-tight`}>{item.text}</p>
                {item.subText &&
                  <p className="text-sm">{item.subText}</p>
                }
              </div>
            ))}
          </div>
        }

        {data.trailingText &&
          <div className="w-full max-w-5xl flex flex-col items-center text-center text-base md:text-xl gap-2">
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

export default WhiteBGIcons;