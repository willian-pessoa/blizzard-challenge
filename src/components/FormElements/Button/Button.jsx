import React from "react";

import "./Button.scss";

const Button = ({ variant, children, ...props }) => {
  return (
    <button className={`button button--${variant || "default"}`} {...props}>{children}</button>
  );
};

export default Button;
