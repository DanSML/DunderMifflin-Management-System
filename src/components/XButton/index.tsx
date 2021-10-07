import './styles.scss'

interface XButtonProps {
  logo: string,
  action: () => void
}

function XButton( {logo, action} : XButtonProps) {
  return (
    <button
      className="XButton"
      type="button"
      onClick={action}
    >
      <img 
        src={logo} 
        alt="X Button" 
      />
    </button>
  );
}

export { XButton }