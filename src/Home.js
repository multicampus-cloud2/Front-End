import React from 'react';
import Slider from "react-slick";
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
    pauseOnHover: true,
    fade: false,
    lazyLoad: true
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://testbucket20201103-h.s3.amazonaws.com/starbucksnew.png' alt="starbucksnew"/>
        </div>
      </Slider>
    </div>
  );
};

export default Home;