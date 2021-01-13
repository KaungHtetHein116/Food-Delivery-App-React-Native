const initialState = {
  user: {},
  location: {},
  error: undefined,
  Cart: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ON_USER_ERROR':
      return {...state, error: action.payload};

    case 'ON_UPDATE_CART':
      if (!Array.isArray(state.Cart)) {
        return {
          ...state,
          Cart: [action.payload],
        };
      }

      const existingFoods = state.Cart.filter(
        (item) => item._id === action.payload._id,
      );

      if (existingFoods.length > 0) {
        let upadtedCart = state.Cart.map((food) => {
          if (food._id === action.payload._id) {
            food.unit = action.payload.unit;
          }
          return food;
        });

        return {
          ...state,
          Cart: upadtedCart.filter((item) => item.unit > 0),
        };
      } else {
        return {
          ...state,
          Cart: [...state.Cart, action.payload],
        };
      }
    default:
      return state;
  }
};

export {UserReducer};
