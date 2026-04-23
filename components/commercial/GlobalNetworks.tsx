import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "../common/Button";

interface Props {
  quoteText?: string;
}

const GlobalNetworks = ({ quoteText }: Props) => {

  return (
    <section className="w-full flex flex-col items-center bg-darkBlue p-8 lg:p-12 text-white text-xl">
      <h2 className="text-forty font-medium lg:pb-12 text-center">
        Our Global Networks Are Working For You
      </h2>
      <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-center">
        <div className="w-full h-96 lg:w-5/12 lg:h-auto relative">
          <Image src='/assets/images/routes2.svg' layout='fill' objectFit="contain" alt='global routes'/>
        </div>
        <div className="w-full lg:w-7/12 flex flex-col gap-12">
          <p>
            In a global business it&apos;s all about the relationships you build. Our network of agents and service providers has been established over many years of mutual trust and co-operation.
          </p>
          <p>
            In many parts of the world, strong relationships can mean preferential assistance. It&apos;s good to know that, if required, we have the ability to call upon our contacts for the benefit of our customers.
          </p>
          <Button
            linkTo={'paperform'}
            buttonText={quoteText || "Request A Quote"}
            theme='redBlue'
            width='w-full lg:w-72'
          />
        </div>
      </div>
    </section>
  )

};

export default GlobalNetworks;