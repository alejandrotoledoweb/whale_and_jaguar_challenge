import apiUrl from '../constants/apiUrl';
import { ActionTypes } from '../constants/actionTypes';

export const setError = (actionType, error) => ({
  type: actionType,
  payload: error.message,
});

export const setDevices = (items) => ({
  type: ActionTypes.SET_ALL_ITEMS,
  payload: items,
});

export const fetchAllItems = () => async (dispatch) => {
  try {
    const response = await apiUrl.get('/all');
    dispatch({ type: ActionTypes.SET_ALL_ITEMS, payload: response.data });
  } catch (error) {
    dispatch(setError(ActionTypes.SET_ERROR, error));
  }
};
