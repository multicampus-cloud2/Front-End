import React from "react";
import "css/compare.css";
import Slider from "react-slick";
import Select from "components/Select";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ModalCompare from "components/ModalCompare";
import * as common from "components/common.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "components/Product";
import Brand from "components/Brand";
import { faTrashAlt, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import all from "img/all.png";

const items = common.items;
const brandItems = common.brandItems;
let dataAll = [];
let selectedBrand = [];
let selectedMenu = [];
let productSlice = [];

class Compare extends React.Component {
    state = {
        params: [],
        params_compare: [],
        num: 0,
        ModalStatus: false,
        Modal: null,
        onChange: false,
        isBrandAllChecked: true,
        isMenuAllChecked: true,
        showMore: true,
        showLimit: 12,
    };

    componentDidMount() {
        this._dbTest();
    }
    apiEndpoint =
        "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/data";
    _dbTest = async () => {
        await axios.get(this.apiEndpoint).then((res) => {
            const params = res.data;

            dataAll = res.data;
            this.setState({ params });
        });
    };

    UNSAFE_componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    };

    handleBrandMenu = function (name_eng, isChecked, index) {
        brandItems[index].check = brandItems[index].check === 0 ? 1 : 0;

        if (isChecked) {
            selectedBrand.push(name_eng);
        } else {
            selectedBrand.splice(selectedBrand.indexOf(name_eng), 1);
        }
        this.setState(
            {
                isBrandAllChecked: false,
                showLimit: 12,
            },
            () => this.MenuBrandFilter()
        );
    };

    // 브랜드, 메뉴 필터링
    MenuBrandFilter = function () {
        const { isBrandAllChecked, isMenuAllChecked } = this.state;
        if (!(dataAll == null)) {
            let checkedItems = items.filter(function (element) {
                return element.check === 1;
            });
            selectedMenu = [];
            checkedItems.forEach((element) => {
                selectedMenu.push(element.name);
            });
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
                        });
                        params = params.concat(filteringData);
                    }
                }
            } else {
                if (isMenuAllChecked) {
                    for (let i = 0; i < selectedBrand.length; i++) {
                        let filteringData = dataAll.filter(function (element) {
                            return element.brand === selectedBrand[i];
                        });
                        params = params.concat(filteringData);
                    }
                } else {
                    for (let i = 0; i < selectedBrand.length; i++) {
                        for (let j = 0; j < selectedMenu.length; j++) {
                            let filteringData = dataAll.filter(function (element) {
                                return (
                                    element.brand === selectedBrand[i] &&
                                    element.category === selectedMenu[j]
                                );
                            });
                            params = params.concat(filteringData);
                        }
                    }
                }
            }
            if (params.length > 12) {
                this.setState({ showMore: true });
            } else {
                this.setState({ showMore: false });
            }
            this.setState({ params });
        }
    };

    // 브랜드 동그라미메뉴 생성
    createBrandMenus = () =>
        brandItems.map((element, index) => (
            <Brand
                name_eng={element.name_eng}
                name_kor={element.name_kor}
                image={element.image}
                checked={element.check}
                index={index}
                submit={this.handleBrandMenu.bind(this)}
            />
        ));

    // 브랜드 동그라미메뉴 전체 선택 핸들러
    handleAllBrandCheck = () => {
        selectedBrand = [];
        const { isBrandAllChecked } = this.state;
        brandItems.forEach((element) => {
            element.check = 0;
        });
        this.setState(
            {
                isBrandAllChecked: !isBrandAllChecked,
                showLimit: 12,
            },
            () => this.MenuBrandFilter()
        );
    };

    // 단일 체크박스 선택 핸들러
    handleMenuCheck = (selectrowIdx) => {
        items.forEach((element) => {
            if (element.rowIdx === selectrowIdx) {
                element.check = element.check === 1 ? 0 : 1;
            }
        });
        this.setState(
            {
                isMenuAllChecked: false,
                showLimit: 12,
            },
            () => this.MenuBrandFilter()
        );
    };

    // 체크박스 전체 선택 핸들러
    handleMenuAllCheck = () => {
        const { isMenuAllChecked } = this.state;

        items.forEach((element) => {
            element.check = 0;
        });

        this.setState(
            {
                isMenuAllChecked: !isMenuAllChecked,
                showLimit: 12,
            },
            () => this.MenuBrandFilter()
        );
    };

    handleCompareAdd = function (Product) {
        const { params_compare } = this.state;
        let verify_overlap = params_compare.filter(
            (info) => info.id === Product.id
        );

        if (params_compare.length >= 3) {
            alert("비교함에 최대 3개까지 넣을 수 있습니다.");
        } else if (verify_overlap.length !== 0) {
            alert("비교함에 동일한 음료가 이미 들어있습니다.");
        } else {
            this.setState(() => {
                return { params_compare: params_compare.concat(Product) };
            });
        }
    };

    // 비교박스에서 상품 제거
    handleCompareDelete = function (Product) {
        const { params_compare } = this.state;
        if (params_compare.length > 0) {
            this.setState({
                params_compare: params_compare.filter((info) => info.id !== Product.id),
            });
        } else {
            alert("비교함에 제거할 상품이 없습니다.");
        }
    };

    // 스크롤 위로 올리기
    scrollUp() {
        window.scrollTo(0, 0);
    }

    // 12개씩 보여줄 리스트
    productList = () => {
        productSlice = this.state.params.slice(0, this.state.showLimit);
        return productSlice.map((product) => (
            <Product
                coffee={product}
                submit={this.handleCompareAdd.bind(this)}
            ></Product>
        ));
    };

    // 더보기 버튼
    showMoreButton = () => {
        if (!this.state.showMore) {
            return null;
        }
        return (
            <button onClick={this.showMore} className="btn btn-concrete">
                +더보기
            </button>
        );
    };

    // 더보기 버튼 onClick
    showMore = () => {
        const { showLimit, showMore } = this.state;
        if (this.state.params.length == productSlice.length) {
            this.setState({ showMore: false });
        } else {
            this.setState(
                {
                    showLimit: showLimit + 12,
                },
                () => {
                    if (this.state.params.length - productSlice.length <= 12) {
                        this.setState({ showMore: false });
                    }
                }
            );
        }
    };
    // select box 정렬 핸들러
    handleSort = function (product) {
        this.setState(() => {
            return { params: product };
        });
    };

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
            prevArrow: <common.PrevArrow />,
        };

        const compareList = this.state.params_compare.map((Product) => (
            <tr>
                <td className="Product__cart__item">
                    <div className="Product__cart__item__pic">
                        <img
                            onClick={() => this.handleCompareDelete(Product)}
                            src={Product["image"]}
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                        />
                    </div>
                </td>
                <td className="cart__price">
                    {Product["name"]}
                    {Product["brand"]}
                </td>
                <td className="cart__close">
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => this.handleCompareDelete(Product)}
                        style={{ width: "30px" }}
                    />
                </td>
            </tr>
        ));

        // 브랜드 동그라미메뉴 'ALL'
        console.log("allCheck" + this.state.isBrandAllChecked);
        let chkAllBrand = (
            <div className="categories__item__whole">
                <div className="categories__item">
                    <div
                        className="category__item_hidden"
                        style={{
                            backgroundColor: this.state.isBrandAllChecked
                                ? "#888888"
                                : "transparent",
                        }}
                    >
                        <input
                            type="submit"
                            value=""
                            className="input_hidden"
                            onClick={() => this.handleAllBrandCheck()}
                        />
                        <div className="categories__item__icon">
                            <div>
                                <img src={all} alt="" />
                            </div>
                            <h5>ALL</h5>
                        </div>
                    </div>
                </div>
            </div>
        );

        // 체크박스 '전체'
        let chkAllMenu;
        if (this.state.isMenuAllChecked) {
            chkAllMenu = (
                <input
                    type="checkbox"
                    onChange={() => this.handleMenuAllCheck()}
                    checked={true}
                />
            );
        } else {
            chkAllMenu = (
                <input
                    type="checkbox"
                    onChange={() => this.handleMenuAllCheck()}
                    checked={false}
                />
            );
        }

        // 나머지 카테고리 체크박스
        const checkboxList = items.map((element) => (
            <div className="checkbox">
                <input
                    type="checkbox"
                    name={element.rowIdx}
                    checked={element.check === 1}
                    onChange={() => this.handleMenuCheck(element.rowIdx)}
                />
                {element.name}
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
                                            {chkAllBrand}
                                            {this.createBrandMenus()}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="search spad">
                    <div
                        className="container"
                        style={{
                            borderTop: "1px solid rgba(240, 135, 50, 0.5)",
                            borderBottom: "1px solid rgba(240, 135, 50, 0.5)",
                            paddingBottom: "-10px",
                            marginBottom: "20px",
                        }}
                    >
                        <div className="row">
                            {/* <div
                  className="shop__option__search"
                  style={{
                    width: "800px",
                    paddingLeft: "30px",
                    margin: "20px",
                  }}
                > */}
                            <div className="checkbox">
                                {chkAllMenu}전체
                      </div>
                            {checkboxList}
                            {/* </div> */}
                            {/* <div className="shop__option__right"> */}

                            {/* </div> */}
                        </div>
                    </div>
                </section>

                <section className="Product spad">
                    <div className="container">
                        <div className="row" style={{marginBottom: "1.5%"}}>
                        <div style={{width:"80%",float: "left",  display:"table", height:"30px" }}>
                            <label style={{display:"table-cell", verticalAlign:"middle"}}>※모든 음료는 톨(Tall) 사이즈 기준입니다.</label>
                        </div>
                        <div style={{width:"20%", float: "left"}}>
                        <Select
                            params={this.state.params}
                            submit={this.handleSort.bind(this)}
                        ></Select>
                        </div>
                        </div>
                        <div className="row">{this.productList()}</div>
                        <div className="row">{this.showMoreButton()}</div>
                    </div>
                </section>

                <section
                    className="wishlist spad"
                    style={{
                        width: "18%",
                        float: "left",
                        position: "fixed",
                        top: "45%",
                        right: "30px",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-12" style={{ textAlign: "center" }}>
                                    Compare Box
                </div>
                                <div className="wishlist__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th style={{ width: "70%" }} colSpan="2">
                                                    Name
                        </th>
                                            </tr>
                                        </thead>
                                        <tbody>{compareList}</tbody>
                                    </table>
                                </div>
                                <ModalCompare
                                    product={this.state.params_compare}
                                ></ModalCompare>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    onClick={this.scrollUp}
                    style={{
                        float: "right",
                        position: "fixed",
                        right: "40px",
                        bottom: "20px",
                    }}
                >
                    <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>Top
        </div>
            </>
        );
    }
}
export default Compare;
