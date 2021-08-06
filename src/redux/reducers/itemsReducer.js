import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  items: [],
  itembyCode: {},
  itembyCodeList: [],
  loading: true,
  error: '',
  status: '',
};

export const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEMS:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'All',
      };
    case ActionTypes.SET_ITEMS_BY_NAME:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byName',
      };
    case ActionTypes.SET_ITEMS_BY_FULL_NAME:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byFullName',
      };
    case ActionTypes.SET_ITEMS_BY_CODE:
      return {
        ...state,
        loading: false,
        itembyCode: payload,
        error: '',
        status: 'set',
        filter: 'byCode',
      };
    case ActionTypes.SET_ITEMS_BY_CODE_LIST:
      return {
        ...state,
        loading: false,
        itembyCodeList: payload,
        error: '',
        status: 'set',
        filter: 'byCodeList',
      };
    case ActionTypes.SET_BY_CURRENCY:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byCurrency',
      };
    case ActionTypes.SET_BY_LANGUAGE:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byLanguage',
      };
    case ActionTypes.SET_BY_CAPITAL:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byCapital',
      };
    case ActionTypes.SET_BY_CALLING_CODE:
      return {
        ...state,
        loading: false,
        items: payload,
        error: '',
        status: 'set',
        filter: 'byCallingCode',
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
