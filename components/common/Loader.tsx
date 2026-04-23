import Image from 'next/image'

const Loader = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='w-20 h-20 relative'>
        <Image layout='fill' objectFit='contain' src='/assets/images/loaders/Spinner-1s-89px.svg' alt='Loading Spinner' />
      </div>
      <p>Please wait while we process your quotation....</p>
    </div>
  );
};

export default Loader;
