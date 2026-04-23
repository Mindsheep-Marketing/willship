// note this is basically the TextSection component, I'm just creating a new component so I don't mess with any other pages.

import { ReactNode } from "react";
import SectionHeading from "../SectionHeading";
import parse from 'html-react-parser';

interface Props {
  sectionsWithSubheading ?: {
    subHeading ?: string;
    text ?: string[]; 
  }[];
  heading ?: string;
  text ?: string[];
  textColour ?: string;
  bgColour ?: string;
  itemAlign ?: string;
  children ?: ReactNode

}

const BlogList = ({heading, sectionsWithSubheading, text, textColour = 'text-darkGrey', bgColour = 'bg-white', itemAlign, children} : Props) => (
  <section className={`w-full flex flex-col items-center gap-8 py-12 px-4 ${bgColour}`}>
    {heading && 
      <SectionHeading text={heading} classes='max-w-5xl text-center' />
    }
    <div className={`w-full max-w-5xl flex flex-col ${textColour} ${itemAlign ? itemAlign : 'items-center'} gap-4 text-xl`}>
      {sectionsWithSubheading &&
        sectionsWithSubheading.map((section, x) => (
          <div key={x} className='flex flex-col pb-4 w-full'>
            {section.subHeading && 
              <h3 className="pb-2 font-medium text-darkBlue text-2xl md:text-3xl lg:text-4xl">
                &#x2022;{section.subHeading}
              </h3>
            }
            {section.text && section.text.map((text, y) => (
              <p key={y}>{parse(text)}</p>
            ))}
          </div>
        ))
      }
      {text && text.map((item, i) => (
        <p key={i} className='w-full'>
          {parse(item)}
        </p>
      ))}
      {children && children}
    </div>
  </section>
);

export default BlogList;