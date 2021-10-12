import profileImg from '../../assets/profile.svg'
import depositImg from '../../assets/deposit.svg'
import salestImg from '../../assets/sales.svg'
import reporttImg from '../../assets/report.svg'

import { Link } from 'react-router-dom'

import './styles.scss'
import { useButtons } from '../../hooks/useButtons'
import { useUsers } from '../../hooks/useUsers'

interface SideBarProps {
  handleUserState: () => void,
}

function SideBar( {handleUserState} : SideBarProps ) {
  const { buttonState } = useButtons();

  const {userLogged, setUserLogged, blankUser} = useUsers();

  function handleUserLog() {
    handleUserState();
    setUserLogged({...blankUser});
  };

  return (
    <div className={buttonState === 'normal' ? 'sideBarContainerHided' : 'sideBarContainer'}>

      <div className="profileOptions">
        <div className="profileInfo">
          <img src={profileImg} alt="profile" />

          <div>
            <span>{userLogged.userName} <br /></span>
            <span>{`${userLogged.userDepartment} Manager`}</span>
          </div>

        </div>

        <div className="profileButtons">
          <button className="editButton">Edit</button>
          <button className="logOutButton" onClick={handleUserLog}>Log out</button>
        </div>  
      </div>

      <div className="departmentButtons">
        <Link to="/deposit">
          <img src={depositImg} alt="deposit" />
          <span> Deposit </span>
        </Link>     
        <Link to="/sales">
          <img src={salestImg} alt="sales" />
          <span> Sales </span>
        </Link>
        <Link to="/management">
          <img src={reporttImg} alt="report" />
          <span> Management </span>
        </Link>
      </div>
    </div>
  );
}

export { SideBar }