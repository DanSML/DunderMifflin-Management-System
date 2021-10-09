import { ButtonSideBarContent } from "../ButtonSideBarContent";

import salesImg from '../../assets/sales.svg'
import clientsImg from '../../assets/clients.svg'

interface SalesSideBarContentProps {
  newSaleState: () => void,
  newClientState: () => void,
}

function SalesSideBarContent({newSaleState, newClientState} : SalesSideBarContentProps) {
  return(
    <div className="mainSideBar">
      <ButtonSideBarContent
        name={'Sales'}
        logoImg={salesImg}
        action={newSaleState}
      />

      <ButtonSideBarContent
        name={"Clients"}
        logoImg={clientsImg}
        action={newClientState}
      />
    </div>
  );
}

export { SalesSideBarContent }