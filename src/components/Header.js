import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/nynj-logo.png";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" className="brand-logo" />
      </Link>
      <div className='account'>
        <LoginButton />
        <Profile />
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;


