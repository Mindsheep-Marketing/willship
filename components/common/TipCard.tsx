import Image from "next/image";
import Link from "next/link";
import Button from "../../components/common/Button";

interface Props {
  link: {
    heading: string;
    image: string;
    description?: string; // Added description property
    linkTo?: string;
    buttonText?: string;
  };
  width: string;
  textSize?: string;
}

const TipCard = ({ link, width, textSize = "text-3xl" }: Props) => {
    return (
      <div className={`${width} flex flex-col items-center bg-white shadow-md rounded-xl overflow-hidden`}>
        {/* Image */}
        <div className="relative w-full aspect-video">
          <Image src={link.image} layout="fill" objectFit="cover" alt={link.heading} />
        </div>
  
        {/* Heading, Line, Description, and Button */}
        <div className="p-6 text-center">
          <h3 className={`text-xl font-bold mb-2`}>{link.heading}</h3>
          <hr className="border-gray-300 w-1/2 mx-auto mb-4" />
          {link.description && <p className="text-gray-700 mb-4">{link.description}</p>}
        </div>
      </div>
    );
  };
  

export default TipCard;