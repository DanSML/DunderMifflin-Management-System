import './styles.scss'

interface DotsEditButtonProps {
  props: any,
  buttonFunction: (props: any) => void,
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
      />
    </button>
  );
}

export { DotsEditButton }