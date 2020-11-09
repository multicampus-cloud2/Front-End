import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
                <div className="product__cart__item__pic">
                    <img  onClick={() => this.handleCompareDelete(product)} src={product['image']} style={{width:'100px',height:'100px'}} alt=""/>
                </div>
            </td>
            <td className="cart__price">{product['name']}{product['brand']}</td>
            <td className="cart__close"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.handleCompareDelete(product)} style={{width:'30px'}}/></td>
        </tr>
    ));

    return (
      <div>
        <Button style={{border: 'none',float:'right'}} onClick={this.toggle}><FontAwesomeIcon icon={faBalanceScale}/>비교하러 가기</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="handle">음료 성분 비교</ModalHeader>
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;