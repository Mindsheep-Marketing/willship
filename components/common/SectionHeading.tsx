interface Props {
  text: string;
  classes ?: string;
  textColour ?: string;
}


const SectionHeading = ({text, classes, textColour} : Props) => (
  <h2 className={`text-3xl sm:text-4xl lg:text-forty ${textColour ? textColour : 'text-darkBlue'} font-medium ${classes && classes}`}>{text}</h2>
);

export default SectionHeading;