

import React from 'react'
import './Contact.css'
import Form from '../Form/Form'
import { Container, Row, Col } from 'reactstrap'
import Social from '../Social';


const Contact = () => {

  return (
    <section id="contact">
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>
                    Get in touch
                </h2>
            </Col>

            <Col lg='6'>
            <Row>

            
                    <Col lg='6'>
                    <div className="contact_info_container ">
                        <div className="single_info_box">
                            <h6> 
                                Address
                            </h6>
                            <p>Pakistan, Asia</p>
                        </div>

                        <div className="single_info_box">
                            <h6> 
                                Email
                            </h6>
                            <p>sohaibashraf027@gmail.com</p>
                        </div>

                    </div>
                    </Col>
                   

                    <Col lg='6'>
                    <div className="contact_info_container ">
                        <div className="single_info_box">
                            <h6> 
                                location
                            </h6>
                            <p>Islamabad, Pakistan</p>
                        </div>

                        <div className="single_info_box">
                            <h6> 
                                Phone
                            </h6>
                            <p>+92 304 6925027</p>
                        </div>

                    </div>
                    </Col>
                    </Row>

                    <div className='social_links'>
                <Social />
              </div>
            </Col>    

            <Col lg='6'>

                <Form />

            </Col>

        </Row>
    </Container>
    </section>
  )
}

export default Contact