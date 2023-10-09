import './mainpage.css'

import woman from '../icons/woman.svg'
import man from '../icons/man.svg'
import bag from '../icons/bag.svg'
import Accessories from '../icons/Accessories.svg'
import shose from '../icons/shose.svg'
import chiald from '../icons/chiald.svg'
import game from '../icons/game.svg'
import toolhome from '../icons/tool-hom.svg'

import { Link } from 'react-router-dom'

import React, { Component } from "react";
import Slider from "react-slick";

export default class Mainpage extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='menuProduct2'>
        <Slider {...settings} >

            <Link  className='Link' to='/'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={woman} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>ملابس نسائي</h3>
              </div>
            </Link>

            <Link  className='Link' to='/man'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={man} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>ملابس رجالي</h3>
              </div>
            </Link>

            <Link  className='Link' to='/bag'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={bag} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>حقائب</h3>
              </div>
            </Link>

            <Link  className='Link' to='/Accessories'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={Accessories} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>أكسسوارات</h3>
              </div>
            </Link>

            <Link  className='Link' to='/shoes'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={shose} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>أحذية</h3>
              </div>
            </Link>

            <Link  className='Link' to='/chiald'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={chiald} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>ملابس أطفال</h3>
              </div>
            </Link>

            <Link  className='Link' to='/game'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={game} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>ألعاب</h3>
              </div>
            </Link>

            <Link  className='Link' to='/toolhome'>
              <div className='cart-menu'>
                  <div className='product2'>
                      <img src={toolhome} alt='product-img' />
                  </div>
                  <h3 className='text-h3'>ادوات منزلية</h3>
              </div>
            </Link>
        </Slider>
      </div>
    );
  }
}