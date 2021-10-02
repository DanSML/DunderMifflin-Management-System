import { MainSideBar } from './MainSideBar'
import { BoxSection } from './MainSection/BoxSection'
import { MainSectionSettings } from './MainSection/SettingsSection';
import { MainApplicationHeader } from '../MainHeader';

import { BoxesContextProvider } from '../../contexts/DepositContexts/BoxesContext';
import { ModalAddBox } from './ModalAddBox';
import { ModalEditBox } from './ModalEditBox';
import { ModalBoxSettings } from './ModalBoxSettings';
import { BoxesSettingsContextProvider } from '../../contexts/DepositContexts/BoxesSettingsContext';

import packageImg from '../../assets/deposit.svg'
import './styles.scss'
import { useState } from 'react';
import { DepositModalContextProvider } from '../../contexts/DepositContexts/DepositModalContext';

interface DepositProps {
  isActive: boolean,
}

function Deposit({isActive} : DepositProps){
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
      <BoxesSettingsContextProvider>
        <DepositModalContextProvider>
          <div className="main">
              <MainApplicationHeader 
                logo={ packageImg }
                sectorName={"Deposit"}
              />
              
            <main className="section">

              <ModalBoxSettings/>
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
      </BoxesSettingsContextProvider>
    </BoxesContextProvider>
  );
}

export { Deposit }