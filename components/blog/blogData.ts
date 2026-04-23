import siteMap, { externalLinks } from "../../siteMap"

export interface BlogItem {
  year: number;
  month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
  date: number;
  image: string;
  heading: string;
  slug: string;
  content: {
    type: 'text' | 'image' | 'list' | 'subHeading';
    content: string | string[];
  }[];
}

const blogData : BlogItem[] = [
  {
    year: 2021,
    month: 'Feb',
    date: 26,
    image: '/assets/images/blog/feb26-2.jpg',
    heading: 'How to Ship a Boat Overseas',
    slug: 'how-to-ship-a-boat-overseas-2',
    content: [
      {
        type: 'subHeading',
        content: 'HOW TO SHIP A BOAT OVERSEAS'
      },
      {
        type: 'text',
        content: 'Owning a boat can be the ultimate expression of freedom, the open seas allow you to travel wherever you want before mooring at whichever beautiful seaside town takes your fancy.'
      },
      {
        type: 'text',
        content: 'Of course, despite this, when it comes to exporting a boat across the ocean from Australia, even the most reliable boats out there can often use a little help from something a little bigger.'
      },
      {
        type: 'text',
        content: 'Unlike cars and motorbikes, boats come in a huge array of sizes, shapes and types which means there are a few more options when it comes to shipping a boat.'
      },
      {
        type: 'subHeading',
        content: 'TYPES OF SHIPPING'
      },
      {
        type: 'text',
        content: 'There are four methods you can use to ship a boat and ultimately the type of shipping you go for will most likely come down to the specifics of your boat.'
      },
      {
        type: 'subHeading',
        content: 'ROLL-ON/ROLL- OFF'
      },
      {
        type: 'text',
        content: 'The first is roll-on/roll- off. To use this method the boat will need to be on a trailer for the entire trip so that it can roll onto and then off the carrier. It is possible to reduce the cost of this method of shipping by removing any antennas, radars or sails that boost the height or volume of your boat.'
      },
      {
        type: 'subHeading',
        content: 'CONTAINER SHIPPING'
      },
      {
        type: 'text',
        content: 'Another option is container shipping. Containers come in either 20ft or 40ft options and as such whether or not you can use this option will obviously come down to whether or not your boat can fit into a container!'
      },
      {
        type: 'text',
        content: 'In container shipping the boat is loaded into the container and then the container is loaded onto the boat. The container is never opened so this can be one of the most reliable methods of shipment if your boat is the correct size.'
      },
      {
        type: 'subHeading',
        content: 'FLAT RACK'
      },
      {
        type: 'text',
        content: 'Flat rack is an option that is mainly used for bigger boats. The boat is shipped in its own custom cradle and strapped down to the vessel. As with roll-on/roll- off, it is recommended that you remove anything that adds height or volume to your boat. This can end up saving you a lot of money.'
      },
      {
        type: 'subHeading',
        content: 'SUBMERSION'
      },
      {
        type: 'text',
        content: 'The final method is the submersion method. If you use this method your boat will be loaded and unloaded directly from the water.'
      },
      {
        type: 'subHeading',
        content: 'OTHER THINGS TO CONSIDER WHEN SHIPPING A BOAT'
      },
      {
        type: 'text',
        content: 'When exporting a boat from Australia the exact legal/import requirements will vary depending on which country you are exporting the boat to. However, some things to consider are the customs procedures and any registration requirements of the country you are exporting too.'
      },
      {
        type: 'text',
        content: 'Another thing to check before exporting your boat is that if you have a boat with air con or a fridge you may need to apply for a license from the department of environment and heritage.'
      },
      {
        type: 'text',
        content: 'With so many things to think about it can be much more difficult to ship a boat than other vehicles such as cars or motorcycles.'
      },
      {
        type: 'text',
        content: `However, if you are considering shipping your boat, please <a href=${siteMap.contact.path} class="blogLink">Click here</a> for an Instant Quote or to request more information, or feel free to drop us an email to ${externalLinks.infoEmail.text} or call directly at ${externalLinks.vehiclePhone.text}`
      },
      {
        type: 'text',
        content: `If you are looking to ship your boat to New Zealand you can find more <a href=${siteMap.vehicle.importBoatToAustralia.path} class='blogLink'>information on boat shipping here.</a>`
      },
    ]
  },
  {
    year: 2021,
    month: 'Apr',
    date: 29,
    image: '/assets/images/blog/apr29-1.jpg',
    heading: 'WILLSHIP EXPERIENCE: HALF-MILLION DOLLAR 1930 BENTLEY FROM SYDNEY TO IRELAND!',
    slug: 'willship-experience-half-million-dollar-1930-bentley-from-sydney-to-ireland',
    content: [
      {
        type: 'text',
        content: 'While we have a lot of experience in high end and high value vehicles, this one certainly caught our eye as something pretty special.'
      },
      {
        type: 'text',
        content: 'We paired up with the highly experienced team at Autofreight UK in order to prepare, secure and ship this vehicle half-way around the world, all the way to Ireland.'
      },
      {
        type: 'image',
        content: '/assets/images/blog/apr29-1-1.jpg'
      },
      {
        type: 'text',
        content: 'Such a long journey requires a certain level of expertise so the lucky new owner entrusted Willship / Autofreight to handle the logistics of sending their car to its new home.'
      },
      {
        type: 'text',
        content: 'The car in question was a very rare and beautiful 1930 Bentley Speed 6.'
      },
      {
        type: 'text',
        content: 'This is not only is it a rare car now, but it was even a rare car when it was first made. In fact, only 182 were ever built making this car a real piece of history from the moment it was produced.'
      },
      {
        type: 'image',
        content: '/assets/images/blog/apr29-1-4.jpg'
      },
      {
        type: 'text',
        content: 'At almost 90 years old, don’t let its age make you think it can’t compete though. It has a huge 6.5-liter engine that can produce 180hp. It’s no wonder that it recently sold for well over half a million dollars.'
      },
      {
        type: 'text',
        content: 'The Bentley Speed 6 itself is as legendary as it is powerful. Its features were extremely advanced for the time it was produced and included aluminium pistons, a twin-spark ignition, a high-performance cam, and a square-section intake manifold.'
      },
      {
        type: 'text',
        content: `The story goes that in the 1930s, Bentley’s chairman at the time <a href=${externalLinks.topSpeedBentley.path} target="_blank" class="blogLink">Woolf Barnato bet that his Speed 6 would be able to beat the “Blue Train Express” in a race</a>. This was a train that ran from Cote d’Azur in the south of France all the way up to Calais in the north.`
      },
      {
        type: 'text',
        content: 'Coming from a man who was a two-time winner of the 24 Hours of Le Mans, this was a claim to be taken seriously. With an average speed of 43mph he won the bet and even managed to freight the car to England and drive to London before the train arrived in Calais.'
      },
      {
        type: 'text',
        content: 'Now, this journey, while impressive, isn’t quite as long as the one our Speed 6 had to make to arrive at its new home in Ireland.'
      },
      {
        type: 'image',
        content: '/assets/images/blog/apr29-1-5.jpg'
      },
      {
        type: 'text',
        content: 'First, we carefully loaded the Bentley in an enclosed carrier to move it from its prestige dealership in Sydney to our loading depot. Once onsite, we secured it inside a 20ft container using high-quality chocks and lashing straps to ensure that it wouldn’t move an inch on its journey halfway around the world.'
      },
      {
        type: 'text',
        content: 'The loaded Bentley Speed 6 transhipped via Singapore and Southampton ports before making its final movement up to Dublin, completing the journey in just over a month and is now safely at its new home in Kilkenny, Ireland!'
      },
      {
        type: 'text',
        content: `If you need to ship a vehicle that needs a little extra care and attention then Willship have the expertise to help. <a href=${siteMap.contact.path} class='blogLink'>Click here</a> to use our AUTOMATED QUOTE CALCULATOR, shoot us an email at info@willship.com.au or give us a call on ${externalLinks.vehiclePhone.text}.`
      },
    ]
  },
  {
    year: 2022,
    month: 'Oct',
    date: 15,
    heading: 'How to Transfer your Car to NZ without a Hassle?',
    slug: 'transfer-your-car-to-nz-hassle-free',
    image: '/assets/images/blog/sep14.jpg',
    content: [
      {
        type: 'text',
        content: 'If you are not an experienced automobile importer, it is simple to ignore expenses and go over your budget. Before you transfer your car to NZ through a car shipping company, you must know the shipping cost and other necessary shipping requirements. Here is what you need to know to transfer your car to NZ without any hassle:'
      },
      {
        type: 'subHeading',
        content: 'Can I Transfer My Car to New Zealand?'
      },
      {
        type: 'text',
        content: 'Yes, you can transfer your car to NZ but first, do your research. No limitations apply to importing vintage automobiles into New Zealand; anybody can bring a car here for off-road use or add to a collection. When you transfer your car to NZ from Australia, make sure your vehicle complies with all applicable laws. Although Australian and New Zealand standards are comparable, there is no assurance that your automobile will adhere to NZ requirements.'
      },
      {
        type: 'text',
        content: 'For returning residents and new immigrants, there are exceptions to these regulations. You can import your automobile to New Zealand if you\'ve owned and used it for more than a year and fulfill specific requirements.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'How Much Does it Cost to Ship a Car to NZ? '
      },
      {
        type: 'text',
        content: 'Standard automobile costs between $2100 and $3000 to freight from Australia to New Zealand. This cost generally applies to smaller (18cbm) cars and may cover the following services:'
      },
      {
        type: 'list',
        content: [
          'Pre-export examination, paperwork, and costs',
          'Pick-up is available within 50 kilometers of the loading port',
          'Shipping by sea and marine insurance',
          'Delivery within 50 kilometers of the port, import taxes, and landing port inspection and clearance',
        ]
      },
      {
        type: 'text',
        content: 'There are additional expenses, though, that aren\'t applied by your freight forwarding agent. The quoted standard price for an automobile shipment from Australia to New Zealand often omits the following:'
      },
      {
        type: 'list',
        content: [
          '$55.71 Entry Fee + GST (calculated on the cost of freight, the value of the vehicle, and insurance)',
          'Registration & Compliance',
          'MPI Cleaning (if required)',
        ]
      },
      {
        type: 'text',
        content: 'The government organization MPI prevents foreign soil, insects, plant matter, or animals from entering New Zealand. To avoid excessive cleaning fees, you must ensure your automobile is clean before moving it from Australia to New Zealand.'
      },
      {
        type: 'text',
        content: 'In New Zealand, vehicle compliance is equivalent to the initial warrant of fitness. Before registration, it makes sure the vehicle complies with all NZ road safety criteria. The compliance check costs roughly $550NZD, although it may cost more if repairs are required to pass. To transfer your car to NZ, you can use a car shipping Australia to get a quote.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'Can You Take your Car and Caravan to New Zealand?'
      },
      {
        type: 'text',
        content: 'Yes, you can move your car and caravan to New Zealand. If the caravan has been in your possession for longer than a year, New Zealand has no import tax, and shipping will save you a lot of money.'
      },
      {
        type: 'text',
        content: '<b>Requirements for Importing a Caravan Temporarily</b>'
      },
      {
        type: 'list',
        content: [
          'The vehicle / caravan must continue to be duly registered in its home country under the name of the person who brought it to New Zealand.',
          'Before driving on New Zealand roads, you must obtain your vehicle\'s Warrant of Fitness or Certificate of Fitness.',
          'Paying the applicable ACC licensing fees is necessary to transfer your car to NZ. So that if you are in an accident, ACC will pay for a portion of your medical expenses.',
          'The Biosecurity Quarantine Service of the Ministry of Primary Industries must examine and clear the vehicle / caravan. There is a fee for the inspection, and there will be more fees if your car or caravan needs cleaning.',
          'Getting caravan insurance in New Zealand is strongly advised but not required',
          'You must pay road user charges while driving here if your car has a diesel engine or weighs more than 3500kg.',
        ]
      },
      {
        type: 'text',
        content: 'We suggest using a car shipping company like Willship to avoid extra charges or going overboard with your budget. They offer RORO shipping and can quickly ship your car to New Zealand.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Oct',
    date: 1,
    heading: 'How to Import a Car from the UK to Australia?',
    slug: 'importing-cars-from-uk-to-australia',
    image: '/assets/images/blog/car-import-2.jpg',
    content: [
      {
        type: 'text',
        content: 'Australia has traditionally been a significant market for British automobiles. An increasing number of cars will be bought and exported to Australia from the UK as the Australian auto manufacturing sector will close shortly. Many Irish, British, and returning Australians need to move not just their personal belongings but also their motorcycles, automobiles, and boats back to Australia.'
      },
      {
        type: 'text',
        content: 'You can face many challenges if you import a car from the UK to Australia for the first time. Here is what you need to know before you import a vehicle from the UK to Australia:'
      },
      {
        type: 'subHeading',
        content: 'Can I Buy a Car in the UK and Ship it to Australia?'
      },
      {
        type: 'text',
        content: 'You can only import a car from the UK to Australia under specific conditions. Unfortunately, you can\'t just go out and buy whatever automobile model, year, or manufacturer you desire. Before you import a car from the UK to Australia, you must confirm the import regulations with the Australian government. Here are a few conditions for importing a vehicle from the UK to Australia:'
      },
      {
        type: 'text',
        content: '<b>Car Owned for More Than a Year</b><br> If you have owned and operated an automobile for more than a year, you are eligible to import it from the UK. It is ideal for Australians seeking to return home or British nationals desiring to come to Australia. You can qualify for the Personal Import Scheme if you meet these requirements.'
      },
      {
        type: 'text',
        content: '<b>Cars Older Than 25 Years</b><br> Additionally, you can qualify to bring an automobile from the UK older than 25 years to Australia. These frequently include antique, vintage, and enthusiast cars. Because the UK has a larger market than Australia, you can find rare and vintage vehicles there.'
      },
      {
        type: 'text',
        content: '<b>Special Purpose Vehicles</b><br> Importing special-purpose cars is another option for purchasing and importing an automobile from the UK to Australia. These often contain items that don\'t adhere to specific Australian Design Rules, such as mobility vehicles, garbage trucks, and airport service vehicles.'
      },
      {
        type: 'text',
        content: '<b>Car Modified by Licensed Auto Shop</b><br> You might be able to import an automobile from the UK to Australia if a licensed auto shop has modified it. These cars should be on the registration of authorized vehicles (RAV) list. When the car arrives in Australia after being sent from the UK, the workshop checks to ensure it complies with all road requirements.'
      },
      {
        type: 'text',
        content: 'In extraordinary circumstances, you can apply for discretionary clearance for automobile shipment from the UK to Australia. These authorizations are uncommon and frequently subject to restrictions.'
      },
      {
        type: 'text',
        content: 'It\'s important to note that you cannot import a car from the UK to Australia without permission. Before transporting an automobile from the UK to Australia, you must ensure it follows all Australian import regulations.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'How Much Does Importing a Car from the UK to Australia Cost?'
      },
      {
        type: 'text',
        content: 'Roll-on Roll-off or RORO shipping of a car from the UK to Australia starts at around $4500. The starting price for container services is around $5000 Depending on your precise location and vehicle size, prices can change.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'Is it Worth Shipping a Car from the UK to Australia?'
      },
      {
        type: 'text',
        content: 'Here is why it is worth it to import a car from the UK to Australia:'
      },
      {
        type: 'text',
        content: '<b>Several Freight Firms</b><br> Australia is located very far from the rest of the world. There is rivalry among the freight firms that transport automobiles to Australia. You can easily compare prices from many businesses and select the best option to import a car from the UK to Australia.'
      },
      {
        type: 'text',
        content: '<b>Importing and Shipping Expenses</b><br> To determine if it is worthwhile to ship a car to Australia, you must first decide whether you are allowed to import your vehicle under the Australian import regulations. After that, you must consider the price of importing, customs duties, and shipping compared to the cost of upgrading the automobile in Australia. Due to the paperwork, some people advise against it. Still, with a competent car shipping company like Willship International guiding you, the actual process of importing your car to Australia is not too challenging.'
      },
      {
        type: 'text',
        content: '<b>Saves Money</b><br> When moving to Australia, you\'ll want to save as much money as possible. It is cheaper to import a car from the UK to Australia than to replace it. Moreover, Australia has one of the world\'s most costly auto marketplaces; importing automobiles instead of buying them may save you a ton of money. We recommend you seek a quote from a car shipping company like Willship International to move your car to Australia.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Sep',
    date: 15,
    heading: 'Everything you Need to Know about Importing a Car into Australia',
    slug: 'importing-a-car-into-australia',
    image: '/assets/images/blog/car-import.jpg',
    content: [
      {
        type: 'text',
        content: 'Many countries strictly regulate laws for vehicle import and export. Importing a car into Australia can be very challenging because most people aren\'t aware of the vehicle import regulations. In this article, we will tell you everything you need to know about importing a car into Australia, so keep reading:'
      },
      {
        type: 'subHeading',
        content: 'Can I import any car into Australia?'
      },
      {
        type: 'text',
        content: 'Yes, you can ship a car to Australia, but you must ensure it complies with safety regulations. You must obtain authorisation from the Vehicle Safety Standards Branch.'
      },
      {
        type: 'text',
        content: 'The same Goods and Services Tax (GST), customs fees, and Luxury Car Tax (LCT) rates apply to privately imported cars as to commercial ones. The customs value of the vehicle determines the customs duty.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'Which type of permit will I need to import a car into Australia?'
      },
      {
        type: 'text',
        content: '<b>Moving to Australia</b><br> Choose this option if you want to import your car to Australia. You can only import a vehicle every five years under the Personal Import Scheme if you have lived abroad for more than a year.'
      },
      {
        type: 'text',
        content: '<b>Racing Cars</b><br> Automobiles exclusively made for racing and not for use on public roads are allowed. For authorisation, vehicles entering Australia for a race must supply information about the event and the driver.'
      },
      {
        type: 'text',
        content: '<b>Off-Road Automobiles</b><br> Australian Customs demand a permit for entry into Australia for vehicles not intended for use on public roads. You can only use these automobiles for off-road usage and cannot register them for use on Australian public roads.'
      },
      {
        type: 'text',
        content: '<b>Temporary Imports</b><br> You will need a Carnet de Passages to import a car into Australia temporarily. However, you can\'t sell such a vehicle in Australia, and it must be shipped back to the country of origin within a year. Additionally, you will need to provide a bank guarantee or pay an additional bond to meet the import duties for Customs.'
      },
      {
        type: 'text',
        content: '<b>Classic Automobiles</b><br> Under the Rolling 25-Year Rule program, you can import cars and trucks built more than 25 years ago but have not undergone significant alterations. You must notify the infrastructure department about any adjustments to see if they grant clearance.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'Is it easy to import a car into Australia?'
      },
      {
        type: 'text',
        content: 'Importing a car into Australia isn\'t easy. You must check the following factors before importing a car into Australia.'
      },
      {
        type: 'text',
        content: '<b>Quarantine Inspection</b><br> When importing a car into Australia, you must ensure that each vehicle is entirely free of contamination, both internally and externally, before it arrives. Check the mudguards, mufflers, soil around the wheel, boot and spare tires, radiator, seeds, leaves, and dirt in the car or vehicle\'s interior.'
      },
      {
        type: 'text',
        content: 'Upon arrival in Australia, Biosecurity Officers from the Department of Water, Agriculture, and the Environment check the hygiene of road vehicles before releasing them from customs control. You are liable for any inspection fees. By hiring a car shipping company, you can avoid quarantine issues.'
      },
      {
        type: 'text',
        content: '<b>Presence of Asbestos</b><br> Australia has a ban on the import of asbestos. Before importing a car into Australia, you must ensure it is asbestos-free. Suppose the Australian Border Force (ABF) determines that your vehicle poses an asbestos risk. In that case, they will request guarantees that your car is asbestos-free.'
      },
      {
        type: 'text',
        content: 'ABF can keep the automobile at the border for sample and testing if you provide insufficient assurance. It can cause delays and cost you money. You can avoid such delays by hiring a car shipping company like Willship.'
      },
      {
        type: 'text',
        content: '<b>Refrigeration Systems or Air Conditioners</b><br> An import permit for ozone-depleting substances (ODS) and synthetic greenhouse gases may be necessary for road cars fitted with air conditioning or refrigeration systems (SGG).'
      },
      {
        type: 'text',
        content: 'You must ascertain the volume and kind of gas present in the equipment before importing a car into Australia with a refrigeration or air conditioning system to comply with reporting and licensing requirements.'
      },
      {
        type: 'text',
        content: '<b>Delays During Assessment</b><br> Your application review and decision-making process might take up to 60 business days. Before importing a car into Australia, ensure you have enough time to get approval. We suggest using a car shipping company like Willship International for importing a car into Australia because they have extensive experience in RORO shipping. They can assist you with transit insurance, quarantine, and customs issues.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Apr',
    date: 1,
    heading: 'Clean Car Tax / Rebate - Here\'s what we know',
    slug: 'clean-car-tax-rebate',
    image: '/assets/images/blog/apr1.jpg',
    content: [
      {
        type: 'text',
        content: 'As of the 1st of April 2022 the NZ government has introduced the ‘Clean Car Discount Scheme’.'
      },
      {
        type: 'text',
        content: 'The NZ government aims to achieve net zero CO2 emissions by 2050 and in order to do so they need to significantly reduce the emissions that derive from the transport sector.'
      },
      {
        type: 'text',
        content: 'The scheme has been introduced with a goal of lowering the cost of electric &amp; fuel-efficient vehicles by offering an incentive in the form of a rebate, so if you have a fuel efficient or electric vehicle then you could receive up to a whopping $8625.00 paid back to you by the NZ government at the time of registration - that would more than cover the cost of the shipping!'
      },
      {
        type: 'text',
        content: 'On the flip side of this, the government have introduced a fee for high emitting vehicles, so all imported cars, vans, SUV’s &amp; 4wd’s with a gross mass of less than 3500kg that emit 192 or more grams per kilometre of CO2 will now attract a fee at the time of registration, the maximum fee is $2875.00'
      },
      {
        type: 'text',
        content: 'Vehicles emitting between 147 and 191gm/km will be zero rated and will neither get a penalty or a rebate, however all limits are set to reduce each year.'
      },
      {
        type: 'text',
        content: 'More information can be found here - https://www.transport.govt.nz/area-of-interest/environment-and-climate-change/clean-cars/'
      },
      {
        type: 'text',
        content: 'So, the question then becomes - what does that mean for your car and how do you work out if you get a rebate or need to pay a fee?'
      },
      {
        type: 'text',
        content: 'The RightCar website (https://www.rightcar.govt.nz/) provides a searchable database of vehicles by type, make, model, or number plate. This allows you to look up the CO2 emissions, and what rebate or charge could apply to different vehicles, if you become the first registered owner of that vehicle.'
      },
      {
        type: 'text',
        content: 'We’d recommend searching for your specific vehicle in the database and checking whether or not you’ll be getting a rebate, paying a fee, or if your vehicle will be zero rated.'
      },
      {
        type: 'text',
        content: 'We\'ve done some research and listed out a few popular makes and models to give you a quick glance at that this means for certain vehicles:'
      },
      {
        type: 'list',
        content: [
          'Holden Commodore Diesel (2017 - 2020) - No rebate or fee',
          'Hyundai Tuscon Diesel (2015 - 2021) - No rebate or fee',
          'Tesla Model 3 (2019 - New) - Possible rebate of $3450.00 - $8625.00',
          'Hyundai Kona SUV (2018 - New) EV - Possible rebate of $3450 - $8625.00',
          'Mercedes Benz GLC SUV (plug in Hybrid) - Possible rebate of $2109.66 - $5635.00',
          'Holden Commodore Petrol (2017 - 2020) - Possible fee of $388.13 - $2875.00',
          'Hyundai Tuscon Petrol - Possible fee of up to $1782.50',
          'Nissan Navara (2015 - 2021) - Possible fee of $2070 - $2760',
          'Ford Focus Petrol (2010 - 2018) - Possible rebate of up to $583.72',
        ]
      },
      {
        type: 'text',
        content: 'The other thing to consider is that the vehicle’s that do incur a fee are generally the vehicles that are worth substantially more over in New Zealand than they are here in Australia, and these values will likely only increase as those types of vehicles become more and more scarce in the coming years. So it could be well worth it to still consider taking it across to New Zealand and to pay the fee, you could already have tens of thousands of dollars in instant equity in the car.'
      },
      {
        type: 'text',
        content: 'We hate surprises, especially expensive ones! So best to make sure you understand the costs in their entirety before making the decision to ship - If you have any questions or would like us confirm the possible rebate or tax on your car, or if you would like a quote to move anything across to New Zealand then please don’t hesitate to get in touch.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Sep',
    date: 1,
    heading: 'Logistics vs. Freight Forwarding',
    slug: 'logistics-vs-freight-forwarding',
    image: '/assets/images/blog/blog-logistics.jpg',
    content: [
      {
        type: 'subHeading',
        content: 'What is the difference between logistics and freight forwarding?'
      },
      {
        type: 'text',
        content: '<b>Freight Forwarder</b><br>A freight forwarding company plans shipments to deliver products from one location to another. It will handle the transfer of your products across many modes, such as ships to trains or trucks. These companies act as mediators and brokers between you and the shipping service providers.'
      },
      {
        type: 'text',
        content: '<b>Logistics</b><br>Unlike a freight forwarding company, logistics businesses cannot access shipping channels but control all their assets, including intermodal fleets of boats, trucks, and planes.'
      },
      {
        type: 'text',
        content: '<b>What should I ask a freight forwarder?</b><br>Various freight forwarding companies run their businesses differently. So, before making a decision, it\'s always advisable to address any worries you have about their operations, locations, and even network.'
      },
      {
        type: 'text',
        content: '<b>1. Who is accountable for my items\' insurance?</b><br>Appropriate insurance coverage is crucial. There is always a chance that anything might go wrong as your shipment travels thousands of miles. It\'s critical to understand who is in charge of this and if it\'s part of the base price, an add-on service, or something you must organize on your own.'
      },
      {
        type: 'text',
        content: '<b>2. Do they have a vast network of international agents?</b><br>Delivering the order to the client could be essential when the cargo reaches its destination. This service requires that your forwarder have links in that country and that they can deliver the orders promptly.'
      },
      {
        type: 'text',
        content: '<b>3. Have they handled cargo like yours before?</b><br>Cargo comes in various forms, including hazardous trash, machinery, clothing, and even chemicals. The freight forwarding company you choose must know the kind of products you\'re exporting. Your cargo is no longer within your control after it ships. For this reason, your freight forwarding company should be knowledgeable about handling your items and foresee any potential issues along the journey.'
      },
      {
        type: 'text',
        content: '<b>4.  Do they handle customs clearance?</b><br>Freight forwarder Brisbane can handle customs clearance. Additionally, a freight forwarder Brisbane can manage all the accompanying paperwork. It includes invoices, shippers\' export declarations, customs documents, and insurance forms. <br>However, other freight forwarding companies may solely serve as forwarders, which means they manage the logistics and shipping of your item. In this situation, you\'ll need to locate a different broker to take care of your shipment\'s customs clearance.<br><br>'
      },
      {
        type: 'subHeading',
        content: 'What should I expect from a freight forwarding company?'
      },
      {
        type: 'text',
        content: '<b>1. Extensive Network</b><br>Understanding various carriers and shipping regulations is necessary for cross-border cargo transportation. From the time you place an order until it is stored and delivered, freight forwarder Brisbane considers all legal and technical requirements. To provide you with the most extraordinary shipping experience, freight forwarder Brisbane has a quick networking system.'
      },
      {
        type: 'text',
        content: '<b>2. Tracking</b><br>You\'ll need to ask your forwarder about their international tracking policies, as monitoring is often only provided for interior domestic shipments. A Freight forwarder Brisbane can give your goods tracking options as they move toward their destination.'
      },
      {
        type: 'text',
        content: '<b>3. Insurance</b><br>You may feel secure about your shipments by working with a freight forwarder Brisbane since they know how and when to submit for insurance or an insurance claim.'
      },
      {
        type: 'text',
        content: '<b>4. Documentation</b><br>Suppose you are shipping your goods across long distances. In that case, you may need a ton of paperwork at every stage to complete the clearance procedure. You won\'t ever need to worry about documentation when working with a freight forwarder Brisbane. They will fulfill all the standards for your shipment if you only tell them where it is going.'
      },
      {
        type: 'text',
        content: '<b>5. Warehouse</b><br>It is necessary to find a location for safe and secure storage of items that could not reach their intended location for various reasons. To ensure the security of your goods, freight forwarder Brisbane provides the option of warehousing.'
      },
    ]
  },
  /* 9-11-2022 */
  {
    year: 2022,
    month: 'Aug',
    date: 15,
    heading: 'How can I avoid import tax in Australia?',
    slug: 'how-much-will-i-pay-for-customs',
    image: '/assets/images/blog/nov-blog.webp',
    content: [
      {
        type: 'text',
        content: 'There are several instances where import tax is not payable in Australia.  A Freight forwarder in Australia will put you in touch with a customs broker who assists you to navigate customs.'
      },
      {
        type: 'text',
        content: 'If you are freight forwarding USA to Australia or freight forwarding China to Australia there will be import tax payable.  You will also be liable for GST.  Imports valued less than $1000 are free from import tax, except alcohol and tobacco which do not have any duty exemptions.  Tariff Concession Orders allow an importer to import items which are not manufactured in Australia.  Such items can be imported duty-free.  Under the Tradex Scheme, where an importer plans to re-export goods they can import goods duty-free as long as the goods are not sold in Australia.'
      },
      {
        type: 'text',
        content: 'Logistics companies organising car shipping in Australia will advise that cars owned by the importer for 12 months can also be imported duty free.'
      },

    ]
  },
  {
    year: 2022,
    month: 'Aug',
    date: 1,
    heading: 'How much will I pay for customs?',
    slug: 'how-much-will-i-pay-for-customs',
    image: '/assets/images/blog/oct-blog.jpg',
    content: [
      {
        type: 'text',
        content: 'The amount you pay in customs will depend on the value of your goods and other costs.  For example, you are importing the cargo shipment of one vehicle.  The value of the vehicle is $20,000 and you paid $4,000 in transportation costs and $1000 in insurance.  The import duty will be 5% of the value, which is $1000.  You are liable for GST of 10% of the combined value of transportation, insurance and import duty.  Therefore, the GST is $2600. The total amount payable is import duty $1000 plus GST $2600 for a total of $3600.'
      },
      {
        type: 'text',
        content: 'However, there are also a raft of hidden fees and traps for the uninitiated which you may or may not have to pay.  For example if you can demonstrate you have owned the vehicle for at least 12 months these costs will be less.  Failure to properly declare customs details could cost you $$ fines.  Those undertaking car shipping Australia should be aware of the costs and rules around importing cars into Australia.  A freight forwarder will manage the transportation of your car, but you will be responsible for importation costs.  Hire a customs broker to help you navigate customs.'
      },

    ]
  },
  {
    year: 2022,
    month: 'Jul',
    date: 15,
    heading: 'Do I need a customs broker in Australia?',
    slug: 'custom-brokers-australia',
    image: '/assets/images/blog/sep-blog.jpg',
    content: [
      {
        type: 'text',
        content: 'First up, why do you need a customs broker?  The role of a customs broker is crucial for the smooth transition of goods across international borders.  There are a whole raft of rules and regulations when importing and exporting goods.  A customs broker is a trained and licensed professional.  The broker liaises with government, airline and port authorities to ensure the smooth transfer of goods across borders.  When document transition of goods across international borders is completed, goods may be cleared for entry into the country.'
      },
      {
        type: 'text',
        content: 'Usually you will find a freight forwarder Australia and shipping companies Australia will work with a customs broker.  A broker will do things such as ascertain ownership of goods and whether the goods can actually enter the country.  There are a range of complex regulations that must be addressed.  Meanwhile the freight forwarder will organise the logistics of physical transportation of the goods.  If you think you need to employ freight companies to move goods overseas, consider the actual services you need.'
      },
      {
        type: 'text',
        content: 'You will need a freight forwarder to organise the transportation of your goods.  You will also need a customs broker to manage the copious amount of paperwork that comes with moving goods across international borders.'
      },

    ]
  },
  {
    year: 2022,
    month: 'Jul',
    date: 1,
    heading: 'How do I find a freight forwarder?',
    slug: 'how-do-i-find-a-freight-forwarder',
    image: '/assets/images/blog/aug-blog.jpg',
    content: [
      {
        type: 'text',
        content: 'If you are looking for a freight forwarder, you need to assess your needs before you make your choice.  Whether it’s freight forwarding USA to Australia or freight forwarding China to Australia you need a reputable company.'
      },
      {
        type: 'text',
        content: 'You need a company with a proven track record and extensive experience.  Ensure the freight forwarder has services that meet your needs.  If you are shipping to the USA then a firm that specialises in China is not for you.  You will want a company that has flexible options for transport e.g. rail, trucking, ships, shared loads.'
      },
      {
        type: 'text',
        content: 'The freight forwarder of your choice should be able to work within your timelines.  They should also have a wide network of affiliations and contacts.  Good reviews are also an essential requirement.  Finally, the freight forwarder should be able to offer cargo insurance.  This protects you from loss while your cargo is being shipped.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Jun',
    date: 15,
    heading: 'What is the difference between shipper and freight forwarder?',
    slug: 'difference-between-shipper-and-freight-forwarder',
    image: '/assets/images/blog/jul-blog.jpg',
    content: [
      {
        type: 'text',
        content: 'In short, a shipper is just that; a shipper.  They simply move the cargo from port to port.  Typically shipping companies Australia will load containers from the dockside onto their ships.  They will transport the container to the destination country.'
      },
      {
        type: 'text',
        content: 'The container is delivered dockside and that is where their responsibility ends.  A shipper takes no responsibility for getting the containers to the final destination.  Once the container is on the dockside, it is up to the owner to sort everything out, including complex paperwork, customs, taxes and duty.  By contrast, a freight forwarder takes on the responsibility of getting cargo from point to point.  They will organise pick up from the location and transportation to the port.  They can oversee import/export regulations including customs forms.  The freight forwarders will organise and expedite shipping.  After the container arrives at the destination port, they will oversee custom requirements.  The freight forwarder will then deliver the container to the destination address.'
      },
      {
        type: 'text',
        content: 'Any good shipping company in Australia can also assist with compliance of any of the shipped items, in the new country.  A freight forwarder in Australia offers the logistics services of point to point service not just a port to port service offered by shippers.'
      },
    ]
  },
  {
    year: 2022,
    month: 'Jun',
    date: 1,
    heading: 'How do I ship a large item in Australia?',
    slug: 'how-do-i-ship-a-large-item-in-australia',
    image: '/assets/images/blog/jun-blog.jpg',
    content: [
      {
        type: 'text',
        content: 'If you are talking about moving large items like your car or household, then shipping containers are probably the best option.  You can arrange for a freight forwarder to pick up your car and place it into a container for transportation.'
      },
      {
        type: 'text',
        content: 'The cargo shipment is then securely tied down so it doesn’t move while in transit.  If you are shipping your vehicle internationally, then you will need to complete paperwork.  This applies for both export from Australia and importation to another country.  Freight forwarders will oversee this.  It is worth doing this as regulations can be quite complex.'
      },
      {
        type: 'text',
        content: 'Also freight forwarders who deal with car shipping Australia, will likely have car compliance contacts in the destination country.  These companies certify the vehicle for use.  If you are moving your whole household a shipping container is a viable way to move your possessions.'
      },
      {
        type: 'text',
        content: 'Freight companies can deliver a container to your property to be filled with your possessions.  They then seal it and take it.  They complete any necessary paperwork and organise a shipping company to move your container to the destination port.  From there, they will complete important paperwork and deliver containers to the destination address.'
      },
    ]
  },
]; 

export default blogData;
