
import React from 'react';
import 'css/compare.css';
import Slider from 'react-slick';
import Checkbox from 'components/Checkbox';
import Select from 'components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ModalExample from 'components/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from 'components/product';
import Brand from 'components/brand';
import { faTrashAlt,faChevronUp } from "@fortawesome/free-solid-svg-icons";
import RightArrow from 'img/rightarrow.png'
import LeftArrow from 'img/leftarrow.png'
// 참고 : https://blog.logrocket.com/getting-started-with-react-select/


const items = [
    { name: '전체' },
    { name: '아메리카노' },
    { name: '에스프레소' },
    { name: '콜드브루' },
    { name: '카페라떼' },
    { name: '카푸치노' },
    { name: '카페모카' },
    { name: '마끼아또' },
    { name: '라떼' },
    { name: '블렌디드' },
    { name: '스무디' },
    { name: '에이드' },
    { name: '티' },
    { name: '기타' },
];

const brandItems = [
    { name_eng: "all", name_kor: "전체", image: 0},
    { name_eng: "starbucks", name_kor: "스타벅스", image: 1},
    { name_eng: "hollys", name_kor: "할리스", image: 2},
    { name_eng: "tomntoms", name_kor: "탐앤탐스", image: 3},
    { name_eng: "ediya", name_kor: "이디야", image: 4},
    { name_eng: "coffeebean", name_kor: "커피빈", image: 5},
    { name_eng: "twosome", name_kor: "투썸플레이스", image: 6},
    { name_eng: "angelinus", name_kor: "엔제리너스", image: 7},
    { name_eng: "paikdabang", name_kor: "빽다방", image: 8},
]
                                           
function NextArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={RightArrow} alt="" onClick={onClick} className={className} />
    );
}

function PrevArrow(props) {
    const { onClick, className } = props;
    return (
        <img src={LeftArrow} alt="" onClick={onClick} className={className} />
    );
}

const dataAll = [];
let selectedBrand = [];
let selectedMenu = [];

class Compare extends React.Component {
    state = {
        params: [],
        params_compare: [],
        num: 0,
        ModalStatus: false, Modal: null
    }

    componentDidMount() {
        this._dbTest();
    }
    apiEndpoint = "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/data"
    _dbTest = async () => {
        await axios.get(this.apiEndpoint)
            .then(res => {
                // console.log(res.data);
                const params = res.data;
                this.dataAll = res.data;
                this.setState({ params });
            })
    }

    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

     // 자식 컴포넌트에서 보내준 값을 파라미터에 저장하고 실행
     handleFilter = async function (name_eng, name_kor, isChecked) {
        if (isChecked) {
            selectedBrand.push(name_eng);
        }
        else {
            selectedBrand.splice(selectedBrand.indexOf(name_eng),1);
        }

        console.log("브랜드메뉴 잘들어갔나요?" + selectedBrand);
        this.MenuBrandFilter();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        selectedMenu = [...this.selectedCheckboxes];
        this.MenuBrandFilter();
    }

    MenuBrandFilter = function () {
        if (!(this.dataAll == null)) {
            let params = [];
            // if(selectedBrand.length == 0){
            //     for (let i=0; i<selectedMenu.length; i++){
            //         let filteringData = this.dataAll.filter(function(element) {
            //             return element.category == selectedMenu[i];
            //         })
            //         params = params.concat(filteringData);
            //     }
            // }
            for (let i = 0; i < selectedBrand.length; i++) {
                for (let j = 0; j < selectedMenu.length; j++) {
                    let filteringData = this.dataAll.filter(function (element) {
                        return element.brand === selectedBrand[i] && element.category === selectedMenu[j];
                    })
                    params = params.concat(filteringData);
                }
            } 
            this.setState({ params });
            console.log(params);
        }
    }

    
   
    createBrandMenus = () => (
        brandItems.map(element=> <Brand name_eng={element.name_eng} name_kor={element.name_kor} image={element.image} submit={this.handleFilter.bind(this)}/> )
    )

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

