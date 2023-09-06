import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Tentang Kami</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            quam eu leo congue tempor.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Layanan</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Layanan 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Layanan 2
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Layanan 3
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Layanan 4
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
          <p className="text-gray-400">
            Alamat: Jalan Lorem Ipsum No. 123, Kota Ipsum
          </p>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Telepon: (123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
