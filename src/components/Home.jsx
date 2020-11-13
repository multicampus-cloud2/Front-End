<<<<<<< HEAD:src/components/Home.js
import React from 'react';
import Slider from "react-slick";
import 'css/home.css';
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
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/starbucks_new.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/hollys_new.png' alt="hollysnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/tomntoms_new.png' alt="tomntomsnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/ediya_new.png' alt="ediyanew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/coffeebean_new.png' alt="coffeebeannew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/twosome_new.png' alt="twosomenew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/angelinus_new.png' alt="angelinusnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/paikdabang_new.png' alt="paikdabangnew"/>
        </div>
      </Slider>
    </div>
  );
};

=======
import React from 'react';
import Slider from "react-slick";
import 'css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const settings = {
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
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/starbucks_new.png' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/hollys_new.png' alt="hollysnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/tomntoms_new.png' alt="tomntomsnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/ediya_new.png' alt="ediyanew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/coffeebean_new.png' alt="coffeebeannew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/twosome_new.png' alt="twosomenew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/angelinus_new.png' alt="angelinusnew"/>
        </div>
        <div className="banner">
          <img src='https://cacao-newproductbucket.s3.amazonaws.com/paikdabang_new.png' alt="paikdabangnew"/>
        </div>
      </Slider>
    </div>
  );
};

>>>>>>> a56f99c92a5a24548ed738f6f6b2168af714cf5b:src/components/Home.jsx
export default Home;