import { MainApplicationHeader } from '../SectorHeader';

import { ModalAddBox } from '../ModalAddBox';
import { ModalEditBox } from '../ModalEditBox';
import {  ModalBoxTypes } from '../ModalBoxTypes';

import './styles.scss'
import packageImg from '../../assets/deposit.svg'
import { DepositMainContent } from '../DepositMainContent';

function Deposit(){

  return (
    <>
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
    </>
  );
}

export { Deposit }