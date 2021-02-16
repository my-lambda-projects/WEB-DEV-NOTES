import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { logout } from "../../services/auth";
import FAI from "../includes/FAI";

const LogoutButton = ({setAuthenticated, title}) => {
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onLogout();
    }
  }

  // TODO Make a warning wrapper to confirm logout
  return <FAI icon={faSignOutAlt} onClick={onLogout} onKeyDown={handleKeyDown} tabIndex="0" title={title}/>;
};

export default LogoutButton;
