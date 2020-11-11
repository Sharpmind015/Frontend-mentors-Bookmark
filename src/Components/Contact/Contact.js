/* eslint-disable */
import React, { useState } from "react";
import "./contact.css";
import errorImg from "../../assets/icon-error.svg";

const Contact = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const email = input;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(email)) setError("Whoops, make sure it's an email");
    else setError("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    validateEmail();
    setInput("");
  };

  return (
    <section id="contact" className="u-space-top-6 l-contact">
      <div className="container">
        <div className="_wrapper u-text-center">
          <p className="_contact-text u-text-white">35,000+ already joined</p>
          <h4 className="c-heading c-heading--normal u-space-top-2 u-text-white">
            Stay up-to-date with what we’re doing
          </h4>
          <form
            className={
              error ? "u-space-top-2 c-form error-msg" : "u-space-top-2 c-form"
            }
            onSubmit={handleSubmit}
          >
            <div className="error-container u-space-right-1 u-width-100">
              <input
                value={input}
                type="text"
                className="c-form__input u-width-100"
                placeholder="Enter your email address"
                onChange={e => {
                  setInput(e.target.value);
                }}
              />
              {error && <span className="error">{error}</span>}
              {error && (
                <img src={errorImg} className="error-img" alt="Error" />
              )}
            </div>
            <input
              type="submit"
              value="Contact us"
              className="c-btn c-btn--secondary"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
