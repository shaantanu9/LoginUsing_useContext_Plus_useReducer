import { useContext, useReducer, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((res) => {
        const type = "SUCCESS";
        const payload = res.data.token;
        dispatch({ type, payload });
        return;
      })
      .catch((err) => {
        console.log(err, "Error");
        dispatch({ type: "ERROR" });
        return;
      });
  };

  return (
    <>
      <p> This is token {state.token}</p>
      {state.isAuth ? <p>Is Auth True</p> : <p>Is Auth False</p>}
      {state.error ? <p>Is Error True</p> : <p>Is Error False</p>}

      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          value={password}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Login;
