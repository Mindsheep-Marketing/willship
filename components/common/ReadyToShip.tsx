import React from 'react';
import siteMap from "../../siteMap";
import Button from "./Button";

interface Props {
    quoteLink?: string;
    quoteText?: string;
    title?: string;
    dataPaperformId?: string;
}

const ReadyToShip = ({
    quoteLink,
    quoteText,
    title = "HAVE ANY QUESTIONS? DROP US A LINE",
    dataPaperformId
}: Props) => {
    const titleLines = title.split('\n');

    return (
        <section className="w-full flex flex-col items-center bg-darkBlue text-white text-center pt-12 pb-5 gap-5 px-5 lg:px-0">
            <h2 className="text-xl font-Montserrat">
                {titleLines.map((line, index) => (
                    <React.Fragment key={index}>
                        {line}{index < titleLines.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h2>
            <div className="w-72 z-10">
                <Button
                    buttonText={quoteText ? quoteText : 'Get Started'}
                    linkTo={quoteLink ? quoteLink : siteMap.vehicle.vehicleQuote.path}
                    dataPaperformId={dataPaperformId}
                    dataPaperformPopup={true}
                    theme='redBlue'
                />
            </div>
        </section>
    );
};

export default ReadyToShip;