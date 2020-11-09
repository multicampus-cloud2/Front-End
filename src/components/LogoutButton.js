import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonStyle = styled.div`
    float: right;
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