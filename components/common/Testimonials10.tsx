import Image from "next/image";
import { CarouselProvider, Dot, DotGroup, Slide, Slider } from "pure-react-carousel";
import { FaStar } from "react-icons/fa";
import Button from "../../components/common/Button";
import siteMap from "../../siteMap";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'pure-react-carousel/dist/react-carousel.es.css';
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";

const testimonialData = [
  {
    key: 0,
    text: ['A big thanks to the Team at WillShip International.',
      'They’ve just shipped my Triton from Perth to Wellington.',
      'If you want a totally Stress free, reliable company these guys are the ones to use.',
      'Fantastic Price and I was always kept up to date on the arrival of my Ute.',
      'Thanks so much!'],
    image: '/assets/images/testimonials/paul-webster.jpg',
    name: 'Paul Webster'
  },
  {
    key: 1,
    text: [
      'Highly professional company who do what they say they will. I was extremely happy with their efforts to assist me in importing my car into NZ recently. Highly recommended!'
    ],
    image: '/assets/images/testimonials/stuart-kath.jpg',
    name: 'Stuart Kath'
  },
  {
    key: 2,
    text: [
      'Easy straightforward service and great advice they gave us saving hundreds of dollars. Great companies highly recommend if we ever move vehicles and are so affordable. We are happy customers',
    ],
    image: '/assets/images/testimonials/engelbert-n-helen-shum.jpg',
    name: 'Engelbert & Helen Shum'
  },
  {
    key: 3,
    text: [
      'Shipped our vehicle from Brisbane to Auckland New Zealand. The process was a total breeze.',
      'The whole team was fantastic to deal with. Prompt communication, forwarded all necessary information and very pleasant to deal with. Answered all of our questions. Compliance was pre-paid through Willship International and was the best decision we made.',
      'Thank you to the Willship team.',
    ],
    image: '/assets/images/testimonials/terry-mun.jpg',
    name: 'Terry Mun'
  },
  {
    key: 4,
    text: [
      'They looked after me and kept me up to date on both sides of the Tasman. Every person I spoke to was courteous and happy and that includes the pick of and delivery guys.',
    ],
    image: '/assets/images/testimonials/rick-purnell.jpg',
    name: 'Rick Purnell'
  },
  {
    key: 5,
    text: [
      'The staff in both Brisbane and Wellington were amazing. They made the process so much less stressful than I had anticipated. The team in Wellington kept me updated several times a day on what was happening with my car.',
      'I would highly recommend Willship to anyone needing to ship their vehicle overseas.'
    ],
    image: '/assets/images/testimonials/trudi-taylor.jpg',
    name: 'Trudi Taylor'
  },
  {
    key: 6,
    text: [
      'I have to say that Carol & I are extremely happy with the service provided, both in Australia and New Zealand in these difficult times, instant responses to emails and questions and we would have no hesitation in recommending Willship International to future customers',
    ],
    image: '/assets/images/testimonials/derek-adams.jpg',
    name: 'Derek Adams'
  },
  {
    key: 7,
    text: [
      'Thanks to the team at Willship for making the movement of my 2 cars from Aus to NZ so smooth and effortless, awesome people to deal with, highly recommend them',
    ],
    image: '/assets/images/testimonials/patrick-lynch.jpg',
    name: 'Patrick Lynch'
  },
  {
    key: 8,
    text: [
      'We used Willship International to bring our truck to NZ from Brisbane. From organizing our quote, insurances to dropping the truck into Brisbane and getting it to our doorstep in NZ was AMAZING!!!',
      'Communication from The Brisbane Crew to the Great Team in NZ made the whole process so easy and stress-free. Definitely recommend these guys to anyone wanting to move vehicles over the water.',
      'Five-star service guys and girls. ☆☆☆☆☆ Very grateful.'
    ],
    image: '/assets/images/testimonials/monique-maree.jpg',
    name: 'Monique Maree'
  },
  {
    key: 9,
    text: [
      'I couldn’t be happier with the service I received from Willship when I sent my car home to Wellington from Melbourne.',
      'The team were out of this world helpful, answered all my questions, there were no surprises at all and even the paperwork was made easy with their help.',
      'Thank you all so very much. Totally recommend them.'
    ],
    image: '/assets/images/testimonials/Cathy-Clifford.jpg',
    name: 'Cathy Clifford'
  },
];

const Testimonials10 = () => {

  const screenSize = useGetScreenSize();

  const getSlideHeight = () => {
    switch (screenSize) {
      case 'xs':
        return 140;
      case 'sm':
        return 50;
      case 'md':
        return 40;
      case 'lg':
        return 40;
      default:
        return 40;
    };
  };

  return (
    <section className="w-full flex flex-col items-center py-12 bg-lightBlue bg-opacity-10"> {/* Added background */}
      <div className="w-full max-w-5xl flex flex-col text-center px-4 lg:px-0">
        <h2 className="text-darkBlue text-forty font-bold pb-6">Trusted by 10,000+ Families and Businesses - and counting!</h2>
        {/* <p className="text-nearlyBlack text-xl leading-loose">
            We have move tens of thousands of shipments in and out of Australia and all over the world. Our team has spent decades building long term successful relationships with our clients and fine tuning every aspect of our process to ensure our service offering to second to none. We are the international shipping partner you can depend on and our past and present clients can attest to our proven track record!
          </p> */}
      </div>
      <CarouselProvider
        className="w-full max-w-5xl bg-darkBlue rounded-xl items-center hover:cursor-grab"
        totalSlides={10}
        naturalSlideHeight={screenSize === 'xs' ? 125 : 45}
        naturalSlideWidth={100}
        isPlaying={true}
        interval={3000}
        infinite={true}
      >
        <div className="relative">
          {/* Slider */}
          <Slider>
            {testimonialData.map((item) => (
              <Slide key={item.key} index={item.key}>
                <div className="min-h-[400px] text-center text-white w-full lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-4 px-4 lg:px-0 py-12 h-full">
                  <div className="flex justify-center gap-1 text-white-500 text-shadow-2xl text-shadow-white-400 text-4xl">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div>
                    {item.text.map((paragraph, i) => (
                      <p key={i} className="text-xl">{paragraph}</p>
                    ))}
                  </div>
                  <div className="w-20 h-20 min-w-[80px] min-h-[80px] relative border-2 border-darkBlue rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                      alt={`${item.name} image`}
                    />
                  </div>
                  <p className="font-medium text-red text-xl">{item.name}</p>
                </div>
              </Slide>
            ))}
          </Slider>

          {/* Navigation Arrows */}
          <ButtonBack className="absolute top-1/2 left-[-5rem] -translate-y-1/2 bg-darkBlue text-white p-3 rounded-full shadow-md hover:bg-gray-200 transition hidden lg:block">
            <FiChevronLeft size={24} />
          </ButtonBack>
          <ButtonNext className="absolute top-1/2 right-[-5rem] -translate-y-1/2 bg-darkBlue text-white p-3 rounded-full shadow-md hover:bg-gray-200 transition hidden lg:block">
            <FiChevronRight size={24} />
          </ButtonNext>
        </div>
      </CarouselProvider>
      <div className="w-full max-w-xs z-10 mt-10">
        <Button
          buttonText="Get Started"
          linkTo={'paperform'}
          dataPaperformId={'w9e9ma75'}
          dataPaperformPopup={true}
          theme="redBlue"
        />
      </div>
    </section>
  );
};

export default Testimonials10;
