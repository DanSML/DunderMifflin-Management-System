
import clientImg from '../../assets/client.svg'
import lockImg from '../../assets/unlock.svg'
import { StylledInput } from '../StylledInput';
import './styles.scss'

interface InitialLogInContainerProps {
  isActive: boolean,
  setLogInState: () => void,
  setUserState: () => void,
}

function InitialLogInContainer( {isActive, setLogInState, setUserState}: InitialLogInContainerProps) {
  return (
    <div className={isActive ? "LogIn" : "LogInHidded"}>
      <form action="subimt">
        <div className="inputLogIn">
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
        </div>
        <span>don't have an account? 
            <button 
              type="button"
              className="buttonCreate"
              onClick={setLogInState}
            >
              Sign In
            </button>
        </span>

        <button
          type="button"
          onClick={setUserState}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export { InitialLogInContainer }