"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  heading?: string;
  headingColour?: string;
  images: {
    src: string;
    alt: string;
  }[];
  columns?: 2 | 3 | 4;
  bgColour?: string;
}

const IndustryGallery = ({
  heading,
  headingColour = "text-darkBlue",
  images,
  columns = 3,
  bgColour = "bg-white",
}: Props) => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const desktopGridCols =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 4
      ? "lg:grid-cols-4"
      : "lg:grid-cols-3";

  return (
    <section
      className={`w-full flex flex-col items-center px-8 py-10 lg:p-16 gap-8 ${bgColour}`}
    >
      {heading && (
        <h2 className={`font-medium text-2xl lg:text-3xl text-center ${headingColour}`}>
          {heading}
        </h2>
      )}

      <div className={`w-full max-w-6xl grid grid-cols-2 ${desktopGridCols} gap-6`}>
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setLightbox(image)}
            className="relative w-full aspect-video overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl z-10"
            >
              ×
            </button>

            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustryGallery;