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
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {

    const compareList = this.props.product.map((product) => (
      <tr>
        <td className="product__cart__item">
          <div className="product__cart__item__pic" style={{textAlign:'center'}}>
            <img src={product['image']} style={{ width: '130px', height: '130px'}} alt="" />
            <p style={{'textAlign':'center'}}>{product['brand']} {product['category']}</p>
          </div>
        </td>
        <td className="modal_td">{product['name']}</td>
        <td className="modal_td">{product['size']}(ml)</td>
        <td className="modal_td">{product['kcal']}(Kcal)</td>
        <td className="modal_td">{product['caffeine']}(mg)</td>
        <td className="modal_td">{product['sugar']}(g)</td>
        <td className="modal_td">{product['price']}(원)</td>
      </tr>
    ));

    return (
      <div>
        <Button style={{ border: 'none', float: 'right' }} onClick={this.toggle}><FontAwesomeIcon icon={faBalanceScale} />비교하러 가기</Button>
        <Modal size={'lg'} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="handle">음료 성분 비교</ModalHeader>
          <ModalBody>
            <div className="wishlist__cart__table">
              <table style={{textAlign:'center'}}>
                <thead>
                  <tr>
                    <th style={{width:'25%'}}>상품 이미지</th>
                    <th style={{width:'20%'}}>상품 명</th>
                    <th style={{width:'10%'}}>1회 제공량</th>
                    <th style={{width:'10%'}}>칼로리</th>
                    <th style={{width:'10%'}}>카페인</th>
                    <th style={{width:'10%'}}>당류</th>
                    <th style={{width:'10%'}}>가격</th>
                  </tr>
                </thead>
                <tbody>
                {compareList}
                </tbody>
              </table>

            </div>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>닫기</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;