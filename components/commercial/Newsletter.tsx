import Image from "next/image";
import siteMap from "../../siteMap";
import Button from "../common/Button";
import NewsletterInput from "./NewsletterInput";

const NewsLetter = () => {

  return (
    <section className="w-max-xl grid grid-cols-1 md:grid-cols-2 bg-darkBlue text-white text-center text-xl">
      <div className="w-full p-12 flex flex-col justify-center items-center">
        <h3 className="text-forty font-medium pb-6">
          Supercharge Your Business with Insider Insights
        </h3>
        <p className="pb-6">
        Subscribe to Our Exclusive Import/Export Newsletter Today!
        </p>
        <NewsletterInput/>
      </div>
      <div className="w-full">
        <img className="w-full" src='/assets/images/willship-explain.jpg'/>
      </div>
    </section>
  )

};

export default NewsLetter;