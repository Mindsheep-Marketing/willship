import HaveAnyQuestions from "../components/common/HaveAnyQuestions";
import Hero from "../components/common/Hero";
import PrivacyStatement from "../components/privacyPolicy/PrivacyStatement";

const PrivacyPolicy = () => (
  <>
    <Hero
      heading="PRIVACY POLICY"
      bgImage="/assets/images/privacy.jpg"
      hasButton={false}
      hasMouseScroll={false}
      hasImageOpacity={true}
    />
    <PrivacyStatement />
    <HaveAnyQuestions />
  </>
);

export default PrivacyPolicy;