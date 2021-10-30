import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./../../contexts";

export const ProtectedRoute = ({ path, children }) => {
  // const isLoggedIn = localStorage.getItem("token") === "123";
  const AuthCtx = useContext(AuthContext);

  return AuthCtx.isLoggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="login" />
    </Route>
  );
};
