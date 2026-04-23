import siteMap from "../../siteMap";
import Button from "../common/Button";
import WhiteWithIcons from "../common/WhiteWithIcons";

const LeaveItAllToWillship = ({linkPath = siteMap.commercial.commercialFreightQuote.path} : {linkPath ?: string}) => (
  <WhiteWithIcons
      width="w-1/5"
      data={{
        heading: 'Leave It All To Willship',
        items: [
          {
            image: '/assets/images/reasons/shield.svg',
            text: 'Assisting with supplier verification'
          },
          {
            image: '/assets/images/reasons/negotiations.svg',
            text: 'Negotiating best possible rates'
          },
          {
            image: '/assets/images/reasons/clip-board-blue.svg',
            text: 'Making all necessary bookings'
          },
          {
            image: '/assets/images/reasons/plane.svg',
            text: 'Organizing International Freight'
          },
          {
            image: '/assets/images/reasons/book.svg',
            text: 'Gathering all documents'
          },
          {
            image: '/assets/images/reasons/clip-board2.svg',
            text: 'Local Customs and Quarantine Clearance'
          },
          {
            image: '/assets/images/reasons/headphones.svg',
            text: 'Advising of any issues or delays'
          },
          {
            image: '/assets/images/reasons/box.svg',
            text: 'Final Delivery'
          },
        ]
      }}
    >
      <div className="w-full max-w-sm z-10">
        <Button
          buttonText="Get Started"
          dataPaperformId="mlc28uxr"
          dataPaperformPopup={true}
          linkTo={'paperform'}
          theme='redBlue'
        />
      </div>
    </WhiteWithIcons>
);

export default LeaveItAllToWillship

