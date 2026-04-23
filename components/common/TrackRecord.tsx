const trackData = [
  {
    topLine: '$1.4B',
    secondLine: 'WORTH',
    text: 'Over $2 Billion worth of cargo is trusted to Willship to be shipped every year'
  },
  {
    topLine: '< 0.1 %',
    secondLine: 'INSURANCE CLAIMS',
    text: 'Extremely safe and proven process'
  },
  {
    topLine: '125+',
    secondLine: 'TRUSTED NETWORKS',
    text: 'Deep relationships with our trusted network of staff and contractors ensures that your goods arrive safely'
  },
];

const TrackRecord = () => {
  return (
    <section className="w-full bg-red text-white flex flex-col items-center py-16 px-4 lg:px-0 track-record">
      <h2 className="font-medium text-forty pb-12 text-center">OUR TRACK RECORD</h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 justify-center">
        {trackData.map((item, i) => (
          <div key={i} className="flex flex-col items-center w-full lg:w-1/4 gap-4">
            <h3 className="text-6xl font-sackHeavy">{item.topLine}</h3>
            <h4 className="font-sackHeavy text-xl">{item.secondLine}</h4>
            <p className="text-xl leading-loose text-center">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-xl text-center">Priority service every time</p>
    </section>
  );
};

export default TrackRecord;