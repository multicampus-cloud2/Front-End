import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";

const ButtonStyle = styled.div`
    float: right;
`;

function User_Profile() {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <ButtonStyle>
      <div>
        <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={user.picture} alt={user.name} />
        <span>환영합니다 {user.name}님</span>
      </div>
    </ButtonStyle>
  );
}

export default User_Profile;