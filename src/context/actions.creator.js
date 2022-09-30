export const loginSuccess = (state, payload) => {
  return { ...state, isAuth: true, token: payload };
};

export const loginError = (state) => {
  return { ...state, error: true };
};
