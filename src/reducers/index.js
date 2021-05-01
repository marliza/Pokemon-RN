import {combineReducers} from 'redux';
import pokemonListReducer from './PokemonListReducer';

export default combineReducers({
  pokemonData: pokemonListReducer,
});
