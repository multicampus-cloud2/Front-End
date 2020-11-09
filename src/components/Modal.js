import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

//참고 사이트 : https://www.hanumoka.net/2019/10/26/react-20191026-react-modal-draggable/
// model 공식사이트 : https://reactstrap.github.io/components/modals/

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.props.product.length <=1){
      alert('비교할 대상이 없습니다');
    }else{
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  }
  
  render() {

    const compareList = this.props.product.map((product) => (
      <div className="product__cart__item" style={{float: 'left',width:this.props.product.length <= 2? '40%':'25%'}}>
        <div className="product__cart__item__pic" style={{textAlign:'center'}}>
          <img src={product['image']} style={{ width: '130px', height: '125px'}} alt="" />
        </div>
        <div style={{ textAlign: 'center',marginTop:'10px'}}>
          <p>{product['name']}</p>
          <p>{product['brand']}</p>
          <p>{product['category']}</p>
          <p>{product['kcal']}</p>
          <p>{product['size']}</p>
          <p>{product['caffeine']}</p>
          <p>{product['sugar']}</p>
          <p>{product['price']}</p>
        </div>
      </div>
    ));


    return (
      <div>
        <Button style={{ border: 'none', float: 'right' }} onClick={this.toggle}><FontAwesomeIcon icon={faBalanceScale} />비교하러 가기</Button>
        <Modal size={'lg'} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="handle">음료 성분 비교</ModalHeader>
          <ModalBody>
            <div className="container">
              <div className="row">
                <div className="product__cart__item" style={{ float: 'left', marginRight:'10px', width: '15%' }}>
                  <div className="product__cart__item__pic">
                    <p style={{ width: '100px', height: '130px',margin:'10px auto'}}><br/><br/>상품 이미지</p>
                  </div>
                  <div style={{ textAlign: 'center',marginTop:'-12px'}}>
                    <p>상품명</p>
                    <p>브랜드</p>
                    <p>분류</p>
                    <p>칼로리(Kcal)</p>
                    <p>사이즈(ml)</p>
                    <p>카페인(mg)</p>
                    <p>당류(g)</p>
                    <p>가격(원)</p>
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

export default ModalExample;