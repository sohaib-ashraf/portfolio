

import React from 'react'
import './Experience.css'
import {BsBriefcase} from 'react-icons/bs'
import Experienceimg from '../../../assets/images/portfolio/experience.png'

import { Container, Row, Col } from 'reactstrap'


const Experience = () => {


const ExperienceData = [
    {
        year: '2015-2016',
        Jobtitle: 'Sr. Wordpress Developer',
        Jobdesc: 'H3 Solutions',
    },
    {
        year: '2016-2017',
        Jobtitle: 'Shopify Developer',
        Jobdesc: 'Markloops',
    },
    {
        year: '2018-2020',
        Jobtitle: 'Wordpress and shopify developer',
        Jobdesc: 'RC digital Consultancy',
    }
]







  return (
    <section id='experience'>
    <Container>
        <Row>
            <Col lg='12' className='mb-4'>
                <h2>
                    Experience
                </h2>
            </Col>

            <Col lg='6'  md='6'>
            <div className="Experience_image">

                    <img src={Experienceimg} alt="experience_portfolio_website_images" className="w-60"></img>

            </div>
            </Col>

            <Col lg='6' md='6'>
            <div className="single_experience-container">

                    {ExperienceData.map((item, index) => (

                        <div className="single_experience" key={index}>
                    <span className='experience_icon'>
                    <BsBriefcase />
                    </span>
                    <h6>{item.year}</h6>
                        <h5>{item.Jobtitle}</h5>
                        <p>
                            {item.Jobdesc}
                        </p>
                    </div>
                    ) ) }

            </div>
            </Col>

        </Row>
    </Container>
    </section>
  )
}

export default Experience