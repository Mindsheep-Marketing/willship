import Image from "next/image";
import SectionSection from "../common/SectionSection";

const data = [
  {
    title: '20\' General Purpose',
    image: '/assets/images/containers7.png',
    name: '20\'GP',
    length: '5.895',
    width: '2.350',
    height: '2.392',
    doorWidth: '2.340',
    doorHeight: '2.292',
    capacity: '33',
    tareWeight: '2230',
    maxCargoWeight: '28230'
  },
  {
    title: '40\' General Purpose',
    image: '/assets/images/containers8.jpg',
    name: '40\'GP',
    length: '12.029',
    width: '2.350',
    height: '2.392',
    doorWidth: '2.340',
    doorHeight: '2.292',
    capacity: '67',
    tareWeight: '3870',
    maxCargoWeight: '26700'
  },
  {
    title: '40\' High Cube',
    image: '/assets/images/containers9.jpg',
    name: '40\'HC',
    length: '12.024',
    width: '2.350',
    height: '2.697',
    doorWidth: '2.340',
    doorHeight: '2.597',
    capacity: '76',
    tareWeight: '4020',
    maxCargoWeight: '26460'
  },

]

const ContainerDetails = () => (
  <SectionSection>
    <div className="flex flex-col gap-8 w-full">
      <h2 className="text-forty text-darkBlue font-medium text-center">
        Parameters of sea containers:
      </h2>
      <div className="w-full flex flex-col gap-8">
        {data.map((item, i) => (
          <div key={i} className='flex flex-col w-full items-center'>
            <h3 className="text-darkBlue font-medium text-3xl">{item.title}</h3>
            <div key={i} className={`flex items-center w-full mt-8 flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="w-full lg:w-1/2 relative aspect-video flex items-center justify-center">
                <Image src={item.image} layout='fill' objectFit="contain" alt={item.name} />
                <div className={`absolute w-20 h-20 lg:w-32 lg:h-32 rounded-full top-0 lg:-top-16 ${i % 2 === 0 ? 'right-0' : 'left-0'} z-20 flex justify-center items-center bg-darkBlue text-white text-2xl font-bold`}>
                  {item.name}
                </div>
              </div>
              <div className="w-full sm:w-4/5 lg:w-1/2 flex flex-col items-start p-8 text-xl lg:text-2xl text-darkGrey gap-2">
                <p><b>INSIDE LENGTH:</b> {item.length} m</p>
                <p><b>INSIDE WIDTH:</b> {item.width} m</p>
                <p><b>INSIDE HEIGHT:</b> {item.height} m</p>
                <p><b>DOOR WIDTH:</b> {item.doorWidth} m</p>
                <p><b>DOOR HEIGHT:</b> {item.doorHeight} m</p>
                <p><b>CAPACITY:</b> {item.capacity} m<sup>3</sup></p>
                <p><b>TARE WEIGHT:</b> {item.tareWeight} kgs</p>
                <p><b>MAX CARGO WEIGHT:</b> {item.maxCargoWeight} kgs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionSection>
);

export default ContainerDetails;