import VehicleFAQ from "./VehicleFAQ";

interface CaravanFAQProps {
    subHeading: string;
}

const CaravanFAQ = ({ subHeading }: CaravanFAQProps) => {
    const styledSubHeading = (
        <span className="text-2xl font-extrabold text-darkBlue tracking-tight">
            {subHeading}
        </span>
    );

    return <VehicleFAQ subHeading={styledSubHeading} />;
};

export default CaravanFAQ;
