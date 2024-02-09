import {combineReducers} from 'redux';
import favoriteReducer from './favoriteReducer';
import fetchReducers from './fetchReducers';
import searchReducer from './searchReducer';


const rootReducers = combineReducers({
    favorites: favoriteReducer,
    fetchItems: fetchReducers,
    searchReducerSet: searchReducer
})
export default rootReducers