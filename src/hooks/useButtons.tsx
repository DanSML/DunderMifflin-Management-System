import { useContext } from "react";
import { ButtonContext } from "../contexts/ButtonContext";

export const useButtons = () => {
  const buttonContext = useContext(ButtonContext);
  return buttonContext;
};
