import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../ProjectDetailPage/Banner';
import MoreProject from '../ProjectDetailPage/MoreProject';
import ProjectDescription from '../ProjectDetailPage/ProjectDescription';
import SliderDetailProject from '../ProjectDetailPage/SliderDetailProject';

const ProjectDetailPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <SliderDetailProject/>
        <ProjectDescription/>
        <MoreProject/>
        <Footer/>
    </Fragment>
  )
}

export default ProjectDetailPage;