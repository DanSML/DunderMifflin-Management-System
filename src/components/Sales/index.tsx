import { MainApplicationHeader } from '../SectorHeader';

import salesImg from '../../assets/sales.svg'
import { SalesMainContent } from '../SalesMainContent';

function Sales(){
  return (
    <>
      <div className="main">
        <MainApplicationHeader
          logo={ salesImg }
          sectorName={"Sales"}
        />

        <main className="section">
          <SalesMainContent/>
        </main>
      </div>
    </>
  );
}

export { Sales }