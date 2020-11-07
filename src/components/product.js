import React from 'react';
import 'css/compare.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Coffee extends React.Component{

    state = {
        open : false
    }

    checkingred(){
        if (this.state.open === true){
            this.state.open = false
        } else{
            this.state.open = true
        }
        this.setState(this.props.coffee)
    }

    
    render(){

        return (
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div onClick={() => this.checkingred()} className="product__item">
                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${this.props.coffee['image']})` }}>
                        <div className="product__label">
                            <span>{this.props.coffee['brand']}</span>
                        </div>
                    </div>
                    <div className="product__item__text">
                        <h6><p>{this.props.coffee['name']}</p></h6>
                        <div className="product__item__price">$32.00</div>
                        <div className="cart_add">
                            <p>Add to cart</p>
                        </div>
                    </div>
                    <div className="product__detail" style={{display: this.state.open === true ? "block" : "none"}}>
                        <ul>
                            <li><span>{this.props.coffee['kcal']}</span></li>
                            <li><span>{this.props.coffee['size']}</span></li>
                            <li><span>{this.props.coffee['sugar']}</span></li>
                            <li><span>{this.props.coffee['caffeine']}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coffee;