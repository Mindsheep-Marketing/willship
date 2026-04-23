import AutoQuoteButton from "../../components/common/AutoQuoteButton";
import Hero from "../../components/common/Hero";
import SectionSection from "../../components/common/SectionSection";
import ContainerDetails from "../../components/usefulInformation/ContainerDetails";
import RoroGallery from "../../components/usefulInformation/RoroGallery";

const ParametersOfContainers = () => (
  <>
    <Hero
      heading="DIMENSIONS OF A SHIPPING CONTAINER"
      subHeading="JUST HOW MUCH SPACE DO YOU HAVE TO WORK WITH?"
      bgImage="/assets/images/containers6.jpg"
      hasButton={false}
      hasMouseScroll={false}
      hasImageOpacity={true}
    />
    <ContainerDetails />
    <RoroGallery />
    <SectionSection>
      <AutoQuoteButton />
    </SectionSection>
  </>
);

export default ParametersOfContainers;
