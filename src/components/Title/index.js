import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.css";

/**
 * Component that returns a h1 to use as a title.
 */
export const Title = ({ name, className = "" }) => (
  <h1 className={[styles.Title, className].join(" ")}>{name}</h1>
);

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
