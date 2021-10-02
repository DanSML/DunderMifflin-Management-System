import './styles.scss'
import addBoxImg from '../../../assets/addBox.svg'
import editBoxImg from '../../../assets/editBox.svg'

interface MainSideBarProps {
  boxSectionState: () => void,
  boxTypeSectionState: () => void,
}

function MainSideBar( {boxSectionState, boxTypeSectionState} : MainSideBarProps){
  return(
    <div className="mainSideBar">

      <button
        type="button"
        onClick={boxSectionState}
      >
        <img 
          src={addBoxImg} 
          alt="new product" />
        <span>Boxes</span>
      </button>

      <button
        type="button"
        className="openEdit"
        onClick={boxTypeSectionState}
      >
        <img src={editBoxImg} alt="edit product" />
        <span>Types</span>
      </button>

    </div>
  );
}

export { MainSideBar }