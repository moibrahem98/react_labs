import { createContext, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children, baseURL }) => {
  const authContext = useContext(AuthContext);

  const api = axios.create({
    baseURL,
  });

  const createHeaders = () => {
    return {
      headers: {
        Authorization: `Bearer ${authContext.token}`,
      },
    };
  };

  const get = (path) => {
    return api.get(path, createHeaders());
  };
  const post = (path, payload) => {
    return api.post(path, payload, createHeaders());
  };

  return (
    <ApiContext.Provider value={{ get, post }}>{children}</ApiContext.Provider>
  );
};
