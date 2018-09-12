export const sayHi = payload => dispatch => {
  dispatch({
    type: 'SAY_HI',
    payload
  });
};