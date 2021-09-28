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

  async function handleAddBox(box: BoxProps){
    try {
      const response = await api.post('/paperBox', {
        ...box,
      });

      console.log(box);

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