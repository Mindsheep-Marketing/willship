import { PauseIcon, PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import SectionSection from "./SectionSection";

interface CrateData {
  name: string;
  internal: string;
  external: string;
  text: string[];
  image: string[];
};

const CrateSizeSelector = () => {

  const crateData : CrateData[] = [
    {
      name: 'Small',
      internal: 'L 1250mm x W 900mm x H 1215mm',
      external: 'L 1320mm x W 970mm x H 1430mm',
      text: [
        'This can fit 12 tea chest size removalist boxes which is surprisingly quite a lot of stuff!', 
        'All your clothes, all of your kitchenware and appliances, power tools etc would comfortably fit within our smallest crate.'
      ],
      image: [
        '/assets/images/crates/sizes/crate-sm-dimensions.png',
        '/assets/images/crates/sizes/crate-sm-capacity.png',
        '/assets/images/crates/sizes/crate-sm-image.jpg'
      ]
    },
    {
      name: 'Medium',
      internal: 'L 2200mm x W 1280mm x H1240mm',
      external: 'L 2270mm x W 1320mm x H 1430mm',
      text: [
        'Heaps! This can fit up to 24 tea chest size removalist boxes with space to space for those odd shaped items. You could also load things like your washing machine, dryer, bedside  tables, coffee table, TV cabinet etc'
      ],
      image: [
        '/assets/images/crates/sizes/crate-md-dimensions.png',
        '/assets/images/crates/sizes/crate-md-capacity.png',
        '/assets/images/crates/sizes/crate-md-image.jpg'
      ]
    },
    {
      name: 'Large',
      internal: 'L 2200mm x W 1450mm x H 1850mm',
      external: 'L 2270mm x W 1530mm x H 2090mm',
      text: [
        'This is very large and could fit approx 45 tea chest removalist  boxes, or things like king size bed, a lounge suite, washing  machine, dryer, suitcases etc – you name it, it can likely fit it!',
      ],
      image: [
        '/assets/images/crates/sizes/crate-lg-dimensions.png',
        '/assets/images/crates/sizes/crate-lg-dimensions2.png',
        '/assets/images/crates/sizes/crate-lg-capacity.png',
        '/assets/images/crates/sizes/crate-lg-image.jpg'
      ]
    }
  ];

  const [size, setSize] = useState <CrateData> (crateData[0]);
  const [image, setImage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const changeImage = () => {
      setImage((image + 1) % size.image.length);
    };

    const timer = window.setInterval(() => {
      !paused && changeImage();
    }, 3000);

    return () => window.clearInterval(timer);
  }, [size, image, paused]);

  const handleImageClick = () => {
    paused 
      ? setImage((image + 1) % size.image.length)
      : setPaused(true);
  };

  return (
    <SectionSection bgColour="bg-cratesBlue">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        <div className="max-w-md w-full flex flex-col gap-4">
          <SectionHeading text='What Crate Size?' textColour="text-red" />
          {crateData.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col gap-2"
              onClick={() => setSize(item)}
            >
              <h3 className={`text-forty hover:cursor-pointer ${size.name === item.name ? 'underline text-darkBlue' : 'text-lightBlue'}`}>{item.name}</h3>
              {size.name === item.name &&
                <>
                  <div className="w-full p-2 bg-white rounded-md">
                    <p>Internal Dims: {item.internal}</p>
                    <p>External Dims: {item.external}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-bold">What can it fit?</h4>
                    {item.text.map((text, j) => (
                      <p key={j}>
                        {text}
                      </p>
                    ))}
                  </div>
                </>
              }
            </div>
          ))}
        </div>
        <div className="max-w-md w-full aspect-square relative">
          <Image 
            src={size.image[image] ? size.image[image] : size.image[0]} layout="fill" objectFit="contain" alt='Willship Crates' 
            onClick={handleImageClick}
          />
          {paused 
            ? <PlayIcon 
                className="absolute bottom-0 right-0 h-10 aspect-square text-darkBlue" 
                onClick={() => setPaused(false)}
              />
            : <PauseIcon 
                className="absolute bottom-0 right-0 h-10 aspect-square text-darkBlue" 
                onClick={() => setPaused(true)}
              />
          }
        </div>
      </div>
    </SectionSection>
  );
};

export default CrateSizeSelector;