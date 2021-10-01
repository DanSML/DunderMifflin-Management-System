import pointsEdtImg from '../../../../assets/editPoints.svg'
import addBoxImg from '../../../../assets/addBox.svg'
import packageImg from '../../../../assets/deposit.svg'

import { useBoxes } from '../../../../hooks/useBoxes';
import { date } from '../../../../util/date';

import { OpenModalButton } from '../../OpenModalButton';
import { SectorLogo } from '../../../GeneralComponents/SectorLogo';

import './styles.scss'
import { DotsEditButton } from '../../../GeneralComponents/DotsEditButton';

function MainSection() {
  const {boxes, handleEditingBox, isMainSectionActive, handleOpenAddModal} = useBoxes();

  return(
    <div className={isMainSectionActive ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={packageImg}
          sectorName={"Boxes"}
        />
          
        <OpenModalButton
          logo={addBoxImg}
          title={"New product Type"} 
          handleModalState={handleOpenAddModal}
        />
      </div>

      <table>
        <thead className="depositThead">
          <tr>
            <th>Box Quantity</th>
            <th>Box Type</th>
            <th>Sheets Quantity</th>
            <th>Last Update</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="depositTbody">
          {boxes.map(box => (
            <tr key={box.id}>
              <td>{box.quantity}</td>
              <td>{box.title}</td>
              <td>{box.type}</td>
              <td>{date.format(
                new Date(box.lastUpdate)
              )
              }</td>
              <td>
                <DotsEditButton
                  logo={pointsEdtImg}
                  buttonFunction={handleEditingBox}
                  props={box}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { MainSection }