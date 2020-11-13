import React, { useEffect, useState } from 'react';
import * as common from 'components/common.jsx';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import ModalMap from './ModalMap';

function ModalCompare(props) {

  const [modal, setModal] = useState(false);
  const [compareProduct, setCompareProduct] = useState(props.product);

  const handleToggle = () => {
    if (props.product.length <= 1) {
      alert('비교할 대상이 없습니다');
    } else {
      setModal(!modal)
    }
  }

  const compareButton = () => {
    if (props.product.length > 1) {
      return (
        <div className="compareButton">
          <Button style={{ minWidth: '100px', fontSize: '1vw' }}
            onClick={handleToggle}>
            <FontAwesomeIcon icon={faBalanceScale} />
            비교하러 가기
          </Button>
        </div>
      )
    } else {
      return null;
    }
  }

  useEffect(() => {
    if (props.product.length > 1) {
      setCompareProduct(props.product);
    }
  })

  const compareList = () => {
    return (
      compareProduct.map((product) => (
        <div className="product__cart__item" style={{ float: 'left', width: compareProduct.length <= 2 ? '40%' : '26%' }}>
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
      )))
  }

  return (
    <div>
      {compareButton()}
      <Modal size={'lg'} isOpen={modal} toggle={handleToggle} className={props.className}>
        <ModalHeader toggle={handleToggle}>음료 성분 비교</ModalHeader>
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
              {compareList()}
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleToggle}>닫기</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCompare;