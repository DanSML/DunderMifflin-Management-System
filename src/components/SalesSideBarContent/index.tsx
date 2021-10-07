import { ButtonSideBarContent } from "../ButtonSideBarContent";

import removeBoxImg from '../../assets/removeBox.svg'
import addClientsImg from '../../assets/addClients.svg'
import editClientsImg from '../../assets/editClients.svg'

interface SalesSideBarContentProps {
  newSaleState: () => void,
  newClientState: () => void,
  editClientState: () => void
}

function SalesSideBarContent({newSaleState, newClientState, editClientState} : SalesSideBarContentProps) {
  return(
    <div className="mainSideBar">
      <ButtonSideBarContent
        name={'New Sale'}
        logoImg={removeBoxImg}
        action={newSaleState}
      />

      <ButtonSideBarContent
        name={"New Client"}
        logoImg={addClientsImg}
        action={newClientState}
      />

      <ButtonSideBarContent
        name={"Edit Clients"}
        logoImg={editClientsImg}
        action={editClientState}
      />
    </div>
  );
}

export { SalesSideBarContent }