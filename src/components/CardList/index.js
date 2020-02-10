import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import styles from "./CardList.module.css";

/**
 * Component that make a list of button's.
 */
export const CardList = ({ dogList = [] }) => {
  return (
    <div className={styles.CardList}>
      {dogList.map(dog => (
        <Card key={dog} dogName={dog} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  dogList: PropTypes.arrayOf(PropTypes.string)
};

export default CardList;
