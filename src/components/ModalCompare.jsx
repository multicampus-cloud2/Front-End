<<<<<<< HEAD:src/components/ModalCompare.js
import React from 'react';
import * as common from 'components/common.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import ModalMap from './ModalMap';
// 참고 사이트 : https://6-4-0--reactstrap.netlify.app/components/modals/

class ModalCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    // this.toggleModalMap = this.toggleModalMap.bind(this);
    // this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    if (this.props.product.length <= 1) {
      alert('비교할 대상이 없습니다');
    } else {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  }

  render() {

    const compareList = this.props.product.map((product) => (
      <div className="product__cart__item" style={{ float: 'left', width: this.props.product.length <= 2 ? '40%' : '26%' }}>
        <div className="product__cart__item__pic" style={{ textAlign: 'center' }}>
          <img src={product['image']} style={{ width: '130px', height: '125px' }} alt="" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', height: '45px' }}>{product['name']}</p>
          <p>{product['brand']}</p>
          <p>{product['category']}</p>
          <p>{product['kcal']}(Kcal)</p>
          <p>{product['size']}(ml)</p>
          <p>{product['caffeine']}(mg)</p>
          <p>{product['sugar']}(g)</p>
          <p>{common.numberWithCommas(product['price'])}(원)</p>
          <ModalMap brand={product['brand']}></ModalMap>
        </div>

      </div>
    ));

    return (
      <div>
        <Button style={{ minWidth:'100px',fontSize:'1vw'}} onClick={this.toggle}><FontAwesomeIcon icon={faBalanceScale}/>비교하러 가기</Button>
        <Modal size={'lg'} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>음료 성분 비교</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="product__cart__item" style={{ float: 'left', marginRight: '10px', width: '15%' }}>
                  <div className="product__cart__item__pic">
                    <p style={{ width: '100px', height: '130px', margin: '10px auto' }}><br /><br />상품 이미지</p>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '-12px' }}>
                    <p style={{ height: '45px' }}>상품명</p>
                    <p>브랜드</p>
                    <p>분류</p>
                    <p>칼로리</p>
                    <p>사이즈</p>
                    <p>카페인</p>
                    <p>당류</p>
                    <p>가격</p>
                  </div>
                </div>
                {compareList}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

=======
import React from 'react';
import * as common from 'components/common.jsx';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import ModalMap from './ModalMap';
// 참고 사이트 : https://6-4-0--reactstrap.netlify.app/components/modals/

class ModalCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    // this.toggleModalMap = this.toggleModalMap.bind(this);
    // this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    if (this.props.product.length <= 1) {
      alert('비교할 대상이 없습니다');
    } else {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  }

  render() {

    const compareList = this.props.product.map((product) => (
      <div className="product__cart__item" style={{ float: 'left', width: this.props.product.length <= 2 ? '40%' : '26%' }}>
        <div className="product__cart__item__pic" style={{ textAlign: 'center' }}>
          <img src={product['image']} style={{ width: '130px', height: '125px' }} alt="" />
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p style={{ fontWeight: 'bold', height: '45px' }}>{product['name']}</p>
          <p>{product['brand']}</p>
          <p>{product['category']}</p>
          <p>{product['kcal']}(Kcal)</p>
          <p>{product['size']}(ml)</p>
          <p>{product['caffeine']}(mg)</p>
          <p>{product['sugar']}(g)</p>
          <p>{common.numberWithCommas(product['price'])}(원)</p>
          <ModalMap brand={product['brand']}></ModalMap>
        </div>

      </div>
    ));

    return (
      <div>
        <Button style={{ minWidth:'100px',fontSize:'1vw'}} onClick={this.toggle}><FontAwesomeIcon icon={faBalanceScale}/>비교하러 가기</Button>
        <Modal size={'lg'} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>음료 성분 비교</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="product__cart__item" style={{ float: 'left', marginRight: '10px', width: '15%' }}>
                  <div className="product__cart__item__pic">
                    <p style={{ width: '100px', height: '130px', margin: '10px auto' }}><br /><br />상품 이미지</p>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '-12px' }}>
                    <p style={{ height: '45px' }}>상품명</p>
                    <p>브랜드</p>
                    <p>분류</p>
                    <p>칼로리</p>
                    <p>사이즈</p>
                    <p>카페인</p>
                    <p>당류</p>
                    <p>가격</p>
                  </div>
                </div>
                {compareList}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

>>>>>>> a56f99c92a5a24548ed738f6f6b2168af714cf5b:src/components/ModalCompare.jsx
export default ModalCompare;