import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ApiContextProvider, AuthContextProvider } from "./contexts";
// import { AuthContext } from "./contexts/AuthContext";

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

// ReactDOM.render(
//   <BrowserRouter>
//     <AuthContext.Provider value={{

//     }}>
//       <App />
//     </AuthContext.Provider>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
