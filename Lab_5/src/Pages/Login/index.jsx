import { Input } from "../../components";
import { useState } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "a@a.com" && password === "123") {
      localStorage.setItem("token", "123");
      history.replace("/main-page");
    } else setIsValidCred(false);
  };
  const isLoggedIn = localStorage.getItem("token") === "123";

  return !isLoggedIn ? (
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
