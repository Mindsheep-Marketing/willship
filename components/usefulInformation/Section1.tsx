import Link from "next/link";
import SectionHeading from "../common/SectionHeading";
import SectionSection from "../common/SectionSection";

const Section1 = () => (
  <SectionSection>
    <div className='text-xl text-darkGrey flex flex-col items-center gap-4 w-full'>
      <SectionHeading text='MOVING TO NEW ZEALAND FROM AUSTRALIA' classes="text-center"/>
      <p>
        So you’ve decided to trade the sunny beaches of Australia for the picturesque snow-laden mountains of New Zealand? To be honest, we don’t blame you, nothing wrong with Australia but New Zealand offers a simply stunning landscape, and the people are lovely!
      </p>
      <p className="text-base">
        You’re also not alone, <Link href='https://www.dailymail.co.uk/news/article-4936492/Australians-migrating-New-Zealand-droves.html'>
          <a className="text-blue-700">
            large numbers of Australians are moving to New Zealand
          </a>
        </Link> large numbers of Australians are moving to New Zealand but there are some essential things you should know if you are planning the move, so we’ve put together the complete guide of things to consider when moving to New Zealand from Australia.
      </p>
    </div>
  </SectionSection>
);

export default Section1;