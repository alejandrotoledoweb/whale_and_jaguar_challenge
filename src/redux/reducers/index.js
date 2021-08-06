import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';

export const AppReducer = combineReducers({
  allItems: itemsReducer,
});

export default AppReducer;
