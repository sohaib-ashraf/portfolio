import React, { Fragment } from 'react'
import Header from './Header/Header'
import HeroSection from './HeroSection/HeroSection'
import About from './About/About'
import Services from './Services/Services'
import Experience from './Experience/Experience'
import Portfolio from './Portfolio/Portfolio'
import Testimonial from './Testimonial/Testimonial'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Portfolio/>
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default Layout;