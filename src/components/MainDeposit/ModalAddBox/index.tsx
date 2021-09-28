import { FormEvent, useRef, useState } from 'react';
import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'



function ModalAddBox(){
  const { isModalAddBoxOpen, handleOpenAddModal, handleAddBox } = useBoxes();
  const [] = useState();

  const formRef = useRef(null);

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(event.target);
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
          ref={formRef}
          onSubmit={handleSubmit}
        >
            <span> Add New Product </span>
            <img src={addBoxImg} alt="" />
            <input type="text" value={}/>
            <input type="text" />
            <button
              type="submit"
            >
              Add Product
            </button>
        </form>
      </div>
    </div>
  );
}

export { ModalAddBox }