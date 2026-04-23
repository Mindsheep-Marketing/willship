import { ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";

interface Props {
  heading ?: string;
  text?: string[];
  textColour: string;
  bgColour: string;
  itemAlign ?: string;
  children ?: ReactNode;
  buttonText ?:string;
  buttonLink ?:string;
}

const TextSection = ({heading, text, textColour, bgColour, itemAlign, children, buttonText, buttonLink} : Props) => (
  <section className={`w-full flex flex-col items-center gap-8 py-12 px-4 ${bgColour}`}>
    {heading && 
      <SectionHeading text={heading} classes='max-w-5xl text-center' />
      // <h2 className="text-forty text-darkBlue font-medium max-w-5xl text-center">
      //   {heading}
      // </h2>
    }
    {text && 
    <div className={`w-full max-w-5xl flex flex-col ${textColour} ${itemAlign ? itemAlign : 'items-center'} gap-4 text-xl`}>
      {text.map((item, i) => (
        <p key={i}>
          {item}
        </p>
      ))}
      {children && children}
    </div>
    }
    {buttonText &&
    <div className='w-full max-w-5xl flex flex-col'>
    <Button
              buttonText={buttonText as string}
              linkTo={buttonLink as string || ''}
              width="w-1/3"
              theme='blueRed'
            />
    </div>
    }
  </section>
);

export default TextSection;