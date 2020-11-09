import React from "react";
import "./extensions.css";
import bgDots from "../../assets/bg-dots.svg";
import extensions from "../../Data/extensions.js";

function Extensions() {
  const extensionList = extensions.map(extension => (
    <li key={extension.id} className="c-card">
      <img src={extension.image} alt={extension.title} />
      <h4 className="c-card__heading">{extension.title}</h4>
      <p className="c-card__content">{extension.version}</p>
      <img src={bgDots} alt="dots" className="u-space-top-2" />
      <div>
        <a href="index.html" className="c-btn c-btn--primary u-space-top-1">
          Add & Install Extension
        </a>
      </div>
    </li>
  ));
  return (
    <section className="l-extensions u-space-top-6" id="extensions">
      <div className="container">
        <div className="_wrapper">
          <h2 className="c-heading u-text-center u-space-down-1">
            Download the extension
          </h2>
          <p className="c-content u-text-center">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <ul className="_-card-container">{extensionList}</ul>
      </div>
    </section>
  );
}

export default Extensions;
