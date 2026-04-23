import Image from "next/image";

const RenderBlogImage = ({image, alt} : {image: string, alt: string}) => {
  return (
    <div className="w-full aspect-video relative">
      <Image src={image} layout='fill' objectFit="contain" alt={alt} />
    </div>
  );
};

export default RenderBlogImage;