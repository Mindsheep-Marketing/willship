import FAQBuilder from "./FAQbuilder";

interface VehicleFAQProps {
  subHeading?: string | JSX.Element;
}

const VehicleFAQ = ({ subHeading }: VehicleFAQProps) => {

  const faqData = [
    {
      question: 'Can I put anything in my car?',
      answer: `
        <p>It depends on the method of car shipping you choose, if you want to go with Roll on, Roll off then nothing can be left inside the vehicle – all personal items will need to be removed.</p>
        <p>If you would like to send extra items along with the vehicle then we will need to go for either a 20ft or 40ft container, or if you are going to Auckland ex one of the East Coast ports in Australia then you can make use of our 40ft shared container service.</p>
      `
    },
    {
      question: 'Why can’t I put things in my car when shipping Roll on, Roll off?',
      answer: `
        <p>Roll on, Roll off shipping is specifically designed for the movement of empty vehicle’s, there are several reasons why you can’t include personal items with the vehicle:</p>
        <ul className='faqList'>
          <li>
            Theft and Pillaging can be a bit of an issue with RoRo shipping – We have no control over who works on the ports or who the shipping line employ to staff the vessel. The vehicle needs to remain unlocked and accessible at all times during the shipping process so customs and quarantine can complete their relevant inspections so if you choose to leave personal items inside the vehicle then these items are more or less ‘free for the taking’ for anyone working on the port as they all know that they shouldn’t be there in the first place
          </li>
          <li>
            The shipping line won’t accept any responsibility for any items left inside vehicles, nor will they allow us to declare them on any of the Bills of Lading meaning that any item left inside the vehicle technically means you are trying to smuggle undeclared items in through the border. Even if you wanted to declare them the shipping line won’t allow it as they don’t want to be legally responsible, hence the blanket rule that no items can be left inside the car
          </li>
          <li>
            Lastly, if the shipping lines gave the OK for people to load items inside their vehicle’s it would open a pandora’s box of what is and isn’t allowed, for example you would have people loading up there cars from top to bottom with anything and everything, they would pack up ute’s filled with all sorts of cargo which also would have the potential of breaking loose and causing havoc as it moved around the inner deck of the vessel whilst at sea.
          </li>
        </ul>
      `
    },
    {
      question: 'Can I ship my car still under finance?',
      answer: `
      <p>
          It completely depends on the conditions of your contract with your finance company, every financial lender is different so the first step will be to contact your current finance company and ask for their terms regarding taking the vehicle out of the country.
        </p>
        <p>
          Quite a few finance companies operate in both Australia and New Zealand so it could potentially be no problem at all.
        </p>
        <p>
          The real ‘issue from their perspective would be that if the vehicle is the security against the loan, and you were to default on your payments, they would repossess the vehicle – Of course if you shipped this outside of Australia then of course this removes their ability to do so. If the finance company will NOT allow the export of the vehicle outside of Australia you still have a couple of options:
        </p>
        <ul className='faqList'>
          <li>
            Pay your loan out here in Australia if you have the funds available to free up the encumbrance on the vehicle
          </li>
          <li>
            Take out a personal loan to pay off the vehicle.
          </li>
          <li>
            Re-finance through an Australian or NZ lender who will allow you to move the vehicle
          </li>
        </ul>
        <p>
          *Please note that if you do have finance owing on a vehicle at the time of arrival into New Zealand, then you will NOT be eligible for the GST exemption as you technically don’t own the vehicle – the finance company does. It can still be imported but it will be subject to import GST.
        </p>
      `
    },
    {
      question: 'What if I can’t get a registration certificate or Purchase Invoice / Bill of Sale?',
      answer: `
        <p>
          If you don’t have a registration certificate or old renewal notice lying around then you will need to contact the department of transport and request one to be mailed out to you. An the original registration document is important for several reasons, it’s needed to prove that you have used the vehicle here in Australia, and it’s also needed in order to get the vehicle complied and registered over in New Zealand.
        </p>
        <p>
          If you don’t have a purchase invoice you will have a couple of options, if you purchase the the vehicle through a dealership then you could get in contact with them and ask them to send you out a copy.
        </p>
        <p>
          If the vehicle was purchased as a private sale, and you don’t have any paperwork to show this purchase then you can type up a bill of sale and backdate it. NZ customs have recently cracked down on typed and handwritten bill’s of sales due to the fact that they can be easily doctored, so if you’re looking to claim the GST exemption we will need further proof of the transaction, generally, a bank statement showing the movement of funds between you and the seller is ideal, or even a large withdrawal of cash in the days prior to the purchase is also acceptable.
        </p>
        <p>
          Important: If you can’t get any form of bill of sale or any supporting evidence documenting the transaction, then NZ customs will order a valuation on the vehicle on arrival, the valuation will cost AUD 300.00 so it’s best to try and dig up the paperwork to avoid this cost if at all possible.
        </p>
      `
    },
    {
      question: 'Do I apply for the GST exemption?',
      answer: `
        <p>
          No, we do all this for you, our team over in NZ will work with customs on your behalf to do this all for you.
        </p>
      `
    },
    {
      question: 'Can I drop my car off or pick my car up from the port directly?',
      answer: `
        <p>
          It is possible to deliver the vehicle into the port yourself in Brisbane, Port Kembla, Melbourne and Adelaide although if you do not hold an MSIC card you will need to pay an escort fee to the terminal and sit through an induction. The induction cost is generally more than the towing cost into the port anyway, so for any port except Port Kembla it’s much easier / cheaper just to let us organize the car transportation into the port via our security cleared tow trucks.
        </p>
        <p>
          Since Port Kembla is so far away from Sydney (approx 100km) we always give you the option to deliver yourself or to have it collected and delivered via tow truck so the decision is yours.
        </p>
        <p>
          Over in NZ, it will not be legal for you to collect your car from the port and drive it away, all vehicle’s need to undergo compliance before they can legally be registered and driven on NZ roads, all of our quotes include trucking a car out of the port, and delivery within the metro area via a security cleared tow truck so it’s best if we look after the vehicle transport on your behalf. If your final destination is far away from the major ports, then we are happy to advise on vehicle transportation costs for the last leg of the journey if required.
        </p>
      `
    },
    {
      question: 'Do you have to be there when the vehicle is collected?',
      answer: `
        <p>
          No, you can nominate a friend or family member to hand the car over to us.
        </p>
      `
    },
    {
      question: 'Do I have to be in NZ to pick my car up?',
      answer: `
        <p>
          No, you can nominate anyone to collect the vehicle on your behalf. If you are claiming the GST exemption however you will need to ensure you are somewhere in New Zealand when the vessel carrying your vehicle arrives into NZ. If you are not claiming the GST exemption and are happy to pay the import tax then you don’t need to be in New Zealand and anyone can collect the car for you.
        </p>
      `
    },
    {
      question: 'Can I leave a baby seat in my car?',
      answer: `
        <p>
          You can, but we do not recommend it and it’s shipped strictly at your own risk. We have no control over who works on the ports both here in Australia and over in New Zealand, as well as who the crew are on the vessel. Roll on, Roll off shipping is designed strictly for the movement of empty vehicles, so if you choose to leave the baby seat in there then there is a chance it won’t be there at the other end. If the baby seat is not worth much money then it could be worth a gamble, although if you want to ensure you have it over in NZ then you are best off taking it as excess luggage on the plane when you fly across.
        </p>
      `
    },
    {
      question: 'What does the compliance process entail?',
      answer: `
        <p>
          Compliance is a very thorough, one time process that your vehicle has to go through before it can be registered for the first time in NZ. They test a range of safety features on your vehicle – seatbelt restraints, tyre tread, break pads, windscreens, etc. – they strip the inside of the vehicle so that the actual structure of the vehicle can be inspected to ensure it’s never been significantly damaged, and they test the emissions that your vehicle produces. Once this process is complete you’ll be issued with a certificate of compliance and a warrant of fitness and will be able to register your vehicle. After this, you will just need to get a warrant of fitness periodically.
        </p>
      `
    },
    {
      question: 'Why do I need to put my car through compliance?',
      answer: `
        <p>
          Your vehicle needs to be tested and inspected to ensure it meets New Zealand’s safety and environmental standards set by their transport authority. Basically, they want to make sure your vehicle is fit to be on the road and isn’t causing the environment too much harm.
        </p>
      `
    },
    {
      question: 'Can I get my car roadworthy here for it to be complied in NZ?',
      answer: `
        <p>
          No, your vehicle will have to be tested and complied to New Zealand’s safety and environmental rules. While they would be very similar to Australian standards, it’s still a different country with different processes so your vehicle needs to be tested at an authorised New Zealand testing facility.
        </p>
      `
    },
    {
      question: 'I want to proceed with a booking what steps do I take from here?',
      answer: `
        <p>
          Our first step is to choose a sailing date. Once we have your dates worked out we’ll send you an email with the list of documents and information that we need from you to be able to get your booking in place.
        </p>
        <p>
          Vehicle Shipping from Australia is what we specialize in so rest assured you’ll be in good hands with Willship.
        </p>
      `
    },
    {
      question: 'When do I need to pay my invoice?',
      answer: `
        <p>
          Once we have your booking in place and we know exactly which of our services you wish to use, then we will send you through an invoice and this will need to be paid around the time of shipping. We can accept payment via bank transfer or credit card. We do not require a deposit in order to proceed with a booking
        </p>
      `
    },
    {
      question: 'How clean does my car need to be?',
      answer: `
        <p>
          When it comes to Car Shipping from Australia, you’ll need to be sure that you make an effort to clean it up as best you can prior to shipping.
        </p>
          Your vehicle will be going through a quarantine inspection when it arrives in NZ, so you’ll have to try to make sure there is no biological matter (plant or animal material, grass clippings, seeds, leaves, animal hairs, bugs etc.) on your vehicle prior to shipping to ensure it has the best chance at passing that initial inspection. If any of this material is found on your vehicle during the inspection you will be charged for decontamination and reinspection.
        <p>
        </p>
        <p>
          Please also note that paying hundreds of dollars for a professional detail in Australia won’t guarantee a pass from NZ quarantine, so you are better off not spending too much money getting your vehicle cleaned in Australia and just taking the time to do you best to clean the vehicle yourself.
        </p>
      `
    },
    {
      question: 'Can you help with compliance in Lyttleton or Nelson?',
      answer: `
        <p>
          Our compliance partner only operates in Auckland and Christchurch so we can’t book your vehicle in for compliance in Wellington or Nelson, but we can, of course, point you in the right direction. We’d recommend contacting a VTNZ in either Nelson or Wellington about getting your vehicle on the road. If you’re happy to use that company, we can move your vehicle to their facility so long as it’s within 20km’s of the port at no extra cost.
        </p>
      `
    },
    {
      question: 'How long does it take to receive my vehicle after the vessel arrives?',
      answer: `
        <p>
          This will depend on your chosen method of shipping.
        </p>
        <p>
          Roll on Roll off is 3-5 business days after the arrival of the vessel.
        </p>
        <p>
          A dedicated 20ft or 40ft container is 5-8 business days after the arrival of the vessel.
        </p>
        <p>
          A shared Container is 7-14 business days after the arrival of the vessel.
        </p>
        <p>
          If you choose our compliance included option then allow a further 5 working days extra from the above stated timeframes to move the vehicle to our compliance depot and to have it complied and warranted, ready for collection and registration.
        </p>
        <p>
          Please remember if your car is stopped for quarantine cleaning or treatment purposes it can take longer depending on how much work is required.
        </p>
      `
    },
    {
      question: 'How much does quarantine cleaning cost if my vehicle fails it’s inspection?',
      answer: `
        <p>
          Decontamination of your goods can only be ordered by The Ministry for Primary Industries (MPI) – A Division of the NZ Government.
        </p>
        <p>
          MPI can order a variety of treatments from a simple Vacuum of a leaf, to Steam Sterilisation and Fumigation – the costs for which vary substantially depending on what MPI might order.
        </p>            
        <p>
          The most Basic of Decontamination can be as little as $135.00+Gst for the actual Physical tasks however there are other fees that can apply for:
        </p>
        <ul className='faqList'>
          <li>
            Documentation Processing
          </li>
          <li>
            Certified Destruction of Contamination
          </li>
          <li>
            Transfers of the vehicle to the MPI quarantine decontamination facility
          </li>
          <li>
            MPI Re-Inspection of the cargo once the decontamination has been completed.
          </li>
        </ul>
        <p>
          These charges vary depending on what method of shipping you use but can easily exceed four of five hundred dollars in total depending on what is required. Our advice is always to make sure you read the ‘Vehicle preparation’ section on your quote, and to get the vehicle as clean as you can prior to shipping without spending too much money on a valet or detailing service that only focuses on shining up the paint, and not the areas where contamination hides unseen waiting to be found on arrival by a MPI officer (eg: under the vehicle, under the wheel arches etc)
        </p>
        <p>
          This will give you your best chance of passing the inspection or at least limiting the work required to decontaminate.
        </p>
      `
    }
  ];

  return (
    <FAQBuilder
      heading='Common Questions And Responses'
      subHeading={
        subHeading ||
        "Australia To New Zealand RoRo Shipping"
      } faqQuestions={faqData}
    />
  )

};

export default VehicleFAQ;