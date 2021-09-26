import { useState } from 'react';
import './styles.scss'

function StyledButton() {
  const [buttonState, setButtonState] = useState('normal');

  function changeIt(){
    setButtonState(buttonState === 'normal' ? 'changed' : 'normal');
  }
  
  return (
    <button 
      onClick={changeIt} 
      className="headerButton"
    >
      <div className={buttonState}>
      </div>
    </button>
  );
}

export { StyledButton }