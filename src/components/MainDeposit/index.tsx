import printImg from '../../assets/printer.svg'
import packageImg from '../../assets/deposit.svg'

import './styles.scss'

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

      <main>
        
      </main>
    </div>
  );
}

export { MainDeposit }