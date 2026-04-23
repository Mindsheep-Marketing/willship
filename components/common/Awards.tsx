import Image from "next/image";

const trophyData = [
  {text: 'Best International Automotive Cargo Logistics Enterprise - 2021'},
  {text: 'Award for Innovation in End-to-End Freight Transport - 2021'}
];

const medalData = [
  {text: 'Freight Forwarder of the Year Award - 2018'},
  {text: 'Young Achievement Award 2018 (Nick Proctor)'},
  {text: 'Young Achievement Award 2018 (Mel Mather)'},
  {text: 'Freight Forwarder of the Year Award - 2017'},
  {text: 'Young Maritime Professional of the Year 2016'},
]

const Awards = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white py-24 px-4 lg:px-0 gap-10 awards">
      <h2 className="font-medium text-forty text-darkBlue text-center">Award Winning Industry Leader</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-12 w-full max-w-5xl">
        {trophyData.map((item, i) => (
          <div key={i} className='flex flex-col items-center w-full p-4 lg:w-1/4 gap-3'>
            <Image src='/assets/images/trophy.svg' height={64} width={64} objectFit='contain' alt='tropy image' />
            <h3 className="font-sackMed text-2xl text-red">WINNER</h3>
            <p className="text-center text-grey">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-12 w-full max-w-5xl">
        {medalData.map((item, i) => (
          <div key={i} className='flex flex-col items-center text-center w-full lg:w-1/6 gap-3'>
            <Image src='/assets/images/medal.svg' height={50} width={50} objectFit='contain' alt='medal image' />
            <h3 className="font-sackMed text-2xl text-red">FINALIST</h3>
            <p className="text-grey">{item.text}</p>
          </div>
        ))}

      </div>
    </section>
  )

};

export default Awards;