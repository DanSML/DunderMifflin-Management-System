import { useContext } from "react";
import { BoxesSettingsContext } from "../contexts/DepositContexts/BoxesSettingsContext";

export const useSettings = () => {
  const settingsContext = useContext(BoxesSettingsContext);
  return settingsContext;
};
