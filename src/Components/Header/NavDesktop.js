import React from "react";

const NavDesktop = ({ navItems, logo }) => {
  const navbarItems = navItems.map(item => (
    <li key={item.id} className="c-navbar__list">
      <a href={"#" + item.title.toLowerCase()} className="c-navbar__link">
        {item.title}
      </a>
    </li>
  ));
  return (
    <nav className="container c-navbar c-navbar--desktop">
      <a href="index.html" className="c-siteLogo">
        <img src={logo} alt="Bookmark logo" />
      </a>
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
    </nav>
  );
};

export default NavDesktop;
