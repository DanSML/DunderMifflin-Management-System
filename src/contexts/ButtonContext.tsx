import { createContext, useState } from 'react';


interface BaseButtonsProps {
  buttonState: string,
  setButtonState: (props:string) => void,
}

export const ButtonContext = createContext({} as BaseButtonsProps);

const ButtonContextProvider: React.FC = ({ children }) => {  
  const [buttonState, setButtonState] = useState('changed');

  return (
    <ButtonContext.Provider 
        value={{
          buttonState,
          setButtonState,
        }}>
        {children}
    </ButtonContext.Provider >
  );
}

export { ButtonContextProvider };