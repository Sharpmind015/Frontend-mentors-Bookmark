import React from "react";
import navItems from "../../Data/navItems.js";
import "./header.css";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import logobookmark from "../../assets/logo-bookmark.svg";
import logobookmarkopen from "../../assets/logo-bookmark-open.svg";

function Header() {
  return (
    <header className="l-header">
      <NavDesktop navItems={navItems} logo={logobookmark} />
      <NavMobile
        navItems={navItems}
        logo={logobookmark}
        logoOpen={logobookmarkopen}
      />
    </header>
  );
}

export default Header;
