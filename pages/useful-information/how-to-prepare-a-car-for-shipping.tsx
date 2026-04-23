import Link from "next/link";
import BackgroundImage from "../../components/common/BackgroundImage";
import Button from "../../components/common/Button";
import Hero from "../../components/common/Hero";
import PrepareSteps from "../../components/usefulInformation/PrepareSteps";
import siteMap from "../../siteMap";

const PrepareCar = () => (
  <>
    <Hero
      bgImage="/assets/images/bg-carwash.jfif"
      hasButton={false}
      hasMouseScroll={false}
      heading="HOW TO PREPARE A CAR FOR SHIPPING"
      hasImageOpacity={true}
    />
    <section className="w-full flex flex-col items-center py-12 px-4 text-white relative">
      <div className="w-full max-w-5xl flex flex-col gap-4 items-center text-center">
        <p>
          When shipping a car overseas there are plenty of things to keep you busy. You have to set your dates, choose your method of shipping and work out the approximate shipping costs. Once all this is booked and taken care of, the final thing you will have to do is prepare your car for shipping. This can generally be done a few days before you set off.
        </p>
        <p>
          Here are some of the things you will need to sort out when you start to prepare a car for shipping.
        </p>
      </div>
      <BackgroundImage
        fallbackColour="bg-darkBlue"
        imageOrVideo="image"
        hasOpacity={true}
        opacityColour='bg-black/30'
        src='/assets/images/bg-preparecar.jfif'
      />
    </section>
    <PrepareSteps />

    <section className="w-full flex flex-col items-center py-12 px-4 text-white relative">
      <div className="w-full max-w-5xl flex flex-col gap-4 items-center text-center">
        <p>
          If you are considering shipping your car, please feel free to use our <Link href={siteMap.vehicle.vehicleQuote.path}>
            <a>
              INSTANT ONLINE QUOTE CALCULATOR
            </a>  
          </Link> or feel free to give us a call on 07 3267 3694 or email us at info@willship.com.au to discuss your requirements.
        </p>
        <p>
          For information on shipping vehicles to New Zealand please visit this page.
        </p>
        <div className="z-10 w-72">
          <Button
            buttonText="Instant Shipping Calculator"
            linkTo={siteMap.vehicle.vehicleQuote.path}
            theme='redBlue'
          />
        </div>
      </div>
      <BackgroundImage
        fallbackColour="bg-darkBlue"
        imageOrVideo="image"
        hasOpacity={false}
        src='/assets/images/bg-insurance2.jfif'
      />
    </section>
  </>
);

export default PrepareCar;