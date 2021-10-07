import { OpenModalButton } from "../OpenModalButton";
import { SectorLogo } from "../SectorLogo";

import editClientsImg from '../../assets/editClients.svg'

interface SalesEditClientSection {
  isActive: boolean,
}

function SalesEditClientSection({ isActive }: SalesEditClientSection) {
  return (
    <div className={isActive ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={editClientsImg}
          sectorName={"Edit Client"}
        />

        <OpenModalButton
          logo={editClientsImg}
          title={"Edit Client"}
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

export { SalesEditClientSection }