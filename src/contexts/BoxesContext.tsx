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

type BoxPropsSettle = Omit<BoxProps, 'id' | 'lastUpdate' | 'quantity'>

interface BoxContextProps {
  boxes: BoxProps[],
  handleAddBox: (props: BoxPropsSettle) => void,
  handleOpenAddModal: () => void,
  isModalAddBoxOpen: boolean,
}

export const BoxesContext = createContext({} as BoxContextProps);

const BoxesContextProvider: React.FC = ({ children }) =>{
  const [boxes, setBox] = useState<BoxProps[]>([]);
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);


  useEffect(() => {
    async function getBox() {
      const response = await api.get('/paperBox');
      setBox(response.data);
      console.log(response.data)
    }
    getBox();
  }, []);

  async function handleAddBox(boxSettle: BoxPropsSettle){
    try {
      const response = await api.post('/paperBox', {
        ...boxSettle,
        lastUpdate: new Date(),
      });
      
      setBox([
        ...boxes,
        response.data
      ]);


    } catch (err) {
      console.log(err);
    }
  }

  function handleOpenAddModal(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }

  return (
    <BoxesContext.Provider 
      value={{
        boxes,
        handleAddBox,
        handleOpenAddModal,
        isModalAddBoxOpen
      }}>
      {children}
    </BoxesContext.Provider >
  );
}

export { BoxesContextProvider }