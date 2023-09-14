import React, { Fragment } from 'react'
import Footer from '../../Component/Footer';
import Navbar from '../../Component/Navbar';
import ProjectList from '../ProjectPage/ProjectList';

const ProjectPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <ProjectList/>
        <Footer/>
    </Fragment>
  )
}

export default ProjectPage;