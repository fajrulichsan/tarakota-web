import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../ServicePage/Banner';
import ServiceDetail from '../ServicePage/ServiceDetail';

const ServicePage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <ServiceDetail/>
        <Footer/>
    </Fragment>
  )
}

export default ServicePage;