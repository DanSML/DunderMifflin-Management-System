import { FormEvent, useState } from 'react';
import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'

function ModalAddBox(){
  const { isModalAddBoxOpen, handleOpenAddModal, handleAddBox } = useBoxes();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unityPrice, setUnityPrice] = useState('');

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
    setQuantity('');
    setUnityPrice('');
    handleOpenAddModal();
  }

  function handleClose(){
    setTitle('');
    setType('');
    setQuantity('');
    setUnityPrice('');
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
              placeholder="Box type"
              required
            />
          </div>
          
          <div className="inputAddModal">
              <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="" disabled selected>Select sheets quantity</option>
                <option value="500 Sheets">500 Sheets</option>
                <option value="300 Sheets">300 Sheets</option>
                <option value="200 Sheets">200 Sheets</option>
              </select>
          </div>

          <div className="inputAddModalDiferent">
              <input 
                type="number" 
                value={quantity}
                onChange={event => setQuantity(event.target.value)}
                className="first"
                placeholder="Quantity"
                required
              />
              <input 
                type="number" 
                value={unityPrice}
                onChange={event => setUnityPrice(event.target.value)}
                className="second"
                placeholder="Unity price"
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
}

export { ModalAddBox }