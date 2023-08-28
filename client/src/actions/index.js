import axios from 'axios';

export const FETCH_MEALS_REQUEST = 'FETCH_MEALS_REQUEST';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';

export const FETCH_MEALS_FAILURE = 'FETCH_MEALS_FAILURE';

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (orderData) => {
  return {
    type: ADD_ORDER,
    payload: orderData,
  };
};
export const fetchMealRequest = () => {
  return {
    type: FETCH_MEALS_REQUEST,
  };
};
export const fetchMealSuccess = (meals) => {
  return {
    type: FETCH_MEALS_SUCCESS,
    payload: meals,
  };
};
export const fetchMealFailure = (error) => {
  return {
    type: FETCH_MEALS_FAILURE,
    payload: error,
  };
};

export const fetchMeals = () => {
  return (dispatch) => {
    dispatch(fetchMealRequest());
    
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      .then((response) => {
        dispatch(fetchMealSuccess(response.data.meals));
      })
      .catch((error) => {
        dispatch(fetchMealFailure(error.message));
      });
  };
};
