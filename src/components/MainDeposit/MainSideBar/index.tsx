import addBoxImg from '../../../assets/addBox.svg'
import editBoxImg from '../../../assets/editBox.svg'
import { useBoxes } from '../../../hooks/useBoxes';

import './styles.scss'

function MainSideBar(){
  const { handleOpenAddModal } = useBoxes();

  return(
    <div className="mainSideBar">
      <button
        type="button"
        onClick={handleOpenAddModal}
      >
        <img src={addBoxImg} alt="new product" />
        <span>New Product</span>
      </button>
      <button
        type="button"
      >
        <img src={editBoxImg} alt="edit product" />
        <span>Box settings</span>
      </button>
    </div>
  );
}

export { MainSideBar }