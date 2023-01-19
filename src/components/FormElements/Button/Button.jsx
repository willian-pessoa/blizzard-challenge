import React from "react";

import "./Button.scss";

const Button = ({ variant, children }) => {
  return (
    <button className={`button button--${variant || "default"}`}>{children}</button>
  );
};

export default Button;
