import addBoxImg from '../../../assets/addBox.svg'
import editBoxImg from '../../../assets/editBox.svg'

import './styles.scss'

function MainSideBar(){
  return(
    <div className="mainSideBar">
      <button>
        <img src={addBoxImg} alt="new product" />
        <span>New Product</span>
      </button>
      <button>
        <img src={editBoxImg} alt="edit product" />
        <span>Edit Products</span>
      </button>
    </div>
  );
}

export { MainSideBar }