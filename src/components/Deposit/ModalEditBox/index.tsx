
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'

import { FormEvent, useState } from "react";
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'
import { XButton } from '../../GeneralComponents/XButton';

function ModalEditBox() {
    const { isModalEditBoxOpen, handleOpenEditModal, handleUpdateBox, handleDeleteBox, editingBox } = useBoxes();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unityPrice, setUnityPrice] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await handleUpdateBox({
            title,
            type,
            quantity,
            unityPrice,
        })
        setTitle('');
        setType('');
        setQuantity('');
        setUnityPrice('');
        handleOpenEditModal();
    }

    function handleClose() {

        setTitle('');
        setType('');
        setQuantity('');
        setUnityPrice('');

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
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            placeholder={editingBox.title}
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
                            value={quantity}
                            onChange={event => setQuantity(event.target.value)}
                            className="first"
                            placeholder={editingBox.quantity}
                            required
                        />
                        <input
                            type="number"
                            value={unityPrice}
                            onChange={event => setUnityPrice(event.target.value)}
                            className="second"
                            placeholder={editingBox.unityPrice}
                            required
                        />
                    </div>
                    <div className="addProductButton">
                        <button
                            type="button"
                            onClick={() => handleDeleteBox(editingBox.id)}
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