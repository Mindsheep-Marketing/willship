import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import useIsSmall from "../../utils/hooks/useIsSmall";
import siteMap from "../../siteMap";

interface Props {
    imageSide: 'left' | 'right';
    theme?: 'dark' | 'light';
    imageSrc: string;
    imageAlt: string;
    heading?: string;
    hasSubHeading: boolean;
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
    dataPaperformId?: string;
    dataPaperformPopup?: boolean;
    customButtonText?: string;
    customButtonLink?: string;
    customButtonTheme?: "redBlue" | "whiteBlue" | "blueRed" | "mint";
    hideGetStartedButton?: boolean;
    customRequestQuoteText?: string;
    customRequestQuoteLink?: string;
    customRequestQuotePaperformId?: string;
    customRequestQuotePaperformPopup?: boolean;
};

const ImageAndText2 = ({
    imageSide,
    theme,
    imageSrc,
    imageAlt,
    heading,
    hasSubHeading,
    subHeading,
    textAlign,
    listItems,
    listType,
    hasMinHeight,
    coverContain,
    quality,
}: Props) => {

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
        ? `text-white text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.05em] ${textAlign ? textAlign : 'text-center'}`
        : `text-darkBlue text-2xl sm:text-3xl lg:text-4xl font-medium tracking-[-0.05em] ${textAlign ? textAlign : 'text-center'}`;

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
            <div className={`w-full lg:w-1/2 flex flex-col items-center py-5 ${bgStyle} ${imageSide === 'left' ? 'lg:items-start' : 'lg:items-end'}`}>
                <div className={`w-full p-4 flex flex-col gap-4 lg:gap-6 text-xl ${textAlign ? textAlign : ''} leading-relaxed ${textColour}`}>
                    <div className="flex flex-row items-center justify-center mb-4">
                        <Image
                            src="/assets/images/caravan/caravan-icons/cash-popup.png"
                            alt="GST Exemption"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <h2 className={headingStyle}>{heading}</h2>
                    </div>
                    {hasSubHeading &&
                        <h3 className={`text-center font-medium leading-none tracking-[-0.01em] text-2xl px-11 mb-6 ${theme === 'dark' ? 'text-white' : 'text-darkGrey'}`}>{subHeading}</h3>
                    }
                    {listItems && (
                        <ul className={`${listType} px-10 text-2xl space-y-6 text-center leading-none`}>
                            {listItems.map((item, j) => (
                                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );

};

export default ImageAndText2;