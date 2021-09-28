import { FormEvent, useState } from "react";

import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'


function ModalAddBox(){
  const [isModalAddBoxOpen, setIsModalAddBoxOpen] = useState(true);

  const { handleAddBox, boxes, setBox } = useBoxes();

  function handleModalState(){
    setIsModalAddBoxOpen(!isModalAddBoxOpen);
  }


  return (
    <div className={isModalAddBoxOpen ? 'Modal' : 'Modali'}>
      <div className="content">
        <form onSubmit={handleAddBoxFunc}>

        <button className="xButton" onClick={() => handleModalState()}>
          <img src={xImg} alt="" className="X"/>
        </button>
        <div className="Title">
          <span> Add New Product </span>
          <img src={addBoxImg} alt="" />
        </div>
        <div className="inputAddModal">
          <label htmlFor="">
            <span>Name</span> </label>
          <input type="text" />
        </div>
        <div className="inputAddModal">
          <label htmlFor="">Type</label>
          <input type="text" />
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