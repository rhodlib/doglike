import React from "react";
import PropTypes from "prop-types";
import styles from "./DogDetails.module.css";
import Loader from "../Loader";
import Title from "../Title";
import Back from "../Back/index";
import Reload from "../Reload/index";

/**
 * Component that receives a name and an image url and displays them.
 */
export const Card = ({ dogImg = "", dogName, onReload = () => undefined }) => (
  <div className={styles.DogDetails}>
    {dogImg === "" ? (
      <Loader className={styles.Spinner} />
    ) : (
      <>
        <Title name={dogName} />
        <img className={styles.Image} src={dogImg} alt={dogName} />
        <div className={styles.ActionButtons}>
          <Back to="/" />
          <Reload onClick={onReload} tabIndex={0} to={`/post/${dogName}`} />
        </div>
      </>
    )}
  </div>
);

Card.propTypes = {
  dogImg: PropTypes.string,
  dogName: PropTypes.string.isRequired
};

export default Card;
