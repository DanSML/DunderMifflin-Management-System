import { useBoxes } from '../../../hooks/useBoxes';
import { PaperBoxProps } from '../../../util/interfaces/handleBoxInterfaces';
import './styles.scss'

interface DotsEditButtonProps {
  props: PaperBoxProps,
  buttonFunction: (props: PaperBoxProps) => void,
  logo: string,
}

function DotsEditButton({logo, buttonFunction, props} : DotsEditButtonProps){
  return (
    <button
      onClick={() => buttonFunction(props)}
      className="DotsEditButton"
      type="button"
    >
      <img 
        src={logo}
        alt={`${logo}`}
      />
    </button>
  );
}

export { DotsEditButton }