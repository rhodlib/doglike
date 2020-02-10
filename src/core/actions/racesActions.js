/**
 * Races Actions.
 */

import axios from "axios";
import { GET_RACES, SEARCH_RACE } from "../constants/constants";

const url = "https://dog.ceo/api/breeds/list";

// Function to charge an array from the url, to the state.
export const getDogArray = () => async dispatch => {
  try {
    const result = await axios.get(url);
    dispatch({
      type: GET_RACES,
      payload: result.data.message
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};

// Function to search an image of dog, using the url to make a request.
export const getDogImage = dogName => async dispatch => {
  dispatch({
    type: SEARCH_RACE,
    payload: ""
  })
  try {
    const result = await axios.get(
      `https://dog.ceo/api/breed/${dogName}/images/random`
    );
    return dispatch({
      type: SEARCH_RACE,
      payload: result.data.message
    });
  } catch (err) {
    console.log("Error: " + err.message);
  }
};