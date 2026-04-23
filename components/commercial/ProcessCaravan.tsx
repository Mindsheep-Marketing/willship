import Image from "next/image";
import React from "react";

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

const ProcessCaravan = ({
    data,
    children,
    childrenMaxWidth = 'max-w-5xl',
    bgColour = 'bg-white',
    headingColour = 'text-darkBlue',
    textColour = 'text-darkGrey'

}: Props) => {
    return (
        <section className={`willship-cc-process w-full flex flex-col items-center text-center pt-10 p-4 pb-10 lg:pb-16 lg:px-16 ${bgColour} ${textColour}`}>
            <h2 className={`max-w-5xl text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.05em] ${headingColour} mb-4 lg:mb-6`}>{data.heading}</h2>
            <h3 className="text-darkBlue text-base sm:text-lg md:text-xl tracking-[-0.05em] font-extrabold mb-8 sm:mb-10 lg:mb-12 max-w-[90%] sm:max-w-[80%] lg:max-w-[66%] mx-auto">{data.subHeading}</h3>

            <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-14">
                {data.precedingText &&
                    <div className="flex flex-col items-center text-center w-full text-sm sm:text-base md:text-lg lg:text-xl gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {data.precedingText.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                }
                {data.items && data.items.map((item, i) => (
                    <div key={i} className={`item relative w-full sm:w-[45%] lg:w-1/5 flex flex-row sm:flex-col items-center text-center ${textColour} gap-4 sm:gap-3 lg:gap-0`}>
                        <div className="relative shrink-0 sm:mb-2">
                            <Image height={item.width || 58} width={item.width || 58} objectFit='contain' src={item.image} alt={`${item.text} Icon`} />
                        </div>
                        <div>
                            <p className={`${textColour} text-base sm:text-lg lg:text-xl font-semibold lg:font-bold leading-tight mb-2 sm:mb-3 lg:mb-4`}>{item.text}</p>
                            {item.subText &&
                                <p className="text-grey text-sm sm:text-base lg:text-md">{item.subText}</p>
                            }
                        </div>
                    </div>
                ))}
                {data.trailingText &&
                    <div className="w-full max-w-5xl flex flex-col items-center text-center text-sm sm:text-base md:text-lg lg:text-xl gap-3 sm:gap-4 mt-4 sm:mt-6">
                        {data.trailingText.map((item, i) => (
                            <p key={i}>{item}</p>
                        ))}
                    </div>
                }
            </div>
            {children &&
                <div className={`w-full ${childrenMaxWidth} flex flex-col gap-2 items-center text-center text-base sm:text-lg lg:text-xl pt-10 lg:pt-12 text-darkGrey`}>
                    {children}
                </div>
            }
        </section>
    );

};

export default ProcessCaravan;