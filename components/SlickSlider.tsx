import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import siteMap from "../siteMap";
import Button from "./common/Button";
import { StarIcon } from "@heroicons/react/solid";
import { RiStarFill } from "react-icons/ri";

// CSS for prev/next arrows in styles/globals.css

interface SlideData {
  [key: string]: {
    heading: string;
    paragraph: string;
    name: string;
  };
}

interface SlickSliderProps {
  title: string;
  slides: SlideData;
}

const Slide: React.FC<{ data: SlideData[string] }> = ({ data }) => {
  const { heading, paragraph, name } = data;

  return (
    <div className="lg:w-full p-4 lg:p-12">
      <div className="slide w-full min-h-[400px] bg-darkBlue p-12 rounded-3xl text-center text-white flex flex-col justify-center items-center gap-4">
        <div className="flex gap-1 text-2xl">
          <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
        </div>
        <h2 className="text-3xl font-bold text-red">{heading}</h2>
        <p className="text-xl">{paragraph}</p>
        <p className="text-xl font-bold text-red">- {name}</p>
      </div>
    </div>
  );
};

const SlickSlider: React.FC<SlickSliderProps> = ({ title, slides }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className="py-4 py-8 lg:py-12 w-full text-white text-center false">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className='font-medium text-3xl lg:text-forty text-darkBlue'>{title}</h2>
          <Slider {...settings}>
            {Object.keys(slides).map((key) => (
              <Slide key={key} data={slides[key]} />
            ))}
          </Slider>
          <Button
            buttonText={"Request a Quote"}
            linkTo={siteMap.chinaToAustralia.ChinaToAusMultiPopup.path}
            width="lg:w-auto inline-block p-12"
            theme="redBlue"
          />
        </div>
      </section>
    </>
  );
};

export default SlickSlider;
