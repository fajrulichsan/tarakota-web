import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../ProjectDetailPage/Banner';
import MoreProject from '../ProjectDetailPage/MoreProject';
import ProjectDescription from '../ProjectDetailPage/ProjectDescription';

const ProjectDetailPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <ProjectDescription/>
        <MoreProject/>
        <Footer/>
    </Fragment>
  )
}

export default ProjectDetailPage;