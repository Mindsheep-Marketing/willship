import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";
import siteMap, { externalLinks } from "../../siteMap";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

import parse from 'html-react-parser';

interface FAQData {
  question: string;
  answer: string;
};

interface Props {
  faqQuestions: FAQData[];
  hasButton?: boolean;
  buttonLink ?: string;
  heading?: string;
  subHeading ?: string | JSX.Element;
};

const FAQBuilder = ({ faqQuestions, hasButton, heading, buttonLink, subHeading}: Props) => {

  const [selected, setSelected] = useState<number | null>(null);

  const headingClasses = 'font-medium text-lg text-darkBlue text-left grow max-w-5/6';
  const answerClasses = `text-lg text-darkGrey flex-col gap-4 p-5`;
  const subQuestionClasses = 'flex flex-row items-center lg:items-center hover:cursor-pointer px-5 h-auto lg:h-16';

  return (
    <section id="faq" className="w-full flex flex-col items-center bg-nearlyWhite gap-4 p-8 lg:p-12 text-center">
      {heading &&
        <SectionHeading text={heading} />
      }
      {subHeading &&
        <h3 className="text-darkGrey font-medium text-3xl">
          {subHeading}
        </h3>
      }
      <div className="w-full max-w-7xl flex flex-row justify-center flex-wrap gap-4">
          {faqQuestions.map((question, i) => (
            <div key={i} className='w-full lg:w-45'>
              <div
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`${subQuestionClasses} ${selected === i ? 'border-0' : 'border border-darkBlue'}`}
              >
                <h4 className={headingClasses}>
                  {question.question}
                </h4>
                <div className="w-1/12">
                  <ChevronDownIcon className={`h-5 w-5 ${selected === i && '-rotate-180'} transition-all`} />
                </div>
              </div>
              <div className={`${answerClasses + (selected === i ? ' flex' : ' hidden')}`}>
                {parse(question.answer)}
              </div>
            </div>
          ))}
      </div>
      {hasButton && buttonLink &&
        <div className="z-10 w-full max-w-sm pt-8">
          <Button
            buttonText="See More FAQs"
            linkTo={buttonLink}
            theme='redBlue'
          />
        </div>
      }
    </section>
  );
};

export default FAQBuilder;