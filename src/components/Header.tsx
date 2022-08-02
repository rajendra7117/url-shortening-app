import React, {useState} from "react";
import "./Header.scss";
import {IoMdMenu} from 'react-icons/io'
const Header = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);



  return (
    <div className="header">
      <h1>Shortly</h1>
      <IoMdMenu className="menu-icon" onClick={() => setShowMenu(prev => !prev)}/>
      <nav className={`${showMenu ? 'active' : ''}`}>

        <ul className="nav-list">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resuorces</li>
        </ul>
        <div className="auth">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
