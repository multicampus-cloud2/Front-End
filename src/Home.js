import React from 'react';
import Slider from "react-slick";
import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teamA from 'img/teamA.jpg' 

 
const Home = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 4000,
    pauseOnHover: true,
    fade: false,
    lazyLoad: true
  };

  return (
    <>
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
    </>
  );
};

export default Home;