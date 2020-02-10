import React from "react";
import styles from "./Reload.module.css";
import { Link } from "react-router-dom";

export const Reload = ({ to, children, ...props }) =>
  to ? (
    <Link to={to} className={styles.Reload} {...props}>
      {children}
    </Link>
  ) : (
    <a className={styles.Reload} {...props}>
      {children}
    </a>
  );

export default Reload;
