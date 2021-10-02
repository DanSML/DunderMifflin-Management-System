import { useContext } from "react";
import { BoxesTypesContext } from "../contexts/DepositContexts/BoxesTypesContext";

export const useTypes = () => {
  const boxesTypesContext = useContext(BoxesTypesContext);
  return boxesTypesContext;
};
