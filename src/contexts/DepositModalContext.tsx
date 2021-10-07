import { createContext, useState } from "react";

interface DepositModalContextProps {
  handleOpenAddModal: () => void,
  handleOpenEditModal: () => void,
  handleBoxesTypesModalState: () => void,

  isModalEditBoxOpen: boolean,
  isModalAddBoxOpen: boolean,
  isModalBoxesTypesOpen: boolean
}

export const DepositModalContext = createContext({} as DepositModalContextProps);

const DepositModalContextProvider: React.FC = ({ children }) => {
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);
  const [isModalEditBoxOpen, setIsModalEditBoxOpen] = useState(false);
  const [isModalBoxesTypesOpen, setIsModalBoxesTypesOpen] = useState(false);


  function handleOpenAddModal(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }

  function handleOpenEditModal(){
    setIsModalEditBoxOpen(!isModalEditBoxOpen);
  }

  function handleBoxesTypesModalState(){
    setIsModalBoxesTypesOpen(!isModalBoxesTypesOpen);
}

  return (
    <DepositModalContext.Provider
      value={{
        handleOpenAddModal,
        handleOpenEditModal,
        handleBoxesTypesModalState,
        isModalEditBoxOpen,
        isModalAddBoxOpen,
        isModalBoxesTypesOpen
      }}
    >
      { children }
    </DepositModalContext.Provider>
  )
}

export { DepositModalContextProvider }