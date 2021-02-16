import { faHome, faSignInAlt, faUserPlus, faUsers, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import FAI from '../includes/FAI';
import Logo from '../includes/Logo';

const NavBar = ({ setAuthenticated, authenticated }) => {
  return (
    <nav className="ev-main-nav">
      <Logo />
      <ul>
        { !authenticated &&
          <>
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                <FAI icon={faUserPlus} title="Sign Up"/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" exact={true} activeClassName="active">
                <FAI icon={faSignInAlt} title="Log In"/>
              </NavLink>
            </li>
          </>
        }
        { authenticated &&
          <>
            <li>
              <NavLink to="/users" exact={true} activeClassName="active">
                <FAI icon={faUsers} title="Users List"/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit-your-info" exact={true} activeClassName="active">
                <FAI icon={faUserEdit} title="Edit User"/>
              </NavLink>
            </li>
            <li>
              <LogoutButton setAuthenticated={setAuthenticated} title="Log Out" />
            </li>
          </>
        }
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            <FAI icon={faHome} title="Home"/>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
