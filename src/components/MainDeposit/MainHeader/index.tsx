import printImg from '../../../assets/printer.svg'
import packageImg from '../../../assets/deposit.svg'

import './styles.scss'

function MainHeader(){
    return (
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
                <span className="none">
                    Report
                </span>
            </button>
        </header>
    );
}

export { MainHeader }