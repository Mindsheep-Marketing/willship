import ButtonBuilding from "./ButtonBuilding";
import siteMap from "../../siteMap";

interface Props {
  heading: string;
  buttonText: string;
  buttonLink: string;
  bgColour?: string;
  headingColour?: string;
  buttonTheme?: string;
  buttonWidth?: string;
}

const TextButton = ({
  heading,
  buttonText,
  buttonLink,
  bgColour = 'bg-darkBlue',
  headingColour = 'text-white',
  buttonWidth = 'w-64',
}: Props) => {
  return (
    <section className={`w-full flex flex-col items-center justify-center px-8 py-16 gap-8 ${bgColour}`}>
      <h2 className={`font-bold text-xl lg:text-2xl text-center tracking-widest uppercase ${headingColour}`}>
        {heading}
      </h2>
      <ButtonBuilding
        buttonText={buttonText}
        linkTo={buttonLink}
        width={buttonWidth}
        theme="redBlue"
      />
    </section>
  );
};

export default TextButton;