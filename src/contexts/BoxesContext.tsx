import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../services/api";
import { dollarUS } from "../util/currency";

import { PaperBoxProps } from '../util/interfaces/BoxInterfaces'
import { InitialPaperBoxProps } from '../util/interfaces/BoxInterfaces'
import { PaperBoxProductProps } from '../util/interfaces/BoxInterfaces'


export const BoxesContext = createContext({} as PaperBoxProductProps);

const BoxesContextProvider: React.FC = ({ children }) =>{
  const [editingBox, setEditingBox] = useState({} as PaperBoxProps);
  const [boxes, setBox] = useState<PaperBoxProps[]>([]);

  useEffect(() => {
    async function getBox() {
      const response = await api.get('/paperBox');
      setBox(response.data);
    }
    getBox();
  }, []);

  async function handleAddPaperBox(boxSettle: InitialPaperBoxProps){
    try {
      const response = await api.post('/paperBox', {
        ...boxSettle,
        amount: Number(boxSettle.amount),
        buyPrice: dollarUS.format(Number(boxSettle.buyPrice)),
        lastUpdate: new Date(),
        calculatedTotal: dollarUS.format(Number((Number(boxSettle.amount) * Number(boxSettle.buyPrice)).toFixed(2)))
      });

      setBox([
        ...boxes,
        response.data
      ]);

    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdatePaperBox(boxSettle: InitialPaperBoxProps) {

    try {
      const updatedBox = await api.put(
        `/paperBox/${editingBox.id}`,
      {
        ...editingBox,
        ...boxSettle,
        amount: Number(boxSettle.amount),
        buyPrice: dollarUS.format(Number(boxSettle.buyPrice)),
        lastUpdate: new Date(),
        calculatedTotal: dollarUS.format(Number((Number(boxSettle.amount) * Number(boxSettle.buyPrice)).toFixed(2))) 
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

  async function handleDeletePaperBox(boxId: number){
    await api.delete(`/paperBox/${boxId}`);

    const filteredBoxes = boxes.filter(box => box.id !== boxId);

    setBox(filteredBoxes);
  }

  function handleEditingBox(boxSettle: PaperBoxProps){
    setEditingBox(boxSettle);
  }

  return (
    <BoxesContext.Provider 
      value={{
        boxes,
        editingBox,

        handleEditingBox,
        handleAddPaperBox,
        handleDeletePaperBox,
        handleUpdatePaperBox,
      }}>
      {children}
    </BoxesContext.Provider >
  );
}

export { BoxesContextProvider }