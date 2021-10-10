import addClientsImg from '../../assets/addClients.svg'
import clientsImg from '../../assets/clients.svg'
import { useClients } from '../../hooks/useClients';
import { useDepositModal } from '../../hooks/useDepositModal';

import { OpenModalButton } from '../OpenModalButton';
import { SectorLogo } from '../SectorLogo';


interface SalesNewSaleSelectionProps {
  isActive: boolean,
}

function SalesNewClientSection({isActive} : SalesNewSaleSelectionProps) {
  const { clients } = useClients();

  const { handleAddClientModalState } = useDepositModal();

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
          handleModalState={handleAddClientModalState}
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
          {
            clients.map((client) => {
              return(
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.importance}</td>
                  <td>{client.clientSince}</td>
                  <td>{client.lastPurchase}</td>
                  <td>Button</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export { SalesNewClientSection }