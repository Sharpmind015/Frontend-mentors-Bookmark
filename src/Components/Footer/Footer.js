import React from "react";
import "./footer.css";
import footerItems from "../../Data/footerItems.js";
import logoBookmark from "../../assets/logo-bookmark-2.svg";

const Footer = () => {
  const footerList = footerItems.map(item => (
    <li className="c-footer-nav__list" key={item.id}>
      <a
        href={"#" + item.title.toLocaleLowerCase()}
        className="c-footer-nav__link"
      >
        {item.title}
      </a>
    </li>
  ));
  return (
    <footer id="footer" className="l-footer">
      <div className="container">
        <div className="c-footer-nav">
          <div className="c-footer-header">
            <a href="index.html">
              <img src={logoBookmark} alt="Bookmark logo" />
            </a>
            <ul className="c-footer-nav">{footerList}</ul>
          </div>
          <div className="c-footer-social">
            <a
              className="c-footer-social__link"
              style={{ marginRight: 40 }}
              href="facebook.com"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
            </a>
            <a className="c-footer-social__link" href="twitter.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="u-space-top-3 u-text-center">
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          className="u-space-right-1"
        >
          Challenge by Frontend Mentor
        </a>
        <a href="https://github.com/Sharpmind015/Frontend-mentors-Bookmark.git">
          Coded by Deji
        </a>
      </div>
    </footer>
  );
};

export default Footer;
