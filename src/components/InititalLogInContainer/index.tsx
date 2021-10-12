
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import clientImg from '../../assets/client.svg'
import lockImg from '../../assets/unlock.svg'
import { useUsers } from '../../hooks/useUsers';
import { StylledInput } from '../StylledInput';
import './styles.scss'

interface InitialLogInContainerProps {
  isActive: boolean,
  setLogInState: () => void,
  setUserState: () => void,
}

function InitialLogInContainer( {isActive, setLogInState, setUserState}: InitialLogInContainerProps) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');


  const {handleGetUserEntry, userLogged} = useUsers();

  function handleUserEntry(event: FormEvent){
    event.preventDefault();
    
    try {
      handleResult();

    } catch (err) {
      console.log(err)
    }
  }

  function handleResult() {
    console.log(userLogged);

    if (userLogged.userName === userName) {
      setTimeout(() => {
        handleClose();
      }, 500);
    } else {
      toast.error('Invalid username or password!');
    }
  }

  function handleEntre() {
    handleGetUserEntry({
      userName,
      userPassword
    });
  }

  function handleClose(){
    setUserName('');
    setUserPassword('');
    setUserState();
  }

  function handleClick(){
    setUserName('');
    setUserPassword('');
    setLogInState();
  }
  
  return (
    <div className={isActive ? "LogIn" : "LogInHidded"}>
      <form 
        action="subimt"
        onSubmit={(event) => handleUserEntry(event)}
      >
        <div className="inputLogIn">
          <StylledInput
            type="text"
            img={clientImg}
            placeholder="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <StylledInput
            type="password"
            img={lockImg}
            placeholder="Password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </div>
        <span>don't have an account? 
            <button 
              type="button"
              className="buttonCreate"
              onClick={() => handleClick()}
            >
              Sign In
            </button>
        </span>

        <button
          type="submit"
          onClick={() => handleEntre()}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export { InitialLogInContainer }