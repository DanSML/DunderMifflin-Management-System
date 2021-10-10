import { OpenModalButton } from "../OpenModalButton";
import { SectorLogo } from "../SectorLogo";

import salesImg from '../../assets/sales.svg'
import { useSales } from "../../hooks/useSales";

interface SalesNewSaleSelectionProps {
  isActive: boolean,
}

function SalesNewSaleSection({isActive} : SalesNewSaleSelectionProps) {
  const { sales } = useSales();

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
            {sales.map((sale) => { 
              return (
                <tr key={sale.id}>
                  <td>{sale.boxQuantity}</td>
                  <td>{sale.client}</td>
                  <td>{sale.boxSelled}</td>
                  <td>{sale.date}</td>
                  <td>aaaa</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
    </div>
  );
}

export { SalesNewSaleSection }