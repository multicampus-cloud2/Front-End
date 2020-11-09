import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Selects from 'react-select';

const ButtonStyle = styled.div`
    float: right;
    margin: 15px 15px 0px 5px;
`;

const options = [
    { value: 1, label: '스타벅스' },
    { value: 2, label: '할리스 커피' },
    { value: 3, label: '탐앤탐스' },
    { value: 4, label: '이디야 커피' },
    { value: 5, label: '커피빈' },
    { value: 6, label: '투썸플레이스' },
    { value: 7, label: '엔제리너스' },
    { value: 8, label: '빽다방' }
];

class User_LikeBrand extends React.Component {
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

    // saveUserBrand = async function(userinfo, brand_name) {
    //     const obj = {user: userinfo, brand: brand_name, httpMethod: "POST"};
    //     await axios.post(this.apiEndpoint, obj);
    //     console.log("저장되었습니다.");
    // }

    render() {
        console.log(this.state.modal)

        const { user, isAuthenticated } = this.props.auth0;

        return isAuthenticated && (
            <ButtonStyle>
                <button type="button" className="btn-info" onClick={this.toggle}>관심 카페 설정</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>asd</ModalHeader>
                    <ModalBody>
                        선호하는 카페를 선택해주세요. 선택한 카페에 신제품이 출시되면 알림을 보내드립니다.
                        <Selects options={options} />
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="info" onClick={this.saveUserBrand(user, "스타벅스")}>저장</Button> */}
                        <Button color="info">저장</Button>
                        <Button color="light" onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </ButtonStyle>


        );
    }
}

export default withAuth0(User_LikeBrand);