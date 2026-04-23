import Image from "next/image";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";

interface Props {
  src: string;
  imageOrVideo: 'image' | 'video';
  alt ?: string;
  fallbackColour: string;
  hasOpacity: boolean;
  opacityColour ?: string;
}

const BackgroundImage = ({
  src, 
  imageOrVideo, 
  alt = 'background image', 
  fallbackColour, 
  hasOpacity, 
  opacityColour = 'bg-black'
} : Props) => {

  const screenSize = useGetScreenSize();
  const getScale = () => {
    return screenSize === 'sm'
      ? 3
      : screenSize === 'md'
        ? 2
        : 1.5
  };

  return (
    <>
      {hasOpacity &&
        <div className={`bg-image absolute top-0 left-0 h-full w-full -z-10 ${opacityColour}`} />
      }
      <div className={`bg-image absolute top-0 left-0 w-full h-full -z-20 ${fallbackColour} overflow-hidden`}>
        {imageOrVideo === 'image'
          ? (
            <div className="relative h-full w-full">
              <Image src={src} layout='fill' objectFit="cover" alt={alt} />
            </div>
          ) : <iframe 
              className="-z-20 absolute w-full h-full top-0 left-0 object-cover"
              frameBorder='0' 
              allowFullScreen
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              style={{transform: `scale(${getScale()})`}}
              src={src}
            />
        }
      </div>
    </>
  );
};

export default BackgroundImage;