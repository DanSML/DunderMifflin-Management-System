import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection'
import { MainHeader } from './MainHeader';

import { BoxesContextProvider } from '../../contexts/BoxesContext';
import { ModalAddBox } from './ModalAddBox';

import './styles.scss'


function MainDeposit(){
  return (
    <BoxesContextProvider>
      <div className="main">
          <MainHeader/>
        <main className="section">
          <ModalAddBox/>
          <MainSideBar/>
          <MainSection/>
        </main>
      </div>
    </BoxesContextProvider>
  );
}

export { MainDeposit }