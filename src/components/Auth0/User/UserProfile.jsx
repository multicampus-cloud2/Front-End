<<<<<<< HEAD:src/components/Auth0/User/UserProfile.js
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

=======
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components";

const ButtonStyle = styled.div`
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

>>>>>>> a56f99c92a5a24548ed738f6f6b2168af714cf5b:src/components/Auth0/User/UserProfile.jsx
export default User_Profile;