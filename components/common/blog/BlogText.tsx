// note this is basically the TextSection component, I'm just creating a new component so I don't mess with any other pages.

import { ReactNode } from "react";
import SectionHeading from "../SectionHeading";
import parse from 'html-react-parser';

interface Props {
  heading ?: string;
  text: string[];
  textColour: string;
  bgColour: string;
  itemAlign ?: string;
  children ?: ReactNode
}

const BlogText = ({heading, text, textColour, bgColour, itemAlign, children} : Props) => (
  <section className={`w-full flex flex-col items-center gap-8 py-12 px-4 ${bgColour}`}>
    {heading && 
      <SectionHeading text={heading} classes='max-w-5xl text-center' />
    }
    <div className={`w-full max-w-5xl flex flex-col ${textColour} ${itemAlign ? itemAlign : 'items-center'} gap-4 text-xl`}>
      {text.map((item, i) => (
        <p key={i} className='w-full'>
          {parse(item)}
        </p>
      ))}
      {children && children}
    </div>
  </section>
);

export default BlogText;