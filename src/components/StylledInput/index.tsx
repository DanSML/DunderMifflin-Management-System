
import './styles.scss'

interface StylledInputProps {
  type: string,
  img: string,
  placeholder: string,
}

function StylledInput ({type, img, placeholder} : StylledInputProps) {
  return (
    <div className="stylledInput">
      <label>
        <img src={img} alt="" />
      </label>
      <input type={type} placeholder={placeholder} required/>
    </div>
  );
};

export { StylledInput }