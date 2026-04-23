import { Swiper, SwiperSlide } from 'swiper/react'
import Button from "../../components/common/Button";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import siteMap from "../../siteMap";

import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const testimonialImages = [
  '/assets/images/testimonials-carToNz/1.png',
  '/assets/images/testimonials-carToNz/2.png',
  '/assets/images/testimonials-carToNz/3.png',
]

export default function TestimonialsSection() {
  return (
    <section
      className="w-full bg-cover bg-center pt-16 pb-16"
      style={{
        backgroundImage: "url('/assets/images/testimonials-carToNz/testimonials-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl text-darkBlue md:text-4xl font-medium mb-4">
          Trusted by 10,000+ Families and Businesses - and counting!
        </h2> 

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="w-full custom-swiper-nav"
        >
          {testimonialImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="max-w-full sm:max-w-4xl mx-auto px-2">
                <img
                  src={img}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-auto object-contain rounded-md 
                             mt-[-40px] sm:mt-[-100px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  <div className="w-full max-w-xs lg:mt-[-80px] z-10 justify-center items-center mx-auto mt-8">
    <Button
      theme="redBlue"
      buttonText="Get Started"
      linkTo="paperform"
      dataPaperformId="w9e9ma75"
    />
  </div>
    </section>
  )
}

