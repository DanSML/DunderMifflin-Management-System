import { DotsEditButton } from '../../../GeneralComponents/DotsEditButton';
import { OpenModalButton } from '../../OpenModalButton';
import { SectorLogo } from '../../../GeneralComponents/SectorLogo';

import { useTypes } from '../../../../hooks/useSettings';

import './styles.scss'
import pointsEdtImg from '../../../../assets/editPoints.svg'
import editBoxImg from '../../../../assets/editBox.svg'
import packageImg from '../../../../assets/deposit.svg'
import { useDepositModal } from '../../../../hooks/useDepositModal';

interface MainSectionSettingsProps {
  active: boolean
}


function MainSectionSettings({active} : MainSectionSettingsProps) {
    const { boxSettings } = useTypes();
    const { handleBoxesTypesModalState } = useDepositModal();

  return(
    <div className={active ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={packageImg}
          sectorName={"Boxes"}
        />
        
        <OpenModalButton
          logo={editBoxImg}
          title={"Add Type"}
          handleModalState={handleBoxesTypesModalState}
        />
      </div>

      <table>
        <thead className="depositThead">
          <tr>
            <th>Title</th>
            <th>Percent</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="depositTbody">
          {boxSettings.map(type => (
            <tr key={type.id}>
              <td>{type.title}</td>
              <td>{type.percent}</td>
              <td>
                <DotsEditButton
                  props={type}
                  buttonFunction={handleBoxesTypesModalState}
                  logo={pointsEdtImg}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { MainSectionSettings }