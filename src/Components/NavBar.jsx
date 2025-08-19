import React, { useState } from 'react';
import FES from "../assets/FES.svg";

function NavBar({ user, onLoginClick, onRegisterClick, onLogoutClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const firstLetter = user?.email?.charAt(0).toUpperCase();

  return (
    <nav className="nav__bar">
      <img src={FES} alt="" className="logo"/>
      <div className="button__wrapper">
        {user ? (
          <div 
            className="avatar-circle"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onLogoutClick}
          >
            {isHovered ? "Logout" : firstLetter}
          </div>
        ) : (
          <>
            <button className="login" onClick={onLoginClick}>Login</button>
            <button className="register" onClick={onRegisterClick}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

