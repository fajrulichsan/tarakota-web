import React from 'react'
import { Fragment } from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../BisnisPage/Banner';
import ClassTarakota from '../BisnisPage/ClassTarakota';
import GayaSeruBisnis from '../BisnisPage/GayaSeruBisnis';
import Introduction from '../BisnisPage/Introduction';
import MasterPlan from '../BisnisPage/MasterPlan';
import PerjalananKarir from '../BisnisPage/PerjalananKarir';
import ProgramBanner from '../BisnisPage/ProgramBanner';
import SliderClass from '../BisnisPage/SliderClass';
import TrikBisnis from '../BisnisPage/TrikBisnis';

const BisnisPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <Introduction/>
        <MasterPlan/>
        <TrikBisnis/>
        <GayaSeruBisnis/>
        <ClassTarakota/>
        <SliderClass/>
        <ProgramBanner/>
        <PerjalananKarir/>
        <Footer/>
    </Fragment>
  )
}

export default BisnisPage;