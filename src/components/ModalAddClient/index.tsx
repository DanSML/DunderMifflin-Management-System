import { XButton } from "../XButton";

import clientImg from '../../assets/client.svg'
import xImg from '../../assets/x.svg'
import React from "react";
import { useClients } from "../../hooks/useClients";
import { useState } from "react";
import { useDepositModal } from "../../hooks/useDepositModal";

import './styles.scss'

function ModalAddClient() {
  const [name, setName] = useState('');

  const { handleAddClient } = useClients();
  const {isModalAddClientOpen, handleAddClientModalState} = useDepositModal();
 
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await handleAddClient({
      name,
    });

    handleClose();
  }

  function handleClose() {
    setName('');
    handleAddClientModalState();
  }

  // 

  return (
    <div className={isModalAddClientOpen ? 'MM' : 'MN'}>
      <div className="content">

        <XButton
          logo={xImg}
          action={handleClose}
        />

        <form
          onSubmit={handleSubmit}
        >
          <div className="Title">
            <span> Add Client </span>
            <img src={clientImg} alt="" />
          </div>

          <div className="inputAddModal">
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Client Name"
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

export { ModalAddClient }