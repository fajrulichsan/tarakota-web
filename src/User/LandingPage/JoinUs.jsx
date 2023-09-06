import React from 'react';
import bgJoinUs from '../../assets/img/bg-join-us.png';
const JoinUs = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgJoinUs})` }}>
      <div className="bg-gradient-to-r from-black via-transparent min-h-screen flex flex-col justify-center items-center text-white">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold"># M E N A T A B E R S A M A</div>
        <div className="text-lg md:text-xl lg:text-2xl font-semibold text-center max-w-md lg:max-w-2xl mt-4 md:mt-6 lg:mt-8">
          We aim to be an Indonesian biggest Architecture Firm and Furniture Manufacturing.
        </div>
        <div className="text-4xl font-bold text-red-500 mt-4 md:mt-6 lg:mt-8"># TARAKOTA</div>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 mt-8 md:mt-10 lg:mt-12">START NOW</button>
      </div>
    </div>
  );
};

export default JoinUs;
