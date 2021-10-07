import { FormEvent, useState } from "react";
import { XButton } from '../XButton';

import { useDepositModal } from '../../hooks/useDepositModal';
import { useBoxes } from "../../hooks/useBoxes";

import './styles.scss'
import editBoxImg from '../../assets/editBox.svg'
import xImg from '../../assets/x.svg'
import { useTypes } from "../../hooks/useSettings";


function ModalEditBox() {
    const { handleUpdatePaperBox, handleDeletePaperBox, editingBox } = useBoxes();
    const { isModalEditBoxOpen, handleOpenEditModal } = useDepositModal();
    const { boxSettings } = useTypes();
    
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
            buyPrice
        });

        
        handleClose();
    }

    function handleClose() {
        setName('');
        setType('');
        setAmount('');
        setBuyPrice('');

        handleOpenEditModal();
    }

    function handleDelete(){
        handleClose();
        handleDeletePaperBox(editingBox.id);
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
                        <option value="" disabled>Select</option>
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
                            value={amount}
                            onChange={event => setAmount(event.target.value)}
                            className="first"
                            placeholder={editingBox.amount}
                            required
                        />
                        <input
                            type="number"
                            value={buyPrice}
                            placeholder={editingBox.buyPrice}
                            className="second"
                            onChange={event => setBuyPrice(event.target.value)}
                            required
                        />
                    </div>
                    <div className="addProductButton">
                        <button
                            type="button"
                            onClick={() => handleDelete()}
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