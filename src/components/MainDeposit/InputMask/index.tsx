import { InputHTMLAttributes } from 'react';
import './styles.scss'

const InputMasked: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {


  return (
    <div>
      <input {...props}/>
    </div>
  );
}

export { InputMasked }