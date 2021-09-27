import printImg from '../../assets/printer.svg'
import packageImg from '../../assets/deposit.svg'

import './styles.scss'
import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection'

function MainDeposit(){
  return (
    <div className="main">
      <header className="baseHeaderContainer">
        <div className="depositLogo">
          <img src={packageImg} alt="" />
          <span> 
            Deposit
          </span>
        </div>

        <button className="reportButton">
          <div className="printButton">
            <img src={printImg} alt="" />
          </div>
          <span>Report</span>
        </button>
      </header>

      <main className="section">
        <MainSideBar/>
        <MainSection/>
      </main>

    </div>
    
  );
}

export { MainDeposit }