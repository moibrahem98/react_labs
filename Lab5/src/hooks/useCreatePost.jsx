import { useContext } from "react";
import { ApiContext } from "../contexts";

export const useCreatePost = () => {
  //caching
  const apiContext = useContext(ApiContext);
  return async (body) => {
    const { data } = await apiContext.get("/posts", body);
    return data;
  };
};
