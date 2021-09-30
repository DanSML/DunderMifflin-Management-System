import addBoxImg from '../../../assets/addBox.svg'
import editBoxImg from '../../../assets/editBox.svg'
import { useBoxes } from '../../../hooks/useBoxes';
import { useSettings } from '../../../hooks/useSettings';

import './styles.scss'

function MainSideBar(){
  const { handleOpenAddModal } = useBoxes();
  const { handleSettingsModalState } = useSettings();

  return(
    <div className="mainSideBar">
      <button
        type="button"
        onClick={handleOpenAddModal}
        className="openAdd"
      >
        <img src={addBoxImg} alt="new product" />
        <span>New Product</span>
      </button>
      <button
        type="button"
        className="openEdit"
        onClick={() => handleSettingsModalState()}
      >
        <img src={editBoxImg} alt="edit product" />
        <span>Box settings</span>
      </button>
    </div>
  );
}

export { MainSideBar }