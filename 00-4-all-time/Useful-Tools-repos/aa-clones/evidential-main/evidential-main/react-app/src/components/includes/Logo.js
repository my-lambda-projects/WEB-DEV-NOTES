import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to="/" exact={true} activeClassName="active" className="logo">
      E<span>V</span>IDENTIAL
    </NavLink>
  )
}

export default Logo
