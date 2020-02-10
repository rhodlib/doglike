import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import Paw from "../../images/blackpaw.png";

/**
 * Component that receives a name and make a card with a "Paw" image.
 */
export const Card = ({ dogName }) => {
  return (
    <Link to={`/post/${dogName}`} className={styles.Card}>
      <img src={Paw} className={styles.CardImage} alt="paw" />
      <p className={styles.CardNameParagraph}>{dogName}</p>
    </Link>
  );
};

Card.propTypes = {
  dogName: PropTypes.string.isRequired
};

export default Card;
