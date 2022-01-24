import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MyTrailsList from './MyTrailsList';

const MyTrails = ({ myTrails }) => {
  const { isAuthenticated } = useAuth0();
  console.log('trail2', myTrails);
  return (
    (isAuthenticated && <MyTrailsList myTrails={myTrails} />) ||
    (!isAuthenticated && <div>Please log in first</div>)
  );
};

export default MyTrails;
