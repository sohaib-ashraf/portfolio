 


 import React, {useRef, useEffect} from 'react'
 import { Container } from 'reactstrap';
 import './Header.css'

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



 const Header = () => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    useEffect(()=> {
        window.addEventListener ('scroll', ()=> {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header_shrink')
            } else {
                headerRef.current.classList.remove('header_shrink')
            }
        })

     return () => {
        window.removeEventListener('scroll')
     }   

    },[])

    const menuToggle = ()=> menuRef.current.classList.toggle('menu_active')



   return <header className="header" ref={headerRef} >
   <Container>
    <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
           <h5>Sohaib</h5>
        </div>
        <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
        <ul className="nav__list">
            {
                navLinks.map((item,index) =>  <li className="nav__item" key={index}>
                <a href={item.url}>{item.display}</a>
            </li>)
                
            } 
        </ul>
        </div>
        <div className="nav__right d-flex align-items-center gap-4">
        <a href='https://wa.me/923046925027'><button className="btn">Let's Talk</button> </a>
        <span className="mobile-menu"><i class="ri-menu-5-line" onClick={menuToggle}></i></span>
    </div>  
    </div>


   </Container>
   </header>
 }
 
 export default Header;