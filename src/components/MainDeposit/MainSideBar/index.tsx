import addBoxImg from '../../../assets/addBox.svg'
import editBoxImg from '../../../assets/editBox.svg'
import { useBoxes } from '../../../hooks/useBoxes';
import { useSettings } from '../../../hooks/useSettings';

import './styles.scss'

function MainSideBar(){
  const { handleOpenAddModal, handleMainSectionState, handleSettingsSectionState, isMainSectionActive, isSettingsSectionActive } = useBoxes();
  const { handleSettingsModalState } = useSettings();

  return(
    <div className="mainSideBar">
      <button
        type="button"
        onClick={handleMainSectionState}
        className={isMainSectionActive ? "openAddSelected" : "openAdd"}
      >
        <img src={addBoxImg} alt="new product" />
        <span>Boxes</span>
      </button>
      <button
        type="button"
        className="openEdit"
        onClick={handleSettingsSectionState}
      >
        <img src={editBoxImg} alt="edit product" />
        <span>Types</span>
      </button>
    </div>
  );
}

export { MainSideBar }