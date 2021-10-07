import { useContext } from "react";
import { DepositModalContext } from "../contexts/DepositModalContext";

export const useDepositModal = () => {
  const depositModalContext = useContext(DepositModalContext);
  return depositModalContext;
}