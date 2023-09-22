import React, { useState, useEffect } from 'react';
import { profileTestimoni, iconTestimoni, previousButton, nextButton } from "../../assets/img/index";

const carouselData = [
  {
    id: 1,
    title: 'George Abraham',
    content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
  },
  {
    id: 2,
    title: 'George Abraham',
    content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
  },
  {
    id: 3,
    title: 'Item 3',
    content: 'Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.Armada menggunakan interior dan fasilitas premium yang dapat membuat perjalanan Anda lebih nyaman.',
  },
  {
    id: 4,
    title: 'Item 4',
    content: 'Content for Item 4',
  },
  {
    id: 5,
    title: 'Item 5',
    content: 'Content for Item 3',
  },
  {
    id: 6,
    title: 'Item 6',
    content: 'Content for Item 4',
  },
];

const styleCardTesti = {
  // borderRadius: '50px',
  border: '5px solid #FFF',
  background: '#F9F5EC',
  boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)',
};

const Testimoni = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek lebar layar untuk menentukan mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Atur breakpoint sesuai kebutuhan
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % Math.ceil(isMobile ? carouselData.length : carouselData.length/2 ));
  };

  const prevGroup = () => {
    setCurrentGroup((currentGroup - 1 + Math.ceil(isMobile ? carouselData.length : carouselData.length/2 )) % Math.ceil(isMobile ? carouselData.length : carouselData.length/2));
  };

  return (
    <div className={`${isMobile ? "py-10" : ""} md:pb-20 `}>
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-center tracking-wider">Kata Mereka Tentang Tarakota</h2>
        <hr className="text-3xl w-20 md:w-32 mx-auto font-bold text-center border-2 md:border-b-4 border-orange-500" />
      </div>
      <div className="mx-auto relative py-5 px-5 md:py-20">
        {isMobile ? ( // Kondisi untuk mode mobile
          <div className="md:p-7 p-5 space-x-6 flex rounded-xl" style={styleCardTesti}>
            <div className='w-20 h-20 md:w-32 md:h-32 rounded-full mx-auto' style={{ backgroundImage: `url(${profileTestimoni})`, backgroundSize: 'cover' }}></div>
            <div className='relative grow w-40'>
            <h3 className="text-xl font-semibold mb-2 md:text-center">{carouselData[currentGroup].title}</h3>
            <p className='text-xs text-justify'>{carouselData[currentGroup].content}</p>
              
              <img className='absolute w-4 h-4 -top-2 -right-2' src={iconTestimoni} alt="Testimoni Icon" />
            </div>
          </div>
        ) : ( // Kondisi untuk mode desktop
          <div className="flex justify-center space-x-5">
            {carouselData.slice(currentGroup * 2, currentGroup * 2 + 2).map((item) => (
              <div key={item.id} className="p-7 flex justify-between items-center space-x-5 rounded-2xl" style={styleCardTesti}>
                <div className='w-32 h-32 rounded-full' style={{ backgroundImage: `url(${profileTestimoni})`, backgroundSize: 'cover' }}></div>
                <div className="grow md:w-1/2 lg:w-80 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className='relative w-auto text-justify'>
                    {item.content}
                    <img className='absolute -top-2 -right-2' src={iconTestimoni} alt="Testimoni Icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={`${isMobile ? "-bottom-4" : ""} dot-navigation absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2`}>
          <button onClick={prevGroup}>
            <img className={`${isMobile ? "w-6" : ""}`} src={previousButton} alt="Previous Button" />
          </button>
          {Array.from({ length: Math.ceil(isMobile ? carouselData.length : carouselData.length/2) }).map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 bg-gray-500 rounded-full ${
                index === currentGroup ? 'bg-gray-800' : ''
              }`}
              onClick={() => setCurrentGroup(index)}
            ></span>
          ))}
          <button onClick={nextGroup}>
            <img className={`${isMobile ? "w-6" : ""}`} src={nextButton} alt="Next Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
