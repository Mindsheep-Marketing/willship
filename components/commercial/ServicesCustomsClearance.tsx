import Image from "next/image";
import siteMap from "../../siteMap";
import BackgroundImage from "../common/BackgroundImage";
import Button from "../common/Button";

interface Props {
  bgColour?: string;
  data: {
    title: string;
    text: string;
    image: string;
  }[]
}

const ServicesCustomsClearance = ({
  bgColour,
  data
} : Props) => {
  return (
    <section className={`willship-cc-services ${bgColour} lg:bg-inherit relative w-full py-10 px-4`}>
      <BackgroundImage
        fallbackColour="true"
        imageOrVideo="image"
        src="/assets/images/customs-clearance/bg-blue-texture.jpg"
        hasOpacity={false}
      />
      <h2 className="font-medium max-w-5xl text-darkBlue lg:text-white text-center text-3xl lg:text-forty mx-auto mb-12">Our Services</h2>

      <div className="w-full max-w-8xl grid lg:grid-cols-2 xl:grid-cols-4 gap-12 mx-auto">
        {data.map(item => (
          <div key={item.title} className="bg-white relative w-4/5 lg:w-full rounded-3xl shadow-2xl second-row-item flex flex-col items-center gap-3 mx-auto z-10">
            <div className="w-full aspect-video xl:min-h-250 relative rounded-t-3xl overflow-hidden">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.title}
              />
              <h3 className="absolute z-10 text-center bottom-5 w-full font-black text-white text-3xl lg:text-4xl px-4">{item.title}</h3>
              <span className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-30 overflow-hidden"></span>
            </div>
            <div className="w-full first-letter:p-4 flex flex-col grow justify-between gap-2 p-5 pt-0">
              <p className="lg:text-lg text-center">{item.text}</p>
              <Button
                linkTo={siteMap.chinaToAustralia.customsClearanceForm.path}
                buttonText="Request a Quote"
                theme="redBlue"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCustomsClearance;
