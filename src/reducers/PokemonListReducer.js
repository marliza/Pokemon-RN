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
  nextURL: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_IN_PROGRESS:
      return {...state, isFetching: true};
    case FETCH_SUCCESS:
      if (action.initialData == null) {
        return {
          ...state,
          isFetching: false,
          pokemonList: action.newData,
          nextURL: action.nextURL,
        };
      } else {
        let allPokemon = [];
        allPokemon = action.initialData.concat(action.newData);
        return {
          ...state,
          isFetching: false,
          pokemonList: allPokemon,
          nextURL: action.nextURL,
        };
      }
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
