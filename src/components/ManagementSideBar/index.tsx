import { ButtonSideBarContent } from "../ButtonSideBarContent";

import salesImg from '../../assets/sales.svg'
import boxImg from '../../assets/deposit.svg'

function ManagementSideBar() {
  return (
    <div className="mainSideBar">
      <ButtonSideBarContent
        name={'Sales Rep'}
        logoImg={salesImg}
        action={()=> console.log(1)}
      />

      <ButtonSideBarContent
        name={"Deposit Rep"}
        logoImg={boxImg}
        action={()=> console.log(1)}
      />
    </div>
  );
};

export { ManagementSideBar }