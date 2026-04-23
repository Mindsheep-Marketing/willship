import WhiteWithIcons from "../common/WhiteWithIcons";

const Problems = () => {
  return (
    <section className="w-full flex flex-col relative items-center bg-white">
      <WhiteWithIcons
        width="w-1/4"
        bgColour="bg-nearlyWhite"
        data={{
          heading: 'You May Have Experienced A Range Of Problems With Your Previous Freight Company',
          items: [
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Documentation Issues'
            },
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Lack of Communication'
            },
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Inexperienced Staff'
            },
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Hidden Costs & Unquoted Extras'
            },
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Lack of Guidance'
            },
            {
              image: '/assets/images/icons/cross.svg',
              text: 'Difficulties with unethical suppliers'
            },
          ]
        }}
      >
        <p className="text-2xl">
          You <b>won’t</b> have these problems with Willship International…
        </p>
        <p>
          Our goal is to pre-empt any potential problems, to ensure the process is as seamless as possible from start to finish.
        </p>
      </WhiteWithIcons>
    </section>
  )
};

export default Problems;