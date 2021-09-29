import { FormEvent, useState } from 'react';
import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'

function ModalAddBox(){
  const { isModalAddBoxOpen, handleOpenAddModal, handleAddBox } = useBoxes();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unityPrice, setUnityPrice] = useState(0);

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    await handleAddBox({
      title,
      type,
      quantity,
      unityPrice
    })

    setTitle('');
    setType('');
    setQuantity(0);
    setUnityPrice(0);
    handleOpenAddModal();
  }

  function handleClose(){
    setTitle('');
    setType('');
    setQuantity(0);
    setUnityPrice(0);
    handleOpenAddModal();
  }

  return (
    <div className={isModalAddBoxOpen ? 'Modal' : 'Modali'}>
      <div className="content">
          <button
            type="button"
            className="xButtoni"
            onClick={handleClose}
          >
            <img src={xImg} alt="" className="X"/>
          </button>
        <form
          onSubmit={handleSubmit}
        >
          <div className="Title">
            <span> Add New Product </span>
            <img src={addBoxImg} alt="" />
          </div>

          <div className="inputAddModal">
            <input 
              type="text" 
              value={title}
              onChange={event => setTitle(event.target.value)}  
              placeholder="Name"
              required
            />
          </div>
          
          <div className="inputAddModal">
              <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="Select" selected>Select</option>
                <option value="500 Sheets">500 Sheets</option>
                <option value="300 Sheets">300 Sheets</option>
                <option value="200 Sheets">200 Sheets</option>
              </select>
          </div>

          <div className="inputAddModalDiferent">
              <input 
                type="number" 
                placeholder="Quantity"
                value={quantity}
                onChange={event => setQuantity(Number(event.target.value))}
                required
                className="first"
              />
              <input 
                type="number" 
                placeholder="Purchase price unity"
                value={unityPrice}
                onChange={event => setUnityPrice(Number(event.target.value))}
                required
                className="second"
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
}

export { ModalAddBox }