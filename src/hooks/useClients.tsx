import { useContext } from "react"
import { ClientsContext } from "../contexts/ClientsContext"

export const useClients = () => {
  const clientsContext = useContext(ClientsContext);
  return clientsContext;
}