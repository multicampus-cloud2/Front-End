import React, { useEffect, useState } from 'react';
import 'css/compare.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus } from "@fortawesome/free-solid-svg-icons";
import * as common from 'components/common.jsx';

function Product(props) {

    const [openState, setOpenState ] = useState(0)
    
    const switchStateHandler = () => {
        if(openState === 0) {
            setOpenState(1)
        } else {
            setOpenState(0)
        }
    }

    useEffect(() => {
        return () => {
            if(openState === 1){
                setOpenState(0)
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submit(props.coffee);
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="product__item">
                <div onClick={switchStateHandler} className="product__item__pic set-bg" style={{ backgroundImage: `url(${props.coffee['image']})` }}>
                    <div className="product__label">
                        <span>{props.coffee['brand_kor']}</span>
                    </div>
                </div>
                <div className="product__item__text">
                    <h6><p>{props.coffee['name']}</p></h6>
                    <div className="product__item__price">{common.numberWithCommas(props.coffee['price'])}원</div>
                    <div className="cart_add">
                        {/* form 태그를 통해서 자식 컴포넌트에서 부모 컴포넌트로 값을 전달해 줄 수 있음 */}
                        <form onSubmit={handleSubmit}>
                            <button type="submit" style={{ 'backgroundColor': 'white', border: 'none', outline: 'none' }}><FontAwesomeIcon icon={faPlus} />비교함에 담기</button>
                        </form>
                    </div>
                </div>
                <div onClick={switchStateHandler} className="ingredient_table_box" style={{display: openState === 1 ? 'block' : 'none'}} >
                    <br />
                    <p>※1회 제공량 기준: {props.coffee['size']} ml</p>
                    <ul className="ingredient_table">
                        <li><div>칼로리 (kcal)</div><div>{props.coffee['kcal']}</div></li>
                        <li><div>당류 (g)</div><div>{props.coffee['sugar']}</div></li>
                        <li><div>카페인 (mg)</div><div>{props.coffee['caffeine']}</div></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Product;