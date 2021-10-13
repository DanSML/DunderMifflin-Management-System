import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import api from "../services/api";
import { date } from "../util/date";
import { initialSaleProps, SaleProps, SalesProviderProps } from "../util/interfaces/SaleInterfaces";

import { toast } from 'react-toastify';


export const NewSaleContext = createContext({} as SalesProviderProps);

const NewSaleContextProvider: React.FC = ({children}) => {
  const [sales, setSales] = useState<SaleProps[]>([]);

  useEffect(() => {
    async function getSales() {
      const response = await api.get('/sales');
      setSales(response.data);
    }
    getSales();
  }, []);

  async function handleAddSale(saleSettle: initialSaleProps){
    
    try {
      const response = await api.post('/sales', {
        ...saleSettle,
        date: date.format(new Date())
      });

      setSales([
        ...sales,
        response.data
      ]);

    } catch {
      toast.error('Erro na adição do produto');
    }
  }
  
  return (
    <NewSaleContext.Provider
      value={{
        sales,

        handleAddSale
      }}
    >
      { children }
    </NewSaleContext.Provider>
  );
}

export { NewSaleContextProvider }