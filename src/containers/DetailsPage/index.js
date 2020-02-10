import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DogDetails from "../../components/DogDetails";
import styles from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogImage } from "../../core/actions/racesActions";

/**
 * Component that receives a string and makes a request.
 */
export const DetailsPage = () => {
  const dispatch = useDispatch();
  const { dogname = "" } = useParams();
  const dogRes = useSelector(state => state.raceReducer);

  // Asynchronous request that returns the path of an image.
  useEffect(() => {
    dispatch(getDogImage(dogname));
  }, [dispatch, dogname]);

  return (
    <div className={styles.DetailsPageContainer}>
      <DogDetails
        dogImg={dogRes.img}
        dogName={dogname}
        onReload={() => dispatch(getDogImage(dogname))}
      />
    </div>
  );
};

export default DetailsPage;
