import React, { useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MyTrailsList from './MyTrailsList';


const MyTrails = () => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <MyTrailsList  />
  ) : (
    <div>Please log in first</div>
  );
};

export default MyTrails;
