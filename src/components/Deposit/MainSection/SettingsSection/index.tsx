import pointsEdtImg from '../../../../assets/editPoints.svg'
import editBoxImg from '../../../../assets/editBox.svg'
import packageImg from '../../../../assets/deposit.svg'
import { useBoxes } from '../../../../hooks/useBoxes';
import { useSettings } from '../../../../hooks/useSettings';

import { OpenModalButton } from '../../OpenModalButton';

import './styles.scss'
import { SectorLogo } from '../../../GeneralComponents/SectorLogo';
import { DotsEditButton } from '../../../GeneralComponents/DotsEditButton';

function MainSectionSettings() {
    const { boxSettings,  handleSettingsModalState} = useSettings();
    const {isSettingsSectionActive} = useBoxes();

  return(
    <div className={isSettingsSectionActive ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={packageImg}
          sectorName={"Boxes"}
        />
        
        <OpenModalButton
          logo={editBoxImg}
          title={"New product Type"}
          handleModalState={handleSettingsModalState}
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
                  buttonFunction={handleSettingsModalState}
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