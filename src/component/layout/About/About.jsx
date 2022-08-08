

import React, {useState} from 'react'
import './About.css'
import Education from './Education'
import Skill from './Skill'
import Certificate from './Certificate'
import Social from '../Social'


import { Container, Row, Col } from 'reactstrap'

import HeroImg from '../../../assets/images/HeroImg.png'

const About = () => {

    const [aboutFilter,setAboutFilter]  = useState('SKILL')

    return (
        <section id='about'>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>About Me</h2>
                    </Col>
                    <Col lg='4' md='3'>
                        <div className="about_btns d-flex align-items-center flex-column p-0">

                        <button className={`about_btn ${aboutFilter === 'SKILL' ? 'about_btn_active' : '' }`} onClick={()=> setAboutFilter('SKILL')}>Skills</button>

                            <button className={`about_btn  ${aboutFilter === 'ABOUT' ? 'about_btn_active' : ''}`} onClick={()=> setAboutFilter('ABOUT') }>About me</button>

                            <button className={`about_btn  ${aboutFilter === 'EDUCATION' ? 'about_btn_active' : ''}`} onClick={()=> setAboutFilter('EDUCATION') } >Education</button>

                            <button className={`about_btn ${aboutFilter === 'CARREER' ? 'about_btn_active' : '' }`}  onClick={()=> setAboutFilter('CARREER')}> Carreer</button>
                        </div>
                    </Col>
                    <Col lg='8' md='9'>
                    {
                        aboutFilter === 'SKILL' && <Skill />
                    }

                    {
                        aboutFilter === 'ABOUT' && <div className="about_content_wrapper d-flex">
                            <div className="about_img">
                                <img src={HeroImg} alt="" className="w-100" />
                            </div>


                            <div className="about_content">
                                <h2>I'm Sohaib Ashraf</h2>
                                <p>  if you are looking expert and professional eCommerce SaaS developer who can inspire you with work then I’m that guy. I’m an expert multiple in SaaS platforms such as Bigcommerce, Shopify , Woocommerce, Volusion , Squarespace, CS CART. </p>

                                <div className="social_links">
                                <h6 className='mb-2'>
                                    Connect With me:
                                </h6>
                                <Social />
                               
                                </div>
                            </div>
                        </div>
                    }

                    {
                        aboutFilter === 'EDUCATION' && <Education />
                    }

                   
                    {
                        aboutFilter === 'CARREER' && <Certificate />
                    }

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About