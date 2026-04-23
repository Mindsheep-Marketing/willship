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
      description?: string;
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

const   OrangeWithIcons = ({
  data,
  width,
  children,
  childrenMaxWidth = "max-w-5xl",
  bgColour = "bg-red",
  textColour = "text-white",
  textSize = "text-4xl",
}: Props) => {
  const isSmall = useIsSmall();

  return (
    <section
      className={`w-full flex flex-col items-center px-1 py-8 lg:px-2 lg:py-8 gap-5 ${bgColour} ${textColour}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.items &&
          data.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-3 w-full"
            >
              <div className="flex-shrink-0">
                <Image
                  height={Number(item.width) || 120}
                  width={Number(item.width) || 120}
                  objectFit="contain"
                  src={item.image}
                  alt="icon"
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className={`font-bold leading-tight text-center ${textSize} ${textColour}`}>
                  {item.text}
                </p>
                {item.subText && (
                  <p className="text-sm text-gray-300 text-center">{item.subText}</p>
                )}
                {item.description && (
                  <p className="text-md md:text-md text-center font-normal">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
      </div>

      {children && (
        <div
          className={`w-full ${childrenMaxWidth} flex flex-col gap-2 items-center text-center text-xl pt-12 text-darkGrey`}
        >
          {children}
        </div>
      )}
    </section>
  );
};

export default OrangeWithIcons;