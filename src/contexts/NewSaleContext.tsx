import { createContext } from "react";


export const NewSaleContext = createContext({});

const NewSaleContextProvider: React.FC = ({children}) => {
  
  return (
    <NewSaleContext.Provider
      value={{}}
    >
      { children }
    </NewSaleContext.Provider>
  );
}

export { NewSaleContextProvider }