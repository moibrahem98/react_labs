import { Input } from "../components/Input";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCred, setIsValidCred] = useState(true);

  const history = useHistory();
  const authContext = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authContext.login(email, password)) history.replace("/main-page");
    else setIsValidCred(false);
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="card p-3 col-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
        {!isValidCred && (
          <div className="alert alert-danger">Invalid login credentials</div>
        )}
        <button className="btn btn-primary">Log-in</button>
      </form>
    </div>
  );
};
