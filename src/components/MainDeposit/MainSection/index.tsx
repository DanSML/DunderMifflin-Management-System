import pointsEdtImg from '../../../assets/editPoints.svg'

import './styles.scss'

function MainSection() {
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
            <tr>
              <td>39</td>
              <td> Pacon Drawing Paper</td>
              <td> Paper Bulk, 500 Sheets</td>
              <td> 12/03/2021 </td>
              <td>
                <button>
                  <img src={pointsEdtImg} alt="" />
                </button>
              </td>
            </tr>

            <tr>
              <td>39</td>
              <td> Pacon Drawing Paper</td>
              <td> Paper Bulk, 500 Sheets</td>
              <td> 12/03/2021 </td>
              <td>
                <button>
                  <img src={pointsEdtImg} alt="" />
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export { MainSection }