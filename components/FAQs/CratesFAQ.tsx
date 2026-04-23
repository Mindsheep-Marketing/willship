import FAQBuilder from "./FAQbuilder";

const CratesFAQ = () => {

  const cratesFaqData = [
    {
      question: 'How are you able to offer transit times so much faster than normal removalists?',
      answer: `
      <p>Normal international removalists sell space within 40ft containers, and they can only ship that container once they have enough cargo to load the entire container. So you can often be waiting months and months for them to build up enough cargo to fill it up. We thought surely we could find a better way, and we did.</p>
      <p>We can move your goods for you so much faster because we load our crates into consolidated containers that we ship out weekly, so you’ll never be waiting more than a few days before your goods are on their way.</p>
      `
    },
    {
      question: 'This seems very cheap compared to what I’ve been quoted by international removalists – am I missing something?',
      answer: `
        <p> No, you’re not! We are very much against hidden charges or unquoted extra’s – just clear, easy to understand pricing in one currency, no surprises. International removalists need to charge so much more as have huge fleets of truck, massive depots and overall, much higher overheads which they need to cover. We offer simple, self-packing options which removes the need for surveyors, removalist trucks, removalists, huge packing depots and everything else that goes into their pricing.</p>
      `
    },
    {
      question: 'What do I do with the crate once I’m finished with it?',
      answer: `
      <p> In Auckland, we offer free pick up of the crate because we are able to use them for a return service. For our other destinations we are yet to set up a return service so for now, the crate is yours to keep. You can sell the crate on marketplace, re-purpose it and use it for storage, or a dog kennel, or a cubby house – let your imagination run wild! if you don’t want it at all, it can also be easily broken down and taken to the dump for disposal (or you could get some friends around and have a bonfire!)</p>
      `
    },
    {
      question: 'How do I know which size crate is right for me?',
      answer: `
      <p>We’ve designed our crates around standard 104-liter tea chest removalist boxes, so our recommendation would be to buy and load the goods you want to ship into those boxes, and once you know the total number of boxes you need to ship (plus whatever else you want to ship) then we can move forward with the crate delivery from there so you know you’re getting the right one.</p>
      `
    },
    {
      question: 'Will you help me with all of my documents?',
      answer: `
        <p>Yes of course! Willship will guide you through everything from start to finish, we’ve helped thousands of people move all over the world and we’re looking forward to helping you to.</p>
      `
    },
    {
      question: 'Can you assist with storage?',
      answer: `
      <p>Yes, if the timing doesn’t quite line up, we can assist with storage at the origin / destination for an additional fee.</p>
      `
    },
    {
      question: 'Are my goods insured?',
      answer: `
      <p>We offer an optional transit insurance policy on every shipment, pricing varies depending on the value of the goods but generally ‘all risks’ marine insurance will come in between AUD 300.00 and AUD 500.00 on most shipments.</p>
      `
    },
    {
      question: 'Are the crates safe?',
      answer: `
      <p>We’ve built the crates specifically with safety in mind, they are very sturdy, can hold up to 1000kg, they have hinges and can be locked. Perfectly designed to withstand the rigors of international transit.</p>
      `
    },
    {
      question: 'Are the crates waterproof?',
      answer: `
      <p>No, the crates are water resistant but not completely waterproof. We deliver them in the back of trucks or on trailers where they are protected from the elements, but once the crate is onsite at your place you'll need to be conscious of the weather depending on where it's placed.  As soon as we collect it, it will be undercover / protected for it’s entire journey.</p>
      `
    },
    {
      question: 'Do you provide boxes / packing material?',
      answer: `
      <p>Not as this stage, it’s very easy and cheap to get packing material from your local bunnings or hardware. If this isn’t an option for you, just let us know and we can see what we can do to help.</p>
      `
    },
    {
      question: 'Are there certain things I can’t load into the crate?',
      answer: `
      <p>Yes, we need to ensure these crates are safe for international shipping and that they meet all the relevant dangerous goods regulations, it’s mostly common sense, so no dry cell batteries, gas bottles, weapons, explosives, hazardous chemicals etc – We’d also recommend against putting any medicines or medications, or any high risk quarantine items like taxidermy animals, wooden items that contain bark and so on and so forth -  if you’re curious about a certain item just ask us.</p>
      `
    },
    {
      question: 'How clean does everything need to be?',
      answer: `
        <p>It’s best to clean everything as best as you can prior to shipping, aim to get any mud / grass / food / bugs / insects etc off anything you are looking to ship, this is the sort of thing that will trigger a requirement for treatment on arrival which can be very expensive, so best to do your best to clean this off prior to shipping.</p>
      `
    },
    {
      question: 'Can you do custom sized crates?',
      answer: `
      <p>Yes we sure can! We can manufacture any size crate you like, we can add in things like shelves, tie down points and so on and so forth. So if you have something with specific requirements, please get in touch and we’ll see what we can do.</p>
      `
    },
    {
      question: 'Do I have to load everything into removalist boxes or can I load things in there loose as well?',
      answer: `
      <p>No, you don’t have to use removalist boxes, however using boxes provides protection and rigidity to your goods and greatly reduces the risk of any damage happening during transit. It’s also easier to write a packing list when you number the boxes and note what’s in each box – it makes the customs clearance process at the destination nice and easy. Our recommendation is that you load as much as you can into boxes, although any ideas that are bulky / too large for boxes, please just wrap these in bubble wrap and load boxes and other things around them so they don’t move around in transit.</p>
      `
    }
  ];

  return (
    <FAQBuilder
      heading="Got Questions? We've Got Answers!"
      faqQuestions={cratesFaqData}
    />
  )

};

export default CratesFAQ;