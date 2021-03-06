import {FETCH_SUCCESS, FETCH_FAIL, FETCH_IN_PROGRESS, SEARCH} from './types';

export const search = searchTerm => {
  return dispatch => {
    searchPokemonList(dispatch, searchTerm);
  };
};

export const fetchPokemonList = url => {
  return (dispatch, getState) => {
    const state = getState();

    fetchInProgress(dispatch);
    var pokemonList = [];
    var nextURL = '';
    // make api call to get the pokemon list
    fetch(url)
      .then(res => res.json())
      .then(res => {
        pokemonList = res.results;
        nextURL = res.next;
      })
      .then(() => {
        var pokemonDetailArray = [];
        // fetch the detail for each pokemon
        pokemonList.forEach((element, index, array) => {
          return new Promise((resolve, reject) => {
            fetch(element.url)
              .then(res => res.json())
              .then(res => {
                pokemonDetailArray.push(res);
                // dispatch success at the end of the iteration
                if (pokemonDetailArray.length === array.length) {
                  resolve(pokemonDetailArray);
                  if (state.pokemonData.pokemonList.length === 0) {
                    fetchPokemonListSuccess(
                      dispatch,
                      nextURL,
                      pokemonDetailArray,
                    );
                  } else {
                    fetchPokemonListSuccess(
                      dispatch,
                      nextURL,
                      pokemonDetailArray,
                      state.pokemonData.pokemonList,
                    );
                  }
                }
              })
              .catch(error => {
                fetchPokemonFail(dispatch);
                reject(error);
              })
              .done();
          });
        });
      })
      .catch(() => fetchPokemonFail(dispatch))
      .done();
  };
};

const fetchInProgress = dispatch => {
  dispatch({
    type: FETCH_IN_PROGRESS,
  });
};

const fetchPokemonFail = dispatch => {
  dispatch({
    type: FETCH_FAIL,
  });
};

const fetchPokemonListSuccess = (dispatch, nextURL, newData, initialData) => {
  dispatch({
    type: FETCH_SUCCESS,
    newData: newData,
    initialData: initialData,
    nextURL: nextURL,
  });
};

const searchPokemonList = (dispatch, searchTerm) => {
  dispatch({
    type: SEARCH,
    searchTerm: searchTerm,
  });
};
