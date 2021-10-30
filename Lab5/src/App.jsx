import { Switch, Route, Redirect } from "react-router-dom";
import { Login, MainPage, Posts } from "./pages";
import { Navbar } from "./components";
import { ProtectedRoute } from "./components";
import { useContext } from "react";
import { AuthContext } from "./contexts";

export const App = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn && <Navbar />}
      <div className="container-fluid">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <ProtectedRoute path="/main-page">
            <MainPage />
          </ProtectedRoute>

          <ProtectedRoute path="/posts">
            <Posts />
          </ProtectedRoute>

          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </>
  );
};
