


import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import { Container, Row , Col } from 'reactstrap'
import Client1 from '../../../assets/images/portfolio/client-1.jpg'


const Testimonial = () => {

  const testimonialData = [
    {
      name: 'Eric Z',
      work: 'web Developer',
      desc: "Incredible attention to detail along with speed and precision. Sohaib is the best developer we found on Upwork. We ended up working with Sohaib for multiple years because he was such a vital part of our team. Can't recommend him enough for Bigcommerce, Wordpress, and Shopify. He knows all of them.",
      img: Client1,
      
    },
    {
      name: 'Martin Cooper',
      work: 'web Developer',
      desc: "Sohaib is brilliant. He is incredibly efficient, prompt, a great communicator, he actions exactly what you ask for, but he also makes helpful and beneficial suggestions and recommendations along the way. We are thrilled with his work so far, and will be keeping him close as we continually make works on our website. Thanks Sohaib!",
      img: Client1,
      
    },
  ] 

        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          swipeToSlide: true

        };


  return (

    <section id='testimonial'>
    <Container>
        <Row>
            <Col lg='12'>
            <h6>
                Why you choose me
            </h6>
            </Col>

            <Col lg='6'>

          
            <h3 className="mt-4 mb-2">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p className='mb-4 next-project-desc'>
            I specialize in web design and development, make your website easy to navigate, have a mobile-friendly version of your website, and make your website easy to find. 
             
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  100% satisfaction
                </p>

                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </p>

                
                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </p>


              </div>

              <div>
                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </p>

                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </p>


                <p className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className='about__icon'>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  24/7 Availability
                </p>


              </div>

          

              </div>

           
            
            </Col>

            <Col lg='6' className=''>
            <h2 className='mb-4 text-center what_client_heading'>What my clients says</h2>
            <Slider {...settings}> 
           
                {
                  testimonialData.map((item, index)=> (
                   
                <div>
                    <div className="single_testimonial" key={index}>

                    <div className='testimonial-top-content d-flex align-content-center gap-4 mb-3'>
                    <img src={item.img} alt="" width='50' height='50'/>
                    <div className='testimonial-client'>
                    <h6>{item.name}</h6>
                    <p className='title'>{item.work}</p>
                    </div>


                    </div>
                    <div className='testimonial-desc'>
                    <p>{item.desc}</p> 
                    </div>
                        
                    </div>
                    </div>
                    
                    ))
                }
                </Slider>
              

            
            </Col>
        </Row>
    </Container>
    </section>
    



  )
}

export default Testimonial;