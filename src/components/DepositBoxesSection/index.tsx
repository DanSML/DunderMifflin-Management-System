import { DotsEditButton } from '../DotsEditButton';
import { OpenModalButton } from '../OpenModalButton';
import { SectorLogo } from '../SectorLogo';

import { useDepositModal } from '../../hooks/useDepositModal';
import { useBoxes } from '../../hooks/useBoxes';
import { date } from '../../util/date';

import './styles.scss'
import pointsEdtImg from '../../assets/editPoints.svg'
import addBoxImg from '../../assets/addBox.svg'
import packageImg from '../../assets/deposit.svg'
// import deleteImg from '../../assets/delete.svg'
// import editImg from '../../assets/edit.svg'

import { PaperBoxProps } from '../../util/interfaces/BoxInterfaces';
// import { useState } from 'react';

interface DepositBoxesSectionProps {
  active: boolean
}

function DepositBoxesSection( {active}: DepositBoxesSectionProps) {
  const { boxes, handleEditingBox } = useBoxes();
  const { handleOpenAddModal, handleOpenEditModal } = useDepositModal();

  function handleDotButtonClick(props: PaperBoxProps){
    handleEditingBox(props);
    handleOpenEditModal();
  }

  return(
    <div className={active ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={packageImg}
          sectorName={"Boxes"}
        />
          
        <OpenModalButton
          logo={addBoxImg}
          title={"Add Box"} 
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
              <td>{box.amount}</td>
              <td>{box.name}</td>
              <td>{box.type}</td>
              <td>{box.lastUpdate}</td>
              <td>
                <DotsEditButton
                  logo={pointsEdtImg}
                  buttonFunction={() => handleDotButtonClick(box)}
                  props={box}
                />
                {/* <div className={toggleDot ? "listActive" : "listHidded"}>
                  <button>
                    <img src={deleteImg} alt="edit" />
                    <span>Edit</span>
                  </button>

                  <button>
                    <img src={editImg} alt="exclude" />
                    <span>Exclude</span>
                  </button>
                </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { DepositBoxesSection }