
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'

import { FormEvent, useState } from "react";
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'
import { XButton } from '../../GeneralComponents/XButton';
import { useDepositModal } from '../../../hooks/useDepositModal';

function ModalEditBox() {
    const { handleUpdatePaperBox, handleDeletePaperBox, editingBox } = useBoxes();
    const { isModalEditBoxOpen, handleOpenEditModal } = useDepositModal();
    
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [buyPrice, setBuyPrice] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await handleUpdatePaperBox({
            name,
            type,
            amount,
            buyPrice,
        })
        setName('');
        setType('');
        setAmount('');
        setBuyPrice('');
        handleOpenEditModal();
    }

    function handleClose() {

        setName('');
        setType('');
        setAmount('');
        setBuyPrice('');

        handleOpenEditModal();
    }

    return (
        <div className={isModalEditBoxOpen ? 'ModalOpen' : 'ModalClosed'}>
            <div className="content">

                <XButton
                    logo={xImg}
                    action={handleClose}
                />

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="Title">
                        <span> Edit Product </span>
                        <img src={editBoxImg} alt="" />
                    </div>

                    <div className="inputAddModal">
                        <input
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder={editingBox.name}
                            required
                        />
                    </div>


                    <div className="inputAddModal">
                        <select value={type} onChange={(e) => setType(e.target.value)} required>
                            <option value="" disabled selected>{editingBox.type}</option>
                            <option value="500 Sheets">500 Sheets</option>
                            <option value="300 Sheets">300 Sheets</option>
                            <option value="200 Sheets">200 Sheets</option>
                        </select>
                    </div>

                    <div className="inputAddModalDiferent">
                        <input
                            type="number"
                            value={amount}
                            onChange={event => setAmount(event.target.value)}
                            className="first"
                            placeholder={editingBox.amount}
                            required
                        />
                        <input
                            type="number"
                            value={buyPrice}
                            onChange={event => setBuyPrice(event.target.value)}
                            className="second"
                            placeholder={editingBox.buyPrice}
                            required
                        />
                    </div>
                    <div className="addProductButton">
                        <button
                            type="button"
                            onClick={() => handleDeletePaperBox(editingBox.id)}
                        >
                            Exclude Product
                        </button>
                        <button
                            type="submit"
                        >
                            Edit Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export { ModalEditBox }