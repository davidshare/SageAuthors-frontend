import React, { useState } from 'react';
import './Navbar.style.scss';
import MenuIcon from '../../assets/svgs/menu.svg';

const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <div className="navbar container" id="navbar">
      <div className="top-nav">
        <h2 className="nav-brand"><a href='/'>SageAuthors</a></h2>
        {!authenticated && !showMenu && (
          <img
            src={MenuIcon}
            alt=""
            className="nav-open"
            onClick={() => setShowMenu(true)}
            data-testid="menu-icon"
          />
        )}
        {!authenticated && showMenu && (
          <div
            className="nav-close"
            onClick={() => setShowMenu(false)}
            data-testid="close-nav"
          >
            &#10005;
          </div>
        )}
        {authenticated && (
          <img
            src="../../assets/images/avatar.png"
            alt=""
            className="avatar-mobile"
            onClick={() => (windowSize < 860 ? setShowMenu(!showMenu) : '')}
            data-testid="avatar-icon"
          />
        )}
      </div>
      <nav
        className={showMenu ? 'nav' : 'hideNav'}
        id="nav"
        data-testid="navlist"
      >
        <ul className="nav-list">
          <li>
            <a href="sports">Sports</a>
          </li>
          <li>
            <a href="sports">Education</a>
          </li>
          <li>
            <a href="sports">Lifestyle</a>
          </li>
          <li>
            <a href="sports">Technology</a>
          </li>
          <li>
            <a href="sports">More</a>
          </li>
          {!authenticated && (
            <li className="signin-link">
              <a href="signin">Signin</a>
            </li>
          )}
          {!authenticated && (
            <li className="signup-link">
              <a href="signup">Signup</a>
            </li>
          )}
        </ul>
      </nav>
      <ul className="nav-auth-links">
        {!authenticated && (
          <li className="signin-link">
            <a href="signin">Signin</a>
          </li>
        )}
        {!authenticated && (
          <li className="signup-link">
            <a href="signup">Signup</a>
          </li>
        )}
        {authenticated && (
          <li>
            <img
              src="../../assets/images/avatar.png"
              alt=""
              className="avatar"
              onClick={() => (windowSize < 860 ? setShowMenu(!showMenu) : '')}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
