import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../services/api";

interface BoxProps {
  id: number,
  quantity: number,
  title: string,
  type: string,
  lastUpdate: string,
}

interface BoxContextProps {
  boxes: BoxProps[],
  handleAddBox: (props: BoxProps) => void,
  setBox: (React.Dispatch<React.SetStateAction<BoxProps[]>>)
}

export const BoxesContext = createContext({} as BoxContextProps);

const BoxesContextProvider: React.FC = ({ children }) =>{
  const [boxes, setBox] = useState<BoxProps[]>([]);

  useEffect(() => {
    async function getBox() {
      const response = await api.get('/paperBox');
      setBox(response.data);
      console.log(response.data)
    }
    getBox();
  }, []);

  async function handleAddBox(box: BoxProps){
    try {
      const response = await api.post('/foods', {
        ...box,
      });

      setBox([
        ...boxes,
        response.data
      ]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <BoxesContext.Provider 
      value={{
        boxes,
        handleAddBox,
        setBox
      }}>
      {children}
    </BoxesContext.Provider >
  );
}

export { BoxesContextProvider }