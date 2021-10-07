import { StyledButton } from '../StyledButton';

import './styles.scss'
import logoImg  from '../../assets/Logo.svg'
import settingsImg  from '../../assets/settings.svg'

function Header() {


  return (
    <>
      <header className="principal">
        <div className="button"> 
          <StyledButton/>
          <img src={logoImg} alt="logo" />
        </div>
        <div className="settings">
          <button
          >
            <img src={settingsImg} alt="settings button" />
          </button>
        </div>
      </header>
    </>
  );
}

export { Header };