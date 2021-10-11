import { useDepositModal } from "../../hooks/useDepositModal";

import './styles.scss'
import xImg from '../../assets/x.svg'
import salesImg from '../../assets/sales.svg'

import { XButton } from "../XButton";
import { useState } from "react";
import { useSales } from "../../hooks/useSales";
import { useBoxes } from "../../hooks/useBoxes";
// import { BoxTypesProps } from "../../util/interfaces/BoxTypesInterfaces";
import { toast } from 'react-toastify';


function ModalNewSale() {
  const { isModalAddSalesOpen, handleAddSalesModalState } = useDepositModal();
  const { handleAddSale } = useSales();
  const { boxes, handleUpdateBoxAfterSell, handleBoxAfterSell, boxAfterSell } = useBoxes();

  const [boxQuantity, setBoxQuantity] = useState(0);
  const [client, setClient] = useState('');
  const [boxSelled, setBoxSelled] = useState('');


  handleBoxAfterSell({
    boxQuantity,
    client,
    boxSelled
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {

      if (Number(boxAfterSell.amount) < boxQuantity) {
        toast.error(`Out of Stock. Remaining itens: ${boxAfterSell.amount}`);
        return;
      }

      if (boxQuantity < 1){
        toast.error('Invalid quantity!');
        return;
      }
      
      toast.success("Box Seelled!");

      await handleUpdateBoxAfterSell({
        boxQuantity,
        client,
        boxSelled
      });
  
      await handleAddSale({
        boxQuantity,
        client,
        boxSelled,
      });
  
      handleClose();
    } catch (err) {
      console.log(err);
    }
  }

  function handleClose(){
    setBoxQuantity(0);
    setClient('');
    setBoxSelled('');
    handleAddSalesModalState();
  }

  return (
    <div className={isModalAddSalesOpen ? 'Modalp' : 'Modalz'}>
      <div className="content">

        <XButton
          logo={xImg}
          action={handleClose}
        />

        <form
          onSubmit={handleSubmit}
        >
          <div className="Title">
            <span> New Sale </span>
            <img src={salesImg} alt="" />
          </div>

          <div className="inputAddModal">
            <input
              type="text"
              value={client}
              onChange={event => setClient(event.target.value)}
              placeholder="Client"
              required
            />
          </div>

          <div className="inputAddModal">
            <select value={boxSelled} onChange={(e) => setBoxSelled(e.target.value)} required>
              <option value="" disabled>Select box selled</option>
              {
                boxes.map((box) => {
                  return (<option key={box.id} value={box.name}>{box.name}</option>)
                })
              }
            </select>
          </div>
            
          <div className="inputAddModalNumber">
            <input
              type="number"
              value={boxQuantity}
              onChange={event => setBoxQuantity(Number(event.target.value))}
              placeholder="Quantity"
              required
            />
          </div>

          <div className="addProductButton">
            <button
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ModalNewSale }