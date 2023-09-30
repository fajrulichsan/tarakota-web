import { Fragment } from "react"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import JoinUs from "../LandingPage/JoinUs"
import OurClient from "../LandingPage/OurClient"
import ProfileVideo from "../LandingPage/ProfileVideo"
import ProjectSlider from "../LandingPage/ProjectSlider"
import Reason from "../LandingPage/Reason"
import Service from "../LandingPage/Service"
import SliderBanner from "../LandingPage/SliderBanner"
import Testimoni from "../LandingPage/Testimoni"
const LandingPage = () => {
  return (
    <Fragment>
      <div className="mx-auto">
      <Navbar/>
      <SliderBanner/>
      <ProfileVideo/>
      <Service/>
      <Reason/>
      <OurClient/>
      <Testimoni/>
      <JoinUs/>
      <Footer/>
      </div>
    </Fragment>
  )
}

export default LandingPage