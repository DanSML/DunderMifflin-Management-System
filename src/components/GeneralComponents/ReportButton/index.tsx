import './styles.scss'
import printImg from '../../../assets/printer.svg'

function ReportButton(){
  return (
    <button className="reportButton">
      <div className="printButton">
          <img src={printImg} alt="" />
      </div>
      <span>
          Report
      </span>
    </button>
  );
}

export { ReportButton };