import Button from "../../components/common/Button";
import Hero from "../../components/common/Hero";
import TextSection from "../../components/common/TextSection";
import HowMuchSpaceContent from "../../components/usefulInformation/HowMuchSpaceContent";
import siteMap from "../../siteMap";

const HowMuchSpace = () => (
  <>
    <Hero
      bgImage="/assets/images/space-side.jfif"
      hasImageOpacity={true}
      hasButton={false}
      hasMouseScroll={false}
      heading="HOW MUCH SPACE IS IN A CONTAINER"
    />
    <TextSection
      textColour="text-white"
      bgColour="bg-darkBlue"
      text={[
        'If you\'re looking to ship a car to new zealand or worldwide with belongings along with your vehicle then you are best off using a 20ft shipping container.',
        'When using this method of shipping you can fill the vehicle / tray with as much cargo as you like, and you can also use the remaining space around the container to put some additional items.',
      ]}
    />
    <HowMuchSpaceContent />
  
    <TextSection
      bgColour="bg-darkBlue"
      text={[
        'If you have any questions or want to speak to one of our experts on whether or not your cargo will fit inside a container along with your vehicle then please don’t hesistate to give us a call on 07 3267 3694.',
        'If you would like an instant quote to move your vehicle from Australia to New Zealand or Australia and the UK via either roll on, roll off or inside a container, then please click here'
      ]}
      textColour='text-white'
    />
    <section className="w-full flex justify-center items-center py-12">
      <div className="w-72 z-10">
        <Button
          buttonText="Get Instant Quote"
          linkTo={siteMap.vehicle.vehicleQuote.path}
          theme='redBlue'
        />
      </div>
    </section>
  </>
);  

export default HowMuchSpace;