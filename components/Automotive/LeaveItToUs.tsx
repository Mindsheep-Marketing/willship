import Image from "next/image";
import SectionHeading from "../common/SectionHeading";

const topRow = [
  {
    image: '/assets/images/reasons/headphones.svg',
    text: 'Understanding your personal circumstances and prepare the ideal plan'
  },
  {
    image: '/assets/images/reasons/book.svg',
    text: 'Full documentation support'
  },
  {
    image: '/assets/images/reasons/shield.svg',
    text: 'All customs and quarantine clearances'
  },
];

const secondRow = [
  {
    image: '/assets/images/reasons/signpost.svg',
    text: 'On road compliance including safety checks and relevant inspections in order to get the vehicle registered in your destination country (optional)'
  },
  {
    image: '/assets/images/reasons/value-blue.svg',
    text: 'Identify exactly what you can expect in terms of costs without hidden surprises'
  }
];

const LeaveItToUs = () => {
  return (
    <section className="w-full flex flex-col items-center p-8 lg:p-0 lg:py-16 gap-12 text-xl text-darkGrey">
      <SectionHeading text='Leave It All To Willship' />
      <p className="text-nearlyBlack">This includes:</p>
      <div className="w-full lg:max-w-5xl flex flex-col leading-relaxed text-darkGrey text-center gap-8">
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-stretch gap-8">
          {topRow.map((item, i) => (
            <div key={i} className='lg:w-1/4 flex flex-col items-center gap-3'>
              <Image src={item.image} height={50} width={50} alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:items-stretch gap-8">
          {secondRow.map((item, i) => (
            <div key={i} className='lg:w-1/3 flex flex-col items-center gap-3'>
              <Image src={item.image} height={50} width={50} alt={item.text} />
              {item.text.split('<br />').map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeaveItToUs;