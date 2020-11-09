
import React,{useRef, useState} from 'react';
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
import { faSearch, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
// 참고 : https://blog.logrocket.com/getting-started-with-react-select/


// function BrandMenu(props) {
//     // let ImagePath = require("img/"+props.brand);
//     const imageName = props.brand + '.png';
//     // const filePath = 'img/${imageName}';
//     // const fileUrl = require(filePath);
//     return (
//     <div onClick={() => this.handleFilter("starbucks")} className="categories__item__whole">
//         <div className="categories__item">
//             <div className="categories__item__icon">
//                 <div>
//                     {/* <img src={ImageName} alt={props.brand} /> */}
//                     <img src={images.starbucks}/>
//                     </div>
//                 <h5>{props.brand}</h5>
//             </div>
//         </div>
//     </div>
//     );
// }



const items = [
    { value: 1, name: '전체' },
    { value: 2, name: '아메리카노' },
    { value: 3, name: '에스프레소' },
    { value: 4, name: '콜드브루' },
    { value: 5, name: '카페라떼' },
    { value: 6, name: '카푸치노' },
    { value: 7, name: '카페모카' },
    { value: 8, name: '마끼아또' },
    { value: 9, name: '라떼' },
    { value: 10, name: '블렌디드' },
    { value: 11, name: '스무디' },
    { value: 12, name: '에이드' },
    { value: 13, name: '티' },
    { value: 14, name: '기타' },

];

const data_all = [];

class Compare extends React.Component {
    state = {
        params: [],
        params_compare: [],
        num: 0,
        ModalStatus : false, Modal: null
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
                this.data_all = res.data;
                this.setState({ params });
            })
    }

    // 자식 컴포넌트에서 보내준 값을 파라미터에 저장하고 실행
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

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        this.handleMenuFilter([...this.selectedCheckboxes]);
    }

    handleMenuFilter = function(menu_name) {
        if (!(this.data_all == null)) {
            let params = [];
            for (var i=0; i<menu_name.length; i++) {
                const filteringData = this.data_all.filter(function(element){
                    return element.category==menu_name[i];
                })
                params=params.concat(filteringData);
            }
            this.setState({ params });  
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

    // // params_compare는 모든 컴포넌트 객체를 담고 있어야 하기 떄문에 compare.js에서 사용해야 함.
    // // 자식 컴포넌트에서 실행된 결과를 product라는 파라미터로 저장해주고 이 파라미터값을 params_compare 배열에 저장
    // 비교박스에 상품 추가 : 참고사이트 https://velopert.com/3636
    handleCompareAdd = function(product) {
        const { params_compare } = this.state;
        let verify_overlap = params_compare.filter(info => info.id === product.id)

        if (params_compare.length >= 3 ) {
            alert('비교함에 최대 3개까지 넣을 수 있습니다.');
        }else if (verify_overlap.length !== 0){
            alert('비교함에 동일한 음료가 이미 들어있습니다.');
        }else{
            this.setState(() => {
                return {params_compare: params_compare.concat(product)};
            });
        }
    }

    // 비교박스에서 상품 제거
    handleCompareDelete = function(product) {
        const { params_compare } = this.state;
        if (params_compare.length >0 ){
            this.setState({
                params_compare: params_compare.filter(info => info.id !== product.id)
            })
        }else{
            alert('비교함에 제거할 상품이 없습니다.');
        }
    }

    render() {
        
        // submit으로 자식 컴포넌트에 props를 전달해주면 자식이 실행한 결과를 받아와 handleCompareAdd의 파라미터로 저장함 
        const productList = this.state.params.map((product) => (
            <Product coffee={product} submit={this.handleCompareAdd.bind(this)}></Product>
        ));

        const compareList = this.state.params_compare.map((product) => (
            <tr>
                <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                        <img  onClick={() => this.handleCompareDelete(product)} src={product['image']} style={{width:'100px',height:'100px'}} alt=""/>
                    </div>
                </td>
                <td className="cart__price">{product['name']}{product['brand']}</td>
                <td className="cart__close"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.handleCompareDelete(product)} style={{width:'30px'}}/></td>
            </tr>
        ));

        return (
            <>
                <section style={{float:'left',width:'80%'}}>
                    <section className="search spad">
                    <div className="container">
                        {/* 자식(brand.js) 에게 submit이라는 props를 보내주고 자식에서 실행된 결과를 handleFilter의 파라미터값으로 받아옴 */}
                        <Brand submit={this.handleFilter.bind(this)}></Brand>
                        <div className="" style={{borderTop:'1px solid rgba(240, 135, 50, 0.5)',borderBottom:'1px solid rgba(240, 135, 50, 0.5)','paddingBottom':'10px'}}>
                            <div className="row">
                                <div className="shop__option__search" style={{width:'800px','paddingLeft':'30px',margin:'20px'}}>
                                    <form onSubmit={this.handleFormSubmit}>
                                        {this.createCheckboxes()}
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
                </section>

                <section className="wishlist spad" style={{width:'18%',float:'left',position:'fixed',top:'300px',right:'30px'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-12" style={{textAlign:'center'}}>Compare Box</div>
                                <div className="wishlist__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th style={{width:'70%'}} colSpan='2'>Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {compareList}                                               
                                        </tbody>
                                    </table>
                                </div>
                                <ModalExample product={this.state.params_compare}></ModalExample>
                                {/* <button style={{'backgroundColor': 'white',border: 'none'}} onClick={() => console.log(this.state.params_compare)}>보기</button> */}
                            </div>
                        </div>
                    </div>
                </section>
            </> 
        );
    }
}
export default Compare;