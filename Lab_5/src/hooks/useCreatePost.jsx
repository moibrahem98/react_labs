import { useContext } from "react";
import { ApiContext } from "../contexts";

export const useCreatePost = () => {
  const apiContext = useContext(ApiContext);
  return async (payload) => {
    const { data } = await apiContext.post("/posts", payload);
    console.log(data.id);
    return data;
  };
};
