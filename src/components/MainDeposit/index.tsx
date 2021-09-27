import { MainSideBar } from './MainSideBar'
import { MainSection } from './MainSection'
import { MainHeader } from './MainHeader';

import './styles.scss'

function MainDeposit(){
  return (
    <div className="main">
        <MainHeader/>
      <main className="section">
        <MainSideBar/>
        <MainSection/>
      </main>
    </div>
  );
}

export { MainDeposit }