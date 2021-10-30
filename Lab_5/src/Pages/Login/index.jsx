import { Input } from "../../components";
import { useState, useContext } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./../../contexts/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authCtx.login(email, password)) history.replace("/main-page");
    else setIsValidCred(false);
  };

  return !authCtx.isLoggedIn ? (
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
        <button className="btn btn-primary m-2 col-2">Log-in</button>
      </form>
    </div>
  ) : (
    <Route path="/">
      <Redirect to="/students" />
    </Route>
  );
};
