import React from 'react';
import 'css/compare.css';
import Slider from 'react-slick';

import starbucks from 'img/starbucks.png';
import coffeebean from 'img/coffeebean.png';
import hollys from 'img/hollys.png';
import ediya from 'img/ediya.png';
import bbaek from 'img/bbaek.png';
import tomntoms from 'img/tomntoms.png';
import angelinus from 'img/angelinus.png';
import twosome from 'img/twosome.png';

import {
    Starbucks,
    Hollys,
    Ediya
  } from 'img';



function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
      >
      </div>        
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


const Compare = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const sss = require('img/starbucks.png')
    return (
    <div className="categories">
        <div className="container">
            <div>
                <div className="categories__slider owl-carousel">
                <Slider {...settings}>
                    <div onClick={() => alert('Starbucks!')} className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={starbucks} alt="starbucks"/></div>
                                <h5>Starbucks</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={hollys}/></div>
                                <h5>HOLLYS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={tomntoms}/></div>
                                <h5>TOMNTOMS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={ediya}/></div>
                                <h5>EDIYA</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={coffeebean}/></div>
                                <h5>COFFEEBEAN</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={twosome}/></div>
                                <h5>TWOSOMEPLACE</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={angelinus}/></div>
                                <h5>ANGELINUS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="categories__item__whole">
                        <div className="categories__item">
                            <div className="categories__item__icon">
                                <div><img src={bbaek}/></div>
                                <h5>BBAEKDABANG</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
                </div>
                </div>
                </div>

    );
}

export default Compare;