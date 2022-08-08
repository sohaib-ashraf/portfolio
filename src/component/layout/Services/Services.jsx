

import React from 'react'
import {Container, Row , Col} from 'reactstrap'
import './Services.css'
import {FaWordpressSimple,FaShopify, FaSquarespace,FaReact, FaWix} from "react-icons/fa"
import {SiBigcommerce } from "react-icons/si"


const Services = () => {

const SerivesItems = [

  {
    icon: <FaWordpressSimple />,
    title: 'Wordpress',
    desc: 'Custom theme development, Speed optimization, SEO, API , Conversion, Woocommerce,  ACF, Elementor, Divi'
  },
  {
    icon: <SiBigcommerce />,
    title: 'Bigcommerce',
    desc: ' Store Setup, Stencil theme development, Speed optimization, SEO, API, optmization, Schema, Troubleshooting, Page builder '
  },
  {
    icon: <FaShopify />,
    title: 'Shopify',
    desc: ' Custom layout and theme development, Store setup, Custom functionality, SEO and optimization, etc'
  },
  {
    icon: <FaReact />,
    title: 'Custom Web app',
    desc: ' React app, Psd to Html CSS bootstrap, Php custom website'
  },
  {
    icon: <FaSquarespace />,
    title: 'SquareSpace',
    desc: ' Custom theme developemnt, page builder, Design, API intergration, '
  },
  {
    icon: <FaWix />,
    title: 'Wix',
    desc: ' Anything you want, Theme development, Custom functionality'
  }

]



  return (
    <section id="services">
    <Container>
        <Row>
            <Col lg='12' className='service_top mb-5'>
                <h6>Features</h6>
                <h2>What Services I provide</h2>
            </Col>

          {SerivesItems.map((item, index) => (
            <Col lg='4' md='6' xs='12' key={index} className="mb-4">
            <div className="single_service">
              <span className="service_icon">
              {item.icon}
               </span>
              <h2>
                {item.title} 
              </h2>
              <p>
              {item.desc}
              </p>
            </div>

            </Col>

          )
          
          )}

            


        </Row>
    </Container>
    </section>
  )
}

export default Services