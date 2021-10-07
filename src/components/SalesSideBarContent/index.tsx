import { ButtonSideBarContent } from "../ButtonSideBarContent";

import addBoxImg from '../../assets/addBox.svg'

interface SalesSideBarContentProps {
  newSaleState: () => void,
  newClientState: () => void,
  editClientState: () => void
}

function SalesSideBarContent({newSaleState, newClientState, editClientState} : SalesSideBarContentProps) {
  return(
    <div className="mainSideBar">
      <ButtonSideBarContent
        name={'Clients'}
        logoImg={addBoxImg}
        action={() => console.log('a')}
      />
    </div>
  );
}

export { SalesSideBarContent }