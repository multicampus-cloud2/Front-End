import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'components/Auth0/Sign/LogoutButton.scss';

function LogoutButton() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <button type="button" className="authLogout" onClick={() => {
            logout({ returnTo: window.location.origin });
        }}>로그아웃</button>

    );
}

export default LogoutButton;