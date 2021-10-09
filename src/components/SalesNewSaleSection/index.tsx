import { OpenModalButton } from "../OpenModalButton";
import { SectorLogo } from "../SectorLogo";

import salesImg from '../../assets/sales.svg'

interface SalesNewSaleSelectionProps {
  isActive: boolean,
}

function SalesNewSaleSection({isActive} : SalesNewSaleSelectionProps) {
  return (
    <div className={isActive ? "tableDeposit" : "tableDepositHidden"}>
      
      <div className="BoxSectionHeader">
        <SectorLogo 
          logo={salesImg}
          sectorName={"Sales"}
        />

        <OpenModalButton
          logo={salesImg}
          title={"New Sale"} 
          handleModalState={() => console.log('a')}
        />
      </div>

        <table>
          <thead className="depositThead">
            <tr>
              <th>Quantity Box</th>
              <th>Client</th>
              <th>Box Selled</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="depositTbody">
            <tr>
              <td>32</td>
              <td>Smart's Club</td>
              <td>WhiteSmoke paper sheet</td>
              <td>12/10/2021</td>
              <td>aaaa</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export { SalesNewSaleSection }