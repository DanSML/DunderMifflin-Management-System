import { OpenModalButton } from "../OpenModalButton";
import { SectorLogo } from "../SectorLogo";

import removeBoxImg from '../../assets/removeBox.svg'

interface SalesNewSaleSelectionProps {
  isActive: boolean,
}

function SalesNewSaleSection({isActive} : SalesNewSaleSelectionProps) {
  return (
    <div className={isActive ? "tableDeposit" : "tableDepositHidden"}>
      
      <div className="BoxSectionHeader">
        <SectorLogo 
          logo={removeBoxImg}
          sectorName={"New Sale"}
        />
          
        <OpenModalButton
          logo={removeBoxImg}
          title={"New Sale"} 
          handleModalState={() => console.log('a')}
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
            <tr>
              <td>aaaa</td>
              <td>aaaa</td>
              <td>aaaa</td>
              <td>aaaa</td>
              <td>aaaa</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export { SalesNewSaleSection }