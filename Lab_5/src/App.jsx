import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar, ProtectedRoute } from "./components";
import { Students, Users, UserDetails, ContactUs, Login } from "./Pages";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
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
            <Redirect to="/students" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
