import { MainApplicationHeader } from '../SectorHeader';

import salesImg from '../../assets/sales.svg'
import { SalesMainContent } from '../SalesMainContent';
import { ModalNewSale } from '../ModalNewSale';
import { ModalAddClient } from '../ModalAddClient';

function Sales(){
  return (
    <>
      <div className="main">
        <MainApplicationHeader
          logo={ salesImg }
          sectorName={"Sales"}
        />

        <main className="section">
          <ModalNewSale/>
          <ModalAddClient/>
          <SalesMainContent/>
        </main>
      </div>
    </>
  );
}

export { Sales }