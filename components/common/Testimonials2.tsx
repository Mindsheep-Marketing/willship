import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import Button from "./Button"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import siteMap from "../../siteMap"
import { Navigation, Autoplay } from "swiper/modules"

interface Props {
    heading?: string
    images?: {
        src: string
        alt?: string
        width?: number
        height?: number
    }[]
}

const TestimonialsSection = ({ heading, images = [] }: Props) => {
    return (
        <section
            className="w-full bg-cover bg-center pt-16 pb-16"
            style={{
                backgroundImage: "url('/assets/images/testimonials-carToNz/testimonials-bg.png')",
            }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">
                {heading && (
                    <h2 className="text-3xl text-darkBlue md:text-4xl font-extrabold mb-4">
                        {heading}
                    </h2>
                )}

                {images.length > 0 && (
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
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative w-full sm:max-w-4xl mx-auto px-2 aspect-[16/9] mt-[-40px] sm:mt-[-100px]">
                                    <Image
                                        src={img.src}
                                        alt={img.alt || `Testimonial ${idx + 1}`}
                                        layout="fill"
                                        className="object-contain rounded-md"
                                        sizes="(max-width: 768px) 100vw, 800px"
                                        priority={idx === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
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

export default TestimonialsSection
