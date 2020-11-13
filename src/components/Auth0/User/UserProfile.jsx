import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function User_Profile() {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <>
      <img style={{ width: '45px', height: '45px', borderRadius: '50%' }} src={user.picture} alt={user.name} />
    </>
  );
}

export default User_Profile;