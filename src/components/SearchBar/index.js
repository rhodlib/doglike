import React from "react";
import styles from "./SearchBar.module.css";
import PropTypes from 'prop-types';

export const SearchBar = ({ dogList = [], ...props }) => (
  <>
    <input className={styles.SearchBar} list="dogs" {...props} />
    <datalist id="dogs">
      {dogList.map(dog => (
        <option key={dog} value={dog} />
      ))}
    </datalist>
  </>
);

SearchBar.propTypes = {
  dogList: PropTypes.arrayOf(PropTypes.string),
}

export default SearchBar;
