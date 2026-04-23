import Image from "next/image";
import siteMap from "../../siteMap";
import useGetScreenSize from "../../utils/hooks/useGetScreenSize";
import Button from "../common/Button";
import SectionSection from "../common/SectionSection";

const RoroImages = () => {

  const screenSize = useGetScreenSize();

  const videoSize = () => {
    switch (screenSize) {
      case 'xs':
        return {width: 'xsh', height: 'xsw'};
      case 'sm': 
        return {width: 'smh', height: 'smw'};
      case 'md': 
        return {width: 'mdh', height: 'mdw'};
      case 'lg': 
        return {width: '990', height: '250'};
      default: 
        return {width: '1980', height: '500'};
    };
  };

  return (
    <SectionSection>
      <div className="flex flex-col gap-8 px-4 items-center">

        <div className="w-full flex flex-row gap-2">
          <div className="w-1/2 relative aspect-4/3">
            <Image src='/assets/images/roro1.webp' layout='fill' objectFit='cover' alt="Roro shipping" />
          </div>
          <div className="w-1/2 relative aspect-4/3">
            <Image src='/assets/images/roro2.webp' layout='fill' objectFit='cover' alt="Roro shipping" />
          </div>


        </div>
        <p className="text-center">
          Wallenius Wilhelmson (one of the worlds largest roll on, roll off shipping lines) created a video further explaining how RoRo shipping works and they give a tour of one of their vessels, you can watch the video below:
        </p>
        <div className="w-full max-w-5xl aspect-video flex flex-row items-center">
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/533516848" width="100%" height="100%" frameBorder="0" allowFullScreen={false} className="my-4"></iframe>
        </div>

        <div className="w-full flex flex-col gap-4 text-left">
          <p>
            The one downside of this method of shipping is that you are not allowed to put any personal possessions in with the vehicle, the reason for this is due to theft. The shipping line nor the insurance company will take any responsibility for these items at any point of the transit. Anything you leave inside the vehicle is shipped strictly at your own risk. Because of this fact, the workers on the ports at both ends and the crew of the vessel know that they can take anything from the vehicle without facing any form of recourse or prosecution as there is no way to determine when something might have gone missing.
          </p>
          <p>
            If you do have some personal items you wish to take along with the vehicle, our recommendation is to firstly take them on the plane with you as excess baggage when you fly over, or alternatively if you have quite a lot of personal effects then you could also look at shipping everything inside your own 20ft or 40ft container – This option is quite a bit more expensive however, to get a better idea if RORO or container shipping is right for you please check out this article.
          </p>
          <p>
            We have included a myriad of photos of from the loading of the Trans Future 5 prior to a recent sailing from Australia to New Zealand to give you a better idea on how it all looks.
          </p>
          <p>
            Roll on roll off shipping works is available for cars, boats, caravans, motorhomes, motorcycles and most other large vehicles.
          </p>
          <p>
            If you would like a quotation on moving your vehicle via a roll on, roll off service then please feel free to use our Automated Quote Calculator, shoot us an email at info@willship.com.au or give us a call on 07 3267 3694.
          </p>
        </div>
        <div className="z-10 w-72 pt-8">
          <Button
            theme="redBlue"
            buttonText="Get Started"
            linkTo="paperform"
            dataPaperformId="w9e9ma75"
          />
        </div>
      </div>
    </SectionSection>
  );
};

export default RoroImages;