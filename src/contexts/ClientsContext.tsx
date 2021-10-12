import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { date } from "../util/date";
import { ClientsContextProps, ClientsProps, InitialClientProps } from "../util/interfaces/ClientsInterfaces";


export const ClientsContext = createContext({} as ClientsContextProps);

const ClientsContextProvider: React.FC = ( {children }) => {
  const [clients, setClients] = useState<ClientsProps[]>([]);


  useEffect(() => {
    async function getClients() {
      const response = await api.get('/clients');
      setClients(response.data);
    }

    getClients();
  }, []);

  async function handleAddClient(clientSettle: InitialClientProps){
    try {
      const response = await api.post('/clients/', {
        ...clientSettle,
        clientSince: date.format(new Date()),
        importance: 'D'
      });

      setClients([
        ...clients,
        response.data
      ])
    } catch (err) {
      toast.error('')
    }
  }

  return (
    <ClientsContext.Provider
      value={{
        clients,
        handleAddClient
      }}
    >
      { children }
    </ClientsContext.Provider>
  )
}

export { ClientsContextProvider }