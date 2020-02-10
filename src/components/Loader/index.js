import React from "react";
import styles from "./Loader.module.css";

export const Loader = ({ className = "" }) => (
  <div className={[styles.Loader, className].join(" ")}></div>
);

export default Loader;
