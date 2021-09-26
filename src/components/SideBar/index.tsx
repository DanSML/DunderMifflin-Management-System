import profileImg from '../../assets/profile.svg'
import depositImg from '../../assets/deposit.svg'
import salestImg from '../../assets/sales.svg'
import reporttImg from '../../assets/report.svg'

import './styles.scss'
import { useButtons } from '../../hooks/useButtons'

function SideBar() {
  const { buttonState } = useButtons();
  return (
    <div className={buttonState === 'normal' ? 'sideBarContainerHided' : 'sideBarContainer'}>

      <div className="profileOptions">
        <div className="profileInfo">
          <img src={profileImg} alt="profile" />

          <div>
            <span>Michael Scott <br /></span>
            <span>Regional Manager</span>
          </div>

        </div>

        <div className="profileButtons">
          <button className="editButton">Edit</button>
          <button className="logOutButton">Log out</button>
        </div>  
      </div>

      <div className="departmentButtons">
        <button>
          <img src={depositImg} alt="deposit" />
          <span> Deposit </span>
        </button>     
        <button>
          <img src={salestImg} alt="sales" />
          <span> Sales </span>
        </button>
        <button>
          <img src={reporttImg} alt="report" />
          <span> Management </span>
        </button>
      </div>
    </div>
  );
}

export { SideBar }