import Image from "next/image";
import BackgroundImage from "./BackgroundImage"; 
import Button from "./Button";
import useIsSmall from "../../utils/hooks/useIsSmall";

interface Props {
  imageSrc: string;
  heading?: string;
  subHeading?: string;
  requestQuoteLink: string;
  requestQuoteText: string;
  requestQuoteWidth?: string;
  paragraphs: string[];
};

const ImageWithArrowGraphic = ({
  imageSrc,
  heading,
  subHeading,
  requestQuoteLink,
  requestQuoteText,
  requestQuoteWidth = 'w-full',
  paragraphs,
} : Props) => {

  const isSmall = useIsSmall();

  return (
    <section 
      className="willship-cc-graphic-image-text lg:bg-darkBlue w-full min-h-600 relative flex flex-col lg:flex-row flex-col-reverse"
    >
      {isSmall
        ? (
          <div className={`w-full h-52 sm:h-72 md:h-96 relative bg-darkBlue`}>
            <Image src={imageSrc} layout='fill' objectFit="cover" alt="Importing can be complex" quality={75} />
          </div>
        ) : (
          <div className={`w-1/2 xl:basis-3/5 relative bg-darkBlue`}>
            <Image src={imageSrc} layout='fill' objectFit="cover" alt="Importing can be complex" quality={75} />
          </div>
        )
      }

      <div className="w-full lg:w-1/2 lg:max-w-2xl relative lg:bg-darkBlue flex flex-col xl:basis-2/5 items-center p-4 lg:p-0 content">
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo="image"
          src="/assets/images/customs-clearance/bg-blue-texture.jpg"
          hasOpacity={false}
        />
        <div className="w-full relative p-4 lg:p-12 flex flex-col gap-4 lg:gap-6 text-xl text-white leading-relaxed z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-forty font-medium leading-none text-center lg:mb-2">{heading}</h2>
            <h3><span className="block text-xl lg:text-3xl font-medium text-center">{subHeading}</span></h3>
          </div>

          {paragraphs && paragraphs.map((item, k) => (
            <p key={k} dangerouslySetInnerHTML={{ __html: item }} />
          ))}

          <Button
            buttonText={requestQuoteText}
            linkTo={requestQuoteLink}
            width={requestQuoteWidth}
            theme="redBlue"
          />
        </div>  
      </div>
    </section>
  );
};

export default ImageWithArrowGraphic;