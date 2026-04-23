import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceItem {
  title: string;
  imageSrc: string;
  link: string;
}

interface Props {
  resources?: ResourceItem[];
}

const defaultResources: ResourceItem[] = [
  {
    title: "Why You SHOULD NOT Let Your Supplier Organise Your Shipping",
    imageSrc: "/assets/images/airport.jpg",
    link: "/resources/supplier-shipping",
  },
  {
    title: "A Quick Guide: IMPORT TAXES & DUTIES Explained for Australian Imports",
    imageSrc: "/assets/images/airport.jpg",
    link: "/resources/import-taxes",
  },
  {
    title: "The Customs Clearance Process in a nutshell",
    imageSrc: "/assets/images/airport.jpg",
    link: "/resources/customs-clearance",
  },
];

const HelpfulResources = ({ resources = defaultResources }: Props) => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-sackHeavy text-darkBlue text-center mb-12">
          Helpful Resources
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((resource, index) => (
            // <Link href={resource.link} key={index}>
            <Link href={''} key={index}>
              <a className="w-full sm:w-72 transition-transform hover:scale-105">
                <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                  <Image 
                    src={resource.imageSrc}
                    layout="fill"
                    objectFit="cover"
                    alt={resource.title}
                  />
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpfulResources; 