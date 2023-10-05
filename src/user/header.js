import './header.css'
import img from '../image/7.png'
import img2 from '../image/6.png'
import background from '../dash-board/icons/backgroundhome.svg'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Appoffers from './home_Offers/appoffers'

import React, { Component } from "react";
import Slider from "react-slick";

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
      <div>
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

        
        <div className='background'>
          <img className='imgslider' src={background} alt='product-img' />
        </div>

        <div className='home_Offers'>
            <h1>العروض</h1>
            <div>
              <Appoffers/>
            </div>
        </div>

      </div>
    );
  }
}

    