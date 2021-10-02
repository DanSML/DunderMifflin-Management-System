import { FormEvent, useState } from 'react';
import addBoxImg from '../../../assets/addBox.svg'
import xImg from '../../../assets/x.svg'
import { useBoxes } from "../../../hooks/useBoxes";
import { useDepositModal } from '../../../hooks/useDepositModal';
import { useSettings } from '../../../hooks/useSettings';
import { XButton } from '../../GeneralComponents/XButton';

import './styles.scss'

function ModalAddBox(){
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [buyPrice, setBuyPrice] = useState('');

  const { handleOpenAddModal } = useDepositModal();
  const { boxSettings } = useSettings();
  const { handleAddPaperBox } = useBoxes();

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    
    await handleAddPaperBox({
      name,
      type,
      amount,
      buyPrice
    });

    setName('');
    setType('');
    setAmount('');
    setBuyPrice('');
    handleOpenAddModal();
  }

  function handleClose(){
    setName('');
    setType('');
    setAmount('');
    setBuyPrice('');
    handleOpenAddModal();
  }

  return (
    <div className={isModalAddBoxOpen ? 'Modal' : 'Modali'}>
      <div className="content">

          <XButton
            logo={xImg}
            action={handleClose}
          />

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
                {
                  boxSettings.map((type) => {
                    return (<option value={type.title}>{type.title}</option>)
                  })
                }
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