import Image from "next/image";
import Link from "next/link";

interface BannerSectionProps {
  backgroundImage: string;
  left: {
    heading: string;
    smallImage: string;
    smallImage2: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  rightImage: string;
}

const BannerSection = ({
  backgroundImage,
  left,
  rightImage,
}: BannerSectionProps) => {
  return (
    <section
      className="relative w-full bg-cover bg-center pt-20 px-6 md:px-16 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex flex-col max-w-3xl text-white justify-center items-center lg:items-center text-center lg:text-left lg:ml-2">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-bold mb-4 m-6">
            {left.heading}
          </h2>
          <div className="w-full max-w-full h-[280px] sm:h-[250px] md:h-[350px] lg:h-[400px] relative my-4 mx-auto lg:mx-0 mt-[-80px] mb-[-40px]">
            <Image
              src={left.smallImage}
              alt="Small Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 lg:mt-[-50px] mb-4">
            <div className="w-auto hidden md:block sm:block">
              <Image
                src={left.smallImage2}
                alt="Small Image"
                width={48}
                height={48}
                className="sm:w-12 sm:h-12 md:w-16 md:h-16"
              />
            </div>
            <p className="text-base sm:text-lg md:text-2xl font-bold items-center text-center lg:text-left">
              {left.text}
            </p>
          </div>

          <Link href={left.buttonLink}>
            <a target="_blank" rel="noopener noreferrer">
              <div className="w-full sm:w-[300px] md:w-[300px] lg:w-[500px] mb-10 transition-transform duration-300 hover:scale-95">
                <Image
                  src="/assets/images/banner/checkout.png"
                  alt="Additional Small Image"
                  width={500}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            </a>
          </Link>
        </div>

        <div className="relative block w-[150%] h-[500px] sm:w-[150%] sm:h-[700px] md:h-[800px] lg:ml-[1000px] lg:w-[1000px] lg:h-[900px] lg:absolute lg:top-1/2 lg:right-0 lg:mr-[-400px] lg:-translate-y-1/2 mt-[-70px] lg:mt-[100px]">
          <Image
            src={rightImage}
            alt="Banner Right Image"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;