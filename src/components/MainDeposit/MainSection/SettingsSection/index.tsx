import pointsEdtImg from '../../../../assets/editPoints.svg'
import editBoxImg from '../../../../assets/editBox.svg'
import { useBoxes } from '../../../../hooks/useBoxes';
import { useSettings } from '../../../../hooks/useSettings';

import './styles.scss'

function MainSectionSettings() {
    const { boxSettings,  handleSettingsModalState} = useSettings();
    const {isSettingsSectionActive} = useBoxes();

  return(
    <div className={isSettingsSectionActive ? "tableDeposit" : "tableDepositHidden"}>
        
      <div className="newProductButtoni">
        <button
          onClick={handleSettingsModalState}
        >
          <img src={editBoxImg} alt="new product" />
          <span>New product Type</span>
        </button>
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
                <button
                    type="button"
                >
                  <img src={pointsEdtImg} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { MainSectionSettings }