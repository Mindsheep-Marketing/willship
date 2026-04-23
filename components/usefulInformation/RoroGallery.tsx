import Image from "next/image";
import SectionSection from "../common/SectionSection";

const data = [
  '/assets/images/roroGallery/01.jpg',
  '/assets/images/roroGallery/02.jpg',
  '/assets/images/roroGallery/03.jpg',
  '/assets/images/roroGallery/3-2.jpg',
  '/assets/images/roroGallery/05.jpg',
  '/assets/images/roroGallery/20.png',
  '/assets/images/roroGallery/20ft.jpg',
  '/assets/images/roroGallery/20ft1.jpg',
  '/assets/images/roroGallery/40-gp.jpg',
  '/assets/images/roroGallery/img1.jpg',
  '/assets/images/roroGallery/img2.jpg',
  '/assets/images/roroGallery/img3.jpg',
  '/assets/images/roroGallery/06.jpg',
  '/assets/images/roroGallery/img6.jpg',
  '/assets/images/roroGallery/img4.jpg',
  '/assets/images/roroGallery/40-high-1-2.jpg',
]

const RoroGallery = () => (

  <SectionSection bgColour="bg-darkBlue">
    <h2 className="text-white text-forty font-medium">
      Gallery
    </h2>
    <div className="w-full flex flex-row flex-wrap justify-center gap-4">
      {data.map((item, i) => (
        <div key={i} className="w-full sm:w-1/3 lg:w-1/5 p-2 relative aspect-square bg-white rounded-lg">
          <div className="h-full w-full relative">
            <Image src={item} layout='fill' objectFit='cover' alt="Cars in Containers" />
          </div>
        </div>
      ))}
    </div>

  </SectionSection>
);

export default RoroGallery;