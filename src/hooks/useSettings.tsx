import { useContext } from "react";
import { BoxesTypesContext } from "../contexts/BoxesTypesContext";

export const useTypes = () => {
  const boxesTypesContext = useContext(BoxesTypesContext);
  return boxesTypesContext;
};
