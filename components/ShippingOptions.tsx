import RenderCard from "./common/RenderCard";
import SectionHeading from "./common/SectionHeading";

interface Props {
  width: string;
  textSize ?: string;
  options: {
    heading: string;
    image: string;
    linkTo ?: string;
  }[];
};

const ShippingOptions = ({
  options, 
  width, 
  textSize = 'text-3xl'
} : Props) => {

  return (
    <section className="w-full flex flex-col items-center py-12 px-4 lg:px-0">
      <SectionHeading text='Options To Ship Your Vehicle' />
      <div className="flex flex-col lg:flex-row w-full items-center lg:items-stretch max-w-5xl justify-center gap-4 text-center pt-12">
        {options.map((item, i) => (
          <RenderCard width={`w-full sm:w-2/3 lg:${width}`} key={i} link={item} textSize={textSize}/>
        ))}
      </div>
    </section>
  );
};

export default ShippingOptions;