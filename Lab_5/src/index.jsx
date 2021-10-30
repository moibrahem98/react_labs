import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApiContextProvider, AuthContextProvider } from "./contexts";
import { App } from "./App";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ApiContextProvider baseURL="https://jsonplaceholder.typicode.com/">
        <App />
      </ApiContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
