
import React from 'react';
import 'css/compare.css';
import Slider from 'react-slick';
import Checkbox from 'components/Checkbox';
import Select from 'components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import images from 'img/brand';
import RightArrow from 'img/rightarrow.png'
import LeftArrow from 'img/leftarrow.png'
// 참고 : https://blog.logrocket.com/getting-started-with-react-select/

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



const items = [
    { value: 1, name: '아메리카노' },
    { value: 2, name: '카페라떼' },
    { value: 3, name: '스무디' },
    { value: 4, name: '차 (티)' },
    { value: 5, name: 'NON-카페인' },
    { value: 6, name: '기타' },
];

class Compare extends React.Component {
    state = {
        params: []
    }

    componentDidMount() {
        this._dbTest();
    }

    _dbTest = async () => {
        await axios.get('https://0u7o5gwge3.execute-api.us-east-1.amazonaws.com/aaa/data', {
            params: {
                "name": "복숭아 자두 스파클링"
            }
        })
            .then(res => {
                console.log(res.data);
                // const params = res.data;
                // this.setState({ params });
            })
    }

    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, 'is selected.');
        }
    }

    createCheckbox = label => (
        <Checkbox
            label={label.name}
            handleCheckboxChange={this.toggleCheckbox}
            key={label.value}
        />
    )

    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )

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
        const sss = require('img/starbucks.png')

        const productList = this.state.params.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product['image']})` }} data-setbg="img/shop/product-2.jpg">
                        <div className="product__label">
                            <span>카카오</span>
                        </div>
                    </div>
                    <div className="product__item__text">
                        <h6><p>{product['name']}</p></h6>
                        <div className="product__item__price">$32.00</div>
                        <div className="cart_add">
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <>
                <section className="search spad">
                    <div className="container">
                        <div className="categories">
                            <div className="container">
                                <div>
                                    <div className="categories__slider owl-carousel">
                                        <Slider {...settings}>
                                            <div onClick={() => alert('Starbucks!')} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.starbucks} alt="starbucks" /></div>
                                                        <h5>Starbucks</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.hollys} /></div>
                                                        <h5>HOLLYS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.tomntoms} /></div>
                                                        <h5>TOMNTOMS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.ediya} /></div>
                                                        <h5>EDIYA</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.coffeebean} /></div>
                                                        <h5>COFFEEBEAN</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.twosome} /></div>
                                                        <h5>TWOSOMEPLACE</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.angelinus} /></div>
                                                        <h5>ANGELINUS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.bbaek} /></div>
                                                        <h5>BBAEKDABANG</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <form onSubmit={this.handleFormSubmit}>
                                    {this.createCheckboxes()}

                                    <button className="btn btn-primary" type="submit">검색</button>
                                </form>
                            </div>
                            <div className="col-sm-12">
                                <Select></Select>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            {/* {productList} */}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Compare;