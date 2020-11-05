import React from 'react'
import Checkbox from 'components/Checkbox';
import Select from 'components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/compare.css';
import teamA from 'img/teamA.jpg';
//import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
//import Slider from 'react-slick';

// 참고 : https://blog.logrocket.com/getting-started-with-react-select/

const items = [
    {value:1, name:'아메리카노'},
    {value:2, name:'카페라떼'},
    {value:3, name:'스무디'},
    {value:4, name:'차 (티)'},
    {value:5, name:'NON-카페인'},
    {value:6, name:'기타'},
];

class Compare extends React.Component{
      
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

        return (
          <>
            <section className="search spad">
              <div className="row">여기는 브랜드 동그라미</div>  
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
            </section>

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage:`url(${teamA})`}} data-setbg="img/shop/product-2.jpg">
                                    <div className="product__label">
                                        <span>카카오</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>이재환 팀장</p></h6>
                                    <div className="product__item__price">$32.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{background: `url('http://paikdabang.com/wp-content/uploads/2018/05/03_앗메리카노_HOT.jpg')`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',backgroundPosition: 'center'}} data-setbg="img/shop/product-2.jpg">
                                    <div className="product__label">
                                        <span>빽다방</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>앗!메리카노(HOT)</p></h6>
                                    <div className="product__item__price">3000원</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-3.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>Gluten Free Mini Dozen</p></h6>
                                    <div className="product__item__price">$31.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-4.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>Cookie Dough</p></h6>
                                    <div className="product__item__price">$25.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-5.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>Vanilla Salted Caramel</p></h6>
                                    <div className="product__item__price">$05.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-6.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>German Chocolate</p></h6>
                                    <div className="product__item__price">$14.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-7.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>Dulce De Leche</p></h6>
                                    <div className="product__item__price">$32.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/shop/product-8.jpg">
                                    <div className="product__label">
                                        <span>Cupcake</span>
                                    </div>
                                </div>
                                <div className="product__item__text">
                                    <h6><p>Mississippi Mud</p></h6>
                                    <div className="product__item__price">$08.00</div>
                                    <div className="cart_add">
                                        <p>Add to cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    


          </>
        );
      }
    
}
export default Compare;