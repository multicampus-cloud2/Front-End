import React, { useState } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Selects from 'react-select';
import axios from 'axios';
import * as common from 'components/common';

function User_LikeBrand(props) {
    const { user, isAuthenticated } = props.auth0;
    
    const [selectOption, setSelectOption] = useState(null);
    const [modal, setModal] = useState(false);
    const [phone, setPhone] = useState('');

    const apiEndpoint = "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/userinfo"
    const saveUserBrand = async (userinfo, brand_name) => {
        const obj = { user: userinfo, brand: brand_name, phone: phone, httpMethod: "POST" };
        await axios.post(apiEndpoint, obj)
        alert("저장되었습니다.");
    }

    const toggle = () => {
        if (modal === false) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    const changeSelectOption = e => {
        setSelectOption( e.value )
    }

    const handleChange = e => {
        setPhone( e.target.value )
    }

    return isAuthenticated && (
        <>
            <button type="button" className="btn-info" onClick={ toggle }>관심 카페 설정</button>
            <Modal isOpen={ modal } className={ props.className }>
                <ModalHeader>관심 카페 등록</ModalHeader>
                <ModalBody>
                    관심 카페와 전화번호를 등록해주세요.<br />선택한 카페에 신제품이 출시되면 알림을 보내드립니다.
                    <Selects options={ common.selectBrandOptions } onChange = { changeSelectOption }/>
                    <form>
                        전화번호 : <input value={ phone } onChange= { handleChange }></input>
                        <br />※전화번호는 -를 뺀 숫자만 입력해주세요.
                        <br />※한 카페만 관심 카페로 등록할 수 있습니다.
                    </form> 
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => saveUserBrand(user, selectOption )}>저장</Button>
                    <Button color="light" onClick={ toggle }>닫기</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default withAuth0(User_LikeBrand);