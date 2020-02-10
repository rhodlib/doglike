import React from "react";
import styles from "./Back.module.css";
import { Link } from "react-router-dom";

export const Back = ({ to, children, ...props }) =>
  to ? (
    <Link to={to} className={styles.Back} {...props}>
      {children}
    </Link>
  ) : (
    <a className={styles.Back} {...props}>
      {children}
    </a>
  );

export default Back;
