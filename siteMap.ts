import ChinaToAusMultiPopup from "./components/forms/ChinaToAusMultiPopup";

const siteMap = {
  home: {
    path: '/',
    title: 'International Freight Shipping Logistics Company | Willship International',
    description: 'Looking for a logistics company to solve all your international freight shipping needs? Call Willship International on (07) 3267 3694. Click here to learn more.'
  },
  crates: {
    path: '/crates',
    title: 'Crates Shipping | Brisbane to Auckland and Christchurch',
    description: 'Willship International now offers an innovative and cost effective shipping solution. Introducing our new crate shipping service. International freight services have never been more accessible. Call now.',
    cratesQuote: {
      path: '/crates/instant-quote'
    }
  },
  vehicle: {
    path: '/import-vehicle',
    title: 'Importing & Exporting Vehicles Internationally | Willship',
    description: 'We\'ve helped thousands of happy customers during our 50+ years in the business, and we\'d love to help you too. for best deals contact us on Willship.com.au',
    importCarToAustralia: {
      path: '/import-vehicle/import-car-to-australia',
      title: 'Import Cars To and From Australia | Willship International',
      description: 'We specialize in shipping vehicles to and from Australia, New Zealand, the UK, and Ireland. Please contact on Willship.com.au for getting a quote.'
    },
    importBoatToAustralia: {
      path: "/import-vehicle/import-boat-to-australia",
      title: 'Import Boats from Australia to NZ | Vehicle Shipping',
      description: 'We Specialize in Shipping Trailer Boats Between the Following Locations. For Destinations Outside of NZ, Australia, Please give the chance to our expert.'
    },
    importMotorcycleToAustralia: {
      path: "/import-vehicle/import-motorcycle-to-australia",
      title: 'Import motorcycles from Australia to NZ | Vehicle Shipping',
      description: 'Willship Ship Motorcycles Between the Following Locations are NZ, UK, Australia. For more Destinations Outside Of These Please give us a call on (07)3267 3694.'
    },
    importCaravanToAustralia: {
      path: "/import-vehicle/import-caravan-to-australia",
      title: 'Import Caravans from Australia to NZ | Vehicle Shipping',
      description: 'We Ship Caravans Between the Following Locations are NZ, UK, Australia, etc. For more Destinations Outside Of These Please give us a call on (07)3267 3694.'
    },
    importMotorhomesToAustralia: {
      path: "/import-vehicle/import-motorhomes-to-australia",
      title: 'Import Motorhomes From NZ to Australia | Vehicle Shipping',
      description: 'Willship International Primarily Ship Motorhomes Between the Following Locations like NZ and Australia. For Destinations Outside of these Please Contact Us.'
    },
    importMachineryToAustralia: {
      path: "/import-vehicle/import-machinery-to-australia",
      title: 'Importing Machinery from NZ to Australia | Vehicle Shipping',
      description: 'We have been doing International machinery shipping for more than 50 years. Give the chance to our Experts to Help you out. For more information Contact us!'
    },
    importCarToNZ: {
      path: '/import-vehicle/import-car-to-nz',
      title: 'Import Car From Australia to NZ | Willship International',
      description: 'Shipping a vehicle between Australia and New Zealand is now easier than you think! Here are the experts for a simple and affordable vehicle shipping solution.'
    },
    importCarToUK: {
      path: '/import-vehicle/import-car-to-uk',
      title: 'Shipping A Car From Australia to UK | Vehicle Shipping',
      description: 'Willship International provides shipping services to UK, which is not easier. Get your car shipped to the UK at most competitive prices. Call us today. '
    },
    importCarToIreland: {
      path: '/import-vehicle/import-car-to-ireland',
      title: 'Shipping A Car From Australia to Ireland | Willship International',
      description: 'Willship International have help dozens of Irish expats safely move their vehicle and belongings back home, and we\'d love to help you to. Contact us!'
    },
    importCarNZtoAustralia: {
      path: '/import-vehicle/import-car-nz-to-australia',
      title: 'Import Car From NZ to Australia | Willship International',
      description: 'Willship International is the Most Trusted Source for New Zealand International Shipping and International Delivery. For getting best deals give us a call!'
    },
    importCarGlobalToAustralia: {
      path: '/import-vehicle/import-car-global-to-australia',
      title: 'Importing a Vehicle Into Australia | Shipping a Car to Australia',
      description: 'Looking to import a car into Australia? It\'s not as simple as it may sound, we break down the process of shipping a vehicle to Australia here.'
    },
    vehicleQuote: {
      path: '/instantquote'
    },
    vehicleQuoteData: {
      path: '/import-vehicle/quote'
    },
    vehicleChecklist: {
      path: '/import-vehicle/checklist'
    },
    vehicleNewPaperformLink: {
      path: 'https://w9e9ma75.paperform.co/'
    }
  },
  consultation: {
    path: '/consultation',
    title: 'Consultation | Willship International',
    description: 'Willship International is a vehicle shipping specialist since many years. We provide the services like freight forwarding, vehicle moving. Book a Consultaion Now!'

  },
  commercial: {
    path: '/freight-forwarder',
    title: 'International Freight Forwarding Services - Australian Freight Forwarder',
    description: 'Willship is a trusted Australian freight forwarder with 50+ years experience in international freight services. #1 Choice for Import & Export Solutions.',
    importingToAustralia: {
      path: '/freight-forwarder/importing-into-australia',
      title: 'Importing Goods into Australia | Australian Import Agent | Willship',
      description: 'Willship International is a trusted Australian import agent offering leading freight services. Call us for quotes on importing goods into Australia today!'
    },
    educationHub: {
      path: '/freight-forwarder/education-hub',
      title: 'Education Hub | Willship International',
      description: 'You can take advantage of great services and competitive rates from the USA, Asia, and Europe only on Willship International in terms of Freight Forwarding.',
    },
    exportingFromAustralia: {
      path: '/freight-forwarder/exporting-from-australia',
      title: 'Exporting Goods from Australia - Export from Australia',
      description: `Exporting goods from Australia? Click here! We Offer industry-leading sea and air export services at competitive rates. Learn more and get in touch now.`
    },
    customsClearance: {
      path: '/freight-forwarder/customs-clearance',
      title: 'Customs Brokers - Import Customs Clearance Agent | Willship',
      description: 'Willship is home to a team of experienced and dedicated customs brokers with 30+ years track record. Contact us for the best in worldwide freight services.'
    },
    wareHousing: {
      path: '/freight-forwarder/ware-housing',
      title: 'Brisbane Warehousing and Logistics - Warehousing and Transport',
      description: 'Willship International offers storage space for goods at affordable rates. We have designated storage spaces for all your warehousing and logistics needs.'
    },
    freightLogistics: {
      path: '/freight-forwarder/freight-logistics',
      title: 'Project Logistics Solutions | Willship',
      description: 'Willship has 50 years experience in handling complex international project logistics. Whether it\'s heavy, out of gauge or complicated cargo, we handle it all.'
    },
    commercialFreightQuote: {
      //note- page not made, using modals for quotes
      path: '/freight-forwarder/commercial-freight-quote',
    },
    internationalFreightFaq: {
      path: '/freight-forwarder/international-freight-faq',
      title: 'Import Cars To and From Australia | Willship International',
      description: 'We specialize in shipping vehicles to and from Australia, New Zealand, the UK, and Ireland. Please contact on Willship.com.au for getting a quote.'
    },
    freightBlog: {
      path: '/freight-forwarder/freight-blog',
      title: 'International Freight News | Importing Exporting News',
      description: 'Willship International offers innovative freight solutions to international freight companies, freight suppliers, and freight forwarding companies. Call us!'
    },
    successStories: {
      path: '/freight-forwarder/succes-stories',
      title: 'Success Stories | Importing Exporting News',
      description: 'Willship International offers innovative freight solutions to international freight companies, freight suppliers, and freight forwarding companies. Call us!'
    },
    wareHousingNew: {
      path: '/freight-forwarder/warehousing',
      title: 'Warehousing space available in Brisbane Northside | Willship International',
      description: 'Willship International offers storage space for goods at affordable rates. We have designated storage spaces for all kinds of import-export goods. Contact us!'
    },
    freightForwarderBrisbane: {
      path: '/freight-forwarder/brisbane',
      title: 'Freight Forwarders Brisbane - Shipping Company Brisbane | Willship',
      description: 'Willship is one of the top-rated freight forwarders Brisbane has to offer. 50 years of international shipping experience. Get Free quote now - no hidden costs.',
    },
    freightForwarderSydney: {
      path: '/freight-forwarder/sydney',
      title: 'Sydney Freight Forwarders - Freight Forwarder Sydney | Willship',
      description: 'Willship International - Top-rated Sydney Freight Forwarders with 50 years of international shipping experience. Get a free quote today - no hidden costs.',
    },
    freightForwarderMelbourne: {
      path: '/freight-forwarder/melbourne',
      title: 'Melbourne Freight Forwarding - Freight Forwarder Melbourne | Willship',
      description: 'Willship International is a trusted Melbourne freight forwarding company providing reliable and stress free international shipping services for 50 years.',
    },
    freightForwarderAdelaide: {
      path: '/freight-forwarder/adelaide',
      title: 'Freight Forwarders Adelaide - Adelaide Freight Company | Willship',
      description: 'Willship International are top-rated Freight Forwarders Adelaide. 50 years of international shipping experience. Get a free quote today - no hidden costs.',
    },
    freightForwarderPerth: {
      path: '/freight-forwarder/perth',
      title: 'Perth Freight Forwarder - Freight Forwarders Perth | Willship',
      description: 'Willship International - Top-rated Perth Freight Forwarder with 50 years of international shipping experience. Get a free quote today - no hidden costs',
    },
    tradeFinance: {
      path: '/trade-finance',
      title: 'Trade Finance & More for Your Business Needs | Willship International',
      description: 'Premier Asset Finance, a leading finance brokerage, collaborates with Willship International to assist our esteemed import clients. Together, we not only support you in settling payments with your suppliers for ordered goods but also ensure that your product moves seamlessly from start to end.',
      financeModal: {
        path: '/trade-finance/form'
      }
    }
  },
  pacificIslands: {
    path: '/shipping-from-australia-to-the-pacific-islands',
    title: 'Commercial Freight Forwarder | Shipping From Australia to the Pacific Islands',
    description: 'Willship International provides Freight Forwarding services from Australia to the Pacific Islands. We have an established network of partners in the Pacific Islands. Call us!',
    pacificIslandsQuote: {
      path: '/shipping-from-australia-to-the-pacific-islands/quote'
    }
  },
  chinaToAustralia: {
    path: '/shipping-between-china-and-australia',
    title: 'Shipping From China to Australia - China Shipping Agent | Willship',
    description: 'Shipping from China to Australia? Willship International is your trusted freight forwarder when importing from China - Get an Instant Quote Now.',
    chinaAustraliaQuote: {
      path: '/shipping-between-china-and-australia/quote'
    },
    chatToUs: {
      path: '/shipping-between-china-and-australia/chat'
    },
    instantFCLQuote: {
      path: '/shipping-between-china-and-australia/fclquote'
    },
    popupJourney: {
      path: '/shipping-between-china-and-australia/popupjourney'
    },
    airFreight: {
      path: '/shipping-between-china-and-australia/airfreight'
    },
    productSampleQuote: {
      path: '/shipping-between-china-and-australia/productsamplequote'
    },
    customsClearanceForm: {
      path: '/shipping-between-china-and-australia/customsclearanceform',
      journey: {
        path: '/shipping-between-china-and-australia/customsclearanceformp/journey'
      }
      // path: '/shipping-between-china-and-australia/customsclearanceform'
    },
    ChinaToAusMultiPopup: {
      path: '/shipping-between-china-and-australia/multipopup'
    },
    personalOrBusiness: {
      path: '/shipping-between-china-and-australia/popupjourneychinatoaus',
      personal: {
        path: '/shipping-between-china-and-australia/popupjourneychinatoaus/personal'
      }
    }
  },
  vietnamToAustralia: {
    path: '/shipping-between-vietnam-and-australia',
    title: 'Shipping from Vietnam to Australia - Importing From Vietnam to Australia',
    description: 'Shipping from Vietnam to Australia? Willship International is an Australian owned and operated freight forwarder with a network of partners in Vietnam.'
  },
  indiaToAustralia: {
    path: '/shipping-between-india-and-australia',
    title: 'Shipping From India to Australia - Export From India to Australia',
    description: 'Shipping from India to Australia? Willship International is an Australian owned and operated freight forwarder with an established network of partners in India.'
  },
  usefulInformation: {
    path: '/useful-information',
    title: 'International Vehicle Importing Australia | Useful Information',
    description: 'Are you interested in shipping a classic car internationally? Call Willship on (61) 7 3267 3694, or send us an online inquiry on willship.com.au today!',
    importingCarsIntoAustralia: {
      path: '/useful-information/importing-a-car-into-australia'
    },
    exploringOptionsForInternationalCarShipping: {
      path: '/useful-information/options-for-international-car-shipping'
    },
    whatTypesOfVehiclesCanBeShippedUsingRoRo: {
      path: '/useful-information/what-types-of-vehicles-can-be-shipped-using-roro'
    },
    compliance: {
      path: '/useful-information/compliance-in-new-zealand'
    },
    transitInsurance: {
      //using /useful-infomation title and description
      path: '/useful-information/transit-insurance'
    },
    howToGetStatementOfComplianceInNz: {
      //using /useful-infomation title and description
      path: '/useful-information/how-to-get-a-statement-of-compliance-in-new-zealand'
    },
    howToShipOldCar: {
      //using /useful-infomation title and description
      path: '/useful-information/how-to-safely-ship-a-classic-car-overseas'
    },
    shipCaravan: {
      //using /useful-infomation title and description
      path: '/useful-information/what-to-prepare-when-shipping-a-caravan-abroad'
    },
    howSafeToShipCar: {
      //using /useful-infomation title and description
      path: '/useful-information/how-safe-is-it-to-ship-a-car-overseas'
    },
    shippingToNZDocumentation: {
      path: '/useful-information/shipping-to-nz-what-documentation-is-required',
      title: 'HOW TO GET A STATEMENT OF COMPLIANCE IN NEW ZEALAND',
      description: ''
    },
    howMuchSpaceInContainer: {
      path: '/useful-information/how-much-space-is-in-a-container'
    },
    bestWayToShipMultipleCars: {
      path: '/useful-information/best-way-to-ship-multiple-cars-overseas'
    },
    movingFromAuToNz: {
      path: '/useful-information/moving-to-new-zealand-from-australia',
      title: 'Willship International | Freight Forwarder & Vehicle Shipping',
      description: 'Willship International is a vehicle shipping specialist since many years. We provide the services like freight forwarding, vehicle moving. Call us today!'
    },
    howToPrepareCar: {
      path: '/useful-information/how-to-prepare-a-car-for-shipping'
    },
    roroShippingHowItsDone: {
      path: '/useful-information/roll-on-roll-off-shipping-how-its-done',
      title: 'Roll On Roll Off Shipping How Its Done',
      description: 'We specialize in shipping vehicles to and from Australia, New Zealand, the UK, and Ireland. Please contact on Willship.com.au for getting a quote.'
    },
    roroVsContainer: {
      path: '/useful-information/roll-on-roll-off-vs-container-shipping-which-is-right-for-you'
    },
    parametersOfContainers: {
      path: '/useful-information/parameters-of-sea-containers'
    },
    roroShippingForHeavyMachinery: {
      title: 'RoRo Shipping for Heavy Machinery: Simplifying Logistics for the Industrial Sector',
      path: '/useful-information/roro-shipping-for-heavy-machinery',
      description: 'In the industrial sector, the shipment of heavy machinery poses unique logistical challenges. With oversized dimensions, high value, and complex handling requirements, the conventional shipment methods may not always suffice. This is where RoRo (Roll-on/Roll-off) shipping, expertly managed by Willship International, steps in to streamline the logistics and deliver efficient project management solutions.'
    },
    internationalShippingMadeEasy: {
      title: 'International Shipping Made Easy: How to Simplify the Process',
      path: '/useful-information/international-shipping-made-easy',
      description: 'Navigating the complexities of international shipping can be a daunting task, whether you are a seasoned exporter or a small business trying to expand globally. Thankfully, with Willship International, the process to ship international goods can be simplified and made more efficient.'
    },
    unpackingTheBenefitsOfRoRoShipping: {
      title: 'Unpacking the Benefits of RoRo Shipping in Project Logistics Scenarios',
      path: '/useful-information/unpacking-the-benefits-of-roro-shipping',
      description: 'In the industrial sector, the shipment of heavy machinery poses unique logistical challenges. With oversized dimensions, high value, and complex handling requirements, the conventional shipment methods may not always suffice. This is where RoRo (Roll-on/Roll-off) shipping, expertly managed by Willship International, steps in to streamline the logistics and deliver efficient project management solutions...'
    },
    topRoroShippingDestinations: {
      title: 'The Top Roro International Shipping Destinations and Routes',
      path: '/useful-information/the-top-roro-international-shipping-destinations-and-routes',
      description: 'In the vast ocean of international logistics, roro shipping sails as a pivotal player. For those not acquainted with the term, "roro" stands for roll-on/roll-off, a method uniquely tailored for the transportation of wheeled cargo, such as cars, trucks, and heavy equipment. As the demand for such services continues to rise, it\'s worth taking a moment to dive deep into the top roro shipping destinations...'
    },
  },
  whatWeShip: {
    path: '/what-we-ship',
    title: 'Willship International | Freight Forwarder & Vehicle Shipping',
    description: 'Willship International is a vehicle shipping specialist since many years. We provide the services like freight forwarding, vehicle moving. Call us today!'
  },
  privacy: {
    path: '/freight-privacy-policy'
  },
  termsAndConditions: {
    path: '/freight-trading-terms-and-conditions',
    title: 'Terms & Conditions | Willship International',
    description: 'Explore the Terms and Conditions of Willship International Pty Ltd, governing our Services and including important information about liability exclusions and indemnities - please read them carefully.'
  },
  gallery: {
    path: '/gallery',
    title: 'Importing Vehicles to Australia Gallery | Willship International',
    description: 'You can find the pictures here of a few of the more unique cars we have moved over the years. For getting quotes and more information visit willship.com.au'
  },
  blog: {
    path: '/blog',
    title: 'International Freight News | Importing Exporting News',
    description: 'Willship International offers innovative freight solutions to international freight companies, freight suppliers, and freight forwarding companies. Call us!'
  },
  about: {
    path: '/about-us',
    title: 'Willship International | Freight Forwarder & Vehicle Shipping',
    description: 'Willship International is a vehicle shipping specialist since many years. We provide the services like freight forwarding, vehicle moving. Call us today!'
  },
  terms: {
    path: '/terms-and-conditions',
    title: 'Terms and Conditions | Willship International',
    description: 'These contractual conditions apply to the Services provided by Willship International Pty Ltd. These Trading Conditions contain exclusions of liability and indemnities in favour of Willship International Pty Ltd. You should read these Trading Conditions carefully.'
  },
  roroSchedule: {
    path: '/roro-shipping-schedule',
    title: 'Import Cars To and From Australia | Willship International',
    description: 'We specialize in shipping vehicles to and from Australia, New Zealand, the UK, and Ireland. Please contact on Willship.com.au for getting a quote.'
  },
  contact: {
    path: '/contact-us',
    title: 'Import Cars To and From Australia | Willship International',
    description: 'We specialize in shipping vehicles to and from Australia, New Zealand, the UK, and Ireland. Please contact on Willship.com.au for getting a quote.'
  },
};

export default siteMap;

export const externalLinks = {
  onlineTracking: {
    path: 'http://remote.williamsglobal.com.au:8001/logon.aspx'
  },
  importPlants: {
    path: 'https://www.agriculture.gov.au/import/goods/plant-products/how-to-import-plants'
  },
  stepsToImporting: {
    path: 'https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/importing-road-vehicle-australia/8-steps-importing-vehicle'
  },
  commercialPhone: {
    text: '+61 (7) 3267 0575',
    path: 'tel:+61732670575'
  },
  vehiclePhone: {
    text: '+61 (7) 3267 3694',
    path: 'tel:+61732673694'
  },
  infoEmail: {
    text: 'info@willship.com.au',
    path: 'mailto:info@willship.com.au'
  },
  incotermsGraph: {
    path: 'https://admin.willship.com.au/wp-content/uploads/2021/07/Incoterms-graph.pdf'
  },
  topSpeedBentley: {
    path: 'https://www.topspeed.com/cars/bentley/1929-bentley-speed-6-ar169120.html'
  },
  dmcaLink: {
    path: 'https://www.dmca.com/Protection/Status.aspx?ID=9a6c36a3-f00b-4c23-a61b-c64a57fac914'
  }
}