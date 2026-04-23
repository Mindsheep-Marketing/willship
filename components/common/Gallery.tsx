import Image from "next/image";
import { useState } from "react";

interface ImageType {
  url: string;
  caption?: string;
  // Define other image properties here
}

interface GalleryProps {
  title: string;
  imageCols: ImageType[][];
  hasCaption: boolean;
}

const CreateImage = ({ image, hasCaption }: { image: ImageType; hasCaption: boolean }) => {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  return (
    <div className="w-full relative flex justify-center items-center">
      <Image
        src={image.url}
        width={320}
        height={(height / width) * 320}
        objectFit="contain"
        alt="Gallery Image"
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setHeight(naturalHeight);
          setWidth(naturalWidth);
        }}
      />
      {hasCaption && image.caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
          {image.caption}
        </div>
      )}
    </div>
  );
};

const Gallery = ({ imageCols, title, hasCaption }: GalleryProps) => (
  <>
    <section className="w-full flex flex-col items-center bg-nearlyWhite py-12 px-4">
      <h2 className="text-forty font-medium text-darkBlue text-center pb-8">
        {title}
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row w-full max-w-5xl">
        {imageCols.map((column, i) => (
          <div key={i} className="flex flex-col gap-4 w-full lg:w-1/3 relative items-center">
            {column.map((image, j) => (
              <CreateImage key={j} image={image} hasCaption={hasCaption} />
            ))}
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Gallery;