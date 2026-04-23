import TipCard from "./common/TipCard";
import SectionHeading from "./common/SectionHeading";

interface Props {
  width: string;
  textSize?: string;
  options: {
    heading: string;
    image: string;
    description?: string; // Added description property
    linkTo?: string;
    buttonText?: string;
  }[];
}

const TipList = ({
  options,
  width,
  textSize = "text-3xl",
}: Props) => {
  return (
    <section className="w-full flex flex-col items-center py-12 px-4 lg:px-0">
      <SectionHeading text="Helpful Tips When Car Shipping to New Zealand" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl pt-12">
        {options.map((item, i) => (
          <TipCard
          width="w-full"
          key={i}
          link={item}
          textSize={textSize}
        />
        ))}
      </div>
    </section>
  );

};

export default TipList;