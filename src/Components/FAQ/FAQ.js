import React from "react";
import "./faq.css";
import useTab from "../../CustomHooks/useTab";
import faq from "../../Data/faq.js";

function FAQ() {
  const [FaqOne] = useTab(false, {
    title: faq[0].title,
    content: faq[0].content
  });
  const [FaqTwo] = useTab(false, {
    title: faq[1].title,
    content: faq[1].content
  });
  const [FaqThree] = useTab(false, {
    title: faq[2].title,
    content: faq[2].content
  });
  const [FaqFour] = useTab(false, {
    title: faq[3].title,
    content: faq[3].content
  });
  return (
    <section className="l-faq u-space-top-6" id="faq">
      <div className="container">
        <div className="_wrapper">
          <h2 className="c-heading u-text-center u-space-down-1">
            Frequently Asked Questions
          </h2>
          <p className="c-content u-text-center">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <ul className="u-space-top-2">
            <FaqOne />
            <FaqTwo />
            <FaqThree />
            <FaqFour />
          </ul>
          <div className="u-space-top-1 u-text-center">
            <a href="index.html" className="c-btn c-btn--primary">
              More info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
