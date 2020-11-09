import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonStyle = styled.div`
    float: right;
    border: 0;
    outline: 0;
    margin-top: 15px;
`;

function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <ButtonStyle>
            <button type="button" className="btn-danger" onClick={() => {
                logout({ returnTo: window.location.origin });
            }}>Log out</button>
        </ButtonStyle>

    );
}

export default LogoutButton;