import './styles.scss'

interface  OpenModalButtonProps{
  logo: string,
  title: string,
  handleModalState: () => void
}

function OpenModalButton({logo, title, handleModalState}: OpenModalButtonProps){
  return (
    <div className="openModalButton">
      <button
        type="button"
        onClick={() => handleModalState()}
      >
        <img 
          src={logo} 
          alt={`Open modal ${title}`}
        />
        <span>{title}</span>
      </button>
    </div>
  );
}

export { OpenModalButton }