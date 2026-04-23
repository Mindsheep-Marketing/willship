import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../common/SectionHeading";

const data = [
  {
    image: '/assets/images/team/nick.png',
    name: 'Nick Proctor',
    position: 'Director',
    experience: '13',
    text: [
      'Nick decided from the beginning, that to fully understand the industry, he needed to experience as many positions as possible. He spent the best part of a decade mastering the intricacies of air and sea freight operations before turning his focus and expertise towards the international movement of vehicles and similar cargo.',
      'Nick pioneered the Trans-Tasman trade lane for personal cargo and went on to build Australia and New Zealand\'s first automated instant quote platform, which allows people to get instant easy to understand information and pricing for the International movement of their goods – all at the click of a button.',
      'Several years on, his focus remains on the ongoing improvement and development of our worldwide door to door service for personal and commercial cargo. He has built a network of like-minded people all over the world and has helped thousands of people safely move their goods.',
    ],
    contact: {
      linkName: 'linkedin.com/in/nick-proctor-048282194',
      linkedIn: 'https://www.linkedin.com/in/nick-proctor-048282194',
      email: 'nick@willship.com.au',
      phone: '+61 (7) 3267 3694'
    }
  },
  {
    image: '/assets/images/team/rhyss.png',
    name: 'Rhyss Williams',
    position: 'Director',
    experience: '36',
    text: [
      'Rhyss was born into the freight industry. His father owned and operated a freight company, Rhyss joined the business in 1984. Naturally, he had to start from the bottom as a driver doing paperwork and goods deliveries, plus the physical exams with Customs and Quarantine officers. But that\'s how you learn a business.',
      'Rhyss studied the course to become a Customs Broker and was licensed in 1992. He remains licensed and involved in day to day operations. Completing annual Continued Professional Development and Biosecurity Accreditation to keep abreast of changes.',
      'There is nothing Rhyss hasn\'t seen before, no problem that is unique. His wealth of experience is unparalleled. He has an incredible eye for detail and strives for compliance in everything he does.',
    ],
    contact: {
      linkName: 'linkedin.com/in/rhyss-williams-b105a713/',
      linkedIn: 'https://www.linkedin.com/in/rhyss-williams-b105a713/',
      email: 'rhyss@willship.com.au',
      phone: '+61 (7) 3267 0575'
    }
  },
  {
    image: '/assets/images/team/jason.png',
    name: 'Jason Williams',
    position: 'Director',
    experience: '29',
    text: [
      'Jason started his career as a courier driver and worked his way up from here. His knowledge base continued to grow as he moved through all areas of the Industry. He loved taking control of shipments and looking for any potential ways to improve the process.',
      'He has worked in Brisbane, Sydney and Melbourne in varying Managerial roles and really excelled in Project Cargo, Vessel Chartering and International Boat Logistics.',
      'Jason believes that relationships are incredibly important for success in the Logistics Industry and he prides himself on securing and building long term and trusted business partnerships spanning the globe.',
      'His mission - think outside the box, look after your customers, and constantly improve the way our industry operates.',
    ],
    contact: {
      linkName: 'linkedin.com/in/jason-williams-76599b47',
      linkedIn: 'https://www.linkedin.com/in/jason-williams-76599b47',
      email: 'jason@willship.com.au',
      phone: '+61 (7) 3267 0575'
    }
  }
]

const LeadershipTeam = () => (
  <section className="w-full bg-white flex flex-col items-center py-12">
    <div className="flex flex-col items-center w-full max-w-5xl gap-8">
      <SectionHeading text='Our Leadership Team' />
      <div className="w-full flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
        {data.map((item, i)  => (
          <div key={i} className="w-full lg:w-1/3 p-8 lg:border border-grey rounded-md shadow-lg flex flex-col items-center gap-2 relative pb-28">
            <div className="w-44 aspect-square relative rounded-full overflow-hidden">
              <Image src={item.image} layout="fill" objectFit="contain" alt={item.name} />
            </div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            <h4 className="text-xl">{item.position}</h4>
            <p className="text-red text-lg">
              {item.experience} years experience
            </p>
            {item.text.map((paragraph, j) => (
              <p key={j} className="text-sm text-darkGrey text-center">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-col w-full pt-8 text-sm absolute px-4 bottom-4">
              <div className="flex flex-row gap-4 lg:gap-2 items-center">
                <div className="w-6 aspect-square relative">
                  <Image layout="fill" objectFit="contain" alt="LinkedIn" src='/assets/images/icons/linkedin.svg' />
                </div>
                <Link href={item.contact.linkedIn}>
                  <a className="inline w-5/6" target='_blank' >{item.contact.linkName}</a>
                </Link>
              </div>
              <div className="flex flex-row gap-4 lg:gap-2 items-center">
                <div className="w-6 aspect-square relative">
                  <Image layout="fill" objectFit="contain" alt="Email" src='/assets/images/icons/email.svg' />
                </div>
                <Link href={`mailto:${item.contact.email}`}>
                  <a className="inline w-5/6">{item.contact.email}</a>
                </Link>
              </div>
              <div className="flex flex-row gap-4 lg:gap-2 items-center">
                <div className="w-6 aspect-square relative">
                  <Image layout="fill" objectFit="contain" alt="Phone" src='/assets/images/icons/phone.svg' />
                </div>
                <Link href={`tel:${item.contact.phone}`}>
                  <a className="inline w-5/6">{item.contact.phone}</a>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default LeadershipTeam;