import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection'
import { MainHeader } from './MainHeader';

import './styles.scss'
import { BoxesContextProvider } from '../../contexts/BoxesContext';

function MainDeposit(){
  return (
    <BoxesContextProvider>
      <div className="main">
          <MainHeader/>
        <main className="section">
          <MainSideBar/>
          <MainSection/>
        </main>
      </div>
    </BoxesContextProvider>
  );
}

export { MainDeposit }