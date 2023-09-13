import { Fragment } from "react"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import Carousel from "../LandingPage/Carousel"
import JoinUs from "../LandingPage/JoinUs"
import OurClient from "../LandingPage/OurClient"
import ProfileVideo from "../LandingPage/ProfileVideo"
import ProjectSlider from "../LandingPage/ProjectSlider"
import SliderBanner from "../LandingPage/SliderBanner"
import Testimoni from "../LandingPage/Testimoni"

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar/>
      <SliderBanner/>
      {/* <Carousel/> */}
      {/* <ProjectSlider/> */}
      <ProfileVideo/>
      {/* <LandingComponent/> */}
      <OurClient/>
      <Testimoni/>
      <JoinUs/>
      <Footer/>
    </Fragment>
  )
}

export default LandingPage