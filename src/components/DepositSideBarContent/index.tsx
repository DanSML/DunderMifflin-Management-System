
import { ButtonSideBarContent } from '../ButtonSideBarContent';

import addBoxImg from '../../assets/addBox.svg'
import editBoxImg from '../../assets/editBox.svg'
import './styles.scss'


interface SectorSideBarProps {
  boxSectionState: () => void,
  boxTypeSectionState: () => void,
}

function DepositSideBarContent( {boxSectionState, boxTypeSectionState} : SectorSideBarProps){
  return(
    <div className="mainSideBar">
      <ButtonSideBarContent
        name={'Boxes'}
        logoImg={addBoxImg}
        action={boxSectionState}
      />

      <ButtonSideBarContent
        name={'Types'}
        logoImg={editBoxImg}
        action={boxTypeSectionState}
      />
    </div>
  );
}

export { DepositSideBarContent }