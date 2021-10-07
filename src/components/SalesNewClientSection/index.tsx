import addClientsImg from '../../assets/addClients.svg'
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
          logo={addClientsImg}
          sectorName={"New Client"}
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

export { SalesNewClientSection }