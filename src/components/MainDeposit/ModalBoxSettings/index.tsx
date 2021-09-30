import { FormEvent, useState } from 'react';
import editBoxImg from '../../../assets/editBox.svg'
import xImg from '../../../assets/x.svg'
import { useSettings } from '../../../hooks/useSettings';


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
                <button
                    type="button"
                    className="xButtoni"
                    onClick={handleClose}
                >
                    <img src={xImg} alt="" className="X" />
                </button>
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
                            required
                        />
                    </div>


{/*                     <div className="inputAddModal">
                        <select value="a" required>
                            <option value="" disabled selected>Select</option>
                            <option value="500 Sheets">500 Sheets</option>
                            <option value="300 Sheets">300 Sheets</option>
                            <option value="200 Sheets">200 Sheets</option>
                        </select>
                    </div> */}


                    <div className="addProductButton">
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