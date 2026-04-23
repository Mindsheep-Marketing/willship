import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "./Button";
import Flags from "./Flags";
import MouseScroll from "./MouseScroll";

interface ButtonData {
  name: string;
  link: string;
}

interface Props {
  heading: string;
  heading2?: string;
  subHeading?: any;
  children?: React.ReactNode;
  flags?: string[];
  paddingTop?: "pt-0" | "pt-10" | "pt-20" | "pt-30" | "pt-40";
  paddingBottom?: "pb-0" | "pb-10" | "pb-20" | "pb-30" | "pb-40";
  flagsAreLinks?: boolean;
  bgImage: string;
  hasButton: boolean;
  buttonLink?: string;
  buttonText?: string;
  additionalButtons?: ButtonData[];
  hasMouseScroll: boolean;
  hasImageOpacity?: true;
  isFullHeight?: boolean;
  hasMinHeight?: boolean;
  hasBlur?: boolean;
  dataPaperformId?: string;
}

const Hero = ({
  heading,
  heading2,
  hasButton,
  bgImage,
  subHeading,
  children,
  flags,
  flagsAreLinks = false,
  buttonLink,
  buttonText,
  additionalButtons,
  hasMouseScroll,
  hasImageOpacity,
  isFullHeight,
  hasMinHeight,
  hasBlur,
  paddingTop,
  paddingBottom,
  dataPaperformId,
}: Props) => {
  return (
    <section
      className={`
    w-full relative flex flex-col gap-4 sm:gap-8 items-center justify-center sm:justify-center text-white text-center 
    ${
      paddingTop || paddingBottom
        ? `${paddingTop} ${paddingBottom}`
        : !isFullHeight && "py-12 sm:py-12"
    }
  `}
      style={{
        minHeight: isFullHeight
          ? `calc(100vh - 198px)`
          : hasMinHeight
          ? "590px"
          : "auto",
      }}
    >
      <div className="w-full max-w-6xl flex flex-col items-center p-4 lg:p-0 gap-4 sm:gap-8">
        <h1 className="font-sackHeavy text-3xl lg:text-5xl sm:pb-4">
          {heading}
          {heading2 && <br />}
          {heading2 && heading2}
        </h1>
        {subHeading && (
          <h2 className="text-base lg:text-22 font-medium pb-4">
            {subHeading}
          </h2>
        )}
        {flags && (
          <div className="w-full">
            <Flags countries={flags} areLinks={flagsAreLinks} />
          </div>
        )}
      </div>
      {children}
      <div
        className={
          additionalButtons
            ? "w-full max-w-5xl flex flex-col sm:flex-row px-4 justify-center gap-4"
            : hasButton
            ? "w-full max-w-5xl flex flex-col sm:flex-row px-4 justify-center gap-4"
            : "hidden"
        }
      >
        {hasButton && (
          <div className="w-full sm:w-72 z-10">
            <Button
              theme="redBlue"
              linkTo={
                buttonLink ? buttonLink : siteMap.vehicle.vehicleQuote.path
              }
              buttonText={buttonText ? buttonText : "Get Instant Quote"}
              dataPaperformId={dataPaperformId}
            />
          </div>
        )}
        {additionalButtons &&
          additionalButtons.map((button, index) => (
            <div key={index} className="w-full sm:w-72 z-10">
              <Button
                theme="redBlue"
                linkTo={button.link}
                buttonText={button.name}
              />
            </div>
          ))}
      </div>
      {hasMouseScroll && <MouseScroll />}

      <div
        className={`absolute w-full h-full top-0 left-0 -z-10 ${
          hasBlur && "blur-sm"
        }`}
      >
        <Image
          layout="fill"
          objectFit="cover"
          alt="Hero Background Image"
          src={bgImage}
        />
        {hasImageOpacity && (
          <div className="absolute h-full w-full bg-darkBlue/70" />
        )}
      </div>
    </section>
  );
};

export default Hero;
