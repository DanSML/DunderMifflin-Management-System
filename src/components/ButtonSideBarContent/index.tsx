
import './styles.scss'

interface ButtonSideBarContentProps {
  name: string,
  logoImg: string,
  action: () => void,
}

function ButtonSideBarContent( {name, logoImg, action} : ButtonSideBarContentProps){
  return (
    <button
      className="ButtonSideBarContent"
      type="button"
      onClick={action}
    >
      <img 
        src={logoImg} 
        alt={`${name}`}/>
      <span>{name}</span>
    </button>
  );
}

export { ButtonSideBarContent }