import { MainApplicationHeader } from '../SectorHeader';

import salesImg from '../../assets/sales.svg'
import { SalesMainContent } from '../SalesMainContent';
import { ModalNewSale } from '../ModalNewSale';
import { ModalAddClient } from '../ModalAddClient';
import { useUsers } from '../../hooks/useUsers';

function Sales(){
  const { salesAuthResponse, managementAuthResponse, userLogged} = useUsers();

  return (
    <>
      <div className={ managementAuthResponse || salesAuthResponse ? "main" : "mainHidded"}>
        {console.log(userLogged)}
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