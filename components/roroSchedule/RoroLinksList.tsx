const linkData = [
  {
    text: 'Fremantle to New Zealand',
    linkTo: '#fremnz'
  },
  {
    text: 'Adelaide to New Zealand',
    linkTo: '#adelnz'
  },
  {
    text: 'Melbourne to New Zealand',
    linkTo: '#melbnz'
  },
  {
    text: 'Port Kembla to New Zealand',
    linkTo: '#portkemnz'
  },
  {
    text: 'Brisbane to New Zealand',
    linkTo: '#brisnz'
  },
]

const RoroLinksList = () => {
  
  const scrollToElement = (elem : string) => {
    const headerHeight = document.querySelector('#header')?.clientHeight || 200;
    const target = document.querySelector(elem);

    if (headerHeight && target) {
      const destination = window.scrollY + target.getBoundingClientRect().top - headerHeight;
      window.scrollTo({top: destination, behavior: 'smooth'});
    };
  };

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center md:flex-row gap-1 px-4">
      {linkData.map((item, i) => (
        <div 
          onClick={() => scrollToElement(item.linkTo)}
          key={i} 
          className="w-full max-w-sm md:w-1/5 p-2 bg-darkBlue text-white text-xl flex justify-center items-center text-center hover:cursor-pointer"
        >
          <p>
            {item.text}
          </p>
        </div>
      ))}
    </section>
  );
};

export default RoroLinksList;