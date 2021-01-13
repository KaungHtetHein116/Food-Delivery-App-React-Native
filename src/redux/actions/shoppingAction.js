import axios from 'axios';
import {BASE_URL} from '../../utils';

export const onAvaliability = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://online-foods.herokuapp.com/food/availability/76834`,
      );
      if (!response) {
        dispatch({
          type: 'ON_SHOPPING_ERROR',
          payload: 'Availability error',
        });
      } else {
        dispatch({
          type: 'ON_AVAILABILITY',
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_SHOPPING_ERROR',
        payload: error,
      });
    }
  };
};
export const onSearchFoods = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://online-foods.herokuapp.com/food/search/76834`,
      );
      if (!response) {
        dispatch({
          type: 'ON_SHOPPING_ERROR',
          payload: 'Availability error',
        });
      } else {
        dispatch({
          type: 'ON_FOODS_SEARCH',
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_SHOPPING_ERROR',
        payload: error,
      });
    }
  };
};
