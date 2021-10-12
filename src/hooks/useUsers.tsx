import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUsers = () => {
  const usersContext = useContext(UserContext);
  return usersContext;
};
