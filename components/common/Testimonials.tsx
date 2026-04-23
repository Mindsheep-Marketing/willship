import React from "react";
import BackgroundImage from "../../components/common/BackgroundImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import siteMap from "../../siteMap";
import Button from "./Button";
import useIsSmall from "../../utils/hooks/useIsSmall";
import { RiStarFill, RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

/*
 * Slick slider
 * 
 * CSS for prev/next arrows in styles/globals.css
 */

interface SlideData {
  [key: string]: {
    heading: string;
    paragraph: string;
    name: string;
    iconBgColour?: string;
    iconTextColour?: string;
  };
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface SlickSliderProps {
  title: string;
  subHeading ?: string;
  hasRequestQuote: boolean;
  requestQuoteLink: string;
  requestQuoteText: string;
  slides: SlideData;
  dataPaperformId?: string;
  dataPaperformPopup?: boolean;
}

const Slide: React.FC<{ data: SlideData[string] }> = ({ data }) => {
  const { heading, paragraph, name, iconBgColour, iconTextColour } = data;

  return (
    <div className="lg:w-full p-4">
      <div className="slide w-full min-h-[400px] h-full bg-darkBlue p-6 md:p-12 rounded-3xl text-center text-white flex flex-col justify-center items-center gap-4">
        <div className="flex gap-1 text-3xl stars">
          <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-red leading-tight">{heading}</h2>
        <p className="md:text-xl">{paragraph}</p>
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className={`${iconTextColour ? iconTextColour : "bg-red"} text-2xl md:text-3xl text-center w-10 md:w-14 h-10 md:h-14 py-1 md:py-2.5 rounded-full`} style={{backgroundColor: iconBgColour}}>{name.charAt(0)}</span>
          <p className="text-lg md:text-xl font-bold text-red">{name}</p>
        </div>
      </div>
    </div>
  );
};

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  const isSmall = useIsSmall;
  let size;

  if (isSmall()) {
    size = "24px";
  } else {
    size = "60px";
  }

  return (
    <div 
      className={className}
      style={{width: size, height: size, right: "15px"}}
      onClick={onClick}
    >
      <RiArrowRightSLine 
        className="arrow"
        style={{
          backgroundColor: "#002157", 
          fontSize: size, 
          color: "#ffffff", 
          borderRadius: "100%", 
          opacity: "0.5", 
        }}
      />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  const isSmall = useIsSmall;
  let size;

  if (isSmall()) {
    size = "24px";
  } else {
    size = "60px";
  }

  return (
    <div 
      className={className}
      style={{width: size, height: size, left: "15px"}}
      onClick={onClick}
    >
      <RiArrowLeftSLine 
        className="arrow"
        style={{backgroundColor: "#002157", fontSize: size, color: "#ffffff", borderRadius: "100%", opacity: "0.5"}}
      />
    </div>
  );
};

/*
 * Client logos
 */

const clients = [
  {
    height: "80px",
    logo: "/assets/images/testimonials/logo-baskin-robbins.png",
    name: "Baskin Robbins"
  },
  {
    height: "100px",
    logo: "/assets/images/testimonials/logo-emirates.svg",
    name: "Emirates"
  },
  {
    height: "70px",
    logo: "/assets/images/testimonials/logo-vrgmeta.svg",
    name: "VRG GRL"
  },
  {
    height: "60px",
    logo: "/assets/images/testimonials/logo-la-casa.svg",
    name: "La Casa Homewares"
  },
  {
    height: "70px",
    logo: "/assets/images/testimonials/logo-pcs.svg",
    name: "Pure Candle Supplies"
  },
  {
    height: "60px",
    logo: "/assets/images/testimonials/logo-grydale.png",
    name: "Grydale"
  },
  {
    height: "50px",
    logo: "/assets/images/testimonials/logo-scp.jpg",
    name: "Specialised Concrete Pumping"
  },
  {
    height: "80px",
    logo: "/assets/images/testimonials/logo-roleston-caravans.png",
    name: "Roleston Caravans"
  },
];

const Testimonials: React.FC<SlickSliderProps> = ({ 
  title, 
  subHeading,
  hasRequestQuote,
  requestQuoteLink,
  requestQuoteText, 
  slides,
  dataPaperformId,
  dataPaperformPopup,
}) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <section className="relative w-full py-10 lg:py-16 text-white text-center false">
        <BackgroundImage
          fallbackColour="true"
          imageOrVideo="image"
          src="/assets/images/bg-testimonials.jpg"
          hasOpacity={false}
        />

        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-medium text-3xl lg:text-forty text-darkBlue lg:mb-2">{title}</h2>
          <h3 className="font-medium text-xl lg:text-3xl text-darkBlue italic">{subHeading}</h3>
          
          <div className="grid grid-cols-4 lg:flex flex-wrap items-center justify-center px-16 py-4 lg:px-4 mt-4 lg:mt-10 gap-4 lg:gap-10">
            {clients.map((client, i) => (
              <img key={i} src={client.logo} alt={client.name} style={{maxHeight: client.height}} />
            ))}  
          </div>

          <div className="max-w-7xl mx-auto mb-7 md:mb-12">
            <Slider {...settings}>
              {Object.keys(slides).map((key) => (
                <Slide key={key} data={slides[key]} />
              ))}
            </Slider>
          </div>
        </div>

        {hasRequestQuote &&
          <Button
            buttonText={requestQuoteText}
            linkTo={requestQuoteLink}
            width="lg:w-auto inline-block p-12"
            theme="redBlue"
            dataPaperformId={dataPaperformId}
            dataPaperformPopup={dataPaperformPopup}
          />
        }
      </section>
    </>
  );
};

export default Testimonials;