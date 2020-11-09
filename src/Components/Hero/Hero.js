import React from "react";
import "./hero.css";
import illustrationhero from "../../assets/illustration-hero.svg";

function Hero() {
  return (
    <section className="l-hero u-space-top-3">
      <div className="container">
        <div className="c-hero u-text-center-md">
          <div className="c-hero__desc">
            <h1 className="c-hero__title u-space-down-2">
              A Simple Bookmark Manager
            </h1>
            <p className="c-hero__content u-space-down-2">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="u-flex u-justify-center-md">
              <a
                href="index.html"
                className="c-btn c-btn--primary u-space-right-1"
              >
                Get it on Chrome
              </a>
              <a href="index.html" className="c-btn">
                Get it on FireFox
              </a>
            </div>
          </div>
          <div className="c-hero__img u-space-down-2">
            <img src={illustrationhero} alt="boohmark-manager" />
            <div className="hero__bg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
