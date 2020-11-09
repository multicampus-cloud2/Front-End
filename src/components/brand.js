import React from 'react';
import images from 'img/brand';
import Slider from 'react-slick';
import RightArrow from 'img/rightarrow.png'
import LeftArrow from 'img/leftarrow.png'
import 'css/compare.css';

function NextArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={RightArrow} alt="" onClick={onClick} className={className}/>
    );
}

function PrevArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={LeftArrow} alt="" onClick={onClick} className={className}/>
    );
}

class Brand extends React.Component {
    state = {
        brand_eng: '',
        brand_kor: ''
    }

    // submit의 이벤트 처리를 통해 33번 째 줄에서 부모에게 값을 전달해줌
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.brand_eng);
        console.log(this.state.brand_kor);
        this.props.submit(this.state.brand_eng, this.state.brand_kor);
    }

    // 버튼 클릭 시 함수 호출하면서 state의 변수를 파라미터값으로 지정해줌
    handleFilter = function(eng, kor){
        this.setState({
            brand_eng: eng,
            brand_kor: kor
        })
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }

        return (
            <div className="categories">
                <div className="container">
                    <div>
                        <div className="categories__slider owl-carousel">
                            <Slider {...settings}>
                                {/* form 태그를 사용해서 자식에서 부모한테 값을 전달해줄 수 있음 */}
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                {/* 버튼의 submit 타입으로 실행 결과를 form에 이벤트로 전달 */}
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("starbucks", "스타벅스")}><img src={images.starbucks} /></button></div>
                                                <h5>STARBUCKS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("hollys", "할리스")}><img src={images.hollys} /></button></div>
                                                <h5>HOLLYS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("tomntoms", "탐앤탐스")}><img src={images.tomntoms} /></button></div>
                                                <h5>TOMNTOMS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("ediya", "이디야")}><img src={images.ediya} /></button></div>
                                                <h5>EDIYA</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("coffeebean", "커피빈")}><img src={images.coffeebean} /></button></div>
                                                <h5>COFFEEBEAN</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("twosome", "투썸플레이스")}><img src={images.twosome} /></button></div>
                                                <h5>TWOSOMEPLACE</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("angelinus", "엔제리너스")}><img src={images.angelinus} /></button></div>
                                                <h5>ANGELINUS</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="categories__item__whole">
                                        <div className="categories__item">
                                            <div className="categories__item__icon">
                                                <div><button className="brand_button" type="submit" onClick={() => this.handleFilter("paikdabang", "빽다방")}><img src={images.bbaek} /></button></div>
                                                <h5>BBAEKDABANG</h5>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brand;