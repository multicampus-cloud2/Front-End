
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

function BrandMenu(props) {
    // let ImagePath = require("img/"+props.brand);
    const imageName = props.brand + '.png';
    // const filePath = 'img/${imageName}';
    // const fileUrl = require(filePath);
    return (
    <div onClick={() => this.handleFilter("starbucks")} className="categories__item__whole">
        <div className="categories__item">
            <div className="categories__item__icon">
                <div>
                    {/* <img src={ImageName} alt={props.brand} /> */}
                    <img src={images.starbucks}/>
                    </div>
                <h5>{props.brand}</h5>
            </div>
        </div>
    </div>
    );
}



const items = [
    { value: 1, name: '아메리카노' },
    { value: 2, name: '카페라떼' },
    { value: 3, name: '카페모카' },
    { value: 4, name: '바닐라라떼' },
    { value: 5, name: '카페모카' },
    { value: 6, name: '스무디' },
    { value: 7, name: '티' },
    { value: 8, name: 'NON-카페인' },
    { value: 9, name: '기타' },
];

class Compare extends React.Component {
    state = {
        params: []
    }

    componentDidMount() {
        this._dbTest();
    }
    apiEndpoint = "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/data"
    _dbTest = async () => {
        await axios.get(this.apiEndpoint)
            .then(res => {
                console.log(res.data);
                const params = res.data;
                this.setState({ params });
            })
    }

    handleFilter = async function(name_eng, name_kor) {
        const obj = {brand_eng: name_eng, brand_kor: name_kor, httpMethod: "POST"};

        const response = await axios.post(this.apiEndpoint, obj);
        const params = response.data;
        this.setState({ params });
        console.log(params);
    }

    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    handleMenuFilter = async function(menu_name) {
        const obj = {menu: menu_name};
        const response = await axios.post('https://76rsehyegc.execute-api.us-east-1.amazonaws.com/dev/coffeefiltering', obj);
        const params = response.data;
        this.setState({ params });
        console.log(response.data);
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        console.log(typeof([...this.selectedCheckboxes][0]));
        this.handleMenuFilter([...this.selectedCheckboxes]);
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

        const productList = this.state.params.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${product['image']})` }} data-setbg="img/shop/product-2.jpg">
                        <div className="product__label">
                            <span>{product['brand']}</span>
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
                                            <div onClick={() => this.handleFilter("starbucks", "스타벅스")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.starbucks} /></div>
                                                        <h5>STARBUCKS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("hollys", "할리스")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.hollys} /></div>
                                                        <h5>HOLLYS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("tomntoms", "탐앤탐스")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.tomntoms} /></div>
                                                        <h5>TOMNTOMS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("ediya", "이디야")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.ediya} /></div>
                                                        <h5>EDIYA</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("coffebean", "커피빈")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.coffeebean} /></div>
                                                        <h5>COFFEEBEAN</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("twosome", "투썸플레이스")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.twosome} /></div>
                                                        <h5>TWOSOMEPLACE</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("angelinus", "엔제리너스")} className="categories__item__whole">
                                                <div className="categories__item">
                                                    <div className="categories__item__icon">
                                                        <div><img src={images.angelinus} /></div>
                                                        <h5>ANGELINUS</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div onClick={() => this.handleFilter("paikdabang", "빽다방")} className="categories__item__whole">
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
                        <div className="" style={{borderTop:'1px solid rgba(240, 135, 50, 0.5)',borderBottom:'1px solid rgba(240, 135, 50, 0.5)','paddingBottom':'10px'}}>
                            <div className="row">
                                <div className="shop__option__search" style={{width:'800px','paddingLeft':'30px',margin:'20px'}}>
                                    <form onSubmit={this.handleFormSubmit}>
                                        {this.createCheckboxes()}
                                        <button type="submit" style={{'backgroundColor': 'white',border: 'none'}}><FontAwesomeIcon icon={faSearch} size="2x"/>검색</button>
                                    </form>
                                </div>
                                <div className="shop__option__right">
                                    <div className="shop__option__right" style={{float:'right','minWidth':'200px',margin:'20px'}}>
                                        <Select></Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            {productList}
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
export default Compare;