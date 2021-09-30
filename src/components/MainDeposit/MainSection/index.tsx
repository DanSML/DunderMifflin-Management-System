import pointsEdtImg from '../../../assets/editPoints.svg'
import { useBoxes } from '../../../hooks/useBoxes';
import { date } from '../../../util/date';

import './styles.scss'

function MainSection() {
  const {boxes, handleEditingBox} = useBoxes();

  return(
    <div className="tableDeposit">
      <table>
        <thead className="depositThead">
          <tr>
            <th>Box Quantity</th>
            <th>Box Type</th>
            <th>Sheets Quantity</th>
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
              <td>{date.format(
                new Date(box.lastUpdate)
              )
              }</td>
              <td>
                <button
                  onClick={() => handleEditingBox(box)}
                >
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