import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Selects from 'react-select';
import axios from 'axios';

const ButtonStyle = styled.div`
    float: right;
    margin-top: 1%;
    margin-right: 1%
`;

const options = [
    { value: 'starbucks', label: '스타벅스' },
    { value: 'hollys', label: '할리스 커피' },
    { value: 'tomntoms', label: '탐앤탐스' },
    { value: 'ediya', label: '이디야 커피' },
    { value: 'coffeebean', label: '커피빈' },
    { value: 'twosome', label: '투썸플레이스' },
    { value: 'angelinus', label: '엔제리너스' },
    { value: 'paikdabang', label: '빽다방' }
];

class User_LikeBrand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            selectedOption: null,
            phone_number: null
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    apiEndpoint = "https://u7oi4ayp4h.execute-api.us-east-1.amazonaws.com/dev/userinfo"
    saveUserBrand = async function (userinfo, brand_name) {
        console.log(brand_name['value']);
        const obj = { user: userinfo, brand: brand_name['value'], phone: this.state.phone_number, httpMethod: "POST" };
        await axios.post(this.apiEndpoint, obj)
        alert("저장되었습니다.");
    }

    handleChange = (selected) => {
        this.setState(() => ({ selectedOption: selected }));
    }

    render() {
        const { user, isAuthenticated } = this.props.auth0;

        return isAuthenticated && (
            <ButtonStyle>
                <button type="button" className="btn-info" onClick={this.toggle}>관심 카페 설정</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>관심 카페 등록</ModalHeader>
                    <ModalBody>
                        관심 카페와 전화번호를 등록해주세요.<br />선택한 카페에 신제품이 출시되면 알림을 보내드립니다.
                        <Selects options={options} onChange={this.handleChange} />
                        <form>
                            전화번호 : <input value={this.state.phone_number} onChange={(e) => { this.setState({ phone_number: e.target.value }) }}></input>
                            <br />※전화번호는 -를 뺀 숫자만 입력해주세요.
                            <br />※한 카페만 관심 카페로 등록할 수 있습니다.
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="info" onClick={() => this.saveUserBrand(user, this.state.selectedOption)}>저장</Button>
                        <Button color="light" onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </ButtonStyle>
        );
    }
}

export default withAuth0(User_LikeBrand);