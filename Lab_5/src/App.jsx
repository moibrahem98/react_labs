import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar, ProtectedRoute } from "./components";
import { Students, Posts, Users, UserDetails, ContactUs, Login } from "./Pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <ProtectedRoute path="/posts">
            <Posts />
          </ProtectedRoute>
          <ProtectedRoute path="/students">
            <Students />
          </ProtectedRoute>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <ProtectedRoute path="/users">
            <Users />
          </ProtectedRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
