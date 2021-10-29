import { Route, Redirect } from "react-router-dom";
import { Users } from "../pages/Users";

export const ProtectedRoute = ({ path, children }) => {
  const isLoggedIn = localStorage.getItem("token") === "123";
  if (localStorage.token !== null) {
    <Route path="/main-page">
      <Users />
    </Route>;
  }
  return isLoggedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Route path="/">
      <Redirect to="/login" />
    </Route>
  );
};
