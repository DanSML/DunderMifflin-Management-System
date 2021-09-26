import { useState } from 'react';
import logoImg  from '../../assets/Logo.svg'
import settingsImg  from '../../assets/settings.svg'

import './styles.scss'

function Header() {
  const [buttonState, setButtonState] = useState('normal');

  function changeIt(){
    setButtonState(buttonState === 'normal' ? 'changed' : 'normal');
  }

  return (
    <>
      <header>
        <div className="button"> 
          <button onClick={changeIt}>
            <div className={buttonState}>

            </div>
          </button>
          <img src={logoImg} alt="logo" />
        </div>
        <div className="settings">
          <button>
            <img src={settingsImg} alt="settings button" />
          </button>
        </div>
      </header>
    </>
  );
}

export { Header };