
import mailImg from '../../assets/mail.svg'
import clipBoardImg from '../../assets/clipboard.svg'
import clientImg from '../../assets/client.svg'
import lockImg from '../../assets/unlock.svg'
import { StylledInput } from '../StylledInput';
import './styles.scss'
import { useUsers } from '../../hooks/useUsers';
import { FormEvent } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface InitialSignInContainerProps {
  isActive: boolean,
  setSignInState: () => void
}

function InitialSignInContainer( {isActive, setSignInState}: InitialSignInContainerProps) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDepartment, setUserDepartment] = useState('');
  
  const { users, handleAddUser } = useUsers();

  async function handleUserAdd(event: FormEvent) {
    event.preventDefault();
    await handleAddUser({
      userName,
      userPassword,
      userEmail,
      userDepartment
    });

    toast.success('New Account Created');

    setTimeout(() => {
      handleClose();
    }, 300);
  }

  function handleClose(){
    setUserName('');
    setUserPassword('');
    setUserEmail('');
    setUserDepartment('');
    setSignInState();
  }

  return (
    <div className={isActive ? "signIn" : "signInHidded"}>
      <form 
        action="subimt"
        onSubmit={event => handleUserAdd(event)}
      >
        <div className="inputSignIn">
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
          <StylledInput
            type="email"
            img={mailImg}
            placeholder="E-mail"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <StylledInput
            type="text"
            img={clipBoardImg}
            placeholder="Department"
            value={userDepartment}
            onChange={(event) => setUserDepartment(event.target.value)}
          />
        </div>
        <button
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export { InitialSignInContainer }