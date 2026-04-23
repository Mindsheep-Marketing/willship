import RenderCard from "./common/RenderCard";
import SectionHeading from "./common/SectionHeading";


interface Props {
  width: string;
  textSize?: string;
  options: {
    heading: string;
    image: string;
    description?: string;
    linkTo?: string;
    buttonText?: string;
  }[];
}


const ShippingOptions = ({
  options,
  width,
  textSize = "text-3xl",
}: Props) => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 lg:px-0">
      <SectionHeading text="What We Can Ship For You" />
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-8
    w-full
    max-w-4xl
    pt-8
    justify-center
  "
      >
        {options.map((item, i) => (
          <RenderCard
            width="w-[90%] max-w-lg sm:w-[90%]"
            key={i}
            link={item}
            textSize={textSize}
          />
        ))}
      </div>
    </section>
  );
};


export default ShippingOptions;
