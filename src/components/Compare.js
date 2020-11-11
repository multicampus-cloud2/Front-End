import React from 'react';
import 'css/compare.css';
import Slider from 'react-slick';
import Select from 'components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ModalCompare from 'components/ModalCompare';
import * as common from 'components/common.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from 'components/Product';
import Brand from 'components/Brand';
import { faTrashAlt, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import all from 'img/all.png';


const items = common.items;
const brandItems = common.brandItems;
let dataAll = [];
let selectedBrand = [];
let selectedMenu = [];

class Compare extends React.Component {
    state = {
        params: [],
        params_compare: [],
        num: 0,
        ModalStatus: false, Modal: null,
        onChange: false,
        isBrandAllChecked: true,
        isMenuAllChecked: true,
    }

    componentDidMount() {
        this._dbTest();
    }
    apiEndpoint = "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/data"
    _dbTest = async () => {
        await axios.get(this.apiEndpoint)
            .then(res => {
                const params = res.data;

                dataAll = res.data;
                this.setState({ params });
            })
    }

    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    handleBrandMenu = function (name_eng, isChecked, index) {
        brandItems[index].check = brandItems[index].check === 0 ? 1 : 0;

        if (isChecked) {
            selectedBrand.push(name_eng);
        }
        else {
            selectedBrand.splice(selectedBrand.indexOf(name_eng), 1);
        }
        this.setState({
            isBrandAllChecked: false,
        }, () => this.MenuBrandFilter());
    }

    // 브랜드, 메뉴 필터링
    MenuBrandFilter = function () {
        const { isBrandAllChecked, isMenuAllChecked } = this.state;
        if (!(dataAll == null)) {
            let checkedItems = items.filter(function (element) {
                return element.check === 1;
            })
            selectedMenu = [];
            checkedItems.forEach(element => {
                selectedMenu.push(element.name);
            })
            console.log("선택브랜드" + selectedBrand);
            console.log("선택메뉴" + selectedMenu);

            let params = [];
            if (isBrandAllChecked) {
                if (isMenuAllChecked) {
                    params = dataAll;
                } else {
                    for (let i = 0; i < selectedMenu.length; i++) {
                        let filteringData = dataAll.filter(function (element) {
                            return element.category === selectedMenu[i];
                        })
                        params = params.concat(filteringData);
                    }
                }
            }
            else {
                if (isMenuAllChecked) {
                    for (let i = 0; i < selectedBrand.length; i++) {
                        let filteringData = dataAll.filter(function (element) {
                            return element.brand === selectedBrand[i];
                        })
                        params = params.concat(filteringData);
                    }
                } else {
                    for (let i = 0; i < selectedBrand.length; i++) {
                        for (let j = 0; j < selectedMenu.length; j++) {
                            let filteringData = dataAll.filter(function (element) {
                                return element.brand === selectedBrand[i] && element.category === selectedMenu[j];
                            })
                            params = params.concat(filteringData);
                        }
                    }
                }
            }
            this.setState({ params });
        }
    }

    // 브랜드 동그라미메뉴 생성
    createBrandMenus = () => (
        brandItems.map((element, index) =>
            <Brand
                name_eng={element.name_eng}
                name_kor={element.name_kor}
                image={element.image}
                checked={element.check}
                index={index}
                submit={this.handleBrandMenu.bind(this)} />
        )
    )

    // 브랜드 동그라미메뉴 전체 선택 핸들러
    handleAllBrandCheck = () => {
        selectedBrand = [];
        const { isBrandAllChecked } = this.state
        brandItems.forEach(element => {
            element.check = 0;
        })
        this.setState({
            isBrandAllChecked: !isBrandAllChecked,
        }, () => this.MenuBrandFilter());
    }

    // 단일 체크박스 선택 핸들러
    handleMenuCheck = (selectrowIdx) => {
        items.forEach(element => {
            if (element.rowIdx === selectrowIdx) {
                element.check = element.check === 1 ? 0 : 1
            }
        })
        this.setState({
            isMenuAllChecked: false,
        }, () => this.MenuBrandFilter());

    }

    // 체크박스 전체 선택 핸들러
    handleMenuAllCheck = () => {
        const { isMenuAllChecked } = this.state

        items.forEach(element => {
            element.check = 0;
        })

        this.setState({
            isMenuAllChecked: !isMenuAllChecked,
        }, () => this.MenuBrandFilter());
    }

    handleCompareAdd = function (Product) {
        const { params_compare } = this.state;
        let verify_overlap = params_compare.filter(info => info.id === Product.id)

        if (params_compare.length >= 3) {
            alert('비교함에 최대 3개까지 넣을 수 있습니다.');
        } else if (verify_overlap.length !== 0) {
            alert('비교함에 동일한 음료가 이미 들어있습니다.');
        } else {
            this.setState(() => {
                return { params_compare: params_compare.concat(Product) };
            });
        }
    }

    // 비교박스에서 상품 제거
    handleCompareDelete = function (Product) {
        const { params_compare } = this.state;
        if (params_compare.length > 0) {
            this.setState({
                params_compare: params_compare.filter(info => info.id !== Product.id)
            })
        } else {
            alert('비교함에 제거할 상품이 없습니다.');
        }
    }


    // 내림차순
    compareBy_DESC(key) {
        return function (a, b) {
            var x = parseInt(a[key]);
            var y = parseInt(b[key]);

            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
        };
    }

    sortBy_DESC(key) {
        let arrayCopy = [...this.state.params];
        arrayCopy.sort(this.compareBy_DESC(key));
        this.setState({ params: arrayCopy });
    }

    // 오름차순
    compareBy_ASC(key) {
        return function (a, b) {
            var x = parseInt(a[key]);
            var y = parseInt(b[key]);

            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
        };
    }

    sortBy_ASC(key) {
        let arrayCopy = [...this.state.params];
        arrayCopy.sort(this.compareBy_ASC(key));
        this.setState({ params: arrayCopy });
    }

    // 스크롤 위로 올리기
    scrollUp() {
        window.scrollTo(0, 0);
    }

    render() {
        
        if (this.state.onChange === false) {
            this.state.onChange = true;
        } else if (this.state.onChange === true) {
            this.state.onChange = false;
        }

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <common.NextArrow />,
            prevArrow: <common.PrevArrow />
        }

        // submit으로 자식 컴포넌트에 props를 전달해주면 자식이 실행한 결과를 받아와 handleCompareAdd의 파라미터로 저장함 
        const ProductList = this.state.params.map((product) => (
            <Product coffee={product} submit={this.handleCompareAdd.bind(this)}></Product>
        ));

        const compareList = this.state.params_compare.map((Product) => (
            <tr>
                <td className="Product__cart__item">
                    <div className="Product__cart__item__pic">
                        <img onClick={() => this.handleCompareDelete(Product)} src={Product['image']} style={{ width: '100px', height: '100px' }} alt="" />
                    </div>
                </td>
                <td className="cart__price">{Product['name']}{Product['brand']}</td>
                <td className="cart__close"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.handleCompareDelete(Product)} style={{ width: '30px' }} /></td>
            </tr>
        ));

        // 브랜드 동그라미메뉴 'ALL'
        console.log("allCheck" + this.state.isBrandAllChecked);
        let chkAllBrand = (
            <div className="categories__item__whole">
                <div className="categories__item">
                    <div className="category__item_hidden" style={{ backgroundColor: this.state.isBrandAllChecked ? "#888888" : "transparent" }}>
                        <input type="submit" value="" className="input_hidden" onClick={() => this.handleAllBrandCheck()} />
                        <div className="categories__item__icon">
                            <div>
                                <img src={all} alt="" />
                            </div>
                            <h5>ALL</h5>
                        </div>
                    </div>
                </div>
            </div>
        )

        // 체크박스 '전체' 
        let chkAllMenu;
        if (this.state.isMenuAllChecked) {
            chkAllMenu = <input type="checkbox" onChange={() => this.handleMenuAllCheck()} checked={true} />
        } else {
            chkAllMenu = <input type="checkbox" onChange={() => this.handleMenuAllCheck()} checked={false} />
        }

        // 나머지 카테고리 체크박스
        const checkboxList = items.map((element) => (
            <div className="checkbox">
                <input type="checkbox" name={element.rowIdx} checked={element.check === 1} onChange={() => this.handleMenuCheck(element.rowIdx)} />
                {element.name}
            </div>
        ));

        return (
            <>
                <section style={{ float: 'left', width: '80%' }}>
                    <section className="search spad">
                        <div className="container">
                            <div className="categories">
                                <div className="container">
                                    <div>
                                        <div className="categories__slider owl-carousel">
                                            <Slider {...settings}>
                                                {chkAllBrand}
                                                {this.createBrandMenus()}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="" style={{ borderTop: '1px solid rgba(240, 135, 50, 0.5)', borderBottom: '1px solid rgba(240, 135, 50, 0.5)', 'paddingBottom': '-10px', 'marginBottom':'20px'}}>
                                <div className="row">

                                    <div className="shop__option__search" style={{ width: '800px', 'paddingLeft': '30px', margin: '20px' }}>
                                        <div className="checkbox">
                                            <label>
                                                {chkAllMenu}전체
                                            </label>
                                        </div>
                                        {checkboxList}
                                    </div>
                                    <div className="shop__option__right">
                                        <div className="shop__option__right">
                                            <Select
                                                onChange={this.state.onChange === false ? () => this.sortBy_ASC('kcal') : () => this.sortBy_DESC('kcal')}
                                            ></Select>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="Product spad">
                        <div className="container">
                            <div className="row">
                                {ProductList}
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
                                <ModalCompare product={this.state.params_compare}></ModalCompare>
                            </div>
                        </div>
                    </div>
                </section>
                <div onClick={this.scrollUp} style={{ float: 'right', position: 'fixed', right: '40px', bottom: '40px' }}><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>Top</div>
            </>
        );
    }
}
export default Compare;