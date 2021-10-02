import { useContext } from "react";
import { DepositModalContext } from "../contexts/DepositContexts/DepositModalContext";

export const useDepositModal = () => {
  const depositModalContext = useContext(DepositModalContext);
  return depositModalContext;
}