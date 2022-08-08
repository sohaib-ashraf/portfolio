import React,{useRef, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import './HeroSection.css'


import HeroImg from '../../../assets/images/HeroImg.png'
import { init } from 'ityped'


const HeroSection = () => {

const textRef = useRef()

useEffect(()=> {
  init(textRef.current, {
    backDelay: 1500,
    showCursoe: true,
    strings: [
      'Sohaib Ashraf',
      'Full Stack Developer',
      'Wordpress Expert',
      'BigCommerce Expert'
    ]
  })
}, [])

  return (
    <section className='hero__section' id='home'>
    <Container>
    <Row>
        <Col lg={6} md={6}>
            <div className="hero__content">
                <p className='mb-3'>Welcome to my world!</p>
                <h2 className='hero__title mb-4'>I'm <span ref={textRef}></span></h2>
                <p className='mb-4'>Let me work my magic for you! With 5+ years as a professional Web developer. I have the experience and skills you need for your next project. I deliver award-winning layout and design, clear and concise communication and guarantee quality results EVERY TIME!</p>
                <div className="hero__btn d-flex align-items-center gap-4"><a href="https://www.upwork.com/freelancers/~01653b9cf856120db4"><button className='btn hire__btn'>Hire Me</button></a>
                <a href="https://wa.me/923046925027"><button className='btn'>Contact</button></a>
                </div>
            </div>
        </Col>
        <Col lg={6} md={6}> 
            <div className="hero__image">
            <img src={HeroImg} alt="" className='w-100' />
            </div>
        </Col>
    </Row>
    </Container>

    </section>
  )
}

export default HeroSection;