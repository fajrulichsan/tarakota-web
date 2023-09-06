import { Fragment } from "react"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import JoinUs from "../LandingPage/JoinUs"
import OurClient from "../LandingPage/OurClient"
import LandingComponent from "../LandingPage/LandingComponent"

const LandingPage = () => {
  return (
    <Fragment>
      <Navbar/>
      <LandingComponent/>
      <OurClient/>
      <JoinUs/>
      <Footer/>
    </Fragment>
  )
}

export default LandingPage