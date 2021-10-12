import './styles.scss'
import paperPlaneImg from '../../assets/airPlane.svg'
import dunderLogo from './dunderLogo.png'
import { InitialSignInContainer } from '../InitialSignInContainer';
import { InitialLogInContainer } from '../InititalLogInContainer';
import { useState } from 'react';

interface InitialPageProps {
  handleUserState: () => void,
}

function InitialPage( {handleUserState}: InitialPageProps) {
  const [initialLogInContainerState, setInitialLogInContainerState] = useState(true);
  const [initialSignInContainerState, setInitialSignInContainerState] = useState(false);
  
  function handleSignInContainerState() {
    setInitialSignInContainerState(!initialSignInContainerState);
    setInitialLogInContainerState(!initialLogInContainerState);
  }

  function handleLogInContainerState() {
    setInitialLogInContainerState(!initialLogInContainerState);
    setInitialSignInContainerState(!initialSignInContainerState);
  }

  return (
    <div className="logPage">
      <div className="dunderPresentation">
        <div className="logo">
          <img src={dunderLogo} alt="Dunder Mifflin Logo" />
        </div>

        <div className="phrase">
          <h1>Limitless Paper in a Paperless World</h1>
          <img src={paperPlaneImg} alt="Presentaion" />
        </div>  
      </div>
      <div>
        <InitialSignInContainer
          setSignInState={handleSignInContainerState}
          isActive={initialSignInContainerState}
        />
        
        <InitialLogInContainer
          setLogInState={handleLogInContainerState}
          isActive={initialLogInContainerState}
          setUserState={handleUserState}
        />
      </div>
    </div>
  );
};

export { InitialPage }