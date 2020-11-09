import React, { useState } from "react";
import "./features.css";
import features from "../../Data/features.js";

function Features() {
  const [tab, setTab] = useState({
    content: features[0].content,
    image: features[0].image,
    tag: features[0].tag,
    id: features[0].id
  });
  const handleTab = i => {
    const { content, tag, image, id } = i;
    setTab({ content, tag, image, id });
  };
  const featuresList = features.map(feature => (
    <li
      key={feature.id}
      className={
        "c-tab-nav__list u-text-center " +
        (feature.id === tab.id ? "is-active" : "")
      }
      onClick={() => {
        handleTab(feature);
      }}
    >
      {feature.title}
    </li>
  ));
  return (
    <section className="l-features u-space-top-6" id="features">
      <div className="container">
        <div className="_wrapper">
          <h2 className="c-heading u-text-center u-space-down-1">Features</h2>
          <p className="c-content u-text-center">
            {" "}
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <ul className="c-tab-nav u-flex u-justify-around u-space-top-3 u-space-down-3">
            {featuresList}
          </ul>
        </div>
        <div className="c-tab u-space-top-3">
          <div className="c-tab__img">
            <img src={tab.image} alt={tab.tag} />
          </div>
          <div className="c-tab__content">
            <h2 className="c-heading u-space-top-3 u-text-center-md">
              {tab.tag}
            </h2>
            <p className="c-content u-space-top-1 u-text-center-md">
              {tab.content}
            </p>
            <div className="u-text-center-md">
              <a
                href="index.html"
                className="c-btn c-btn--primary u-space-top-1"
              >
                More info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