    // // params_compare는 모든 컴포넌트 객체를 담고 있어야 하기 떄문에 compare.js에서 사용해야 함.
    // // 자식 컴포넌트에서 실행된 결과를 product라는 파라미터로 저장해주고 이 파라미터값을 params_compare 배열에 저장
    // 비교박스에 상품 추가 : 참고사이트 https://velopert.com/3636
    handleCompareAdd = function (product) {
        const { params_compare } = this.state;
        let verify_overlap = params_compare.filter(info => info.id === product.id)

        if (params_compare.length >= 3) {
            alert('비교함에 최대 3개까지 넣을 수 있습니다.');
        } else if (verify_overlap.length !== 0) {
            alert('비교함에 동일한 음료가 이미 들어있습니다.');
        } else {
            this.setState(() => {
                return { params_compare: params_compare.concat(product) };
            });
        }
    }

    // 비교박스에서 상품 제거
    handleCompareDelete = function (product) {
        const { params_compare } = this.state;
        if (params_compare.length > 0) {
            this.setState({
                params_compare: params_compare.filter(info => info.id !== product.id)
            })
        } else {
            alert('비교함에 제거할 상품이 없습니다.');
        }
    }

    // 스크롤 위로 올리기
    scrollUp(){
        window.scrollTo(0, 0);
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
        console.log(this.state.params);
        // submit으로 자식 컴포넌트에 props를 전달해주면 자식이 실행한 결과를 받아와 handleCompareAdd의 파라미터로 저장함 
        const productList = this.state.params.map((product) => (
            <Product coffee={product} submit={this.handleCompareAdd.bind(this)}></Product>
        ));

        const compareList = this.state.params_compare.map((product) => (
            <tr>
                <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                        <img onClick={() => this.handleCompareDelete(product)} src={product['image']} style={{ width: '100px', height: '100px' }} alt="" />
                    </div>
                </td>
                <td className="cart__price">{product['name']}{product['brand']}</td>
                <td className="cart__close"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.handleCompareDelete(product)} style={{ width: '30px' }} /></td>
            </tr>
        ));

        return (
            <>
                <section style={{ float: 'left', width: '80%' }}>
                    <section className="search spad">
                        <div className="container">
                            {/* 자식(brand.js) 에게 submit이라는 props를 보내주고 자식에서 실행된 결과를 handleFilter의 파라미터값으로 받아옴 */}
                            <div className="categories">
                                <div className="container">
                                    <div>
                                        <div className="categories__slider owl-carousel">
                                            <Slider {...settings}>
                                                {this.createBrandMenus()}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="" style={{ borderTop: '1px solid rgba(240, 135, 50, 0.5)', borderBottom: '1px solid rgba(240, 135, 50, 0.5)', 'paddingBottom': '10px' }}>
                                <div className="row">
                                    <div className="shop__option__search" style={{ width: '800px', 'paddingLeft': '30px', margin: '20px' }}>
                                        <form onSubmit={this.handleFormSubmit}>
                                            {this.createCheckboxes()}
                                        </form>
                                    </div>
                                    <div className="shop__option__right">
                                        <div className="shop__option__right" style={{ float: 'right', 'minWidth': '200px', margin: '20px' }}>
                                            <Select coffee={this.state.params}></Select>
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
                </section>

                <section className="wishlist spad" style={{ width: '18%', float: 'left', position: 'fixed', top: '280px', right: '30px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-12" style={{ textAlign: 'center' }}>Compare Box</div>
                                <div className="wishlist__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th style={{ width: '70%' }} colSpan='2'>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {compareList}
                                        </tbody>
                                    </table>
                                </div>
                                <ModalExample product={this.state.params_compare}></ModalExample>
                            </div>
                        </div>
                    </div>
                </section>
                <div onClick={this.scrollUp} style={{float:'right',position:'fixed',right:'40px',bottom:'40px'}}><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>Top</div>
            </>
        );
    }
}
export default Compare;