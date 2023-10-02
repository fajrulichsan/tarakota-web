import React from 'react'
import { Fragment } from 'react';
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../BisnisPage/Banner';
import ClassTarakota from '../BisnisPage/ClassTarakota';
import FormBisnis from '../BisnisPage/FormBisnis';
import GayaSeruBisnis from '../BisnisPage/GayaSeruBisnis';
import Introduction from '../BisnisPage/Introduction';
import JenjangKarir from '../BisnisPage/JenjangKarir';
import Komisi from '../BisnisPage/Komisi';
import MasterPlan from '../BisnisPage/MasterPlan';
import Pendapatan from '../BisnisPage/Pendapatan';
import PerjalananKarir from '../BisnisPage/PerjalananKarir';
import ProgramBanner from '../BisnisPage/ProgramBanner';
import SliderClass from '../BisnisPage/SliderClass';
import TrikAndTips from '../BisnisPage/TrikAndTips';
import TrikBisnis from '../BisnisPage/TrikBisnis';

const BisnisPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <Introduction/>
        <MasterPlan/>
        {/* <TrikBisnis/> */}
        <GayaSeruBisnis/>
        <ClassTarakota/>
        <SliderClass/>
        <ProgramBanner/>
        <PerjalananKarir/>
        <JenjangKarir/>
        <Komisi/>
        <Pendapatan/>
        <TrikAndTips/>
        <FormBisnis/>
        <Footer/>
    </Fragment>
  )
}

export default BisnisPage;