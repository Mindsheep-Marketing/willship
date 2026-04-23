import React from 'react';
import Button from '../common/Button';

interface Props {
  vehicleText: string;
}

interface VehicleInfo {
  introParagraph: string;
  complianceSection: {
    icon: string;
    title: string;
    description: string;
  };
  buttonText: string;
  buttonLink: string;
}

const VeryImportantInformationTemplate: React.FC<Props> = ({ vehicleText }) => {
    console.log(vehicleText)
  
  const getVehicleInfo = (vehicleType: string): VehicleInfo => {
    const vehicleInfoMap: Record<string, VehicleInfo> = {
      "Small vehicle(under 14m3)": {
        introParagraph: 'To calculate the total cost of importing your vehicle into NZ, and to legally register it for use on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Compliance & Registration Costs',
          description: 'All vehicles must pass through entry certification and compliance inspection before they can be registered for use in NZ. Costs vary depending on the vehicle\'s age, condition, and any modifications.'
        },
        buttonText: 'Click here to Access the Vehicle Shipping Hub',
        buttonLink: 'https://shippinghub.willship.com.au'
      },
      "Medium vehicle(14m3-18m3)": {
        introParagraph: 'To calculate the total cost of importing your vehicle into NZ, and to legally register it for use on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Compliance & Registration Costs',
          description: 'All vehicles must pass through entry certification and compliance inspection before they can be registered for use in NZ. Costs vary depending on the vehicle\'s age, condition, and any modifications.'
        },
        buttonText: 'Click here to Access the Vehicle Shipping Hub',
        buttonLink: 'https://shippinghub.willship.com.au'
      },
      "Large vehicle(18m3+)": {
        introParagraph: 'To calculate the total cost of importing your vehicle into NZ, and to legally register it for use on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Compliance & Registration Costs',
          description: 'All vehicles must pass through entry certification and compliance inspection before they can be registered for use in NZ. Costs vary depending on the vehicle\'s age, condition, and any modifications.'
        },
        buttonText: 'Click here to Access the Vehicle Shipping Hub',
        buttonLink: 'https://shippinghub.willship.com.au'
      },
      "Motorhome": {
        introParagraph: 'To calculate the total cost of importing your vehicle into NZ, and to legally register it on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Compliance & Registration Costs',
          description: 'All vehicles must pass through entry certification and compliance inspection before they can be registered for use in NZ. Costs vary depending on the vehicle\'s age, condition, and any modifications.'
        },
        buttonText: 'Click Here to Access to the Motorhome Shipping Guide',
        buttonLink: 'https://shippinghub.willship.com.au/shipping-a-motorhome-to-new-zealand'
      },
      "Caravan/ Camper trailer": {
        introParagraph: 'To calculate the total cost of importing your caravan into NZ, and to be able to legally register it and tow it on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Warrant of Fitness, Gas Certification & Registration Costs',
          description: 'All caravans must pass a warrant of fitness and obtain a gas certificate before they can be registered for use in NZ. Costs vary depending on the type of caravan, condition, and any modifications.'
        },
        buttonText: 'Click here to Access the Caravan Shipping Guide',
        buttonLink: 'https://shippinghub.willship.com.au/shipping-a-caravan-from-australia-to-new-zealand'
      },
      "Boat on trailer": {
        introParagraph: 'To calculate the total cost of importing your Trailer Boat into NZ, and to be able to legally register it and tow it on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Trailer Warrant of Fitness & Registration Costs',
          description: 'All trailers must pass a warrant of fitness before they can be registered for use in NZ. Boats do not require any form of registration in New Zealand.'
        },
        buttonText: 'Click here to Access the Trailer Boat Shipping Guide',
        buttonLink: 'https://shippinghub.willship.com.au/shipping-a-trailer-boat-to-new-zealand'
      },
      "Motorcycle": {
        introParagraph: 'To calculate the total cost of importing your Motorcycle into NZ, and to be able to legally register it and ride it on the road in New Zealand, it\'s essential to understand there are several additional costs and requirements beyond the freight. These vary depending on your vehicle and personal situation but generally include:',
        complianceSection: {
          icon: '🔧',
          title: 'Motorcycle Compliance & Registration',
          description: 'All motorcycles must undergo entry compliance before they can be registered in New Zealand.'
        },
        buttonText: 'Click here to Access the Motorcycle Shipping Guide',
        buttonLink: 'https://shippinghub.willship.com.au/shipping-a-motorcycle-to-new-zealand'
      }
    };

    return vehicleInfoMap[vehicleType] || vehicleInfoMap["Small vehicle(under 14m3)"];
  };

  const vehicleInfo = getVehicleInfo(vehicleText);

  const commonSections = [
    {
      icon: '💰',
      title: 'Import Taxes & GST',
      description: 'You\'ll need to determine whether you qualify for the New Zealand Import GST exemption. If not, 15% GST will be payable on the vehicle\'s landed value (purchase price + shipping + insurance).'
    },
    {
      icon: '🌱',
      title: 'Clean Car Standard (CO₂ Emissions Tax)',
      description: 'If your vehicle emits above the NZ government\'s set CO₂ threshold, you may be charged a Clean Car Standard tax. This can range from a few hundred to several thousand dollars, depending on your vehicle\'s emissions profile.'
    }
  ];

  // Add Clean Car Standard section only for vehicles that aren't caravan, trailer_boat, or motorcycle
  const shouldShowCleanCarStandard = !['Caravan/ Camper trailer', 'Boat on trailer', 'Motorcycle'].includes(vehicleText);

  const allSections = shouldShowCleanCarStandard 
    ? [...commonSections.slice(0, 1), commonSections[1], vehicleInfo.complianceSection]
    : [commonSections[0], vehicleInfo.complianceSection];

  const transitInsuranceSection = {
    icon: '🔒',
    title: 'Transit Insurance (Optional)',
    description: `We recommend transit insurance to protect your ${vehicleText === 'Caravan/ Camper trailer' ? 'caravan' : vehicleText === 'Boat on trailer' ? 'Trailer Boat' : vehicleText === 'Motorcycle' ? 'Motorcycle' : 'vehicle'} during shipping. This is not included in your quote and is completely optional, but strongly advised.`
  };

  const helpSection = {
    icon: '🧭',
    title: 'We\'re here to Help!',
    description: 'To help you understand everything involved, we\'ve created a detailed step-by-step Shipping Hub that explains:'
  };

  const helpListItems = [
    `The full process of shipping a ${vehicleText === 'Caravan/ Camper trailer' ? 'caravan' : vehicleText === 'Boat on trailer' ? 'Trailer Boat' : vehicleText === 'Motorcycle' ? 'Motorcycle' : 'vehicle'}`,
    'Required documents and how to submit them',
    'How to calculate your total costs',
    'What taxes and inspections may apply',
    'Eligibility for GST exemption',
    'How to book your shipment'
  ];

  const InfoSection: React.FC<{ section: { icon: string; title: string; description: string } }> = ({ section }) => (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{section.icon}</span>
          <h3 className="text-lg font-semibold text-darkBlue mb-2">{section.title}</h3>
        </div>
        <p className="text-darkGrey leading-relaxed">{section.description}</p>
      </div>
    </div>
  );

  return (
    <section className="w-full flex flex-col items-center  bg-nearlyWhite">
      <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 items-stretch">
        <div className="flex flex-row flex-wrap w-full max-w-6xl gap-y-4 p-4 items-stretch bg-darkBlue text-center border-[1px] border-darkBlue">
            <span className="w-full text-white font-sackLight text-2xl">
                VERY IMPORTANT INFORMATION
            </span>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-6">
        
        <div className="md:py-8 py-4 rounded-lg">
          <p className="text-darkGrey text-lg mb-6 leading-relaxed">
            The pricing provided in this quote covers international shipping and customs and quarantine clearance.
          </p>
          
          <p className="text-darkGrey text-lg mb-8 leading-relaxed">
            {vehicleInfo.introParagraph}
          </p>

          <hr className='w-full my-4 border-darkBlue' />
          {/* Import Taxes & GST */}
          <InfoSection section={allSections[0]} />
          
          {/* Clean Car Standard - only for applicable vehicles */}
          {shouldShowCleanCarStandard && <InfoSection section={commonSections[1]} />}
          
          {/* Vehicle-specific compliance section */}
          <InfoSection section={vehicleInfo.complianceSection} />
          
          {/* Transit Insurance */}
          <InfoSection section={transitInsuranceSection} />
          <hr className='w-full my-4 border-darkBlue' />
          
          {/* Help section */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex flex-col items-start">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{helpSection.icon}</span>
                <h3 className="text-lg font-semibold text-darkBlue mb-2">{helpSection.title}</h3>

              </div>
              <p className="text-darkGrey leading-relaxed mb-4">{helpSection.description}</p>
                <ul className="list-disc list-inside text-darkGrey space-y-1 ml-8">
                  {helpListItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
            </div>
          </div>

          {/* Call to action button */}
          <div className="flex flex-col justify-center mt-8 gap-2">
            <Button
              buttonText={vehicleInfo.buttonText}
              linkTo={vehicleInfo.buttonLink}
              theme='blueRed'
              width='w-full'
            />
          </div>

          <p className="text-darkGrey text-center mt-6 italic">
            It&apos;s designed to ensure you&apos;re fully informed and prepared — with no surprises along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VeryImportantInformationTemplate;
