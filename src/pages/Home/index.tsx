import { MainDeposit } from "../../components/MainDeposit";
import { SideBar } from "../../components/SideBar";

import './styles.scss'

function Home(){
  return (
    <>
      <div className="mainDeposit">
        <SideBar/>
        <MainDeposit/>  
      </div>
    </>
  );
}

export {Home}