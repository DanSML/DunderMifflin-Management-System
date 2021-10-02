import { createContext, useState } from "react";

interface DepositModalContextProps {
  handleOpenAddModal: () => void,
  handleOpenEditModal: () => void,
  isModalEditBoxOpen: boolean,
  isModalAddBoxOpen: boolean
}

export const DepositModalContext = createContext({} as DepositModalContextProps);

const DepositModalContextProvider: React.FC = ({ children }) => {
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);
  const [isModalEditBoxOpen, setIsModalEditBoxOpen] = useState(false);

  function handleOpenAddModal(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }

  function handleOpenEditModal(){
    setIsModalEditBoxOpen(!isModalEditBoxOpen);
  }

  return (
    <DepositModalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenEditModal,
        isModalEditBoxOpen,
        isModalAddBoxOpen
      }}
    >
      { children }
    </DepositModalContext.Provider>
  )
}

export { DepositModalContextProvider }