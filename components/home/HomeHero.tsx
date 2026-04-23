import { useContext } from "react";
import BackgroundImage from "../common/BackgroundImage";
import MouseScroll from "../common/MouseScroll";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import ModalContext from "../../context/ModalContext";
import Button from "../common/Button";
import useIsSmall from "../../utils/hooks/useIsSmall";

interface Choices {
  heading: string;
  text: string;
  link: string;
  buttonTheme: "redBlue" | "whiteBlue"
};

const choices : Choices[] = [
  {
    heading: 'COMMERCIAL',
    text: 'Full Container (FCL), Less than Container Loads (LCL), Airfreight, Warehousing & Distribution, Customs & Quarantine Clearance.',
    link: siteMap.commercial.path,
    buttonTheme: 'whiteBlue'
  },
  {
    heading: 'AUTOMOTIVE',
    text: 'We ship vehicles, motorcycles, caravans, motorhomes, trailer boats, and machinery.',
    link: siteMap.vehicle.path,
    buttonTheme: 'redBlue'
  }
]

const HomeHero = () => {

  const screenSize = useGetScreenSize();
  
  return (
    <>
      <section 
        className={`w-full text-white flex flex-col justify-start sm:justify-center items-start lg:items-center relative py-8 xl:py-20`}
        style={{minHeight: `calc(100vh - 112px)`}}
      >
        <BackgroundImage 
          src={screenSize === 'xs'
            ? '/assets/images/home-background-mobile.gif' 
            // : 'https://www.youtube.com/embed/t177yIGlTb8?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=t177yIGlTb8' 
            : 'https://www.youtube.com/embed/F5uQ-P_mp6w?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=F5uQ-P_mp6w' 
          }
          fallbackColour="bg-darkBlue" 
          imageOrVideo={screenSize === 'xs' 
            ? 'image'
            : 'video'
          } 
          hasOpacity={true}  
          opacityColour='bg-darkBlue/80'
          />
        <div className="flex flex-col items-center w-full max-w-6xl gap-4 xl:gap-10">
          <h2 className="text-base md:text-2xl font-medium text-center">
            Select an option below to begin your Willship journey
          </h2>  
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch w-full gap-4 xl:gap-8 lg:gap-0">
            {choices.map((choice : Choices, i) => (
              <div key={i} className="flex flex-col items-center w-full sm:w-4/6 relative pb-20 px-4 sm:px-0 gap-4 z-10">
                <h1 className="font-sackHeavy text-3xl md:text-6xl">{choice.heading}</h1>
                {/* {screenSize !== 'xs' && */}
                  <p className="text-base md:text-2xl font-medium text-center">{choice.text}</p>
                {/* } */}
                <div className="w-full absolute bottom-0">
                  <Button
                    buttonText="Get Started"
                    theme={choice.buttonTheme}
                    linkTo={choice.link}
                    width="w-72"
                    tracking={false}
                  />
                </div>
              </div>  
            ))}
          </div>
          <div className="flex flex-row w-full justify-center py-4 xl:py-10">
            <MouseScroll />
          </div>
        </div>
      </section>
    </>
  )
};

export default HomeHero;