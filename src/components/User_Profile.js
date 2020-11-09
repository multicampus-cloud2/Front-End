import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";

const ButtonStyle = styled.div`
    float: right;
`;

function User_Profile() {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && <ButtonStyle><div>환영합니다 {user.name}님</div></ButtonStyle>;
}

export default User_Profile;