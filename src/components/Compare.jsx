import React from "react";
// components
import Select from "components/Select";
import Product from "components/Product";
import Brand from "components/Brand";
import SideBar from "components/SideBarFolder/SideBox/SideBar"
import ScrollUp from "components/SideBarFolder/Scroll/ScrollUp"
import ModalCompare from "components/ModalCompare";
import * as common from "components/common.jsx";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "css/compare.scss";
// Library
import axios from "axios";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Image
import coffee from "img/coffee.png";
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
        const { showLimit } = this.state;
        if (this.state.params.length === productSlice.length) {
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

        let compareList;
        if (this.state.params_compare.length > 0) {
            compareList = this.state.params_compare.map((Product) => (
            <table className="compare_table">
                <tr>
                    <td rowspan="2" className="compare_table_img">
                        <div>
                            <img
                                onClick={() => this.handleCompareDelete(Product)}
                                src={Product["image"]}
                                alt=""
                            />
                        </div>
                    </td>
                    <td className="compare_table_brand">
                        {common.brand_map.get(Product["brand"])}
                    </td>
                    <td rowspan="2">
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            onClick={() => this.handleCompareDelete(Product)}
                            style={{ width: "30px" }}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="compare_table_name">
                        {Product["name"]}
                    </td>
                </tr>
            </table>
        ));
            }
            else {
                compareList = (
                <div style={{lineHeight: "300px"}}>
                    <small>비교할 음료가 없습니다.</small>
                </div>
                );
            }

        // 브랜드 동그라미메뉴 'ALL'
        let chkAllBrand = (
            <div className="categories__item__whole">
                <div className="categories__item">
                    <div
                        className="category__item_hidden"
                        style={{
                            backgroundColor: this.state.isBrandAllChecked
                                ? "#7f57ac"
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
                                <img src={coffee} alt="" style={{marginLeft: "28%" }}/>
                            </div>
                            <h5 style={{
                            color: this.state.isBrandAllChecked
                                ? "#ffffff"
                                : "#474747",
                        }}>전체</h5>
                        </div>
                    </div>
                </div>
            </div>
        );

        // 체크박스 '전체'
        let chkAllMenu;
        if (this.state.isMenuAllChecked) {
            chkAllMenu = (
                <input style={{marginTop:"10px"}}
                    type="checkbox"
                    onChange={() => this.handleMenuAllCheck()}
                    checked={true}
                />
            );
        } else {
            chkAllMenu = (
                <input style={{marginTop:"10px"}}
                    type="checkbox"
                    onChange={() => this.handleMenuAllCheck()}
                    checked={false}
                />
            );
        }

        // 나머지 카테고리 체크박스
        const checkboxList = items.map((element) => (
            <div className="filteringCheckbox">
                <input style={{margin:"10px 4px"}}
                    id="filteringCheckbox"
                    type="checkbox"
                    name={element.rowIdx}
                    checked={element.check === 1}
                    onChange={() => this.handleMenuCheck(element.rowIdx)}
                />
                {element.name}
            </div>
        ));

        return (
            <div className="compare_body">
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
                        className="container filteringBorder">
                        <div className="row">
                            <div className="filteringCheckbox">
                            {chkAllMenu}전체
                            </div>
                            {checkboxList}
                        </div>
                    </div>
                </section>

                <section className="Product spad">
                    <div className="container">
                        <table style={{width: "100%", marginBottom: "2%"}}>
                            <tr>
                                <td>※모든 음료는 톨(Tall) 사이즈 기준입니다.</td>
                                <td>
                                <Select
                              params={this.state.params}
                              submit={this.handleSort.bind(this)}
                            ></Select>
                                </td>
                            </tr>
                        </table>
                        <div className="row">{this.productList()}</div>
                        <div className="row">{this.showMoreButton()}</div>
                    </div>
                </section>
                
                <SideBar/>
                <div className="sidebar">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-12" style={{ textAlign: "center" }}>
                                음료 성분 비교하기
                            </div>
                            <div className="wishlist__cart__table" style={{marginTop: "5%"}}>
                                    {compareList}
                            </div>
                            <div style={{textAlign: "center"}}> 
                            <ModalCompare product={this.state.params_compare} />
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollUp/>
            </div>
        );
    }
}
export default Compare;