import { useContext } from "react";
import { BoxesSettingsContext } from "../contexts/BoxesSettingsContext";

export const useSettings = () => {
  const settingsContext = useContext(BoxesSettingsContext);
  return settingsContext;
};
