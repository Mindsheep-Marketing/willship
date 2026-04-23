import Image from "next/image";
import siteMap from "../../siteMap";
import ButtonBuilding from "../industry/ButtonBuilding";
import MouseScroll from "../common/MouseScroll";

interface ButtonData {
  name: string;
  link: string;
}

interface Props {
  heading: string | React.ReactNode;
  heading2?: string;
  subHeading?: string;
  children?: React.ReactNode;
  bgImage: string;
  hasButton: boolean;
  buttonLink?: string;
  buttonText?: string;
  additionalButtons?: ButtonData[];
  hasMouseScroll: boolean;
  hasImageOpacity?: boolean;
  isFullHeight?: boolean;
  hasMinHeight?: boolean;
  hasBlur?: boolean;
  paddingTop?: "pt-0" | "pt-10" | "pt-20" | "pt-30" | "pt-40";
  paddingBottom?: "pb-0" | "pb-10" | "pb-20" | "pb-30" | "pb-40";
  dataPaperformId?: string;
}

const HeroMontserrat = ({
  heading,
  heading2,
  hasButton,
  bgImage,
  subHeading,
  children,
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
        w-full relative flex flex-col gap-4 sm:gap-8 items-center justify-center text-white text-center
        ${paddingTop || paddingBottom
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
      <div className="w-full max-w-5xl flex flex-col items-center p-4 lg:p-0 gap-4 sm:gap-8">
        <h1 className="font-montserrat whitespace-pre-line text-3xl lg:text-5xl sm:pb-4">
          <span className="font-normal">{heading}</span>
          {heading2 && (
            <>
              <br />
              <span className="font-bold">{heading2}</span>
            </>
          )}
        </h1>
        {subHeading && (
          <h2 className="font-montserrat text-base lg:text-22 font-light pb-4">
            {subHeading}
          </h2>
        )}
      </div>

      {children}

      <div className={
        hasButton || additionalButtons
          ? "w-full max-w-5xl flex flex-col sm:flex-row px-4 justify-center gap-4"
          : "hidden"
      }>
        {hasButton && (
          <div className="w-full sm:w-72 z-10">
            <ButtonBuilding
              theme="redBlue"
              linkTo={buttonLink ?? siteMap.contact.path}
              buttonText={buttonText ?? "Get Started"}
              width="w-full"
            />
          </div>
        )}
        {additionalButtons &&
          additionalButtons.map((button, index) => (
            <div key={index} className="w-full sm:w-72 z-10">
              <ButtonBuilding
                theme="redBlue"
                linkTo={button.link}
                buttonText={button.name}
                width="w-full"
              />
            </div>
          ))}
      </div>

      {hasMouseScroll && <MouseScroll />}

      <div className={`absolute w-full h-full top-0 left-0 -z-10 ${hasBlur && "blur-sm"}`}>
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

export default HeroMontserrat;