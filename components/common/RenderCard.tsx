import Image from "next/image";
import Link from "next/link";

interface Props {
  link: {
    heading: string;
    image: string;
    linkTo ?: string;
  };
  width: string;
  textSize ?: string;
}

const RenderCard = ({
  link, 
  width, 
  textSize = 'text-3xl'
} : Props ) => {

  const RenderContent = () => {
    return (
      <>
        <div className="w-full aspect-video relative">
          <Image src={link.image} layout='fill' objectFit="cover" alt={link.heading} />
        </div>
        <div className="flex flex-col items-center text-center p-6">
          <h3 className={`${textSize}`}>{link.heading}</h3>
        </div>
      </>
    )
  }

  return (
    link.linkTo 
      ? (
        <Link href={link.linkTo}>  
          <a 
            className={`${width} font-medium bg-nearlyWhite hover:bg-darkBlue hover:text-white group`}
          >
            <RenderContent />
          </a>
        </Link>
      ) : (
        <div
          className={`${width} font-medium bg-nearlyWhite hover:bg-darkBlue hover:text-white group`}
        >
          <RenderContent />
        </div>
      )
  );
};

export default RenderCard;