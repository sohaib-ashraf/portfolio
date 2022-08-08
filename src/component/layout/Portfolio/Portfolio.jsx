

import React, {useState} from 'react'
import './Portfolio.css'
import { Container, Row, Col } from 'reactstrap'

import PortfolioData from './PortfolioData'



const Portfolio = () => {

    const[items, setItems] =useState(PortfolioData);
    const filterItems = (cate) => {
        const updateItems = PortfolioData.filter((curElem)=> {
            return curElem.category === cate;
        })

        setItems(updateItems);
    }


    const [aboutFilter,setAboutFilter]  = useState('ALL')



    return (
        <section id="portfolio">
            <Container>
                <Row>
                    <Col lg='12'>
                        <div className="portfolio_top mb-5 ">
                            <h6>Portfolio</h6>
                            <h2>Some of my distinguished works</h2>
                        </div>

                    </Col>
                    <Col lg='12' className='mb-3'>
                        <div className='portfolio_button-container d-flex align-item-center justify-content-center gap-3'>
                        <button className={`portolio_button-tabs  ${aboutFilter === 'ALL' ? 'active-tab-btn' : ''}`} onClick={() => {setItems(PortfolioData);setAboutFilter('ALL')}} >All</button>
                            <button className={`portolio_button-tabs  ${aboutFilter === 'WORDPRESS' ? 'active-tab-btn' : ''}`} onClick={() => {filterItems('wordpress');setAboutFilter('WORDPRESS') }}>Wordpress</button>
                            <button className={`portolio_button-tabs  ${aboutFilter === 'BIGCOMMERCE' ? 'active-tab-btn' : ''}`} onClick={() => {filterItems('bigcommerce'); setAboutFilter('BIGCOMMERCE')}}>Bigcommerce</button>
                            <button className={`portolio_button-tabs  ${aboutFilter === 'SHOPIFY' ? 'active-tab-btn' : ''}`}  onClick={() => {filterItems('shopify');setAboutFilter('SHOPIFY')}}>Shopify</button>
                        </div>

                    </Col>

                    {items.map((item, index) => (

                        <Col lg='4' md='6' key={index}>

                            <div className='portfolio_item'>
                                
                                    <div className='portfolio_top'>
                                        <h6>{item.title}</h6>
                                        <div className='mb-4'>
                                            <span className='portfolio_keyword'>{item.keyword} </span>
                                            <span className='portfolio_keyword'>{item.keywordTwo}</span>
                                        </div>
                                    </div>

                                    <div className='portfolio_card'>
                                        <div className="portfolio_img">
                                            <img src={item.imgSrc} alt="" className='w-100' />
                                        </div>

                                        <div className="portfolio_content">

                                            <div className='portfolio_live'>
                                                <h6>
                                                    {item.SiteName}
                                                </h6>
                                                <a href={item.url} target='_blank' rel="noopener noreferrer"><button className='btn portfolio_live_launch'>Launch</button></a>
                                            </div>

                                        </div>

                                    </div>

                            </div>
                        </Col>

                    )
                    )}





                </Row>
            </Container>
        </section>
    )
}

export default Portfolio