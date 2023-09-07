import { Fragment } from "react"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import JoinUs from "../LandingPage/JoinUs"
import LandingComponent from "../LandingPage/LandingComponent"
import OurClient from "../LandingPage/OurClient"
import ProfileVideo from "../LandingPage/ProfileVideo"
import ProjectSlider from "../LandingPage/ProjectSlider"

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar/>
      <ProfileVideo/>
      <LandingComponent/>
      <ProjectSlider/>
      <OurClient/>
      <JoinUs/>
      <Footer/>
    </Fragment>
  )
}

export default LandingPage