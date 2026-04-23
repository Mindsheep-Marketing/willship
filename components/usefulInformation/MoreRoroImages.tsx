import Image from "next/image";
import SectionSection from "../common/SectionSection";

const images = [
  [
    '/assets/images/roro3.webp',
    '/assets/images/roro4.webp',
    '/assets/images/roro7.webp',
  ],
  [
    '/assets/images/roro5.webp',
    '/assets/images/roro6.webp',
    '/assets/images/roro8.webp',
  ]
];


const MoreRoroImages = () => (
  <SectionSection>
    <div className="w-full flex flex-row gap-1">
      {images.map((col, i) => (
        <div key={i} className="w-1/2 flex flex-col gap-1">
          {col.map((item, j) => (
            <div key={j} className="w-full aspect-4/3 relative">
              <Image src={item} layout='fill' objectFit='cover' alt='RORO Shipping' />
            </div>
          ))}
        </div>
      ))}
    </div>
  </SectionSection>
);

export default MoreRoroImages;