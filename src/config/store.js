import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

//reducers - pass reducers
//{} - pass any initialState
//applyMiddleware(ReduxThunk) - store enhancer, adds additional functionality to store
export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
