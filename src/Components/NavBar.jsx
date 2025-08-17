import React from 'react';
import FES from "../assets/FES.svg";

function NavBar({ isLoggedIn, userEmail, onLoginClick, onRegisterClick, onLogoutClick }) {
  return (
    <nav className="nav__bar">
      <img src={FES} alt=""className="logo"/>
      <div className="button__wrapper">
        {isLoggedIn ? (
          <button className="logout" onClick={onLogoutClick}>
            {userEmail.charAt(0).toUpperCase()}
          </button>
        ) : (
          <ul>
            <li><button className="login" onClick={onLoginClick}>Login</button></li>
            <li><button className="register" onClick={onRegisterClick}>Register</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

