import pointsEdtImg from '../../../../assets/editPoints.svg'
import editBoxImg from '../../../../assets/editBox.svg'
import packageImg from '../../../../assets/deposit.svg'
import { useSettings } from '../../../../hooks/useSettings';

import { OpenModalButton } from '../../OpenModalButton';

import './styles.scss'
import { SectorLogo } from '../../../GeneralComponents/SectorLogo';
import { DotsEditButton } from '../../../GeneralComponents/DotsEditButton';

interface MainSectionSettingsProps {
  active: boolean
}


function MainSectionSettings({active} : MainSectionSettingsProps) {
    const { boxSettings,  handleSettingsModalState} = useSettings();

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