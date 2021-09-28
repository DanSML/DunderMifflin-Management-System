
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'

import { FormEvent, useState } from "react";
import { useBoxes } from "../../../hooks/useBoxes";

import './styles.scss'

function ModalEditBox() {
    const { isModalEditBoxOpen, handleOpenEditModal, handleUpdateBox, handleDeleteBox, editingBox} = useBoxes();

    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState(0);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        if (title || type) {
            await handleUpdateBox({
                title,
                type,
                quantity
            })
            setTitle('');
            setType('');
            setQuantity(0);
            handleOpenEditModal();
        }

    }

    function handleClose(){
        handleOpenEditModal();
        setTitle('');
        setType('');
        setQuantity(0);
    }

    return (
        <div className={isModalEditBoxOpen ? 'Modalo' : 'Modalu'}>
            <div className="content">
                <button
                    type="button"
                    className="xButton"
                    onClick={handleClose}
                >
                    <img src={xImg} alt="" className="X" />
                </button>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="Title">
                        <span> Edit Product </span>
                        <img src={editBoxImg} alt="" />
                    </div>

                    <div className="inputAddModal">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            value={title}
                            onChange={event => setTitle(event.target.value)}
                            placeholder={editingBox.title}
                        />
                    </div>

                    <div className="inputAddModal">
                        <label htmlFor="">Type</label>
                        <input
                            type="text"
                            value={type}
                            onChange={event => setType(event.target.value)}
                            placeholder={editingBox.type}
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