import Image from "next/image";
import Link from "next/link";
import siteMap from "../../siteMap";
import AutoQuoteButton from "../common/AutoQuoteButton";
import SectionSection from "../common/SectionSection";

const heading = 'text-3xl md:text-4xl lg:text-forty font-medium text-darkBlue';

const WhatToConsider = () => (
  <SectionSection>
    <div className="text-xl text-darkGrey gap-8 flex flex-col">
      <h2 className={heading}>
        What to consider for immigration
      </h2>
      <p>
      The reason why so many people consider moving to New Zealand from Australia is the straightforward immigration process. <Link href='https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/australian-resident-visa'>
        <a className="text-blue-700">
          Australian citizens and permanent residents can visit, study, work and live in New Zealand
        </a></Link> without needing to apply for a visa. A New Zealand resident visa will be given when you arrive if you meet the following criteria:
      </p>
      <ul className="list-disc font-bold ml-8">
        <li>
          You can prove your identity via your passport
        </li>
        <li>
          You have Australian citizenship or permanent resident status
        </li>
        <li>
          You do not have a criminal conviction or have been deported or excluded from another country
        </li>
      </ul>
      <p>
        <i>Important note: If you leave New Zealand your Resident Visa will expire.</i>
      </p>
      <div className="relative w-full max-w-xl aspect-4/3 mx-auto">
        <Image src='/assets/images/kayaks.webp' layout="fill" objectFit="cover" alt="New Zealand" />
      </div>
      <h2 className={heading}>
        Finances
      </h2>
      <p>
        The banking infrastructure between Australian and New Zealand is very similar to many Australian financial institutions also operating in NZ. The New Zealand Dollar (NZD) has a stable exchange rate with the Australian dollar getting you slightly more in NZD.
      </p>
      <p>
        Your Australian credit or EFTPOS card will usually work at ATMs and in shops with PayPass being very popular in NZ.
      </p>
      <h2 className={heading}>
        Property
      </h2>
        <p>
          The most popular places to live in New Zealand are Auckland, Wellington, and Christchurch making them the more expensive places to rent and buy.
        </p>
        <p>
          For renters, fixed-term tenancies are usually 12-month contracts with two weeks upfront rent and four weeks bond as a security deposit.
        </p>
        <p>
          If you are looking at buying or building a residential property in New Zealand only residents and citizens can buy homes to live in. The buying process is well regulated to keep everything fair. Most houses in New Zealand are standalone with a few apartments popping up in the bigger cities.
        </p>
        <p>
          Bartering over the price is typical for a property with most homes listed with <Link href='https://www.newzealandnow.govt.nz/live-in-new-zealand/housing/buying-or-building'>
            <a className="text-blue-700">
              an RV (rateable value), GV (government valuation) or CV (council valuation) price.
            </a>
          </Link>
        </p>
        <h2 className={heading}>
          Tax
        </h2>
        <p>
          Income taxes will, of course, apply if you are working in New Zealand via a Pay As You Earn (PAYE) system automatically deducted from your salary. The sliding scale rate on a tax year in New Zealand runs from April 1st to March 31st.
        </p>
        <p>
          Please note: If you have an Australian sourced income you will still need to file a tax return in Australia.
        </p>
        <h2 className={heading}>
          Schooling
        </h2>
        <p>
          Australian Citizens are treated as domestic students in New Zealand, so education, including tertiary, is charged at the local cost. Most primary and secondary schools in New Zealand are free with private school options available as well.
        </p>
        <p>
          The school year runs for four terms starting in early January running until as late as December 20th.
        </p>
        <div className="relative w-full max-w-xl aspect-4/3 mx-auto">
          <Image src='/assets/images/nz.webp' layout="fill" objectFit="cover" alt="New Zealand" />
        </div>
        <h2 className={heading}>
          Healthcare
        </h2>
        <p>
          <Link href='https://www.newzealandnow.govt.nz/living-in-nz/healthcare'>
            <a className="text-blue-700">
            New Zealand offers universal healthcare
            </a>
          </Link> through a public system with Australian citizens and residents eligible for two tiers of healthcare benefits:
        </p>
        <ul className="list-disc ml-8">
          <li>
            Tier 1: The full range of public health care benefits if you plan to remain in New Zealand for at least two years.
          </li>
          <li>
            Tier 2: Immediate/emergency hospital visits and maternity services with varying costs to see a local doctor and the full rate for pharmaceuticals if your stay will be less than two years.
          </li>
        </ul>
        <h2 className={heading}>
          The metric system
        </h2>
        <p>
          Weights and measures use the metric system of kilograms and metres so you won’t have to re-learn all of that or download a calculator. Phew.
        </p>
        <h2 className={heading}>
          The best way to move
        </h2>
        <p>
          It’s very easy to move your things, including your car to New Zealand thanks to companies like Willship, who offer reduced rates to make moving cost-effective and efficient. 
        </p>
        <p>
          For example, the cost to ship your car from Australia to New Zealand can be as little as AUD$1850.00 door to door. Many people opt to do this because selling a car can be a hassle and why wouldn’t you want to keep your loved vehicle when moving to your new home?
        </p>
        <p>
          When you consider the loss you’ll make in the private sale <Link href={siteMap.vehicle.vehicleQuote.path}><a className="text-blue-700">
            it’s a no brainer to take your vehicle
          </a></Link> with you when prices are this low.
        </p>
        <div className="mx-auto">
          <AutoQuoteButton />
        </div>
        <h2 className={heading}>
          Vehicle compliance
        </h2>
        <p>
          Willship can also offer <Link href={siteMap.usefulInformation.compliance.path}><a className="text-blue-700">
            full compliance/registration services
          </a></Link> in both Auckland and Christchurch for imported vehicles. This means that after the arrival of the vehicle, the compliance check and safety certificate can be supplied in the one action.
        </p>
        <p>
          Your vehicle structure will be inspected to ensure it’s safe for use on NZ roads, with a certificate of compliance and a warrant of fitness issued so you can then register the vehicle.
        </p>
        <h2 className={heading}>
          Pets
        </h2>
        <p>
          Obviously, you are taking your furry family members with you; it’s non-negotiable. Pet quarantine is a simple process when moving to New Zealand from Australia. As long as your pet is in good health and free of disease, and you can prove this with a health certificate, you will be alright.
        </p>
        <p>
          Your <Link href='https://www.mpi.govt.nz/importing/live-animals/pets/steps-to-importing-cats-and-dogs/'>
            <a className="text-blue-700">dog or cat will need to be microchipped</a>
          </Link>, and if they are on any medications, they will need to be declared. A veterinarian will need to inspect your pet before travel, and you’ll need to find a New Zealand vet to register your pet with at least five working days before you leave.
        </p>
        <p>
          Once you arrive at the airport, dogs, and cats will need to travel as cargo, and unfortunately, no toys or blankets are allowed in the carrier with your pet. No permits are required unless your pet has lived in another country, all that is required is quarantine and a little bit of paperwork.
        </p>
        <h2 className={heading}>
          Utilities and internet
        </h2>
        <p>
          New Zealand is quite progressive and very focused on eco-friendly energy with wind-generated and hydroelectric sources creating much of their electricity. Gas is common in kitchens and for hot water systems and is usually piped directly to the home.
        </p>
        <p>
          Water is treated and drinkable straight from the tap and renters will have the water bill covered by the landlord as part of the council rates. It’s also good to note that all of New Zealand is digital for TV and radio.
        </p>
        <p>
          Broadband is only just being rolled out across New Zealand, so you will likely be on ADSL unless you find yourself in one of the bigger cities. Really rural areas have no cabling at all.
        </p>
        <h2 className={heading}>
          Public transport
        </h2>
        <p>
          The significant hubs like Auckland, Christchurch, and Wellington have excellent public transport options, but for the most part, you’ll need a car, which is why we recommend shipping your own car over.
        </p>
        <p>
          Your Australian driver’s license is okay to use for the first 12 months, but then you’ll need to obtain a NZ driving license which doesn’t require any testing it’s just a straight swap with some fees.
        </p>
        <h2 className={heading}>
          Employment
        </h2>
        <p>
          You may already have a job lined up if you are considering the move, or you may be jumping without a parachute for which it will please you to know that Australians don’t need to have their qualifications recognised or apply for a separate work visa.
        </p>
        <p>
          There are loads of recruitment websites and cities grow; the job market is becoming more lucrative.
        </p>
        <h2 className={heading}>
          New Zealand culture
        </h2>
        <p>
          The great thing about Moving to New Zealand from Australia is the similarities in culture. NZ offers the fast-paced, urban lifestyle in places like Auckland and Wellington, but also has plenty of countryside for those who want something a little more downtempo.
        </p>
        <h2 className={heading}>
          Moving tips
        </h2>
        <p>
          Think of packing up your life as an opportunity to cull. Really question what things you want to take across the Tasman. Consider these four main moving tips:
        </p>
        <ul className="list-disc ml-8">
          <li>
            Keep a separate folder of any documents or receipts relevant to the move for easy access to make the relocation go smoother
          </li>
          <li>
            Get a price estimate from an international shipping company
          </li>
          <li>
            Create a floor plan of your new home to get an idea of which furniture or appliances will fit and what needs to go
          </li>
          <li>
            Consider that it may take a couple of weeks for your items to arrive in New Zealand so consider how to put the things you’ll need during that time in your flight luggage
          </li>
        </ul>
        <div className="mx-auto">
          <AutoQuoteButton />
        </div>
    </div>
  </SectionSection>
);

export default WhatToConsider;