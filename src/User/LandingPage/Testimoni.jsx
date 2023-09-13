import React, { useState } from 'react';
import {profileTestimoni, iconTestimoni, previousButton, nextButton} from "../../assets/img/index"

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
    borderRadius: '50px',
    border: '5px solid #FFF',
    background: '#F9F5EC',
    boxShadow: '0px 4px 25px 0px rgba(0, 0, 0, 0.08)'
}

const Testimoni = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % Math.ceil(carouselData.length / 2));
  };

  const prevGroup = () => {
    setCurrentGroup((currentGroup - 1 + Math.ceil(carouselData.length / 2)) % Math.ceil(carouselData.length / 2));
  };

  return (
      <div className="mx-auto py-20">
        <div>
            <h2 className="text-3xl font-bold text-center tracking-wider">Kata Mereka Tentang Tarakota</h2>
            <hr className="text-3xl w-32 mx-auto font-bold text-center border-b-4 border-orange-500"></hr>
        </div>
        <div className="mx-auto relative py-20">
          <div className="flex justify-center space-x-5">
            {carouselData.slice(currentGroup * 2, currentGroup * 2 + 2).map((item) => (
              <div key={item.id} className="p-7 w-[35em] flex justify-between items-center space-x-5" style={styleCardTesti}>
                <div className='w-32 h-32 rounded-full' style={{backgroundImage: `url(${profileTestimoni})`, backgroundSize: 'cover'}}></div>
                <div className="grow w-60 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className='relative w-auto'>
                    {item.content}
                    <img className='absolute -top-2 -right-2' src={iconTestimoni}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="dot-navigation absolute bottom-0 left-0 right-0 flex justify-center items-center space-x-2">
          <button onClick={prevGroup}>
            <img src={previousButton}/>
          </button>
            {Array.from({ length: Math.ceil(carouselData.length / 2) }).map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 bg-gray-500 rounded-full ${
                  index === currentGroup ? 'bg-gray-800' : ''
                }`}
                onClick={() => setCurrentGroup(index)}
              ></span>
            ))}
              <button onClick={nextGroup}>
                <img src={nextButton}/>
              </button>
          </div>
        </div>
      </div>
  );
};

export default Testimoni;
