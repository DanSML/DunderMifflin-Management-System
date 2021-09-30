import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection'
import { MainHeader } from './MainHeader';

import { BoxesContextProvider } from '../../contexts/BoxesContext';
import { ModalAddBox } from './ModalAddBox';


import './styles.scss'
import { ModalEditBox } from './ModalEditBox';
import { ModalBoxSettings } from './ModalBoxSettings';
import { BoxesSettingsContextProvider } from '../../contexts/BoxesSettingsContext';


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
            <MainSection/>
          </main>
        </div>
      </BoxesSettingsContextProvider>
    </BoxesContextProvider>
  );
}

export { MainDeposit }