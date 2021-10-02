import { FormEvent, useState } from 'react';
import { XButton } from '../../GeneralComponents/XButton';

import { useTypes } from '../../../hooks/useSettings';

import "./styles.scss"
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'
import { useDepositModal } from '../../../hooks/useDepositModal';


function ModalBoxTypes(){
    const {handleAddBoxType} = useTypes();
    const {handleBoxesTypesModalState,  isModalBoxesTypesOpen } = useDepositModal();
    const [title, setTitle] = useState('');
    const [percent, setPercent] = useState(0);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        await handleAddBoxType({
            title,
            percent
        })

        handleClose();
    }

    function handleClose(){
        setTitle('');
        setPercent(0);
        handleBoxesTypesModalState();
    }

    return (
        <div className={isModalBoxesTypesOpen ? "Modalo" : "Modalu"}>
            <div className="content">
                <XButton
                    logo={xImg}
                    action={handleClose}
                />
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="Title">
                        <span> Add new types </span>
                        <img src={editBoxImg} alt="" />
                    </div>

                    <div className="inputAddModal">
                        <input
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="type"
                            required
                        />
                    </div>
                    
                    <div className="addProductButtone">
                        <button
                            type="submit"
                        >
                            Edit Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { ModalBoxTypes }