import Image from "next/image";
import { CarouselProvider, Dot, DotGroup, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";

const testimonialData = [
  {
    key: 0,
    text: ['very professional company. I felt comfortable and supported throughout the process especially efficient during this difficult time. communication was excellent. Well done. I will certainly recommend you to others. Thank you.'],
    image: '/assets/images/testimonials/Glenda-Brown.jpg',
    name: 'Glenda Brown'
  },
  {
    key: 1,
    text: [
      'Outstanding customer service !',
      'Fast reply’s to any questions and constant contact through the process.',
      'No hidden costs or traps for the inexperienced.',
      'If I need a service like this again I will be using Willship !!'
    ],
    image: '/assets/images/testimonials/RachelDowns.jpg',
    name: 'Rachael Downs'
  },
  {
    key: 2,
    text: [
      'Great company to deal with. Emails are responded quickly and I am kept on to date. No hidden charges.',
      'Big ups to the team @willship'
    ],
    image: '/assets/images/testimonials/Doneel-Maran.jpg',
    name: 'Doneel Maran'
  },
];

const Testimonials3 = () => {

  const screenSize = useGetScreenSize();

  const getSlideHeight = () => {
    switch (screenSize) {
      case 'xs':
        return 120;
      case 'sm':
        return 50;
      case 'md':
        return 40;
      case 'lg':
        return 30;
      default:
        return 30;
    };
  };

  return (
    <section className="w-full flex flex-col items-center py-12">
      <div className="w-full max-w-5xl flex flex-col text-center px-4 lg:px-0">
        <h2 className="text-darkBlue text-forty font-medium pb-6">Client Testimonials</h2>
        <p className="text-nearlyBlack text-xl leading-loose">
          We have move tens of thousands of shipments in and out of Australia and all over the world. Our team has spent decades building long term successful relationships with our clients and fine tuning every aspect of our process to ensure our service offering to second to none. We are the international shipping partner you can depend on and our past and present clients can attest to our proven track record!
        </p>
      </div>
      <CarouselProvider
        className="w-full max-w-5xl bg-white items-center hover:cursor-grab"
        totalSlides={3}
        naturalSlideHeight={getSlideHeight()}
        naturalSlideWidth={100}
        isPlaying={true}
        interval={3000}
      >
        <Slider>
          {testimonialData.map(item => (
            <Slide key={item.key} index={item.key}>
              <div className="text-center w-full lg:w-2/3 mx-auto flex flex-col items-center gap-4 py-8">
                <div>
                  {item.text.map((paragraph, i) => (
                    <p key={i} className='text-xl'>{paragraph}</p>
                  ))}
                </div>
                <div className="w-20 h-20 relative border-2 border-darkBlue rounded-full overflow-hidden">
                  <Image src={item.image} layout='fill' objectFit="cover" alt='reviewer image'/>
                </div>
                  <p className='font-medium text-darkBlue text-xl'>
                    {item.name}
                  </p>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex flex-row gap-3 justify-center">
          {testimonialData.map(item => (
            <Dot key={item.key} slide={item.key}>
              <div className={`
                h-0 w-8 border-2
                border-darkBlue
              `} />
            </Dot>
          ))}
        </div>
        <DotGroup showAsSelectedForCurrentSlideOnly={true}/>
      </CarouselProvider>
    </section>
  );
};

export default Testimonials3;