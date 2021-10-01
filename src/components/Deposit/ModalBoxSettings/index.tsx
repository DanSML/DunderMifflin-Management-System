import { FormEvent, useState } from 'react';
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'
import { useSettings } from '../../../hooks/useSettings';
import { XButton } from '../../GeneralComponents/XButton';

import "./styles.scss"


function ModalBoxSettings(){
    const { handleSettingsModalState,  isModalSettingsOpen, handleAddBoxType} = useSettings();
    const [title, setTitle] = useState('');
    const [percent, setPercent] = useState(0);

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        await handleAddBoxType({
            title,
            percent
        })

        setTitle('');
        setPercent(0);
        handleSettingsModalState();
    }

    function handleClose(){
        setTitle('');
        setPercent(0);
        handleSettingsModalState();
    }

    return (
        <div className={isModalSettingsOpen ? "Modalo" : "Modalu"}>
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

export {ModalBoxSettings}