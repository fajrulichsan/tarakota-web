import React from 'react'
import { Fragment } from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Alasan from '../BersamaPage/Alasan';
import Area from '../BersamaPage/Area';
import Form from '../BersamaPage/Form';
import SumberPendapatan from '../BersamaPage/SumberPendapatan';
import Syarat from '../BersamaPage/Syarat';

const BersamaPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Alasan/>
        {/* <SumberPendapatan/> */}
        <Area/>
        <Syarat/>
        <Form/>
        <Footer/>
    </Fragment>
  )
}

export default BersamaPage;