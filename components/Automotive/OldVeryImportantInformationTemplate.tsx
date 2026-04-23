import parse from 'html-react-parser';

interface OldVeryImportantInformationTemplateProps {
    checklistTemplateData: string;
}

const OldVeryImportantInformationTemplate = ({ checklistTemplateData }: OldVeryImportantInformationTemplateProps) => {
    return (
        <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch">
            <style>
                {
                `
                .checklist ul {
                    list-style: disc;
                    padding: 0px 0px 0px 15px;
                    display: grid;
                    gap: 20px;
                    margin-left: 30px;
                    margin-bottom: 20px;
                }
                .checklist a{
                    text-decoration: underline;
                }
                .checklist b{
                    text-transform: uppercase;
                }
                .checklist p{
                    margin: 10px 0;
                }
                `
                }
            </style>
            <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 p-4 items-stretch bg-darkBlue text-center"  style={{"borderWidth":"1px", 'borderColor':"#022356", 'borderStyle':'solid'}}>
                <span className="w-full text-white font-sackLight text-2xl">
                    VERY IMPORTANT INFORMATION
                </span>
            </div>
            
            <div className="flex flex-row flex-wrap w-full max-w-7xl gap-y-4 items-stretch checklist">
                <div className="w-full flex flex-col p-4">
                    { parse(checklistTemplateData) }
                </div>
            </div>
        </div>
    );
};

export default OldVeryImportantInformationTemplate; 