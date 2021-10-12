
import { InputHTMLAttributes } from 'react';
import './styles.scss'

interface StylledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  img: string,
}

function StylledInput ({img, ...props}: StylledInputProps){
  return (
    <div className="stylledInput">
      <label>
        <img src={img} alt="" />
      </label>
      <input
        {...props}
        required
      />
    </div>
  );
};

export { StylledInput }