import React from 'react'
import { Fragment } from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../BagiBagiPage/Banner';
import Form from '../BagiBagiPage/Form';
import Invitation from '../BagiBagiPage/Invitation';
import JenisInvestasi from '../BagiBagiPage/JenisInvestasi';
import KelebihanInvestasi from '../BagiBagiPage/KelebihanInvestasi';
import ProfitInvestasi from '../BagiBagiPage/ProfitInvestasi';

const BagiBagiPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        {/* <JenisInvestasi/> */}
        <ProfitInvestasi/>
        {/* <KelebihanInvestasi/> */}
        <Invitation/>
        <Form/>
        <Footer/>
    </Fragment>
  )
}

export default BagiBagiPage;