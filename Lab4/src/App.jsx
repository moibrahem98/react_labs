import { Switch, Route, Redirect } from "react-router-dom";
import { Login, MainPage, Users, UserDetails } from "./pages";
import { ProtectedRoute } from "./components";

export const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/users/:id">
          <UserDetails />
        </Route>

        <ProtectedRoute path="/users">
          <Users />
        </ProtectedRoute>

        <Route path="/main-page">
          <MainPage />
        </Route>

        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
};
