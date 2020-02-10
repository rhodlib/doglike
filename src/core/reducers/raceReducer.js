/**
 * Race Reducers.
 */

import { GET_RACES, SEARCH_RACE } from "../constants/constants";

// Initial state.
const INITIAL_STATE = {
  races: [],
  img: "",
};

// Export a function with a initial state and a action, and return a specific case.

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RACES:
      return {
        ...state.races,
        races: action.payload
      };
    case SEARCH_RACE:
      return {
        ...state.img,
        img: action.payload
      };
    default:
      return state;
  }
};
