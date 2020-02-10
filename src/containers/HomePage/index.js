import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import CardList from "../../components/CardList";
import Footer from "../../components/Footer";
import { getDogArray } from "../../core/actions/racesActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./HomePage.module.css";
import SearchBar from "../../components/SearchBar";

/**
 * Component that shows the Home and receives an array.
 */

export const HomePage = () => {
  const dispatch = useDispatch();
  const dogResponse = useSelector(state => state.raceReducer);
  const [filter, setFilter] = useState("");

  // Getting array of dog breeds from store.
  useEffect(() => {
    dispatch(getDogArray());
  }, [dispatch]);

  // Return a fragment with a title, list of cards and a footer.
  return (
    <main className={styles.HomePage}>
      <header className={styles.Header}>
        <Title name={"dog like"} className={styles.Title} />
        <SearchBar
          placeholder="Search dog race"
          dogList={dogResponse.races}
          defaultValue={filter}
          onInput={event => setFilter(event.currentTarget.value)}
        />
      </header>
      <CardList
        dogList={(dogResponse.races || []).filter(race =>
          race.includes(filter)
        )}
      />
      <Footer />
    </main>
  );
};

export default HomePage;
