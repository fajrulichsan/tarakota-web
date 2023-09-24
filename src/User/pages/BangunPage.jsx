import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Form from '../../Component/Form';
import Navbar from '../../Component/Navbar';
import Banner from '../BangunPage/Banner';
import Highlight from '../BangunPage/Highlight';
import Introduction from '../BangunPage/Introduction';
import Invitation from '../BangunPage/Invitation';
import Superiority from '../BangunPage/Superiority';
const BangunPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <Highlight/>
        <Introduction/>
        <Superiority/>
        <Invitation/>
        <Form/>
        <Footer/>
    </Fragment>
  )
}

export default BangunPage;