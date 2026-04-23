import React from 'react';
import siteMap from "../../siteMap";
import Button from '../../components/common/Button';

interface Props {
  quoteLink ?: string;
  quoteText ?: string;
  title ?: string;
}

const RequestQuoteBanner = ({
  quoteLink, 
  quoteText, 
  title = "Let's get your goods moving. \n Get a quote today."

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
          buttonText={quoteText ? quoteText : 'Request A Quote'}
          linkTo={quoteLink ? quoteLink : siteMap.commercial.commercialFreightQuote.path}
          theme='redBlue'
        />
      </div>
    </section>
  );
};

export default RequestQuoteBanner;