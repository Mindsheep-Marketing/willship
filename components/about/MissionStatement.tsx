const data = [
  {
    heading: 'Our Purpose',
    text: 'We help individuals, families, and businesses navigate the complex world of International logistics. We create solutions and provide expertise to our customers through innovation, technology, and unparalleled customer service.',
    underlineColour: 'border-red'
  },
  {
    heading: 'Our Vision',
    text: 'To be recognized as an innovator and a leader within the industry, we strive to modernize and simplify what is traditionally a confusing and antiquated industry.',
    underlineColour: 'border-darkGrey'
  },
  {
    heading: 'Our Mission',
    text: 'We want to change the way people think about freight forwarding, we want to prioritize customer service and work towards simplifying pricing and processes for anyone that we work with. We want to use our knowledge to craft solutions for people and businesses so we can grow together',
    underlineColour: 'border-red'
  }
];

const MissionStatement = () => {
  return (
    <section className="w-full bg-nearlyWhite py-16">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto gap-4 justify-center">
        {data.map((item, i) => (
          <div key={i} className="w-full lg:w-1/3 flex flex-col items-center text-center bg-white p-6 gap-4">
            <h3 className="font-semibold text-lg text-darkBlue">
              {item.heading}
            </h3>
            <div className={`w-2/3 h-0 border-2 ${item.underlineColour}`} />
            <p className="text-darkGrey text-xl leading-tight">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionStatement;