export function UserErrorAction() {
  return async (dispatch) => {
    dispatch({type: 'ON_USER_ERROR'});
  };
}

export function onUpdateCart(item) {
  return async (dispatch) => {
    dispatch({
      type: 'ON_UPDATE_CART',
      payload: item,
    });
  };
}
