import { useContext } from "react";
import { BoxesContext } from "../contexts/BoxesContext";

export const useBoxes = () => {
  const boxesContext = useContext(BoxesContext);
  return boxesContext;
};
