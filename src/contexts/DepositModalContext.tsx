import { createContext, useState } from "react";

interface DepositModalContextProps {
  handleOpenAddModal: () => void,
  handleOpenEditModal: () => void,
  handleBoxesTypesModalState: () => void,
  handleAddSalesModalState: () => void,

  isModalEditBoxOpen: boolean,
  isModalAddBoxOpen: boolean,
  isModalBoxesTypesOpen: boolean
  isModalAddSalesOpen: boolean
}

export const DepositModalContext = createContext({} as DepositModalContextProps);

const DepositModalContextProvider: React.FC = ({ children }) => {
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);
  const [isModalEditBoxOpen, setIsModalEditBoxOpen] = useState(false);
  const [isModalBoxesTypesOpen, setIsModalBoxesTypesOpen] = useState(false);
  const [isModalAddSalesOpen, setIsModalAddSalesOpen] = useState(false);


  function handleOpenAddModal(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }

  function handleOpenEditModal(){
    setIsModalEditBoxOpen(!isModalEditBoxOpen);
  }

  function handleBoxesTypesModalState(){
    setIsModalBoxesTypesOpen(!isModalBoxesTypesOpen);
  }

  function handleAddSalesModalState() {
    setIsModalAddSalesOpen(!isModalAddSalesOpen);
  }

  return (
    <DepositModalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenEditModal,
        handleBoxesTypesModalState,
        handleAddSalesModalState,
        isModalEditBoxOpen,
        isModalAddBoxOpen,
        isModalBoxesTypesOpen,
        isModalAddSalesOpen
      }}
    >
      { children }
    </DepositModalContext.Provider>
  )
}

export { DepositModalContextProvider }