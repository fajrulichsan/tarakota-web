import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import Banner from '../ProjectDetailPage/Banner';
import ProjectDescription from '../ProjectDetailPage/ProjectDescription';

const ProjectDetailPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Banner/>
        <ProjectDescription/>
        <Footer/>
    </Fragment>
  )
}

export default ProjectDetailPage;