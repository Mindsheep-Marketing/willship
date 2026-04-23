import { Swiper, SwiperSlide } from 'swiper/react'
import Button from "../../components/common/Button";
import 'swiper/css'
import 'swiper/css/navigation'
import siteMap from "../../siteMap";
import { Navigation, Autoplay } from 'swiper/modules'

const testimonialImages = [
  '/assets/images/industry-pages/testimonials-industry/1.png',
  '/assets/images/industry-pages/testimonials-industry/2.png',
  '/assets/images/industry-pages/testimonials-industry/3.png',
  '/assets/images/industry-pages/testimonials-industry/4.png',
]
type TestimonialIndustryProps = {
  title?: string
}

export default function TestimonialIndustry({ title }: TestimonialIndustryProps) {
  return (
    <section
      className="w-full bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/assets/images/testimonials-carToNz/testimonials-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-8 text-darkBlue">
          {title}
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
              <div className="max-w-4xl mx-auto px-2">
                <img
                  src={img}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-auto max-h-[600px] object-contain rounded-md mx-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full max-w-xs mx-auto mt-8">
          <Button
            theme="redBlue"
            buttonText="Get Started"
            linkTo="paperform"
            dataPaperformId="w9e9ma75"
          />
        </div>
      </div>
    </section>
  )
}