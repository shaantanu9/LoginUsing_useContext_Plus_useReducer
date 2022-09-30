import { loginError, loginSuccess } from "./actions.creator";
import { SUCCESS, ERROR } from "./actions.types";

const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return loginSuccess(state, action.payload);

    case ERROR:
      return loginError(state);

    default:
      return state;
  }
};

export default reducer;
