import apiUrl from '../constants/apiUrl';
import { ActionTypes } from '../constants/actionTypes';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const setDevices = (items) => ({
  type: ActionTypes.SET_ITEMS,
  payload: items,
});

export const fetchAllItems = () => async (dispatch) => {
  try {
    const response = await apiUrl.get('/all');
    dispatch({ type: ActionTypes.SET_ITEMS, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyName = (name) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/name/${name}`);
    dispatch({ type: ActionTypes.SET_ITEMS_BY_NAME, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyFullName = (name) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/name/${name}?fullText=true`);
    dispatch({ type: ActionTypes.SET_ITEMS_BY_FULL_NAME, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyCode = (code) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/alpha/${code}`);
    dispatch({ type: ActionTypes.SET_ITEMS_BY_CODE, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyCodeList = (code, code2, code3) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/alpha?codes=${code};${code2};${code3}`);
    dispatch({ type: ActionTypes.SET_ITEMS_BY_CODE_LIST, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyCurrency = (currency) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/currency/${currency}`);
    dispatch({ type: ActionTypes.SET_BY_CURRENCY, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyLanguage = (language) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/lang/${language}`);
    dispatch({ type: ActionTypes.SET_BY_LANGUAGE, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyCapital = (capital) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/capital/${capital}`);
    dispatch({ type: ActionTypes.SET_BY_CAPITAL, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyCalling = (callingcode) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/callingcode/${callingcode}`);
    dispatch({ type: ActionTypes.SET_BY_CALLING_CODE, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};

export const fetchItemsbyRegion = (region) => async (dispatch) => {
  try {
    const response = await apiUrl.get(`/region/${region}`);
    dispatch({ type: ActionTypes.SET_BY_REGION, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};
