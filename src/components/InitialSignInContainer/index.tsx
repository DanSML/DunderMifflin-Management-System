
import mailImg from '../../assets/mail.svg'
import clipBoardImg from '../../assets/clipboard.svg'
import clientImg from '../../assets/client.svg'
import lockImg from '../../assets/unlock.svg'
import { StylledInput } from '../StylledInput';
import './styles.scss'

interface InitialSignInContainerProps {
  isActive: boolean,
  setSignInState: () => void
}

function InitialSignInContainer( {isActive, setSignInState}: InitialSignInContainerProps) {
  return (
    <div className={isActive ? "signIn" : "signInHidded"}>
      <form action="subimt">
        <div className="inputSignIn">
          <StylledInput
            type="text"
            img={clientImg}
            placeholder="Username"
          />
          <StylledInput
            type="password"
            img={lockImg}
            placeholder="Password"
          />
          <StylledInput
            type="email"
            img={mailImg}
            placeholder="E-mail"
          />
          <StylledInput
            type="text"
            img={clipBoardImg}
            placeholder="Department"
          />
        </div>
        <button
          type="button"
          onClick={setSignInState}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export { InitialSignInContainer }