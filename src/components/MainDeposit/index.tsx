import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection/BoxSection'
import { MainSectionSettings } from './MainSection/SettingsSection';
import { MainHeader } from './MainHeader';

import { BoxesContextProvider } from '../../contexts/BoxesContext';
import { ModalAddBox } from './ModalAddBox';
import { ModalEditBox } from './ModalEditBox';
import { ModalBoxSettings } from './ModalBoxSettings';
import { BoxesSettingsContextProvider } from '../../contexts/BoxesSettingsContext';


import './styles.scss'



function MainDeposit(){
  return (
    <BoxesContextProvider>
      <BoxesSettingsContextProvider>
        <div className="main">
            <MainHeader/>
          <main className="section">
            <ModalBoxSettings/>
            <ModalAddBox/>
            <ModalEditBox/>
            <MainSideBar/>
            <MainSectionSettings/>
            <MainSection/>
          </main>
        </div>
      </BoxesSettingsContextProvider>
    </BoxesContextProvider>
  );
}

export { MainDeposit }