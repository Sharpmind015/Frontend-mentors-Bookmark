import React, { useState } from "react";
import hamburger from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";

const NavMobile = ({ navItems, logo, logoOpen }) => {
  const [menu, setMenu] = useState(false);

  const navbarItems = navItems.map(item => (
    <li key={item.id} className="c-navbar__list">
      <a
        href={"#" + item.title.toLowerCase()}
        className="c-navbar__link"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        {item.title}
      </a>
    </li>
  ));
  return (
    <nav className="container c-navbar c-navbar--mobile">
      <a href="index.html" className="c-siteLogo">
        <img src={menu ? logoOpen : logo} alt="Bookmark logo" />
      </a>
      <button
        className="c-burger"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <img src={menu ? close : hamburger} alt="Hamburger menu" />
      </button>
      {menu && (
        <ul className="c-navbar__menu">
          {navbarItems}
          <li className="c-navbar__list">
            <a
              href="index.html"
              className="c-btn c-btn--secondary c-btn--uppercase"
            >
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavMobile;
