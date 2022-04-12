import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countries from './countries/countries';
import listFilter from './filter/filter';

const reducer = combineReducers({ countries, listFilter });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
