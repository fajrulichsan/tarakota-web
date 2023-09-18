import React from 'react'
import { Fragment } from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../AboutUsPage/Banner';
import Lokasi from '../AboutUsPage/Lokasi';
import OurTeam from '../AboutUsPage/OurTeam';
import VisiMisi from '../AboutUsPage/VisiMisi';
import OurClient from '../LandingPage/OurClient';

const AboutUs = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <VisiMisi/>
        <OurTeam/>
        <OurClient/>
        <Lokasi/>
        <Footer/>
    </Fragment>

  )
}

export default AboutUs;