import Image from "next/image";

const HowMuchSpaceContent = () => (
  <section className="w-full flex flex-col items-center py-12 px-4">
    <div className="w-full max-w-5xl flex flex-col gap-8">
      <p>
        It can often be difficult to imagine just how much space you have around a vehicle once inside a container so we have drawn up the following graphics to illustrate what usable space is available when loading a ‘standard’ size sedan into a 20ft container.
      </p>
      <p>
        In this article, we will look at exactly what you can expect from each type of shipping, as well as analyse their advantages and disadvantages. This will help you make an informed decision about how exactly you should ship your car when sending it internationally.
      </p>
      <div className="w-full relative aspect-image1">
        <Image src='/assets/images/space-side.jfif' layout="fill" objectFit="contain" alt='Container Space' />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-2/3 aspect-image2 relative">
          <Image src='/assets/images/space-top.webp' layout="fill" objectFit="contain" alt='Container Space' />
        </div>
        <div className="w-full md:w-1/3 aspect-image3 relative">
          <Image src='/assets/images/space-front.webp' layout="fill" objectFit="contain" alt='Container Space' />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p>
            Of course depending on your specific vehicle, this free space will differ but this should give you a good idea.
          </p>
          <p>
            Generally we can fit 2-3m3 worth of cargo against the back wall behind the vehicle – so if you wanted to add items like your fridge, washing machine, several tea chest size removalist boxes this will normally fit with no issues.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <p>
            Internally, 20ft container dimensions are as follows:
          </p>
          <table className="border-collapse">
            <tr>
              <th className="border border-grey">Length</th>
              <th className="border border-grey">Width</th>
              <th className="border border-grey">Height</th>
            </tr>
            <tr>
              <td className="border border-grey p-2">5.90m</td>
              <td className="border border-grey p-2">2.34m</td>
              <td className="border border-grey p-2">2.28m (door opening)</td>
            </tr>
          </table>
        </div>


      </div>


    </div>

  </section>
);

export default HowMuchSpaceContent;