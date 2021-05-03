import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_IN_PROGRESS,
  SEARCH,
} from '../actions/types';

const INITIAL_STATE = {
  pokemonList: [],
  error: false,
  isFetching: false,
  searchTerm: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IN_PROGRESS:
      return {...state, isFetching: true};
    case FETCH_SUCCESS:
      return {...state, isFetching: false, pokemonList: action.payload};
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case SEARCH:
      const searchTerm = action.searchTerm;
      return {...state, searchTerm};
    default:
      return state;
  }
};
