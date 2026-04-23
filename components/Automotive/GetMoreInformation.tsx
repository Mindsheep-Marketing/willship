import { externalLinks } from "../../siteMap";
import Button from "../common/Button";

const GetMoreInformation = () => (
  <section className="w-full flex justify-center py-12 px-4">
    <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 lg:gap-10 justify-center">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <h2 className="text-forty text-darkBlue font-medium">
          Get More Information
        </h2>
        <p>The Australian Government provides an excellent 8 step guide for what you need to do in order to import a vehicle.</p>
      </div>
      <div className="w-full lg:w-1/4 flex items-center justify-center">
        <Button
          buttonText="Learn More"
          linkTo={externalLinks.stepsToImporting.path}
          theme="redBlue"
          tracking={false}
        />
      </div>
    </div>
  </section>
);

export default GetMoreInformation;