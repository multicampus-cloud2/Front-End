import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonStyle = styled.div`
    margin-top: 30%;
    
`;

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return !isAuthenticated && (
        <ButtonStyle>
            <button type="button" className="authLogin btn-success" onClick={() => loginWithRedirect()}>Log In</button>
        </ButtonStyle>);
};

export default LoginButton;