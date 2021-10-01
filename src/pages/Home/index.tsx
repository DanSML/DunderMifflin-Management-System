import { Deposit } from "../../components/Deposit";
import { SideBar } from "../../components/SideBar";
import { useButtons } from "../../hooks/useButtons";

import './styles.scss'

function Home(){
  const {buttonState} = useButtons();
  return (
      <div className={buttonState === 'normal' ? 'mainDepositNoSide' : 'mainDeposit'}>
        <SideBar/>
        <div className="on">
          <Deposit isActive={true}/>
        </div>
      </div>
  );
}

export {Home}