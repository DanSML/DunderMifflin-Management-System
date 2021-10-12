import { useEffect, useState } from "react";
import { createContext } from "react";
import { currency } from "../components/InputMasked/masks";
import api from "../services/api";
import { dollarUS } from "../util/currency";
import { date } from "../util/date";
// import { realBR } from "../util/currency"

import { PaperBoxProps } from '../util/interfaces/BoxInterfaces'
import { InitialPaperBoxProps } from '../util/interfaces/BoxInterfaces'
import { PaperBoxProductProps } from '../util/interfaces/BoxInterfaces'
import { initialSaleProps } from "../util/interfaces/SaleInterfaces";

import { toast } from 'react-toastify';

export const BoxesContext = createContext({} as PaperBoxProductProps);

const BoxesContextProvider: React.FC = ({ children }) =>{
  const [boxAfterSell, setBoxAfterSell] = useState({} as PaperBoxProps);
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
        buyPrice: currency(boxSettle.buyPrice),
        lastUpdate: date.format(new Date()),
        calculatedTotal: dollarUS.format(Number(boxSettle.amount) * Number(boxSettle.buyPrice))
      });

      setBox([
        ...boxes,
        response.data
      ]);

    } catch (err) {
      toast.error('Cant add box');
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
        buyPrice: currency(boxSettle.buyPrice),
        lastUpdate: date.format(new Date()),
        calculatedTotal: dollarUS.format(Number(boxSettle.amount) * Number(boxSettle.buyPrice))
      }
    );

    const updatedBoxes = boxes.map(box =>
      box.id !== updatedBox.data.id ? box : updatedBox.data,
    );

      setBox(updatedBoxes);
    
    } catch (err) {
      toast.error('Cant update box');
    }
  }

  async function handleUpdateBoxAfterSell(saleSettle: initialSaleProps) {
    try {
      const newUpdateForBoxes = await api.put(
        `/paperBox/${boxAfterSell.id}`,
        {
          ...boxAfterSell,
          amount: Number(boxAfterSell.amount) - saleSettle.boxQuantity,
          calculatedTotal: dollarUS.format(Number(boxAfterSell.buyPrice) * (Number(boxAfterSell.amount) - saleSettle.boxQuantity)),
          lastUpdate: date.format(new Date()),
        }
      );

      const updateBoxesAfterSell = boxes.map((box) => 
        box.id !== newUpdateForBoxes.data.id ? box : newUpdateForBoxes.data,
      );

      setBox(updateBoxesAfterSell);

    } catch (err) {
      toast.error('Cant update box');
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

  function handleBoxAfterSell(saleSettle: initialSaleProps) {
    try {
      boxes.map((box) => {
        if (box.name === saleSettle.boxSelled) {
          setBoxAfterSell(box);
        }
      });
  
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <BoxesContext.Provider 
      value={{
        boxes,
        editingBox,
        boxAfterSell,

        handleEditingBox,
        handleAddPaperBox,
        handleDeletePaperBox,
        handleUpdatePaperBox,
        handleUpdateBoxAfterSell,
        handleBoxAfterSell,
      }}>
      {children}
    </BoxesContext.Provider >
  );
}

export { BoxesContextProvider }