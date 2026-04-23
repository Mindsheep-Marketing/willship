import Button from "./Button";

interface Props {
  imageSrc: string;
  heading?: string;
  requestQuoteLink: string;
  requestQuoteText: string;
  requestQuoteWidth?: string;
  precedingParagraphs?: string[];
  trailingParagraphs?: string[];
  listItems: string[];
  coverContain?: 'cover' | 'contain';
  contentMaxWidth?: string;
  dataPaperformId?: string;
};

const ImageAndChecklist = ({
  imageSrc,
  heading,
  requestQuoteLink,
  requestQuoteText,
  requestQuoteWidth = 'w-full',
  precedingParagraphs,
  trailingParagraphs,
  listItems,
  dataPaperformId,
} : Props) => {
  return (
    <section className="willship-image-and-checklist w-full relative bg-gradient-to-b from-transparent to-darkBlue400 flex flex-col xl:flex-row justify-end">
      <div className="relative w-full xl:w-1/2 2xl:max-w-2xl lg:top-9 lg:left-2 bottom-9 lg:bottom-0 px-8 xl:pr-0 z-20">
        <div className="bg-darkBlue xl:bg-white flex flex-col gap-6 p-10 lg:py-16 lg:px-12 text-white xl:text-nearlyBlack lg:text-xl" style={{borderRadius: '60px'}}>
            <h2 className="text-white xl:text-darkBlue text-2xl sm:text-3xl lg:text-forty leading-none font-bold text-center">{heading}</h2>

            {precedingParagraphs && precedingParagraphs.map((item, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}

            <ul className="list-none">
              {listItems.map((item, i) => (
                  <li key={i} className="flex items-start mb-4">
                  <img className="xl:hidden" height={24} width={24} src="/assets/images/customs-clearance/icon-check-white.svg" alt='White Checkmark' />
                  <img className="hidden xl:block" height={42} width={42} src="/assets/images/customs-clearance/icon-check-blue.svg" alt='Blue Checkmark' />
                  <span className="basis-0 grow ml-2">{item}</span>
                  </li>
              ))}
            </ul>

            {trailingParagraphs && trailingParagraphs.map((item, k) => (
              <p key={k} dangerouslySetInnerHTML={{ __html: item }} />
            ))}

            <Button
              buttonText={requestQuoteText}
              linkTo={requestQuoteLink}
              width={requestQuoteWidth}
              dataPaperformId={dataPaperformId}
              theme="redBlue"
            />
        </div>
      </div>
      <div className={`flex items-end relative xl:w-1/2 2xl:w-3/5 2xl:max-w-5xl -mt-14 lg:mt-0 overflow-hidden z-20 xl:z-10`}>
        <img className="w-full xl:absolute" src={imageSrc} alt="Penlope and Rhyss" />
      </div>
    </section>
  );
};

export default ImageAndChecklist;