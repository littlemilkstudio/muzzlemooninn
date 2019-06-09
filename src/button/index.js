import React from "react";
import "./index.scss";

export default ({ href, children, alt, ...props }) => (
  <a href={href} className={alt ? "button button-alt" : "button"} {...props}>
    {children}
  </a>
);
