import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  items: [],
  loading: true,
  error: '',
  status: '',
};

export const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_ITEMS:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'All',
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
        status: 'error',
      };
    default:
      return state;
  }
};

export default itemsReducer;
