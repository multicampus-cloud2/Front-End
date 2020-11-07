import React from 'react';
import 'css/compare.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("이벤트발생");
        this.props.submit(this.props.coffee);
    }

    
    render(){

        return (
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="product__item">
                    <div onClick={() => this.checkingred()} className="product__item__pic set-bg" style={{ backgroundImage: `url(${this.props.coffee['image']})` }}>
                        <div className="product__label">
                            <span>{this.props.coffee['brand']}</span>
                        </div>
                    </div>
                    <div className="product__item__text">
                        <h6><p>{this.props.coffee['name']}</p></h6>
                        <div className="product__item__price">$32.00</div>
                        <div className="cart_add">
                            <form onSubmit={this.handleSubmit}>
                                <button type="submit" style={{'backgroundColor': 'white', border: 'none'}}><FontAwesomeIcon icon={faPlus}/>비교함에 담기</button>
                            </form>
                        </div>
                    </div>
                    <div onClick={() => this.checkingred()} className="ingredient_table_box" style={{display: this.state.open === true ? "block" : "none"}}>
                        <br/>
                        <p>※1회 제공량 기준: {this.props.coffee['size']} ml</p>
                        <ul className="ingredient_table">
                            <li><div>칼로리 (kcal)</div><div>{this.props.coffee['kcal']}</div></li>
                            <li><div>당류 (g)</div><div>{this.props.coffee['sugar']}</div></li>
                            <li><div>카페인 (mg)</div><div>{this.props.coffee['caffeine']}</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Coffee;