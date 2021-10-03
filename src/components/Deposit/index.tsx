import { useState } from 'react';

import { MainSideBar } from './MainSideBar'
import { BoxSection } from './MainSection/BoxSection'
import { MainSectionSettings } from './MainSection/SettingsSection';
import { MainApplicationHeader } from '../MainHeader';

import { ModalAddBox } from './ModalAddBox';
import { ModalEditBox } from './ModalEditBox';
import {  ModalBoxTypes } from './ModalBoxTypes';

import { BoxesContextProvider } from '../../contexts/DepositContexts/BoxesContext';
import { BoxesTypesContextProvider } from '../../contexts/DepositContexts/BoxesTypesContext';
import { DepositModalContextProvider } from '../../contexts/DepositContexts/DepositModalContext';

import './styles.scss'
import packageImg from '../../assets/deposit.svg'

function Deposit(){
  const [isBoxSectionActive, setIsBoxSectionActive] = useState(true);
  const [isSettingsSectionActive, setIsSettingsSectionActive] = useState(false);

  function handleBoxSectionState(){
    if (!isBoxSectionActive) {
      setIsBoxSectionActive(!isBoxSectionActive);
      setIsSettingsSectionActive(!isSettingsSectionActive);
    }
  }

  function handleBoxTypeSectionState(){
    if (!isSettingsSectionActive) {
      setIsSettingsSectionActive(!isSettingsSectionActive);
      setIsBoxSectionActive(!isBoxSectionActive);
    }
  }

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

              <MainSideBar
                boxSectionState={handleBoxSectionState}
                boxTypeSectionState={handleBoxTypeSectionState}
              />
              <MainSectionSettings
                active={isSettingsSectionActive}
              />
              <BoxSection
                active={isBoxSectionActive}
              />

            </main>
          </div>
        </DepositModalContextProvider>
      </BoxesTypesContextProvider>
    </BoxesContextProvider>
  );
}

export { Deposit }