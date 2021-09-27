import { MainDeposit } from "../../components/MainDeposit";
import { SideBar } from "../../components/SideBar";
import { useButtons } from "../../hooks/useButtons";

import './styles.scss'

function Home(){
  const {buttonState} = useButtons();

  return (
      <div className={buttonState === 'normal' ? 'mainDepositNoSide' : 'mainDeposit'}>
          <SideBar/>
          <MainDeposit/>  
      </div>
  );
}

export {Home}