import Image from "next/image";
import Link from "next/link";
import siteMap from "../../siteMap";
import Button from "../common/Button";

const shippingData = [
  {
    country: 'United Kingdom',
    flagImage: '/assets/images/flags/uk-flag.webp',
    list: [
      'Roll on, Roll off',
      'Shared Container',
      '20ft and 40ft Container',
    ],
    buttonText: 'Request A Quote',
    buttonLink: siteMap.contact.path
  },
  {
    country: 'USA',
    flagImage: '/assets/images/flags/us-flag.svg',
    list: [
      'Roll on, Roll off',
      'Shared Container',
      '20ft and 40ft Container',
    ],
    buttonText: 'Request A Quote',
    buttonLink: siteMap.contact.path
  },
  {
    country: 'New Zealand',
    flagImage: '/assets/images/flags/nz-flag.webp',
    list: [
      'Roll on, Roll off',
      '20ft and 40ft Container',
    ],
    buttonText: 'Get Instant Quote',
    buttonLink: siteMap.vehicle.vehicleQuote.path
  },
  {
    country: 'South Africa',
    flagImage: '/assets/images/flags/sa-flag.svg',
    list: [
      'Roll on, Roll off',
      'Shared Container',
      '20ft and 40ft Container',
    ],
    buttonText: 'Request A Quote',
    buttonLink: siteMap.contact.path
  },
  {
    country: 'Japan',
    flagImage: '',
    list: [
      'Roll on, Roll off',
      'Shared Container',
      '20ft and 40ft Container',
    ],
    buttonText: 'Request A Quote',
    buttonLink: siteMap.contact.path
  },
]

const ShippingGlobalToAu = () => (
  <section className='w-full flex flex-col items-center py-20'>
    <div className="w-full max-w-6xl text-center flex flex-col items-center gap-8 text-lg text-darkGrey">
    <h2 className='font-medium max-w-5xl text-center text-3xl lg:text-forty text-darkBlue'>Willship Primarily Offers Specialized Import Services From The Following Locations</h2>
      <div className="w-full flex flex-row flex-wrap justify-center gap-4">
        {shippingData.map((item, i) =>(
          <div key={i} className='flex flex-col w-full sm:w-1/3 lg:w-1/6 p-4 items-center text-lg gap-4 relative pb-20 bg-nearlyWhite hover:shadow-lg'>
            <div className="w-40 aspect-square flex justify-center items-center p-8 rounded-full border-darkBlue border-4">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {item.country === 'Japan'
                  ? (
                    <div className="w-full aspect-video border border-grey bg-white flex justify-center items-center">
                      <div className="h-8 aspect-square rounded-full bg-rose-700" />
                    </div>
                  ) : <Image src={item.flagImage} layout='fill' objectFit="contain" alt={item.country} />
                }
              </div>
            </div>
            <h3 className="font-medium text-darkBlue">{item.country}</h3>
            <h3 className="font-medium text-black">Shipping Options</h3>
            <ul className="pl-4 list-disc">
              {item.list.map((listItem, j) => (
                <li key={j}>
                  {listItem}
                </li>
              ))}
            </ul>
            <div className="absolute w-full bottom-0 p-2">

              <Button
                buttonText={item.buttonText}
                linkTo={item.buttonLink}
                theme='redBlue'
              />
            </div>
          </div>  
        ))}
      </div>
      <p>
        If your location is not mentioned above, we can still help. Please <Link href={siteMap.contact.path}><a className="font-bold text-darkBlue">contact us</a></Link> and let us know where you’re looking to ship from and we’ll be able to advise on availability and price.
      </p>
      <p>
        If you have any questions, or you’d like to speak with us on the phone then please <Link href='tel:+61732673694'><a className="font-bold text-darkBlue">give us a call</a></Link> give us a call and one of our friendly team can talk through it with you.
        {/* Almost anything with wheels that’s imported into Australia requires an import approval, its important that you check to ensure that your vehicle, motorcycle, caravan, camper trailer, motorhome etc is eligible for an approval prior to shipping. Vehicle’s and motorcycles are the most complicated, so please read through the below information to check to see if you think you’ll be eligible for an import approval. If you have any questions, or you’d like to speak with us on the phone then please <Link href='tel:+61732673694'><a className="font-bold text-darkBlue">give us a call</a></Link> and one of our friendly team can talk through it with you. */}
      </p>
    </div>
  </section>
);

export default ShippingGlobalToAu;