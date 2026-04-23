import Image from "next/image";
import ButtonBuilding from "./ButtonBuilding";

interface CardItem {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  heading: string;
  subHeading?: string;
  cards: CardItem[];
  bgColour?: string;
  headingColour?: string;
  subHeadingColour?: string;
}

const IndustryCards = ({
  heading,
  subHeading,
  cards,
  bgColour = 'bg-darkBlue',
  headingColour = 'text-white',
  subHeadingColour = 'text-white',
}: Props) => {
  return (
    <section className="w-full flex flex-col items-center">

      {/* Dark top — heading only */}
      <div className={`w-full flex flex-col items-center px-6 pt-16 pb-32 gap-6 ${bgColour}`}>
        <div className="max-w-4xl text-center flex flex-col gap-4">
          <h2 className={`text-3xl lg:text-4xl font-bold ${headingColour}`}>
            {heading}
          </h2>
          {subHeading && (
            <p className={`text-lg ${subHeadingColour}`}>
              {subHeading}
            </p>
          )}
        </div>
      </div>

      {/* White bottom — cards pulled up with negative margin */}
      <div className="w-full bg-white flex flex-col items-center px-4 md:px-12 lg:px-24 pt-0 pb-16">
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 -mt-24">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative w-full h-56">
                <Image
                  src={card.imageSrc}
                  layout="fill"
                  objectFit="cover"
                  alt={card.imageAlt}
                />
                <div className="absolute bottom-0 left-0 w-full px-5 py-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-xl font-bold">{card.heading}</h3>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-4 px-6 py-2 flex-1 justify-between pb-6">
                <p className="text-darkBlue text-md leading-relaxed">{card.text}</p>
                <ButtonBuilding
                  buttonText={card.buttonText}
                  linkTo={card.buttonLink}
                  width="w-full md:w-96"
                  theme="redBlue"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default IndustryCards;