import { createContext, useReducer, useState } from "react";
import reducer from "./reducer";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  // const [isAuth, setIsAuth] = useState("false");
  // const [token, setToken] = useState("token from context ");

  // const obj = {
  //   isAuth,
  //   token,
  //   setToken
  // };

  const intialState = {
    isAuth: false,
    isError: false,
    token: null
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
  // return <AppContext.Provider value={obj}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
