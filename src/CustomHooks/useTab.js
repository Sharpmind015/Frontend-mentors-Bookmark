import React, { useState } from "react";

const useTab = (defaultState, { title, content }) => {
  const [state, setState] = useState(defaultState);

  const tab = () => {
    return (
      <li className="c-faq__list" onClick={() => setState(!state)}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          alt="arrow"
          className={state ? "arrow active" : "arrow"}
        >
          <path fill="none" stroke="#5267DF" strokeWidth="3" d="M1 1l8 8 8-8" />
        </svg>
        {state && <p className="c-content u-space-top-1">{content}</p>}
      </li>
    );
  };
  return [tab, state, setState];
};

export default useTab;
