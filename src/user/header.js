import './header.css'
import img from '../image/7.png'
import img2 from '../image/6.png'
import Menu from './menu'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Footer from './footer/footer.js'
import { Routes, Route } from "react-router-dom"
import AppAccessories from './components/Acssessories/appAcssessories.js'
import Appbag from './components/bag/appBag.js'
import Appchiald from './components/chiald/appchiald.js'
import AppGame from './components/game/appGame'
import AppMan from './components/man/appMan'
import AppShoes from './components/shoes/appShoes'
import AppTool_home from './components/tool-home/appTool_home'
import AppWoman from './components/woman/appoWoman'



export default class Header extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 10000,
      pauseOnHover: true
    };
    return (
      <div className='slider-menu'>
        <Slider {...settings} className='slider'>
          <div>
          <img className='imgslider' src={img} alt='product-img' />
          </div>
          <div>
          <img className='imgslider' src={img2} alt='product-img' />
          </div>
          <div>
          <img className='imgslider' src={img} alt='product-img' />
          </div>
          <div>
          <img className='imgslider' src={img2} alt='product-img' />
          </div>
        </Slider>
        
        <div className='backgroundBlur'></div>

        <div className='home_Offers'>
            <div>
              <Menu/>
              <Routes>
                <Route path="/Accessories" element={ <AppAccessories/> } />
                <Route path="/bag" element={ <Appbag/> } />
                <Route path="/chiald" element={ <Appchiald/> } />
                <Route path="/game" element={ <AppGame/> } />
                <Route path="/man" element={ <AppMan/> } />
                <Route path="/shoes" element={ <AppShoes/> } />
                <Route path="/toolhome" element={ <AppTool_home/> } />
                <Route path="/" element={ <AppWoman/> } />
              </Routes>
            </div>
        </div>
            <Footer/>
      </div>
    );
  }
}

    