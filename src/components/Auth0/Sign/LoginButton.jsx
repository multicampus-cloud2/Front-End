import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/Auth0/Sign/LoginButton.scss'

const ButtonStyle = styled.div`
    margin-top: 30%;
`;

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return !isAuthenticated && (
        <ButtonStyle>
            <button type="button" className="authLogin" onClick={() => loginWithRedirect()}>로그인</button>
        </ButtonStyle>);
};

export default LoginButton;