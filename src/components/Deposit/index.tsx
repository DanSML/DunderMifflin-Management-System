import { MainApplicationHeader } from '../SectorHeader';

import { ModalAddBox } from '../ModalAddBox';
import { ModalEditBox } from '../ModalEditBox';
import {  ModalBoxTypes } from '../ModalBoxTypes';

import { BoxesContextProvider } from '../../contexts/BoxesContext';
import { BoxesTypesContextProvider } from '../../contexts/BoxesTypesContext';
import { DepositModalContextProvider } from '../../contexts/DepositModalContext';

import './styles.scss'
import packageImg from '../../assets/deposit.svg'
import { DepositMainContent } from '../DepositMainContent';

function Deposit(){

  return (
    <BoxesContextProvider>
      <BoxesTypesContextProvider>
        <DepositModalContextProvider>
          <div className="main">
              <MainApplicationHeader 
                logo={ packageImg }
                sectorName={"Deposit"}
              />
            <main className="section">
              <ModalBoxTypes/>
              <ModalAddBox/>
              <ModalEditBox/>
              <DepositMainContent/>
            </main>
          </div>
        </DepositModalContextProvider>
      </BoxesTypesContextProvider>
    </BoxesContextProvider>
  );
}

export { Deposit }