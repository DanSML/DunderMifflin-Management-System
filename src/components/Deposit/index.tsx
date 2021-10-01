import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection/BoxSection'
import { MainSectionSettings } from './MainSection/SettingsSection';
import { MainApplicationHeader } from './MainHeader';

import { BoxesContextProvider } from '../../contexts/DepositContexts/BoxesContext';
import { ModalAddBox } from './ModalAddBox';
import { ModalEditBox } from './ModalEditBox';
import { ModalBoxSettings } from './ModalBoxSettings';
import { BoxesSettingsContextProvider } from '../../contexts/DepositContexts/BoxesSettingsContext';

import './styles.scss'

interface DepositProps {
  isActive: boolean,
}

function Deposit({isActive} : DepositProps){

  return (

    <BoxesContextProvider>

      <BoxesSettingsContextProvider>

        <div className="main">
            <MainApplicationHeader sectorName={"Deposit"}/>
            
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

export { Deposit }