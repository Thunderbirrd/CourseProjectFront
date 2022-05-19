import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/desktop/logo.png';

import './Logo.css';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img width="200px" src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;
