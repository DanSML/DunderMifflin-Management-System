import addClientsImg from '../../assets/addClients.svg'
import clientsImg from '../../assets/clients.svg'

import { OpenModalButton } from '../OpenModalButton';
import { SectorLogo } from '../SectorLogo';


interface SalesNewSaleSelectionProps {
  isActive: boolean,
}

function SalesNewClientSection({isActive} : SalesNewSaleSelectionProps) {
  return (
    <div className={isActive ? "tableDeposit" : "tableDepositHidden"}>

      <div className="BoxSectionHeader">
        <SectorLogo
          logo={clientsImg}
          sectorName={"Clients"}
        />

        <OpenModalButton
          logo={addClientsImg}
          title={"New Client"}
          handleModalState={() => console.log('a')}
        />
      </div>

      <table>
        <thead className="depositThead">
          <tr>
            <th>Client Name</th>
            <th>Importance</th>
            <th>Client Since</th>
            <th>Last Purchase</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="depositTbody">
          <tr>
            <td>Smart's Club</td>
            <td>A</td>
            <td>12/10/2021</td>
            <td>12/10/2021</td>
            <td>Button</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { SalesNewClientSection }