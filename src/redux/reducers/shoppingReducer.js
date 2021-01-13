import {ShoppingAction} from '../actions';

const initialState = {
  availability: {},
  availableFoods: {},
  error: null,
};

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_AVAILABILITY':
      return {
        ...state,
        availability: action.payload,
        error: null,
      };
    case 'ON_FOODS_SEARCH':
      return {
        ...state,
        availableFoods: action.payload,
        error: null,
      };
    case 'ON_SHOPPING_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export {ShoppingReducer};
