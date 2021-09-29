import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../services/api";
import { dollarUS } from "../util/currency";

interface BoxProps {
  id: number,
  quantity: string,
  unityPrice: string,
  calculatedTotal: number,
  title: string,
  type: string,
  lastUpdate: string,
}

type BoxPropsSettle = Omit<BoxProps, 'id' | 'lastUpdate' | 'calculatedTotal'>

interface BoxContextProps {
  boxes: BoxProps[],
  editingBox: BoxProps,
  handleAddBox: (props: BoxPropsSettle) => void,
  handleOpenAddModal: () => void,
  handleOpenEditModal: () => void,
  isModalAddBoxOpen: boolean,
  isModalEditBoxOpen: boolean,
  handleDeleteBox: (boxId: number) => void,
  handleUpdateBox: (props: BoxPropsSettle) => void,
  handleEditingBox: (props: BoxProps) => void
}

export const BoxesContext = createContext({} as BoxContextProps);

const BoxesContextProvider: React.FC = ({ children }) =>{
  const [editingBox, setEditingBox] = useState({} as BoxProps);
  const [boxes, setBox] = useState<BoxProps[]>([]);
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(false);
  const [isModalEditBoxOpen, setIsModalEditBoxOpen] = useState(false);


  useEffect(() => {
    async function getBox() {
      const response = await api.get('/paperBox');
      setBox(response.data);
    }
    getBox();
  }, []);

  async function handleAddBox(boxSettle: BoxPropsSettle){
    try {
      const response = await api.post('/paperBox', {
        ...boxSettle,
        quantity: Number(boxSettle.quantity),
        unityPrice: dollarUS.format(Number(boxSettle.unityPrice)),
        lastUpdate: new Date(),
        calculatedTotal: dollarUS.format(Number((Number(boxSettle.quantity) * Number(boxSettle.unityPrice)).toFixed(2)))
      });

      setBox([
        ...boxes,
        response.data
      ]);

    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateBox(boxSettle: BoxPropsSettle) {

    try {
      const updatedBox = await api.put(
        `/paperBox/${editingBox.id}`,
      {
        ...boxSettle,
        ...editingBox,
        quantity: Number(boxSettle.quantity),
        unityPrice: dollarUS.format(Number(boxSettle.unityPrice)),
        lastUpdate: new Date(),
        calculatedTotal: dollarUS.format(Number((Number(boxSettle.quantity) * Number(boxSettle.unityPrice)).toFixed(2))) 
      }
    );

    const updatedBoxes = boxes.map(box =>
      box.id !== updatedBox.data.id ? box : updatedBox.data,
    );

      setBox(updatedBoxes);
    
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteBox(boxId: number){
    await api.delete(`/paperBox/${boxId}`);

    const filteredBoxes = boxes.filter(box => box.id !== boxId);

    setIsModalEditBoxOpen(!isModalEditBoxOpen);
    setBox(filteredBoxes);
  }

  function handleEditingBox(boxSettle: BoxProps){
    setEditingBox(boxSettle);

    setIsModalEditBoxOpen(!isModalEditBoxOpen);
  }

  function handleOpenAddModal(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }

  function handleOpenEditModal(){
    setIsModalEditBoxOpen(!isModalEditBoxOpen);
  }

  return (
    <BoxesContext.Provider 
      value={{
        boxes,
        handleAddBox,
        handleOpenAddModal,
        handleOpenEditModal,
        isModalEditBoxOpen,
        isModalAddBoxOpen,
        handleDeleteBox,
        handleUpdateBox,
        handleEditingBox,
        editingBox
      }}>
      {children}
    </BoxesContext.Provider >
  );
}

export { BoxesContextProvider }