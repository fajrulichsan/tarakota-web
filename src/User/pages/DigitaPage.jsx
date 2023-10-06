import React from 'react'
import { Fragment } from 'react';
import AboutUs from '../DigitaPage/AboutUs';
import Banner from '../DigitaPage/Banner';
import Clients from '../DigitaPage/Clients';
import LatestWork from '../DigitaPage/LatestWork';
import Navbar from '../DigitaPage/Navbar';
import Services from '../DigitaPage/Services';

const DigitaPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <AboutUs/>
        <LatestWork/>
        <Clients/>
        <Services/>
    </Fragment>
  )
}

export default DigitaPage;