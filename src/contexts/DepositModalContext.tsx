import { createContext, useState } from "react";

interface DepositModalContextProps {
  handleOpenAddModal: () => void,
  handleOpenEditModal: () => void,
  handleBoxesTypesModalState: () => void,
  handleAddSalesModalState: () => void,
  handleAddClientModalState: () => void,

  isModalEditBoxOpen: boolean,
  isModalAddBoxOpen: boolean,
  isModalBoxesTypesOpen: boolean,
  isModalAddSalesOpen: boolean,
  isModalAddClientOpen: boolean,
}

export const DepositModalContext = createContext({} as DepositModalContextProps);

const DepositModalContextProvider: React.FC = ({ children }) => {
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);
  const [isModalEditBoxOpen, setIsModalEditBoxOpen] = useState(false);
  const [isModalBoxesTypesOpen, setIsModalBoxesTypesOpen] = useState(false);
  const [isModalAddSalesOpen, setIsModalAddSalesOpen] = useState(false);
  const [isModalAddClientOpen, setIsModalAddClientOpen] = useState(false);

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

  function handleAddClientModalState() {
    setIsModalAddClientOpen(!isModalAddClientOpen);
  }

  return (
    <DepositModalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenEditModal,
        handleBoxesTypesModalState,
        handleAddSalesModalState,
        handleAddClientModalState,
        isModalEditBoxOpen,
        isModalAddBoxOpen,
        isModalBoxesTypesOpen,
        isModalAddSalesOpen,
        isModalAddClientOpen
      }}
    >
      { children }
    </DepositModalContext.Provider>
  )
}

export { DepositModalContextProvider }