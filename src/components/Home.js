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
          <img src='https://cacaonewproductbucket-starbucks.s3.amazonaws.com/starbucks_new.PNG' alt="starbucksnew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-hollys.s3.amazonaws.com/hollys_new.PNG' alt="hollysnew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-tomntoms.s3.amazonaws.com/tomntoms_new.PNG' alt="tomntomsnew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-ediya.s3.amazonaws.com/ediya_new.PNG' alt="ediyanew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-coffeebean.s3.amazonaws.com/coffeebean_new.png' alt="coffeebeannew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-twosome.s3.amazonaws.com/twosome_new.jpg' alt="twosomenew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-angelinus.s3.amazonaws.com/angelinus_new.PNG' alt="angelinusnew"/>
        </div>
        <div className="banner">
          <img src='https://cacaonewproductbucket-paikdabang.s3.amazonaws.com/paikdabang_new.jpg' alt="paikdabangnew"/>
        </div>
      </Slider>
    </div>
  );
};

export default Home;