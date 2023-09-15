import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../Estimasi/Banner';
import FormEstimasi from '../Estimasi/FormEstimasi';

const Estimation = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <FormEstimasi/>
        <Footer/>
    </Fragment>
  )
}

export default Estimation;