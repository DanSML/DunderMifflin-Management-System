import { useButtons } from '../../hooks/useButtons';

import './styles.scss'

function StyledButton() {
  const {buttonState, setButtonState} = useButtons();

  function handleButtonState(){
    setButtonState(buttonState === 'normal' ? 'changed' : 'normal');
  }
  
  return (
    <button
      onClick={handleButtonState}
      className="headerButton"
    >
      <div className={buttonState}>
      </div>
    </button>
  );
}

export { StyledButton }