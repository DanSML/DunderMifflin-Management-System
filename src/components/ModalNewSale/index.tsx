import { useDepositModal } from "../../hooks/useDepositModal";

import './styles.scss'
import xImg from '../../assets/x.svg'
import salesImg from '../../assets/sales.svg'

import { XButton } from "../XButton";
import { useState } from "react";
import { useSales } from "../../hooks/useSales";
import { useBoxes } from "../../hooks/useBoxes";

function ModalNewSale() {
  const { isModalAddSalesOpen } = useDepositModal();
  const { handleAddSale } = useSales();
  const { boxes } = useBoxes();

  const [boxQuantity, setBoxQuantity] = useState(0);
  const [client, setClient] = useState('');
  const [boxSelled, setBoxSelled] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await handleAddSale({
      boxQuantity,
      client,
      boxSelled,
    })
  }

  function handleClose(){
    setBoxQuantity(0);
    setClient('');
    setBoxSelled('');
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
              placeholder="Box type"
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

          <input
            type="number"
            value={boxQuantity}
            onChange={event => setBoxQuantity(Number(event.target.value))}
            className="first"
            placeholder="Quantity"
            required
          />

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