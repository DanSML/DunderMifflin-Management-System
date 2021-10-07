import { MainApplicationHeader } from '../SectorHeader';

import salesImg from '../../assets/sales.svg'
import { SalesMainContent } from '../SalesMainContent';
import { SalesSideBarContent } from '../SalesSideBarContent';

function Sales(){
  return (
    <>
      <div className="main">
        <MainApplicationHeader
          logo={ salesImg }
          sectorName={"Sales"}
        />

        <main className="">
          <SalesMainContent/>
        </main>
      </div>
    </>
  );
}

export { Sales }