import pointsEdtImg from '../../../assets/editPoints.svg'
import { useBoxes } from '../../../hooks/useBoxes';

import './styles.scss'

function MainSection() {
  const {boxes} = useBoxes();

  return(
    <div className="tableDeposit">
      <table>
        <thead className="depositThead">
          <tr>
            <th>Quantity</th>
            <th>Title</th>
            <th>Type</th>
            <th>Last Update</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="depositTbody">
          {boxes.map(box => (
            <tr key={box.id}>
              <td>{box.quantity}</td>
              <td>{box.title}</td>
              <td>{box.type}</td>
              <td>{box.lastUpdate}</td>
              <td>
                <button>
                  <img src={pointsEdtImg} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { MainSection }