import React from 'react';
import bgJoinUs from '../../assets/img/bg-join.svg';
const JoinUs = () => {
  return (
    <div className="bg-cover bg-center h-[40em]" style={{ backgroundImage: `url(${bgJoinUs})` }}>
      <div className="bg-gradient-to-r from-black via-transparent h-[40em] flex flex-col space-y-3 justify-center text-white px-20">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"># M E N A T A B E R S A M A</div>
        <div className="text-5xl font-bold text-tera tracking-widest mb-10">TARAKOTA</div>
        <div className="text-lg md:text-xl lg:text-2xl font-medium w-96 max-w-md lg:max-w-2xl tracking-wide pt-5">
          We aim to be an Indonesian biggest Architecture Firm and Furniture Manufacturing.
        </div>
        <button className="w-40 py-2 bg-tera text-white rounded-full font-normal hover:bg-orange-800 transition duration-300">START NOW</button>
      </div>
    </div>
  );
};

export default JoinUs;
