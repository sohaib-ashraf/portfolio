

import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'reactstrap'


const navLinks = [

    {
        display: 'home',
        url: '#home'
    },

    {
        display: 'About',
        url: '#about'
    },

    {
        display: 'Services',
        url: '#services'
    },

    {
        display: 'Portfolio',
        url: '#portfolio'
    },

    {
        display: 'Contact',
        url: '#contact'
    }

]

const Footer = () => {
    return (
        <Container className='text-center footer'>
            <Row>
                <Col lg='6'>
                    <div className='Footer_navlinks'>
                        <ul className="footer_nav__list d-flex align-items-center gap-2">
                            {
                                navLinks.map((item, index) => <li className="nav__item" key={index}>
                                    <a href={item.url}>{item.display}</a>
                                </li>)

                            }
                        </ul>
                    </div>


                </Col>
                <Col lg='6'>
                    <div className="site_creator">
                        <h6>
                            Created By Sohaib
                        </h6>
                    </div>
                </Col>

                <Col lg='12'>
                    <div className="footer_copyright mt-4">
                        <p>
                            2022 Copyright, All right reserved
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Footer