import React from 'react';
import siteMap from "../../siteMap";
import Button from "./Button";

interface Props {
  quoteLink ?: string;
  quoteText ?: string;
  title ?: string;
}

const HaveAnyQuestions = ({
  quoteLink, 
  quoteText, 
  title = "HAVE ANY QUESTIONS? DROP US A LINE"
} : Props) => {
  const titleLines = title.split('\n');

  return (
    <section className="w-full flex flex-col items-center bg-darkBlue text-white text-center py-20 gap-16 px-8 lg:px-0">
      <h2 className="text-3xl lg:text-forty font-medium leading-tight">
        {titleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}{index < titleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <div className="w-72 z-10">
        <Button
          buttonText={quoteText ? quoteText : 'Get Started'}
          linkTo={quoteLink ? quoteLink : siteMap.commercial.commercialFreightQuote.path}
          dataPaperformId={'mlc28uxr'}
          dataPaperformPopup={true}
          theme='redBlue'
        />
      </div>
    </section>
  );
};

export default HaveAnyQuestions;