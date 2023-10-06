import React from 'react'
import {logo} from '../../assets/img/digita/index'
const Navbar = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-2 bg-red-200 px-20'>
            <div className='col-span-1 flex items-center'>
                <img src={logo}>
                </img>
            </div>
            <div className='col-span-1'>
                <div className='flex justify-evenly items-center'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Clients</p>
                    <p>FAQs</p>
                    <div className='py-1 px-4 border-2 border-white bg-transparent rounded-full'>
                        Contact Us
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;