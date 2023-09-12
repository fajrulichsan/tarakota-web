import React from 'react';
import { facebook, twitter, youtube, instagram } from "../assets/img/index";

const Footer = () => {
  const socialMediaIcon = [
    facebook,
    twitter,
    youtube,
    instagram,
  ];
  return (
    <footer className="bg-gray-800 h-[25em] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Subkategori Tambahan */}
        <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
          <h3 className="text-2xl font-bold mb-4">All Product</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Product 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Product 2
              </a>
            </li>
            {/* Tambahkan item produk lainnya sesuai kebutuhan */}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
          <h3 className="text-2xl font-bold mb-4">Customer Service</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Layanan Pelanggan 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Layanan Pelanggan 2
              </a>
            </li>
            {/* Tambahkan layanan pelanggan lainnya sesuai kebutuhan */}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
          <h3 className="text-2xl font-bold mb-4">About</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Tentang Kami 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Tentang Kami 2
              </a>
            </li>
            {/* Tambahkan informasi tentang kami lainnya sesuai kebutuhan */}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
          <h3 className="text-2xl font-bold mb-4">Inspiration</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Inspirasi 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white">
                Inspirasi 2
              </a>
            </li>
            {/* Tambahkan inspirasi lainnya sesuai kebutuhan */}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* <a
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
            </a> */}
            {socialMediaIcon.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Social Media Icon ${index}`}
                    className="w-6"
                  />
                ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

