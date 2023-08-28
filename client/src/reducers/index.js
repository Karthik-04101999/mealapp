import { FETCH_MEALS_REQUEST,FETCH_MEALS_SUCCESS,FETCH_MEALS_FAILURE, ADD_ORDER } from '../actions/index';

const initialState = {
  meals: [],
  loading: false,
  error:null,
  orders: [], // Array to store orders
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS_REQUEST:
      return {
        ...state,
loading:true,error:null};  

    case FETCH_MEALS_SUCCESS:
      return {
        ...state,
loading:false,meals:action.payload ,error:null}; 

case FETCH_MEALS_FAILURE:
  return {
    ...state,
loading:false,meals:action.payload ,error:null};  
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload], // Add the new order to the orders array
      };
    default:
      return state;
  }
};

export default mealReducer;
