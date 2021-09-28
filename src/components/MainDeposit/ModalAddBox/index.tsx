import { FormEvent, useState } from 'react';
import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'


function ModalAddBox(){
  const { isModalAddBoxOpen, handleOpenAddModal, handleAddBox } = useBoxes();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    await handleAddBox({
      title,
      type
    })

    setTitle('');
    setType('');

    handleOpenAddModal();
  }

  return (
    <div className={isModalAddBoxOpen ? 'Modal' : 'Modali'}>
      <div className="content">
          <button
            type="button"
            className="xButton"
            onClick={handleOpenAddModal}
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
            <label htmlFor="">Name</label>
            <input 
              type="text" 
              value={title}
              onChange={event => setTitle(event.target.value)}  
            />
          </div>
          
          <div className="inputAddModal">
            <label htmlFor="">Type</label>
            <input 
              type="text" 
              value={type}
              onChange={event => setType(event.target.value)}
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